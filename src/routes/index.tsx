import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle, Phone, Quote, Sparkles, Star } from "lucide-react";

import climatesAsset from "@/assets/Nine_climates_in_one_island.jpg.asset.json";
import citiesAsset from "@/assets/2_000_years_of_cities.jpg.asset.json";
import safariAsset from "@/assets/wildlife_safari.jpg.asset.json";
import curryAsset from "@/assets/Eight_curries_one_plate.jpg.asset.json";
import hospitalityAsset from "@/assets/sri_lankan_business.jpg.asset.json";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { IslandMap } from "@/components/site/IslandMap";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { BRAND, COLLECTIONS, INTERESTS } from "@/data/site";
import { conceptImage } from "@/data/conceptImages";

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

type WhyCard = {
  label: string;
  note: string;
  image?: string;
  alt?: string;
};

const WHY: WhyCard[] = [
  { label: "Nine climates in one island", note: "Surf at breakfast, cold mountain air by dinner.", image: climatesAsset.url, alt: "Beach, mountains, climbers and campers showing Sri Lanka's varied climates in one scene" },
  { label: "Leopards an hour from the beach", note: "Wildlife without a long-haul internal flight.", image: safariAsset.url, alt: "Safari jeep of travellers watching a herd of elephants at a waterhole at sunset" },
  { label: "2,000 years of cities", note: "Stone capitals you can walk in a morning.", image: citiesAsset.url, alt: "Sigiriya rock fortress and ancient Anuradhapura ruins with visitors walking the pathways" },
  { label: "Feel the culture from the food", note: "Enjoy organic food and feel the healthy life like in haven", image: curryAsset.url, alt: "Sri Lankan rice and curry platter with red rice, dhal, fish curry, sambols and papadams" },
  { label: "Nice human and humble treatment", note: "Where warm hospitality turns every journey into a beautiful memory.", image: hospitalityAsset.url, alt: "Sri Lankan hotel team welcoming a family on a beachfront deck with garlands and king coconut" },
];

const DURATIONS = ["3", "5", "7", "10", "14"];

const PARTNERS = ["Hotels", "Villas", "Guides", "Drivers", "Restaurants", "Wellness", "Safari"];

