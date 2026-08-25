import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { PACKAGES } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Exclusive Tour Packages in Sri Lanka | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Spiritual, cultural, sports, romantic, women's, leisure, luxury, business and MICE tour packages across Sri Lanka — every one tailor-made.",
      },
      { property: "og:title", content: "Exclusive Tour Packages in Sri Lanka" },
      { property: "og:description", content: "Nine package families, from Ramayana trails to corporate incentives." },
    ],
  }),
  component: Packages,
});

function Packages() {
  const [open, setOpen] = useState<string | null>(PACKAGES[0]!.name);

  return (
    <div className="pb-28 md:pb-0">
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x">
          <p className="type-caption text-spice-gold">Exclusive tour packages</p>
          <h1 className="type-h1 mt-3 max-w-2xl">What kind of group are you bringing?</h1>
          <p className="type-body mt-4 max-w-xl opacity-85">
            Nine package families, each built for a different reason to travel. Open one to see
            what's inside.
          </p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <div className="grid gap-4">
          {PACKAGES.map((p, idx) => {
            const isOpen = open === p.name;
            return (
              <Reveal key={p.name} delay={(idx % 4) * 70}>
                <div className="card-surface">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : p.name)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h2 className="type-h3 min-w-0">{p.name}</h2>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-ocean-teal">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="animate-in fade-in slide-in-from-top-2 border-t border-border p-6 duration-300">
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {p.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-spice-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" search={{ tag: p.name }} className="btn-gold mt-6">
                        Customize this tour
                      </Link>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="type-h3 mt-14 text-center text-tea-green">
          Unique Experiences · Tailor-Made Concepts · Great Hospitality — AM Travel's Guru Lanka 🇱🇰
        </p>
      </section>

      <StickyContactBar tag="Tour Packages" />
    </div>
  );
}
