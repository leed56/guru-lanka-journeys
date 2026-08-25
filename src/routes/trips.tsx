import { Link, createFileRoute } from "@tanstack/react-router";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Ready-Made Sri Lanka Trips — Guru Collections | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Eight ready-made Sri Lanka itineraries: Beach, Hill Country, Wildlife, Spiritual, Wellness, Romance, Family and Eco. Take one as-is or customise it.",
      },
      { property: "og:title", content: "Ready-Made Sri Lanka Trips — Guru Collections" },
      { property: "og:description", content: "Eight routes we've run many times. Change anything you like." },
    ],
  }),
  component: Trips,
});

function Trips() {
  return (
    <div className="pb-28 md:pb-0">
      <section className="bg-sand-cream py-16 md:py-24">
        <div className="section-x">
          <p className="type-caption text-tea-green">Guru Collections</p>
          <h1 className="type-h1 mt-3 max-w-2xl">Would a ready-made trip do?</h1>
          <p className="type-body mt-4 max-w-xl text-muted-foreground">
            Eight routes we run again and again, each one already tuned for driving time, season and
            where to slow down.
          </p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COLLECTIONS.map((c, idx) => (
            <Reveal key={c.slug} delay={(idx % 4) * 90}>
              <article className="card-surface hover-lift flex h-full flex-col">
                <Placeholder label={`${c.name} Collection`} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="type-caption text-muted-foreground">{c.days}</p>
                  <h2 className="type-h3 mt-1">{c.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.line}</p>
                  <Link to="/trips/$slug" params={{ slug: c.slug }} className="btn-outline mt-5 text-ocean-teal">
                    See this trip
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <StickyContactBar tag="Guru Collections" />
    </div>
  );
}
