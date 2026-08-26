import { Link, createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Placeholder } from "@/components/site/Placeholder";
import { SRI_LANKA_PATH } from "@/data/sriLankaPath";
import { DESTINATIONS, INTERESTS, REGIONS, type Interest } from "@/data/site";
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



const COLOMBO = DESTINATIONS.find((d) => d.id === "colombo")!;

function Explore() {
  const { interest: initialInterest, place } = Route.useSearch();
  const [interest, setInterest] = useState<Interest | null>(initialInterest ?? null);
  const [selected, setSelected] = useState<string | null>(place ?? null);
  const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    if (initialInterest) {
      setInterest(initialInterest);
      setRouteKey((k) => k + 1);
    }
  }, [initialInterest]);

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

  return (
    <div className="bg-ocean-teal text-sand-cream">
      <div className="section-x py-12 md:py-16">
        <p className="type-caption text-spice-gold">The Sri Lanka Explorer</p>
        <h1 className="type-h1 mt-3 max-w-2xl">Tap a place, see what's there</h1>
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
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(d.id)}
                >
                  {(active || isSelected) && !(interest && !active) ? (
                    <circle cx={d.x} cy={d.y} r={12} className="soft-pulse fill-spice-gold/25" />
                  ) : null}
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isSelected ? 9 : 6}
                    className={cn(
                      "transition-all",
                      interest && !active ? "fill-sand-cream/25" : "fill-spice-gold",
                      isSelected && "stroke-sand-cream",
                    )}
                    strokeWidth={2}
                  />

                  <text
                    x={d.x > 250 ? d.x - 12 : d.x + 12}
                    y={d.y + 4}
                    textAnchor={d.x > 250 ? "end" : "start"}
                    className={cn("fill-sand-cream text-[11px]", interest && !active && "opacity-40")}
                  >
                    {d.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* PANEL */}
        <aside className="lg:sticky lg:top-24">
          {detail ? (
            <div className="card-surface animate-in slide-in-from-bottom-4 fade-in text-ink duration-500">
              <Placeholder label={detail.name} ratio="aspect-[16/9]" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="type-caption text-muted-foreground">{detail.region}</p>
                    <h2 className="type-h2 mt-1">{detail.name}</h2>
                  </div>
                  <button type="button" onClick={() => setSelected(null)} aria-label="Close" className="rounded-md p-1 hover:bg-muted">
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
                        onClick={() => pick(id)}
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
          ) : (
            <div className="rounded-2xl border border-sand-cream/20 p-6">
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
          )}
        </aside>
      </div>
    </div>
  );
}
