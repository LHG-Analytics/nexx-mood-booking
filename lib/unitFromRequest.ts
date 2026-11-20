import type { MotelConfig } from '@/types/motel';
import { UNIT_COOKIE, resolveUnitId } from '@/lib/units';

type RequestHeaders = { get(name: string): string | null };

export interface RequestUnit {
  unitId: string | undefined;
  /** True when the visitor already chose (or was given) a unit on an earlier visit */
  saved: boolean;
}

/**
 * Which unit to render for this request: the one saved in the visitor's cookie
 * (it holds only the unit id), else the motel's first unit. First-time visitors
 * are then offered the nearest unit by the browser (UnitProvider), so nothing
 * about their location ever reaches the server. Single-location motels get
 * { unitId: undefined }.
 */
export function unitFromRequest(config: MotelConfig, headers: RequestHeaders): RequestUnit {
  if (!config.units?.length) return { unitId: undefined, saved: false };

  const cookie = headers
    .get('cookie')
    ?.split(';')
    .map((part) => part.trim().split('='))
    .find(([name]) => name === UNIT_COOKIE)?.[1];
  if (cookie && config.units.some((unit) => unit.id === cookie)) return { unitId: cookie, saved: true };

  return { unitId: resolveUnitId(config, undefined), saved: false };
}
