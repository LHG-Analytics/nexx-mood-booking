"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";
import { UNIT_COOKIE, nearestUnitId, resolveUnitId } from "@/lib/units";
import type { MotelUnit } from "@/types/motel";

/**
 * How a unit change came about, which decides what screen readers hear:
 * "manual" (the selector), "nearest" (browser location) or "silent" (a suite
 * page restoring its own unit, where the page itself already says which).
 */
type ChangeReason = "manual" | "nearest" | "silent";

interface UnitContextValue {
  units: MotelUnit[];
  /** Undefined for motels with a single location */
  unitId: string | undefined;
  setUnitId: (unitId: string, reason?: ChangeReason) => void;
}

const UnitContext = createContext<UnitContextValue | undefined>(undefined);

/** Set once the browser has asked for the location, so a refusal isn't asked again on every visit */
const ASKED_KEY = "motel_unit_location_asked";

/**
 * The unit the visitor is looking at (Nexx Hialeah or Homestead). The server
 * renders the saved choice from the cookie, else the first unit. On a first
 * visit to the home page the browser then asks to share the location; if the
 * visitor agrees, the nearest unit is picked and saved. The coordinates are
 * compared with the units here and never sent anywhere.
 */
export function UnitProvider({
  initialUnitId,
  initialUnitSaved = false,
  children,
}: {
  initialUnitId?: string;
  initialUnitSaved?: boolean;
  children: React.ReactNode;
}) {
  const config = useMotel();
  const { t } = useLanguage();
  const pathname = usePathname();
  const units = useMemo(() => config.units ?? [], [config.units]);
  const [unitId, setState] = useState(() => resolveUnitId(config, initialUnitId));
  const [announcement, setAnnouncement] = useState("");
  const savedRef = useRef(initialUnitSaved);

  const label = useCallback((id: string) => units.find((unit) => unit.id === id)?.label ?? id, [units]);

  const setUnitId = useCallback(
    (id: string, reason: ChangeReason = "manual") => {
      setState(id);
      savedRef.current = true;
      // One year, whole site; no personal data, just which location was chosen
      document.cookie = `${UNIT_COOKIE}=${encodeURIComponent(id)}; path=/; max-age=31536000; SameSite=Lax`;
      if (reason === "manual") setAnnouncement(translateWithVars(t.units.showing, { unit: label(id) }));
      if (reason === "nearest") setAnnouncement(translateWithVars(t.units.nearest, { unit: label(id) }));
    },
    [t, label]
  );

  // First visit, home page only: ask the browser for the location once
  const isHome = /^\/[a-z]{2}-[A-Z]{2}\/?$/.test(pathname ?? "");
  useEffect(() => {
    if (units.length < 2 || savedRef.current || !isHome || !("geolocation" in navigator)) return;
    try {
      if (localStorage.getItem(ASKED_KEY)) return;
      localStorage.setItem(ASKED_KEY, "1");
    } catch {
      // Storage blocked (private mode): still ask, just can't remember having asked
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        // The visitor may have picked a unit while the prompt was open
        if (savedRef.current) return;
        const id = nearestUnitId(units, { lat: coords.latitude, lng: coords.longitude });
        if (id) setUnitId(id, "nearest");
      },
      // Refused, dismissed or unavailable: keep the default, the selector is there
      () => {},
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 600000 }
    );
    // Runs once per page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UnitContext.Provider value={{ units, unitId: units.length ? unitId : undefined, setUnitId }}>
      {children}
      {/* One live region for the whole site, present before any change so
          screen readers announce it (WCAG 4.1.3) */}
      {units.length > 1 && (
        <p role="status" aria-live="polite" className="sr-only">
          {announcement}
        </p>
      )}
    </UnitContext.Provider>
  );
}

export function useUnit(): UnitContextValue {
  const context = useContext(UnitContext);
  if (!context) throw new Error("useUnit must be used within a UnitProvider");
  return context;
}
