import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Compass,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { COLLECTIONS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";

export const Route = createFileRoute("/concepts/")({
  head: () => ({
    meta: [
      { title: "10 Signature Tour Concepts in Sri Lanka | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Discover Sri Lanka through 10 signature tour concepts: Spiritual, Cultural & Heritage, Sports, Romantic, Women's Friendship, Fun & Leisure, Nature Trails, Business, MICE, and Happy Retirement.",
      },
      { property: "og:title", content: "10 Signature Tour Concepts | AM Travel's Guru Lanka" },
      {
        property: "og:description",
        content:
          "Explore 10 curated travel concepts designed around devotion, history, sports, love, adventure, and wellness in Sri Lanka.",
      },
    ],
  }),
  component: ConceptsListingPage,
});

function ConceptsListingPage() {
  return (
    <div className="pb-28 md:pb-0">
      {/* Premium Hero Header */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
              <Sparkles className="size-3.5" />
              AM Travel's Guru Lanka • Signature Travel Ecosystem
            </div>
            <h1 className="type-h1 mt-4 text-sand-cream">
              10 Unique Tour Concepts
            </h1>
            <p className="type-body mt-4 max-w-2xl text-sand-cream/90 text-base md:text-lg leading-relaxed">
              We have thoughtfully developed 10 distinctive tourism concepts that blend Sri Lanka's timeless traditions, spirituality, living heritage, cricket passion, pristine nature, and warm hospitality with innovative, memorable travel experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/packages" className="btn-gold !px-6 !py-3 font-semibold shadow-sm">
                View All Tour Plans &amp; Packages <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/journey"
                className="btn-outline !border-sand-cream/40 !px-6 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15"
              >
                Customise a Journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Concept Grid Section */}
      <section className="section-x py-14 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between border-b border-border/70 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                Curated Travel Experiences
              </span>
              <h2 className="type-h2 mt-1 text-ink">Explore Each Concept</h2>
            </div>
            <p className="type-body text-sm text-muted-foreground max-w-md">
              Click on any concept to explore its detailed story, sacred/historical background, suggested itineraries, and authentic photograph gallery.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COLLECTIONS.map((c, idx) => {
            const coverUrl = conceptImage(c.slug);

            return (
              <Reveal key={c.slug} delay={(idx % 4) * 80}>
                <article className="card-surface hover-lift group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-spice-gold/60 hover:shadow-lg">
                  <div>
                    {/* Artwork Container */}
                    <div className="relative isolate aspect-[3/4] overflow-hidden bg-muted">
                      {coverUrl ? (
                        <img
                          src={coverUrl}
                          alt={`${c.name} tour concept card`}
                          loading="lazy"
                          className="photo-inner absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Placeholder label={`${c.name} Tour Concept`} ratio="aspect-[3/4]" />
                      )}

                      {/* Number Pill Overlay */}
                      <div className="absolute left-3 top-3 rounded-full bg-ocean-teal/90 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-sand-cream shadow-md backdrop-blur-xs">
                        Concept {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-tea-green">
                        <Calendar className="size-3.5" />
                        <span>{c.days} Itinerary</span>
                      </div>

                      <h3 className="type-h3 mt-2 text-ink group-hover:text-ocean-teal transition-colors">
                        {c.name}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {c.line}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-5 pb-5 pt-0">
                    <Link
                      to="/concepts/$slug"
                      params={{ slug: c.slug }}
                      className="btn-outline w-full !py-2.5 !text-xs font-bold text-ocean-teal hover:border-ocean-teal hover:bg-ocean-teal hover:!text-sand-cream text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      More Info &amp; Gallery <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Tailor Made Banner */}
        <div className="mt-16 rounded-3xl bg-sand-cream/80 border border-border/70 p-8 md:p-12 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center rounded-full bg-ocean-teal/10 p-3 text-ocean-teal">
              <Compass className="size-6" />
            </div>
            <h2 className="type-h2 mt-4 text-ink">Can't Decide on Just One Concept?</h2>
            <p className="type-body mt-3 max-w-xl mx-auto text-muted-foreground">
              We seamlessly combine concepts — such as a Spiritual Tamil Kovil trail combined with hill-country Nature, or a Cricket tournament followed by a luxury Beach retreat.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/journey" className="btn-gold !px-7 !py-3 font-semibold shadow-sm">
                Design a Custom Blend
              </Link>
              <Link to="/packages" className="btn-outline text-ocean-teal hover:border-ocean-teal !px-7 !py-3 font-semibold">
                Explore Pre-Built Tour Packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyContactBar tag="10 Tour Concepts" />
    </div>
  );
}
