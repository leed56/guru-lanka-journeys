import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Placeholder } from "@/components/site/Placeholder";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";
import { CONCEPT_GALLERIES, conceptDetail } from "@/data/conceptDetails";

export const Route = createFileRoute("/concepts/$slug")({
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
  const detail = conceptDetail(collection.slug);
  const gallery = CONCEPT_GALLERIES[collection.slug];

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
          <Link to="/concepts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-teal">
            <ArrowLeft className="size-4" /> All tour concepts
          </Link>
          <p className="type-caption mt-4 text-tea-green">{collection.days}</p>
          <h1 className="type-h1 mt-2">{collection.name}</h1>
          <p className="type-body mt-4 text-muted-foreground">{collection.intro}</p>
        </div>
      </div>

      {detail ? (
        <>
          <section className="section-x py-14 md:py-20">
            <Reveal>
              <p className="type-caption text-spice-gold">{detail.eyebrow}</p>
              <h2 className="type-h2 mt-3 max-w-2xl">{detail.heading}</h2>
              <div className="mt-5 max-w-2xl space-y-4">
                {detail.lead.map((p) => (
                  <p key={p} className="type-body text-muted-foreground">{p}</p>
                ))}
              </div>
            </Reveal>
          </section>

          {detail.sections.map((s, idx) => (
            <section
              key={s.title}
              className={idx % 2 === 0 ? "bg-sand-cream py-14 md:py-20" : "py-14 md:py-20"}
            >
              <div className="section-x grid items-center gap-8 md:grid-cols-2">
                <Reveal className={idx % 2 === 1 ? "md:order-2" : undefined}>
                  {s.image ? (
                    <div className="photo-zoom relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-ink">
                      <img src={s.image} alt={s.alt ?? s.title} loading="lazy" className="photo-inner absolute inset-0 size-full object-cover" />
                    </div>
                  ) : (
                    <Placeholder label={s.title} />
                  )}
                </Reveal>
                <Reveal delay={100}>
                  {s.eyebrow ? <p className="type-caption text-tea-green">{s.eyebrow}</p> : null}
                  <h3 className="type-h2 mt-2">{s.title}</h3>
                  <div className="mt-4 space-y-4">
                    {s.paragraphs.map((p) => (
                      <p key={p} className="type-body text-muted-foreground">{p}</p>
                    ))}
                  </div>
                  {s.chants?.length ? (
                    <p className="type-h3 mt-6 text-spice-gold">
                      {s.chants.map((c) => (
                        <span key={c} className="block">{c}</span>
                      ))}
                    </p>
                  ) : null}
                </Reveal>
              </div>
              {s.gallery?.length ? (
                <div className="section-x mt-8">
                  <GalleryGrid items={s.gallery} />
                </div>
              ) : null}
            </section>
          ))}


          {gallery?.length ? (
            <section className="section-x pb-4">
              <GalleryGrid items={gallery} columns="sm:grid-cols-3" />
            </section>
          ) : null}

          <section className="mt-14 bg-ocean-teal py-14 text-sand-cream md:py-20">
            <div className="section-x max-w-2xl">
              <Reveal>
                <h2 className="type-h2">{detail.promise.title}</h2>
                <div className="mt-5 space-y-2">
                  {detail.promise.lines.map((l) => (
                    <p key={l} className="type-body opacity-90">{l}</p>
                  ))}
                </div>
                <p className="type-h3 mt-7 text-spice-gold">{detail.promise.signature}</p>
                <p className="type-caption mt-1">{detail.promise.tagline}</p>
              </Reveal>
            </div>
          </section>
        </>
      ) : null}

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
