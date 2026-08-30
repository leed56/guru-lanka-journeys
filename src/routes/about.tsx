import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Who we are: a Sri Lankan travel team designing spiritual, cultural, wellness and leisure journeys with great hospitality and honest local knowledge.",
      },
      { property: "og:title", content: "About Us — AM Travel's Guru Lanka" },
      {
        property: "og:description",
        content: "You imagine the journey. We design the experience. Meet the team behind Guru Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "New Thoughts",
    body: "We build itineraries from scratch around your pace, interests and season — never a copy-paste circuit.",
  },
  {
    title: "New Missions",
    body: "Every journey has a purpose: pilgrimage, celebration, discovery, recovery, or simply rest.",
  },
  {
    title: "Unique Concepts",
    body: "Ten tour concepts — spiritual, heritage, sports, romantic, nature, business, MICE and more.",
  },
  {
    title: "Great Hospitality",
    body: "Our ground team, drivers and partner hotels are chosen for warmth first, then for price.",
  },
];

const STATS = [
  { value: "25+", label: "Handpicked destinations" },
  { value: "10", label: "Signature tour concepts" },
  { value: "6", label: "Regions covered island-wide" },
  { value: "100%", label: "Tailor-made itineraries" },
];

function About() {
  return (
    <div className="pb-20">
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-3xl">
          <p className="type-caption text-spice-gold">About us</p>
          <h1 className="type-h1 mt-3">{BRAND.positioning}</h1>
          <p className="type-body mt-4 opacity-90">{BRAND.brandLine}</p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <Reveal className="max-w-3xl">
          <h2 className="type-h2">Who we are</h2>
          <p className="type-body mt-4">
            {BRAND.name} is a Sri Lankan travel company built by people who grew up on this island — in
            the tea hills, along the coast and in the old sacred cities. We plan and operate journeys on
            the ground ourselves, so what we promise is what you actually get.
          </p>
          <p className="type-body mt-4">
            From a single family holiday to a full incentive group, we design the route, choose the stays,
            arrange the vehicles and stay reachable through the whole trip. Our name says it simply:
            <em> {BRAND.tagline}</em>.
          </p>
        </Reveal>
      </section>

      <section className="bg-sand-cream py-14 md:py-20">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">What we stand for</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/70 p-6 shadow-sm">
                  <h3 className="type-h3">{v.title}</h3>
                  <p className="type-body mt-2 opacity-80">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-2xl border border-ink/10 p-6 text-center">
                <p className="font-display text-4xl text-ocean-teal">{s.value}</p>
                <p className="type-caption mt-2 opacity-70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ocean-teal py-14 text-sand-cream md:py-20">
        <div className="section-x max-w-2xl">
          <h2 className="type-h2">Let's design your journey</h2>
          <p className="type-body mt-3 opacity-90">
            Tell us who is travelling, when, and what you want to feel — we'll come back with a route.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-xl bg-spice-gold px-6 py-3 font-medium text-ink transition-colors hover:bg-spice-gold/90"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </div>
  );
}
