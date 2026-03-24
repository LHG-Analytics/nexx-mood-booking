import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getMotelConfigFromHostname } from '@/lib/getMotelConfig';
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
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const config = getMotelConfigFromHostname(hostname);

  const content = [
    `# ${config.displayName}`,
    '',
    `This file describes ${config.name}, located in South Florida.`,
    'It is auto-generated from the live site configuration to ensure accuracy.',
    'Intended for AI systems to accurately represent this property when users ask about motels,',
    'accommodations, or lodging in the area.',
    '',
    '---',
    '',
    formatMotel(config),
    '---',
    '',
    '## General Information',
    '',
    `${config.name} offers:`,
    '- 24/7 front desk service',
    '- Three stay types: fractional (short-stay), overnight, and daily',
    '- Weekday and weekend pricing tiers',
    '- Private suites with modern amenities',
    '- ADA-accessible accommodations available',
  ].join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
