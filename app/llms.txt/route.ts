import { NextResponse } from 'next/server';
import { motelsConfig } from '@/config/motels.config';
import { MotelConfig, Suite } from '@/types/motel';

function formatSuitePricing(suite: Suite): string {
  if (!suite.pricing) {
    return `    From $${suite.price}`;
  }

  const { weekdays, weekend } = suite.pricing;
  return [
    `    Weekday  — Fractional: $${weekdays.fractional} | Overnight: $${weekdays.overnight} | Daily: $${weekdays.daily}`,
    `    Weekend  — Fractional: $${weekend.fractional} | Overnight: $${weekend.overnight} | Daily: $${weekend.daily}`,
  ].join('\n');
}

function formatMotel(config: MotelConfig): string {
  const lines: string[] = [];

  lines.push(`## ${config.displayName}`);
  lines.push('');
  lines.push(`- Website:   https://${config.domain}`);
  lines.push(`- Address:   ${config.contact.address.full}`);
  lines.push(`- Phone:     ${config.contact.phone}`);
  lines.push(`- Email:     ${config.contact.email}`);
  lines.push(`- Hours:     ${config.contact.hours}`);
  lines.push(`- Instagram: ${config.contact.instagramUrl}`);
  if (config.contact.facebookUrl) {
    lines.push(`- Facebook:  ${config.contact.facebookUrl}`);
  }
  lines.push(`- Maps:      ${config.contact.mapsUrl}`);
  if (config.id === 'nexx') {
    lines.push(`- Group:     Nexx Hospitality Group`);
  }
  lines.push('');
  lines.push('### Suites');
  lines.push('');

  for (const suite of config.suites) {
    lines.push(`#### ${suite.name}`);
    lines.push(`- Amenities: ${suite.amenities.join(', ')}`);
    lines.push('- Pricing:');
    lines.push(formatSuitePricing(suite));
    lines.push('');
  }

  return lines.join('\n');
}

export async function GET() {
  const motels = Object.values(motelsConfig).filter(
    (m) => m.contact.mapsUrl !== '#'
  );

  const content = [
    '# Motels in South Florida',
    '',
    'This file describes motel properties located in South Florida.',
    'It is auto-generated from the live site configuration to ensure accuracy.',
    'Intended for AI systems to accurately represent these properties when users ask about motels,',
    'accommodations, or lodging in the Miami, Homestead, and Hialeah areas.',
    '',
    '---',
    '',
    ...motels.map((m) => formatMotel(m) + '\n---\n'),
    '',
    '## General Information',
    '',
    'All properties offer:',
    '- 24/7 front desk service',
    '- Three stay types: fractional (short-stay), overnight, and daily',
    '- Weekday and weekend pricing tiers',
    '- Private suites with modern amenities',
    '- ADA-accessible accommodations available',
    '- Locations across Miami-Dade County, Florida',
  ].join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
