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
        <Reveal className="max-w-3xl space-y-10">
          <div>
            <h2 className="type-h2">Who we are</h2>
            <div className="type-body mt-4 space-y-4">
              <p>
                AM TRAVEL’S GURU LANKA is a newly launched Sri Lankan travel and tourism venture created with a clear
                purpose — to introduce a smarter, more meaningful and uniquely Sri Lankan way of experiencing travel.
              </p>
              <p>
                We are developing a new generation of tourism concepts that blend Sri Lanka’s timeless traditions, rich
                culture, spirituality, nature, hospitality and heritage with innovative business models, modern travel
                solutions and carefully designed experiences.
              </p>
              <p>Our vision is simple: to make every journey more than a trip — to make it a memorable experience.</p>
            </div>
          </div>

          <div>
            <h3 className="type-h3">Our difference</h3>
            <div className="type-body mt-3 space-y-4">
              <p>
                We believe that modern travellers are looking for more than sightseeing. They want experiences,
                connections, discovery, comfort, authenticity and unforgettable memories.
              </p>
              <p>
                That is why AM TRAVEL’S GURU LANKA is developing 10 unique tourism and business concepts, designed to
                create exciting opportunities for both our international travel partners and individual travellers.
              </p>
              <p>
                From spiritual and cultural journeys to wellness, heritage, sports, leisure, business and
                community-based experiences, our concepts showcase the many dimensions of Sri Lanka in fresh and
                innovative ways.
              </p>
            </div>
          </div>

          <div>
            <h3 className="type-h3">Professional service • Sri Lankan hospitality</h3>
            <div className="type-body mt-3 space-y-4">
              <p>
                Although we are a newly launched business, we are building our operation around experienced tourism and
                service professionals who understand the importance of quality, reliability and personal attention.
              </p>
              <p>
                Our team is committed to providing a service-oriented travel experience, from the first enquiry to the
                final moment of the journey.
              </p>
              <p>
                We want every guest to leave Sri Lanka carrying something special — beautiful memories, genuine
                friendships and a lasting feeling of Sri Lankan warmth and hospitality.
              </p>
            </div>
          </div>

          <div>
            <h3 className="type-h3">Our promise</h3>
            <ul className="type-body mt-3 space-y-1">
              <li>We don’t simply arrange journeys — we create experiences.</li>
              <li>We connect people.</li>
              <li>We build partnerships.</li>
              <li>We share Sri Lanka with the world.</li>
            </ul>
            <p className="type-body mt-4">
              With a fresh vision, innovative concepts and a strong commitment to professional service, AM TRAVEL’S GURU
              LANKA is ready to become a trusted and distinctive tourism partner for Sri Lanka and the international
              travel community.
            </p>
            <p className="font-display mt-6 text-2xl text-ocean-teal">
              Discover Sri Lanka differently.
              <br />
              Experience the Sri Lankan way.
            </p>
          </div>
        </Reveal>
      </section>


      <section className="bg-sand-cream py-14 md:py-20">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">Our Strength</h2>
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
