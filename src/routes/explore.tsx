import { Link, createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SRI_LANKA_PATH } from "@/data/sriLankaPath";
import { DESTINATION_IMAGES } from "@/data/destinationImages";
import { DESTINATIONS, INTERESTS, REGIONS, type Destination, type Interest } from "@/data/site";
import { cn } from "@/lib/utils";

type Search = { interest?: Interest | undefined; place?: string | undefined };

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    interest: typeof search["interest"] === "string" ? (search["interest"] as Interest) : undefined,
    place: typeof search["place"] === "string" ? (search["place"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Sri Lanka Explorer — Interactive Map | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Tap any place on our interactive Sri Lanka map — north to south, coast to hill country — and see what's there before you plan your route.",
      },
      { property: "og:title", content: "Sri Lanka Explorer — Interactive Map" },
      { property: "og:description", content: "Tap a place, see what's there. 25 destinations across six regions." },
    ],
  }),
  component: Explore,
});



const LABEL_OFFSET: Record<string, { dx: number; dy: number }> = {
  nagadeepa: { dx: -6, dy: -22 },
  jaffna: { dx: 0, dy: -6 },
  nallur: { dx: 4, dy: 12 },
  galle: { dx: 0, dy: -6 },
  unawatuna: { dx: 2, dy: 8 },
  weligama: { dx: -34, dy: 34 },
  mirissa: { dx: 10, dy: 22 },
  tangalle: { dx: 0, dy: 6 },
  sigiriya: { dx: 0, dy: -8 },
  polonnaruwa: { dx: -18, dy: 16 },
  pasikuda: { dx: 6, dy: 26 },
  ella: { dx: 6, dy: -2 },
  "nuwara-eliya": { dx: 0, dy: -4 },
};


const COLOMBO = DESTINATIONS.find((d) => d.id === "colombo")!;

