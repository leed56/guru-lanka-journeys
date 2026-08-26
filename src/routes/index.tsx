import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import climatesAsset from "@/assets/Nine_climates_in_one_island.jpg.asset.json";
import citiesAsset from "@/assets/2_000_years_of_cities.jpg.asset.json";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { BRAND, COLLECTIONS, INTERESTS } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AM Travel's Guru Lanka — Sri Lanka Tours & Tailor-Made Journeys" },
      {
        name: "description",
        content:
          "Plan your Sri Lanka trip with AM Travel's Guru Lanka. Beaches, tea country, wildlife, temples and wellness — ready-made trips or a journey built around you.",
      },
      { property: "og:title", content: "AM Travel's Guru Lanka — Guide to Endless Happiness" },
      {
        property: "og:description",
        content: "You imagine the journey. We design the experience. Tailor-made Sri Lanka travel.",
      },
    ],
  }),
  component: Home,
});

const WHY = [
  { label: "Nine climates in one island", note: "Surf at breakfast, cold mountain air by dinner.", image: climatesAsset.url, alt: "Beach, mountains, climbers and campers showing Sri Lanka's varied climates in one scene" },
  { label: "Leopards an hour from the beach", note: "Wildlife without a long-haul internal flight." },
  { label: "2,000 years of cities", note: "Stone capitals you can walk in a morning.", image: citiesAsset.url, alt: "Sigiriya rock fortress and ancient Anuradhapura ruins with visitors walking the pathways" },
  { label: "Food worth the trip alone", note: "Eight curries, one plate, every time." },
  { label: "People who mean it", note: "Great hospitality is the whole business here." },
];

const DURATIONS = ["3", "5", "7", "10", "14"];

const PARTNERS = ["Hotels", "Villas", "Guides", "Drivers", "Restaurants", "Wellness", "Safari"];

const TESTIMONIALS = [
  { quote: "They rebuilt our route twice before we landed. It felt personal, not packaged.", name: "Marie & Tom", from: "France" },
  { quote: "Our driver became the best part of the trip. Ten days, not one bad meal.", name: "Priya S.", from: "Singapore" },
  { quote: "We asked for quiet. They gave us a coast we didn't know existed.", name: "The Ahmeds", from: "UAE" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <div className="hero-fade absolute inset-0 -z-10">
          <HeroSlideshow />
        </div>

        <div className="section-x flex min-h-[88vh] flex-col justify-end pb-16 pt-24 text-sand-cream md:pb-24">
          <Reveal>
            <p className="type-caption text-spice-gold">{BRAND.tagline}</p>
            <h1 className="type-h1 mt-4 max-w-3xl">Where do you want to go in Sri Lanka?</h1>
            <p className="type-body mt-4 max-w-xl opacity-85">{BRAND.positioning}</p>
          </Reveal>

          <Reveal delay={100} className="mt-8">
            <Link to="/journey" className="btn-gold">
              Start My Journey <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={200} className="mt-10 flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <Link
                key={i.id}
                to="/journey"
                search={{ interest: i.id }}
                className="chip border-sand-cream/35 bg-transparent text-sand-cream hover:border-spice-gold"
              >
                {i.label}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY SRI LANKA */}
      <section className="bg-sand-cream py-16 md:py-24">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2 max-w-xl">Why does everyone come back?</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WHY.map((w, idx) => (
              <Reveal
                key={w.label}
                delay={idx * 100}
              >
                <article className="card-surface hover-lift h-full">
                  <Placeholder label={w.label} ratio={idx === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} />
                  <p className="type-body p-5">{w.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE THE MAP */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="type-caption text-spice-gold">The Sri Lanka Explorer</p>
            <h2 className="type-h2 mt-3">Tap a place, see what's there</h2>
            <p className="type-body mt-4 max-w-md opacity-85">
              Twenty-five places across six regions, each with a photo and a few honest sentences.
              Pick an interest and watch the route draw itself.
            </p>
            <Link to="/explore" className="btn-gold mt-7">
              Explore the Map
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] rounded-2xl border border-sand-cream/20 bg-ocean-teal-deep">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="type-caption opacity-40">Stylised island map</span>
              </div>
              {[
                { top: "22%", left: "38%" },
                { top: "48%", left: "62%" },
                { top: "70%", left: "30%" },
              ].map((p) => (
                <span
                  key={p.top}
                  style={p}
                  className="soft-pulse absolute grid size-7 place-items-center rounded-full bg-spice-gold text-ink"
                >
                  <MapPin className="size-3.5" />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* READY-MADE TRIPS */}
      <section className="py-16 md:py-24">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">Would a ready-made trip do?</h2>
            <p className="type-body mt-3 max-w-lg text-muted-foreground">
              Eight Guru Collections, each one route we've run many times. Change anything you like.
            </p>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {COLLECTIONS.map((c, idx) => (
              <Reveal key={c.slug} delay={(idx % 4) * 90} className="w-[76vw] shrink-0 snap-start sm:w-[46vw] md:w-auto">
                <article className="card-surface hover-lift flex h-full flex-col">
                  <Placeholder label={`${c.name} Collection`} />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="type-h3">{c.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.line}</p>
                    <Link to="/trips/$slug" params={{ slug: c.slug }} className="btn-outline mt-5 text-ocean-teal">
                      See this trip
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW LONG */}
      <section className="bg-sand-cream py-16 md:py-20">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">How long is your trip?</h2>
          </Reveal>
          <Reveal delay={100} className="mt-7 flex flex-wrap gap-3">
            {DURATIONS.map((d) => (
              <Link key={d} to="/journey" search={{ days: Number(d) }} className="chip">
                {d} Days
              </Link>
            ))}
            <Link to="/journey" className="chip chip-active">
              Or tell us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* AGENTS BANNER */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-3xl">
          <Reveal>
            <p className="type-caption text-spice-gold">Are you a travel agent?</p>
            <h2 className="type-h2 mt-3">Grow your Sri Lanka business with us</h2>
            <p className="type-body mt-4 opacity-85">
              Net rates, a package catalogue, brochures and itinerary support — built for agents who
              sell Sri Lanka properly.
            </p>
            <Link to="/for-agents" className="btn-gold mt-7">
              Partner With Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-16 md:py-24">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">Who do we work with?</h2>
          </Reveal>
          <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
            {PARTNERS.map((p) => (
              <span key={p} className="rounded-lg border border-border bg-muted px-5 py-3 text-sm">
                {p}
              </span>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <Link to="/for-partners" className="btn-teal mt-8">
              List Your Business
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-sand-cream py-16 md:py-24">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">What do travellers say?</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 100}>
                <figure className="card-surface hover-lift h-full p-6">
                  <Placeholder label={t.name} ratio="aspect-square" className="size-14 overflow-hidden rounded-full" />
                  <blockquote className="type-body mt-5">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    {t.name} · {t.from}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
