import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  HeartHandshake,
  Image as ImageIcon,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";
import { conceptDetail, conceptGallery } from "@/data/conceptDetails";

export const Route = createFileRoute("/concepts/$slug")({
  loader: ({ params }) => {
    const collectionIndex = COLLECTIONS.findIndex((c) => c.slug === params.slug);
    if (collectionIndex === -1) throw notFound();

    const collection = COLLECTIONS[collectionIndex]!;
    const prevCollection = (collectionIndex > 0
      ? COLLECTIONS[collectionIndex - 1]
      : COLLECTIONS[COLLECTIONS.length - 1])!;
    const nextCollection = (collectionIndex < COLLECTIONS.length - 1
      ? COLLECTIONS[collectionIndex + 1]
      : COLLECTIONS[0])!;

    return { collection, prevCollection, nextCollection, index: collectionIndex + 1 };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Concept Not Found" }, { name: "robots", content: "noindex" }] };
    }
    const { collection, index } = loaderData;
    const title = `Concept ${index}: ${collection.name} — ${collection.days} Sri Lanka Tour | AM Travel's Guru`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.intro },
      ],
    };
  },
  component: ConceptDetailPage,
});

function ConceptDetailPage() {
  const { collection, prevCollection, nextCollection, index } = Route.useLoaderData();
  const detail = conceptDetail(collection.slug);
  const galleryImages = conceptGallery(collection.slug);

  const galleryItems = galleryImages.map((src, i) => ({
    src,
    alt: `${collection.name} experience photograph ${i + 1}`,
  }));

  const coverUrl = conceptImage(collection.slug);

  return (
    <div className="pb-28 md:pb-0">
      {/* Top Header Bar / Breadcrumb */}
      <section className="border-b border-border/70 bg-sand-cream/50 py-4">
        <div className="section-x flex items-center justify-between">
          <Link
            to="/concepts"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ocean-teal"
          >
            <ArrowLeft className="size-4" /> All 10 Tour Concepts
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Concept {index} of 10</span>
          </div>
        </div>
      </section>

      {/* Hero Overview Section */}
      <section className="bg-background py-10 md:py-16">
        <div className="section-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-ocean-teal/20 bg-ocean-teal/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-teal">
              <Sparkles className="size-3.5" />
              Concept {String(index).padStart(2, "0")} • {collection.name}
            </div>

            <h1 className="type-h1 mt-4 text-ink">
              {detail?.heading || collection.name}
            </h1>

            {detail?.eyebrow ? (
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-spice-gold md:text-base">
                {detail.eyebrow}
              </p>
            ) : null}

            {detail?.subheading ? (
              <p className="mt-2 text-lg font-medium text-muted-foreground">
                {detail.subheading}
              </p>
            ) : null}

            <div className="mt-6 space-y-3">
              {detail?.lead?.length ? (
                detail.lead.map((p, idx) => (
                  <p key={idx} className="type-body text-ink-soft">
                    {p}
                  </p>
                ))
              ) : (
                <p className="type-body text-ink-soft">{collection.intro}</p>
              )}
            </div>

            {/* Quick Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/80 bg-sand-cream/40 p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <Calendar className="size-3.5 text-ocean-teal" /> Duration
                </div>
                <div className="mt-1 text-base font-semibold text-ink">{collection.days}</div>
              </div>

              <div className="rounded-xl border border-border/80 bg-sand-cream/40 p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <Compass className="size-3.5 text-ocean-teal" /> Style
                </div>
                <div className="mt-1 text-base font-semibold text-ink">Curated & Tailor-made</div>
              </div>

              <div className="col-span-2 rounded-xl border border-border/80 bg-sand-cream/40 p-3.5 sm:col-span-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <MapPin className="size-3.5 text-ocean-teal" /> Key Stops
                </div>
                <div className="mt-1 truncate text-base font-semibold text-ink">
                  {collection.route.length} Destinations
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/journey"
                search={{ collection: collection.slug }}
                className="btn-gold !px-6 !py-3 font-semibold shadow-sm"
              >
                Start This Journey <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                search={{ tag: `${collection.name} Tour Concept` }}
                className="btn-outline !px-6 !py-3 font-semibold text-ocean-teal hover:border-ocean-teal"
              >
                <MessageSquare className="size-4" /> Enquire About This Concept
              </Link>
            </div>
          </Reveal>

          {/* Hero Concept Card Cover */}
          <Reveal delay={100} className="flex justify-center">
            <div className="w-full max-w-[380px]">
              <div className="card-surface group relative overflow-hidden rounded-3xl border border-border/60 shadow-xl transition-all duration-300 hover:shadow-2xl">
                {coverUrl ? (
                  <div className="photo-zoom relative isolate aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={coverUrl}
                      alt={`${collection.name} Concept Card`}
                      className="photo-inner absolute inset-0 size-full object-cover"
                    />
                  </div>
                ) : (
                  <Placeholder label={`${collection.name} Card`} ratio="aspect-[3/4]" />
                )}
                <div className="bg-sand-cream/80 p-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Concept Card #{index} • {collection.name}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights Pillars */}
      {detail?.highlights?.length ? (
        <section className="border-y border-border/60 bg-sand-cream/40 py-10">
          <div className="section-x">
            <Reveal>
              <h2 className="text-xs font-bold uppercase tracking-widest text-tea-green">
                Key Experience Pillars
              </h2>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {detail.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:border-spice-gold/50 hover:shadow-md">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ocean-teal" />
                    <p className="text-sm font-medium leading-relaxed text-ink">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Detailed Content Sections */}
      {detail?.sections?.length ? (
        <section className="py-12 md:py-20">
          <div className="section-x space-y-12 md:space-y-16">
            {detail.sections.map((section, sIdx) => (
              <Reveal key={section.title} delay={sIdx * 100}>
                <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:p-10">
                  {section.eyebrow ? (
                    <span className="inline-block rounded-md bg-sand-cream px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                      {section.eyebrow}
                    </span>
                  ) : null}

                  <h2 className="type-h2 mt-3 text-ink">{section.title}</h2>

                  <div className="mt-4 space-y-4 text-ink-soft">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="type-body">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  {section.bulletPoints?.length ? (
                    <div className="mt-6 rounded-2xl border border-border/60 bg-sand-cream/30 p-5 md:p-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Featured Highlights & Destinations
                      </h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {section.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm text-ink">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ocean-teal" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Chants / Blessings */}
                  {section.chants?.length ? (
                    <div className="mt-6 rounded-2xl border border-spice-gold/30 bg-spice-gold/10 p-5 text-center">
                      <div className="space-y-1">
                        {section.chants.map((chant, cIdx) => (
                          <p key={cIdx} className="font-display text-lg font-bold tracking-wide text-ink">
                            {chant}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Concept Photo Gallery */}
      {galleryItems.length > 0 ? (
        <section className="bg-sand-cream/40 py-14 md:py-20">
          <div className="section-x">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tea-green">
                    <ImageIcon className="size-3.5" /> Concept Photograph Collection
                  </div>
                  <h2 className="type-h2 mt-2">
                    Glimpses of {collection.name} Tourism
                  </h2>
                  <p className="type-body mt-2 text-muted-foreground">
                    Authentic moments, destinations, and experiences captured across this journey concept. Click any image to view in full resolution.
                  </p>
                </div>
                <div className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                  {galleryItems.length} Photographs
                </div>
              </div>
            </Reveal>

            <div className="mt-8">
              <GalleryGrid items={galleryItems} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" />
            </div>
          </div>
        </section>
      ) : null}

      {/* Suggested Itinerary Route */}
      <section className="py-12 md:py-18">
        <div className="section-x">
          <div className="rounded-3xl border border-border/70 bg-card p-6 md:p-10">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tea-green">
                <MapPin className="size-3.5" /> Suggested Itinerary Trail
              </div>
              <h2 className="type-h2 mt-2">The Journey Route</h2>
              <p className="type-body mt-2 text-muted-foreground">
                A thoughtfully paced flow connecting each key destination with comfortable driving times and authentic stops.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-2">
              {collection.route.map((stop, idx) => (
                <div key={stop} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-border/80 bg-sand-cream/50 px-4 py-2.5 text-sm font-medium text-ink shadow-2xs">
                    <span className="flex size-5 items-center justify-center rounded-full bg-ocean-teal text-xs font-bold text-sand-cream">
                      {idx + 1}
                    </span>
                    <span>{stop}</span>
                  </div>
                  {idx < collection.route.length - 1 ? (
                    <ChevronRight className="size-4 shrink-0 text-spice-gold" />
                  ) : null}
                </div>
              ))}
            </Reveal>

            <Reveal delay={150} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/journey"
                search={{ collection: collection.slug }}
                className="btn-gold font-semibold"
              >
                Customise This Route
              </Link>
              <Link
                to="/explore"
                className="btn-outline text-ocean-teal hover:border-ocean-teal font-semibold"
              >
                Explore on Interactive Map
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      {detail?.promise ? (
        <section className="bg-ocean-teal py-14 text-sand-cream md:py-20">
          <div className="section-x max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center rounded-full border border-sand-cream/20 bg-sand-cream/10 p-3 text-spice-gold">
                <HeartHandshake className="size-8" />
              </div>
              <h2 className="type-h2 mt-5 text-sand-cream">{detail.promise.title}</h2>
              <div className="mt-6 space-y-3">
                {detail.promise.lines.map((line, idx) => (
                  <p key={idx} className="font-display text-lg font-medium leading-relaxed opacity-95 md:text-xl">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-8 border-t border-sand-cream/15 pt-6">
                <p className="type-h3 text-spice-gold">{detail.promise.signature}</p>
                <p className="type-caption mt-1 text-sand-cream/80">{detail.promise.tagline}</p>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Next / Previous Navigation */}
      <section className="border-t border-border/80 bg-background py-8">
        <div className="section-x flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            to="/concepts/$slug"
            params={{ slug: prevCollection.slug }}
            className="flex w-full items-center gap-3 rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-ocean-teal hover:shadow-sm sm:w-auto"
          >
            <ArrowLeft className="size-5 text-ocean-teal" />
            <div className="text-left">
              <span className="block text-xs uppercase text-muted-foreground">Previous Concept</span>
              <span className="font-semibold text-ink">{prevCollection.name}</span>
            </div>
          </Link>

          <Link
            to="/concepts"
            className="text-sm font-semibold text-ocean-teal hover:underline"
          >
            View All 10 Concepts
          </Link>

          <Link
            to="/concepts/$slug"
            params={{ slug: nextCollection.slug }}
            className="flex w-full items-center justify-end gap-3 rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-ocean-teal hover:shadow-sm sm:w-auto"
          >
            <div className="text-right">
              <span className="block text-xs uppercase text-muted-foreground">Next Concept</span>
              <span className="font-semibold text-ink">{nextCollection.name}</span>
            </div>
            <ArrowRight className="size-5 text-ocean-teal" />
          </Link>
        </div>
      </section>

      <StickyContactBar tag={`${collection.name} Tour Concept`} />
    </div>
  );
}
