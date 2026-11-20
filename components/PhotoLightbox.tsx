"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";

interface PhotoLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  images: string[];
  alts: string[];
  index: number;
  onIndexChange: (index: number) => void;
  /** Called when the dialog closes, so the caller can return focus to the photo that opened it */
  onCloseAutoFocus: (event: Event) => void;
}

/**
 * Enlarged photo viewer. Radix Dialog gives it the dialog role and name, moves
 * focus in on open, keeps Tab inside, closes on Esc and hands focus back on
 * close; the old hand-rolled overlay did none of that (WCAG 2.1.1, 2.4.3, 4.1.2).
 */
export function PhotoLightbox({
  open,
  onOpenChange,
  title,
  images,
  alts,
  index,
  onIndexChange,
  onCloseAutoFocus,
}: PhotoLightboxProps) {
  const { t } = useLanguage();
  const total = images.length;
  const go = (delta: number) => onIndexChange((index + delta + total) % total);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const vars = { n: String(index + 1), total: String(total) };
  const navButton =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring sm:h-16 sm:w-16";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          onKeyDown={onKeyDown}
          onCloseAutoFocus={onCloseAutoFocus}
          // Clicking the dark area around the photo closes, as before
          onClick={(event) => {
            if (event.target === event.currentTarget) onOpenChange(false);
          }}
          className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-20 outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none"
        >
          <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>

          <DialogPrimitive.Close
            aria-label={t.suiteDetails.closePhotos}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </DialogPrimitive.Close>

          <div className="relative h-full w-full max-w-7xl">
            <Image
              src={images[index]}
              alt={alts[index]}
              fill
              sizes="100vw"
              className="object-contain"
              quality={90}
              priority
            />
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.suiteDetails.previousPhoto}
                className={`${navButton} left-4`}
              >
                <ChevronLeft className="h-8 w-8" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.suiteDetails.nextPhoto}
                className={`${navButton} right-4`}
              >
                <ChevronRight className="h-8 w-8" aria-hidden="true" />
              </button>
            </>
          )}

          {/* Announces "Photo 2 of 3" when the arrows change the photo */}
          <p
            aria-live="polite"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-6 py-2 text-sm font-medium text-foreground backdrop-blur-sm"
          >
            {translateWithVars(t.suiteDetails.photoCounter, vars)}
          </p>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