function RegionsIntro({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-sand-cream/20 p-6", className)}>
      <h2 className="type-h3">Six regions, 25 places</h2>
      <ul className="mt-4 space-y-3">
        {REGIONS.map((r) => (
          <li key={r}>
            <p className="type-caption text-spice-gold">{r}</p>
            <p className="text-sm opacity-80">
              {DESTINATIONS.filter((d) => d.region === r).map((d) => d.name).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type DetailCardProps = {
  detail: Destination;
  interest: Interest | null;
  onClose: () => void;
  onToggleInterest: (value: Interest) => void;
  className?: string;
};

function DetailCard({ detail, interest, onClose, onToggleInterest, className }: DetailCardProps) {
  const image = DESTINATION_IMAGES[detail.id];

  return (
    <div className={cn("card-surface animate-in slide-in-from-bottom-4 fade-in text-ink duration-500", className)}>
      <div className="photo-zoom relative aspect-[16/9] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${detail.name}, Sri Lanka`}
            className="photo-inner absolute inset-0 size-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="photo-inner absolute inset-0 flex items-center justify-center bg-tea-green text-sand-cream">
            <span className="type-h3">{detail.name}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="type-caption text-muted-foreground">{detail.region}</p>
            <h2 className="type-h2 mt-1">{detail.name}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-1 hover:bg-muted">
            <X className="size-5" />
          </button>
        </div>
        <p className="type-body mt-4 text-muted-foreground">{detail.blurb}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {detail.interests.map((id) => {
            const meta = INTERESTS.find((x) => x.id === id);
            if (!meta) return null;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onToggleInterest(id)}
                className={cn("chip", interest === id && "chip-active")}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/journey"
            search={detail.interests[0] ? { interest: detail.interests[0] } : {}}
            className="btn-gold"
          >
            Build a trip around this
          </Link>
          <Link to="/contact" search={{ tag: detail.name }} className="btn-outline text-ocean-teal">
            Ask about {detail.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

function Explore() {
  const { interest: initialInterest, place } = Route.useSearch();
  const [interest, setInterest] = useState<Interest | null>(initialInterest ?? null);
  const [selected, setSelected] = useState<string | null>(place ?? null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [routeKey, setRouteKey] = useState(0);
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);

  useEffect(() => {
    if (initialInterest) {
      setInterest(initialInterest);
      setRouteKey((k) => k + 1);
    }
  }, [initialInterest]);

  // Reset drag transform when a new place is selected
  useEffect(() => {
    setIsDraggingHandle(false);
    if (sheetRef.current) {
      sheetRef.current.style.transform = "";
      sheetRef.current.style.transition = "";
    }
  }, [selected]);

  const matches = useMemo(
    () => (interest ? DESTINATIONS.filter((d) => d.interests.includes(interest) && d.id !== "colombo") : []),
    [interest],
  );

  const routePath = useMemo(() => {
    if (matches.length === 0) return "";
    const ordered = [...matches].sort((a, b) => a.y - b.y);
    return ordered
      .map((d, i) => {
        const prev = i === 0 ? COLOMBO : ordered[i - 1]!;
        const cx = (prev.x + d.x) / 2 + (d.y - prev.y) * 0.18;
        const cy = (prev.y + d.y) / 2 - (d.x - prev.x) * 0.18;
        return `${i === 0 ? `M${COLOMBO.x},${COLOMBO.y} ` : ""}Q${cx},${cy} ${d.x},${d.y}`;
      })
      .join(" ");
  }, [matches]);

  const detail = DESTINATIONS.find((d) => d.id === selected) ?? null;

  const pick = (value: Interest) => {
    setInterest((cur) => (cur === value ? null : value));
    setRouteKey((k) => k + 1);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!sheetRef.current) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragStartY.current = e.clientY;
    sheetRef.current.style.transition = "none";
    setIsDraggingHandle(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingHandle || !sheetRef.current) return;
    const offset = Math.max(0, e.clientY - dragStartY.current);
    sheetRef.current.style.transform = `translateY(${offset}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingHandle || !sheetRef.current) return;
    setIsDraggingHandle(false);
    const offset = Math.max(0, e.clientY - dragStartY.current);
    sheetRef.current.style.transition = "";
    if (offset > 100) {
      setSelected(null);
    } else {
      sheetRef.current.style.transform = "translateY(0)";
    }
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      // capture may already be released
    }
  };

  return (
    <div className="bg-ocean-teal text-sand-cream">
      <div className="section-x py-12 md:py-16">
        <p className="type-caption text-spice-gold">The Sri Lanka Explorer</p>
        <h1 className="type-h1 mt-3 max-w-2xl">Explore Sri Lanka Your Way</h1>
        <p className="type-body mt-4 max-w-lg opacity-85">
          Pick an interest and we'll trace the route from Colombo out to the places that fit it.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => pick(i.id)}
              className={cn(
                "chip border-sand-cream/35 bg-transparent text-sand-cream",
                interest === i.id && "border-spice-gold bg-spice-gold text-ink",
              )}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>

      <div className="section-x grid gap-8 pb-20 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* MAP */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <svg viewBox="0 0 400 720" className="h-auto w-full" role="img" aria-label="Map of Sri Lanka with destination pins">

            <path d={SRI_LANKA_PATH} className="fill-none stroke-tea-green/35" strokeWidth={10} strokeLinejoin="round" />
            <path
              d={SRI_LANKA_PATH}
              className="fill-ocean-teal-deep stroke-sand-cream/35"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />

            {routePath ? (
              <path
                key={routeKey}
                d={routePath}
                fill="none"
                stroke="var(--spice-gold)"
                strokeWidth={3}
                strokeLinecap="round"
                className="route-draw"
                style={{ ["--route-len" as string]: "2400" }}
              />
            ) : null}

            {DESTINATIONS.map((d) => {
              const active = matches.some((m) => m.id === d.id) || d.id === "colombo";
              const isSelected = selected === d.id;
              return (
                <g
                  key={d.id}
                  onClick={() => setSelected(d.id)}
                  onMouseEnter={() => setHovered(d.id)}
                  onMouseLeave={() => setHovered((h) => (h === d.id ? null : h))}
                  onFocus={() => setHovered(d.id)}
                  onBlur={() => setHovered((h) => (h === d.id ? null : h))}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${d.name}, ${d.region}`}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(d.id)}
                >
                  {(active || isSelected) && !(interest && !active) ? (
                    <circle cx={d.x} cy={d.y} r={12} className="soft-pulse fill-spice-gold/25" />
                  ) : null}
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isSelected || hovered === d.id ? 9 : 6}
                    className={cn(
                      "transition-all",
                      interest && !active ? "fill-sand-cream/25" : "fill-spice-gold",
                      (isSelected || hovered === d.id) && "stroke-sand-cream",
                    )}
                    strokeWidth={2}
                  />

                  <text
                    x={(d.x > 250 ? d.x - 12 : d.x + 12) + (LABEL_OFFSET[d.id]?.dx ?? 0)}
                    y={d.y + 4 + (LABEL_OFFSET[d.id]?.dy ?? 0)}
                    textAnchor={d.x > 250 ? "end" : "start"}
                    className={cn("fill-sand-cream text-[11px]", interest && !active && "opacity-40")}
                  >
                    {d.name}
                  </text>
                </g>
              );
            })}

            {/* HOVER TOOLTIP */}
            {(() => {
              const d = DESTINATIONS.find((x) => x.id === hovered);
              if (!d) return null;
              const W = 190;
              const H = 92;
              const x = Math.min(Math.max(d.x - W / 2, 6), 400 - W - 6);
              const above = d.y > H + 24;
              const y = above ? d.y - H - 16 : d.y + 18;
              return (
                <foreignObject x={x} y={y} width={W} height={H} className="pointer-events-none">
                  <div className="animate-in fade-in zoom-in-95 duration-200 rounded-xl border border-spice-gold/60 bg-ink/90 p-3 text-sand-cream shadow-xl backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-spice-gold">{d.region}</p>
                    <p className="mt-0.5 text-[13px] font-semibold leading-tight">{d.name}</p>
                    <p className="mt-1 line-clamp-3 text-[10px] leading-snug opacity-85">{d.blurb}</p>
                  </div>
                </foreignObject>
              );
            })()}

          </svg>
        </div>

        {/* PANEL — desktop */}
        <aside className="hidden lg:block lg:sticky lg:top-24">
          {detail ? (
            <DetailCard
              detail={detail}
              interest={interest}
              onClose={() => setSelected(null)}
              onToggleInterest={pick}
            />
          ) : (
            <RegionsIntro />
          )}
        </aside>
      </div>

      {/* MOBILE DETAIL SHEET */}
      {detail && (
        <div
          ref={sheetRef}
          className="fixed inset-x-0 bottom-14 z-[60] max-h-[65vh] overflow-y-auto rounded-t-3xl bg-sand-cream px-4 pb-4 pt-2 shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${detail.name} details`}
        >
          <div
            className={cn(
              "sticky top-0 z-10 flex cursor-grab justify-center py-3 touch-none select-none",
              isDraggingHandle && "cursor-grabbing",
            )}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            aria-label="Drag down to close"
            role="button"
            tabIndex={0}
          >
            <div className="h-1.5 w-14 rounded-full bg-ink/25 shadow-sm" />
          </div>
          <DetailCard
            detail={detail}
            interest={interest}
            onClose={() => setSelected(null)}
            onToggleInterest={pick}
            className="shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.35)]"
          />
        </div>
      )}

      {/* MOBILE REGIONS LIST */}
      <div className="section-x lg:hidden">
        <RegionsIntro className="mt-8" />
      </div>
    </div>
  );
}
