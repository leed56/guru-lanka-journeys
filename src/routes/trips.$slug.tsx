import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";

export const Route = createFileRoute("/trips/$slug")({
  loader: ({ params }) => {
    const collection = COLLECTIONS.find((c) => c.slug === params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { collection } = loaderData;
    const title = `${collection.name} Tour Concept — ${collection.days} in Sri Lanka | AM Travel's Guru Lanka`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.intro },
      ],
    };
  },
  component: TripDetail,
});

function TripDetail() {
  const { collection } = Route.useLoaderData();

  return (
    <div className="pb-28 md:pb-0">
      {conceptImage(collection.slug) ? (
        <div className="hero-fade relative isolate aspect-[16/10] overflow-hidden bg-ink md:aspect-[21/8]">
          <img
            src={conceptImage(collection.slug)}
            alt={`${collection.name} tour concept in Sri Lanka`}
            className="absolute inset-0 size-full object-contain"
          />
        </div>
      ) : (
        <Placeholder label={`${collection.name} Tour Concept`} ratio="aspect-[16/10] md:aspect-[21/8]" className="hero-fade" />
      )}

      <div className="section-x -mt-16 md:-mt-24">
        <div className="card-surface max-w-3xl p-6 md:p-10">
          <Link to="/trips" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-teal">
            <ArrowLeft className="size-4" /> All tour concepts
          </Link>
          <p className="type-caption mt-4 text-tea-green">{collection.days}</p>
          <h1 className="type-h1 mt-2">{collection.name}</h1>
          <p className="type-body mt-4 text-muted-foreground">{collection.intro}</p>
        </div>
      </div>

      <section className="section-x py-14 md:py-20">
        <Reveal>
          <h2 className="type-h2">The route</h2>
        </Reveal>
        <Reveal delay={100} className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
          {collection.route.map((stop, idx) => (
            <span key={stop} className="flex items-center gap-2">
              <span className="rounded-lg bg-muted px-4 py-2.5 text-sm">{stop}</span>
              {idx < collection.route.length - 1 ? (
                <ChevronRight className="size-4 text-spice-gold" />
              ) : null}
            </span>
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          <Link to="/journey" search={{ collection: collection.slug }} className="btn-gold">
            Customize this trip
          </Link>
          <Link to="/contact" search={{ tag: `${collection.name} Tour Concept` }} className="btn-outline text-ocean-teal">
            Ask a question
          </Link>
        </Reveal>
      </section>

      <StickyContactBar tag={`${collection.name} Tour Concept`} />
    </div>
  );
}
