import { Link, createFileRoute } from "@tanstack/react-router";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover Sri Lanka — 14 Ways to Travel | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Beaches, tea country, safaris, temples, diving, food, village life and more — fourteen ways to see Sri Lanka, each with places to build a trip around.",
      },
      { property: "og:title", content: "Discover Sri Lanka — 14 Ways to Travel" },
      { property: "og:description", content: "Fourteen ways to see Sri Lanka, from beaches to boardrooms." },
    ],
  }),
  component: Discover,
});

function Discover() {
  return (
    <div className="pb-24">
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x">
          <p className="type-caption text-spice-gold">Discover</p>
          <h1 className="type-h1 mt-3 max-w-2xl">What kind of Sri Lanka are you after?</h1>
          <p className="type-body mt-4 max-w-xl opacity-85">
            Fourteen ways to travel here. Pick the one that sounds like you — each opens with the
            places worth building the trip around.
          </p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, idx) => (
            <Reveal key={c.slug} delay={(idx % 3) * 90}>
              <Link to="/discover/$slug" params={{ slug: c.slug }} className="card-surface hover-lift block h-full">
                <Placeholder label={c.label} />
                <div className="p-5">
                  <h2 className="type-h3">{c.label}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.intro}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
