"use client";

import { useId, useState } from "react";
import { MapPin, LocateFixed } from "lucide-react";
import { useUnit } from "@/contexts/UnitContext";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";
import { nearestUnitId } from "@/lib/units";

/**
 * Hialeah | Homestead switch. Native radio buttons styled as a segmented
 * control, so arrow keys, Tab and "1 of 2, selected" announcements come from
 * the browser (WCAG 4.1.2). Changes are announced in a polite live region.
 * Renders nothing for motels with a single location.
 */
export function UnitSelector({ className = "" }: { className?: string }) {
  const { units, unitId, setUnitId } = useUnit();
  const { t } = useLanguage();
  const name = useId();
  const [status, setStatus] = useState("");
  // Errors are shown on screen too, not only announced
  const [error, setError] = useState(false);
  const [locating, setLocating] = useState(false);

  if (units.length < 2) return null;

  const label = (id: string | undefined) => units.find((unit) => unit.id === id)?.label ?? "";

  const choose = (id: string) => {
    setUnitId(id);
    setError(false);
    setStatus(translateWithVars(t.units.showing, { unit: label(id) }));
  };

  // Asks for the browser's location only when the visitor clicks; the
  // coordinates are compared with the units here and never leave the browser
  const useMyLocation = () => {
    if (!("geolocation" in navigator)) {
      setError(true);
      setStatus(t.units.locationError);
      return;
    }
    setLocating(true);
    setError(false);
    setStatus(t.units.locating);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocating(false);
        const id = nearestUnitId(units, { lat: coords.latitude, lng: coords.longitude });
        if (id) {
          setUnitId(id);
          setStatus(translateWithVars(t.units.nearest, { unit: label(id) }));
        }
      },
      () => {
        setLocating(false);
        setError(true);
        setStatus(t.units.locationError);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
    );
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <fieldset className="flex items-center gap-2">
        <legend className="sr-only">{t.units.selectorLabel}</legend>
        <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <div className="flex rounded-full border border-border bg-card p-0.5 shadow-sm">
          {units.map((unit) => (
            <label key={unit.id} className="relative">
              <input
                type="radio"
                name={name}
                value={unit.id}
                checked={unitId === unit.id}
                onChange={() => choose(unit.id)}
                className="peer sr-only"
              />
              {/* Selected = filled pill and bold text, not colour alone (WCAG 1.4.1) */}
              <span className="block cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors peer-checked:bg-primary peer-checked:font-bold peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background">
                {unit.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="button"
        onClick={useMyLocation}
        disabled={locating}
        className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
      >
        <LocateFixed className="h-4 w-4" aria-hidden="true" />
        {t.units.useMyLocation}
      </button>
      <p role="status" aria-live="polite" className={error ? "basis-full text-xs text-foreground" : "sr-only"}>
        {status}
      </p>
    </div>
  );
}
