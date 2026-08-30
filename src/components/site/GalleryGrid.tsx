import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

export type GalleryItem = { src: string; alt: string };

export function GalleryGrid({
  items,
  className,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: GalleryItem[];
  className?: string;
  columns?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const active = open === null ? null : items[open];

  return (
    <>
      <div className={`grid gap-4 ${columns} ${className ?? ""}`}>
        {items.map((g, i) => (
          <Reveal key={g.src} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View ${g.alt} full size`}
              className="photo-zoom relative isolate block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-gold"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="photo-inner absolute inset-0 size-full object-cover"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 animate-in fade-in"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-sand-cream/15 p-2 text-sand-cream hover:bg-sand-cream/25"
          >
            <X className="size-5" />
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-sand-cream/15 p-2 text-sand-cream hover:bg-sand-cream/25"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-sand-cream/15 p-2 text-sand-cream hover:bg-sand-cream/25"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          ) : null}

          <figure onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-5xl">
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-sand-cream/80">{active.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