const TESTIMONIALS = [
  {
    quote: "They rebuilt our route twice before we landed. It felt personal, not packaged.",
    name: "Marie & Tom",
    from: "France",
    avatar: "/images/testimonials/marie-tom.jpg",
    tour: "Romantic & Hill Country Trail",
  },
  {
    quote: "Our driver became the best part of the trip. Ten days, not one bad meal.",
    name: "Priya S.",
    from: "Singapore",
    avatar: "/images/testimonials/priya-singapore.jpg",
    tour: "Spiritual & Heritage Pilgrimage",
  },
  {
    quote: "We asked for quiet. They gave us a coast we didn't know existed.",
    name: "The Ahmeds",
    from: "UAE",
    avatar: "/images/testimonials/the-ahmeds.jpg",
    tour: "Nature & South Coast Escapes",
  },
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
            <h1 className="type-h1 mt-4 max-w-3xl">Feel the wonderful Sri Lanka.</h1>
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
            <h2 className="type-h2 max-w-xl">Why choose Sri Lanka?</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WHY.map((w, idx) => (
              <Reveal key={w.label} delay={idx * 100}>
                <article className="card-surface hover-lift h-full">
                  {w.image ? (
                    <div className={cn("photo-zoom relative isolate overflow-hidden", idx === 0 ? "aspect-[4/5]" : "aspect-[4/3]")}>
                      <img src={w.image} alt={w.alt} className="photo-inner absolute inset-0 size-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 top-[45%] z-10 flex items-center justify-center bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-4 md:top-auto md:min-h-[28%] md:py-5">
                        <span className="type-h3 text-center text-sand-cream drop-shadow-sm">{w.label}</span>
                      </div>
                    </div>
                  ) : (
                    <Placeholder label={w.label} ratio={idx === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} />
                  )}
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
            <h2 className="type-h2 mt-3">Explore Sri Lanka Your Way</h2>
            <p className="type-body mt-4 max-w-md text-sand-cream/95">
              Explore 25 handpicked destinations across six beautiful regions of Sri Lanka, each brought to life with stunning photography and authentic stories. Choose what inspires you—beaches, mountains, wildlife, culture, spirituality, or adventure—and watch your perfect Sri Lankan journey come to life on the map.
            </p>
            <Link to="/explore" className="btn-gold mt-7">
              Explore the Map
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <IslandMap />
          </Reveal>
        </div>
      </section>


      {/* READY-MADE TRIPS */}
      <section className="py-16 md:py-24">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">Our Exclusive Tour Concepts</h2>
            <p className="type-body mt-3 max-w-lg text-muted-foreground">
              Explore Sri Lanka through 10 unique journeys—Spiritual, Cultural &amp; Heritage, Sports, Women’s Friendship, Romantic, Fun &amp; Leisure, Nature Trails, Business, MICE, and Happy Retirement—designed for meaningful, memorable experiences.
            </p>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {COLLECTIONS.map((c, idx) => (
              <Reveal key={c.slug} delay={(idx % 4) * 90} className="w-[76vw] shrink-0 snap-start sm:w-[46vw] md:w-auto">
                <article className="card-surface hover-lift flex h-full flex-col">
                  {conceptImage(c.slug) ? (
                    <div className="photo-zoom relative isolate aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={conceptImage(c.slug)}
                        alt={`${c.name} tour concept in Sri Lanka`}
                        loading="lazy"
                        className="photo-inner absolute inset-0 size-full object-cover"
                      />
                    </div>
                  ) : (
                    <Placeholder label={`${c.name} Tour Concept`} />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="type-h3">{c.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.line}</p>
                    <Link to="/concepts/$slug" params={{ slug: c.slug }} className="btn-outline mt-5 text-ocean-teal">
                      More info
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
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Guest Experiences
            </span>
            <h2 className="type-h2 mt-1">What Our Travellers Say</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 100}>
                <figure className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-spice-gold">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="size-4 fill-spice-gold" />
                        ))}
                      </div>
                      <Quote className="size-6 text-ocean-teal/20" />
                    </div>
                    <blockquote className="type-body mt-5 text-ink leading-relaxed">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={`${t.name} from ${t.from}`}
                      className="size-12 rounded-full object-cover border-2 border-spice-gold/40 shadow-xs shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <figcaption className="text-sm font-bold text-ink">{t.name}</figcaption>
                      <span className="text-2xs text-muted-foreground block font-medium">
                        {t.from} • <span className="text-ocean-teal">{t.tour}</span>
                      </span>
                    </div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CONTACT & DIRECT EMAIL CHANNELS */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
                <Sparkles className="size-3.5" />
                Get in Touch With a Travel Guru
              </div>
              <h2 className="type-h2 mt-4 text-sand-cream">
                Ready to Plan Your Sri Lankan Journey?
              </h2>
              <p className="type-body mt-4 max-w-xl text-sand-cream/90 leading-relaxed">
                Whether you need a custom pilgrimage trail, an exciting cricket tour, a luxury beach escape, or B2B agent tariffs, our travel specialists are ready to assist you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/journey" className="btn-gold !px-7 !py-3 font-semibold shadow-sm">
                  Start My Journey <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !border-sand-cream/40 !px-7 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15 flex items-center gap-2"
                >
                  <MessageCircle className="size-4 text-tea-green" /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-sand-cream/20 bg-sand-cream/10 p-6 md:p-8 backdrop-blur-xs space-y-5">
                <h3 className="type-h3 text-sand-cream">Direct Email &amp; Contact Desks</h3>

                <div className="space-y-4 text-sm">
                  <a
                    href={`mailto:${BRAND.marketingEmail}`}
                    className="flex items-start gap-3 rounded-2xl bg-sand-cream/10 p-4 border border-sand-cream/15 hover:border-spice-gold transition-all"
                  >
                    <Mail className="size-5 text-spice-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xs font-bold uppercase tracking-wider text-sand-cream/70 block">
                        Marketing &amp; General Inquiries
                      </span>
                      <span className="font-semibold text-sand-cream text-base">{BRAND.marketingEmail}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND.operationEmail}`}
                    className="flex items-start gap-3 rounded-2xl bg-sand-cream/10 p-4 border border-sand-cream/15 hover:border-spice-gold transition-all"
                  >
                    <Mail className="size-5 text-spice-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xs font-bold uppercase tracking-wider text-sand-cream/70 block">
                        Operations &amp; Travel Logistics
                      </span>
                      <span className="font-semibold text-sand-cream text-base">{BRAND.operationEmail}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 pt-2 text-xs text-sand-cream/80 font-medium">
                    <Phone className="size-4 text-spice-gold" />
                    <span>Hotline / WhatsApp: <strong>{BRAND.phone}</strong> ({BRAND.phoneIntl})</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
