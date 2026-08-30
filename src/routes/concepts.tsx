import { Link, createFileRoute } from "@tanstack/react-router";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";

export const Route = createFileRoute("/concepts")({
  head: () => ({
    meta: [
      { title: "10 Tour Concepts — Ready-Made Sri Lanka Trips | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "10 Tour Concepts: Spiritual, Cultural & Heritage, Sports, Women's Friendship, Romantic, Fun & Leisure, Nature Trails, Business, MICE and Happy Retirement. Take one as-is or customise it.",
      },
      { property: "og:title", content: "10 Tour Concepts — Ready-Made Sri Lanka Trips" },
      { property: "og:description", content: "Ten tour concepts we've run many times. Change anything you like." },
    ],
  }),
  component: Trips,
});

function Trips() {
  return (
    <div className="pb-28 md:pb-0">
      <section className="bg-sand-cream py-16 md:py-24">
        <div className="section-x">
          <p className="type-caption text-tea-green">10 Tour Concepts</p>
          <h1 className="type-h1 mt-3 max-w-2xl">Would a ready-made trip do?</h1>
          <p className="type-body mt-4 max-w-xl text-muted-foreground">
            Ten tour concepts we run again and again, each one already tuned for driving time, season and
            where to slow down.
          </p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COLLECTIONS.map((c, idx) => (
            <Reveal key={c.slug} delay={(idx % 4) * 90}>
              <article className="card-surface hover-lift flex h-full flex-col">
                {conceptImage(c.slug) ? (
                  <div className="photo-zoom relative isolate aspect-[3/4] overflow-hidden bg-ink">
                    <img
                      src={conceptImage(c.slug)}
                      alt={`${c.name} tour concept in Sri Lanka`}
                      loading="lazy"
                      className="photo-inner absolute inset-0 size-full object-contain"
                    />
                  </div>
                ) : (
                  <Placeholder label={`${c.name} Tour Concept`} />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="type-caption text-muted-foreground">{c.days}</p>
                  <h2 className="type-h3 mt-1">{c.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.line}</p>
                  <Link to="/concepts/$slug" params={{ slug: c.slug }} className="btn-outline mt-5 text-ocean-teal">
                    More info
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <StickyContactBar tag="10 Tour Concepts" />
    </div>
  );
}
