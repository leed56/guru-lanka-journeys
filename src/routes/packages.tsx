import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Filter,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { TOUR_PLANS, ConceptTourGroup } from "@/data/tourPlans";
import { conceptImage } from "@/data/conceptImages";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Exclusive Tour Plans & Packages | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Explore our curated tour packages across 10 concepts: Spiritual (Tamil & Buddhist trails), Cultural & Heritage (Ramayana), Sports & Cricket, Romantic, Women's Friendship, Fun & Leisure, Nature Trails, Business, MICE and Happy Retirement.",
      },
      { property: "og:title", content: "Exclusive Tour Plans & Packages | AM Travel's Guru Lanka" },
      { property: "og:description", content: "Curated itineraries and custom durations across 10 tour concepts." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const [selectedConcept, setSelectedConcept] = useState<string>("all");

  const filteredPlans = useMemo(() => {
    if (selectedConcept === "all") return TOUR_PLANS;
    return TOUR_PLANS.filter((g) => g.slug === selectedConcept);
  }, [selectedConcept]);

  const totalPackagesCount = useMemo(() => {
    return TOUR_PLANS.reduce((acc, g) => acc + g.packages.length, 0);
  }, []);

  return (
    <div className="pb-28 md:pb-0">
      {/* Hero Header */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
              <Sparkles className="size-3.5" />
              {totalPackagesCount} Curated Tour Plans Across 10 Concepts
            </div>
            <h1 className="type-h1 mt-4 text-sand-cream">
              Our Exclusive Tour Plans &amp; Packages
            </h1>
            <p className="type-body mt-4 max-w-2xl opacity-90">
              Each package has been tuned for driving comfort, ceremonial timings, seasonal bests, and authentic experiences. Take any itinerary as-is or let us tailor it around your dates and preferences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/journey" className="btn-gold !px-6 !py-3 font-semibold shadow-sm">
                Design a Custom Journey <ArrowRight className="size-4" />
              </Link>
              <Link to="/concepts" className="btn-outline !border-sand-cream/40 !px-6 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15">
                Explore 10 Concept Stories
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[73px] z-30 border-b border-border/80 bg-background/95 backdrop-blur py-3 shadow-2xs">
        <div className="section-x flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">
            <Filter className="size-3.5 text-ocean-teal" /> Filter:
          </div>

          <button
            type="button"
            onClick={() => setSelectedConcept("all")}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedConcept === "all"
                ? "bg-ocean-teal text-sand-cream shadow-sm"
                : "border border-border bg-card text-ink hover:border-spice-gold"
            }`}
          >
            All Concepts ({totalPackagesCount})
          </button>

          {TOUR_PLANS.map((g) => {
            const isActive = selectedConcept === g.slug;
            return (
              <button
                key={g.slug}
                type="button"
                onClick={() => setSelectedConcept(g.slug)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-ocean-teal text-sand-cream shadow-sm"
                    : "border border-border bg-card text-ink hover:border-spice-gold"
                }`}
              >
                {g.id}. {g.conceptName.replace(" Tourism", "")} ({g.packages.length})
              </button>
            );
          })}
        </div>
      </section>

      {/* Tour Groups Listing */}
      <section className="section-x py-12 md:py-20">
        <div className="space-y-16">
          {filteredPlans.map((group) => {
            const coverImage = conceptImage(group.slug);

            return (
              <Reveal key={group.slug}>
                <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all md:p-10">
                  {/* Group Header */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-border/60 pb-6">
                    <div className="flex items-start gap-4">
                      {coverImage ? (
                        <div className="hidden sm:block size-20 shrink-0 overflow-hidden rounded-2xl border border-border/60 shadow-xs">
                          <img
                            src={coverImage}
                            alt={group.conceptName}
                            className="size-full object-cover"
                          />
                        </div>
                      ) : null}

                      <div>
                        <span className="inline-block rounded-md bg-ocean-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                          Concept {String(group.id).padStart(2, "0")}
                        </span>
                        <h2 className="type-h2 mt-2 text-ink">{group.conceptName}</h2>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">{group.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <Link
                        to="/concepts/$slug"
                        params={{ slug: group.slug }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-teal transition-colors hover:text-ocean-teal/80 hover:underline"
                      >
                        Read Full Concept Story &amp; Photos <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Packages Grid */}
                  <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {group.packages.map((pkg, pIdx) => (
                      <div
                        key={pIdx}
                        className="card-surface hover-lift flex flex-col justify-between rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:border-spice-gold/60"
                      >
                        <div>
                          {/* Duration & Category Bar */}
                          <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                            <div className="inline-flex items-center gap-1.5 rounded-lg bg-ocean-teal/10 px-2.5 py-1 text-xs font-bold text-ocean-teal">
                              <Clock className="size-3" />
                              {pkg.days === "Flexible Duration" ? "Custom Duration" : `${pkg.days} • ${pkg.nights}`}
                            </div>

                            {pkg.tier ? (
                              <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {pkg.tier}
                              </span>
                            ) : null}
                          </div>

                          {/* Plan Name */}
                          <h3 className="mt-4 text-base font-bold leading-snug text-ink md:text-lg">
                            {pkg.name}
                          </h3>

                          {pkg.category ? (
                            <p className="mt-1 text-xs font-semibold text-tea-green">
                              Category: {pkg.category}
                            </p>
                          ) : null}

                          {/* Highlights */}
                          {pkg.highlights ? (
                            <div className="mt-4 flex items-start gap-2 rounded-xl bg-sand-cream/40 p-3 text-xs leading-relaxed text-ink-soft">
                              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-ocean-teal" />
                              <span>{pkg.highlights}</span>
                            </div>
                          ) : null}
                        </div>

                        {/* Card Action */}
                        <div className="mt-6 pt-4 border-t border-border/60">
                          <Link
                            to="/journey"
                            search={{ collection: group.slug }}
                            className="btn-gold w-full !py-2.5 !text-xs font-bold text-center"
                          >
                            Customise This Tour Plan
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Tailor Made Banner */}
        <section className="mt-16 rounded-3xl bg-sand-cream p-8 md:p-12 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center rounded-full bg-ocean-teal/10 p-3 text-ocean-teal">
              <Compass className="size-6" />
            </div>
            <h2 className="type-h2 mt-4 text-ink">Need a Tailored Plan or Combined Concept?</h2>
            <p className="type-body mt-3 max-w-xl mx-auto text-muted-foreground">
              We design completely bespoke routes combining spirituality, cricket fixtures, wildlife safaris, tea estates, and luxury retreats tailored to your dates, group size, and budget.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/journey" className="btn-gold !px-7 !py-3 font-semibold shadow-sm">
                Start Tailor-Made Journey
              </Link>
              <Link to="/contact" className="btn-outline text-ocean-teal hover:border-ocean-teal !px-7 !py-3 font-semibold">
                <MessageSquare className="size-4" /> Speak with a Travel Guru
              </Link>
            </div>
          </Reveal>
        </section>
      </section>

      <StickyContactBar tag="Tour Packages" />
    </div>
  );
}
