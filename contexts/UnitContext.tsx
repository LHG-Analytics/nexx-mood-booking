"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useMotel } from "@/contexts/MotelContext";
import { UNIT_COOKIE, resolveUnitId } from "@/lib/units";
import type { MotelUnit } from "@/types/motel";

interface UnitContextValue {
  units: MotelUnit[];
  /** Undefined for motels with a single location */
  unitId: string | undefined;
  setUnitId: (unitId: string) => void;
}

const UnitContext = createContext<UnitContextValue | undefined>(undefined);

/**
 * The unit the visitor is looking at (Nexx Hialeah or Homestead). The server
 * picks the initial one (saved choice, else nearest by IP, else the first) so
 * the page renders right without a flash; a choice made here is saved in a
 * cookie holding only the unit id.
 */
export function UnitProvider({ initialUnitId, children }: { initialUnitId?: string; children: React.ReactNode }) {
  const config = useMotel();
  const units = config.units ?? [];
  const [unitId, setState] = useState(() => resolveUnitId(config, initialUnitId));

  const setUnitId = useCallback((id: string) => {
    setState(id);
    // One year, whole site; no personal data, just which location was chosen
    document.cookie = `${UNIT_COOKIE}=${encodeURIComponent(id)}; path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  return (
    <UnitContext.Provider value={{ units, unitId: units.length ? unitId : undefined, setUnitId }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnit(): UnitContextValue {
  const context = useContext(UnitContext);
  if (!context) throw new Error("useUnit must be used within a UnitProvider");
  return context;
}
