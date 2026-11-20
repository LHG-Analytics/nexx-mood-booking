"use client";

import { useId } from "react";
import { MapPin } from "lucide-react";
import { useUnit } from "@/contexts/UnitContext";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hialeah | Homestead switch. Native radio buttons styled as a segmented
 * control, so arrow keys, Tab and "1 of 2, selected" announcements come from
 * the browser (WCAG 4.1.2); UnitProvider announces the change. Renders
 * nothing for motels with a single location.
 */
export function UnitSelector({ className = "" }: { className?: string }) {
  const { units, unitId, setUnitId } = useUnit();
  const { t } = useLanguage();
  const name = useId();

  if (units.length < 2) return null;

  return (
    <fieldset className={`flex items-center gap-2 ${className}`}>
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
              onChange={() => setUnitId(unit.id)}
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
  );
}
