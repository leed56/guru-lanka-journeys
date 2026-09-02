import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  Car,
  CheckCircle2,
  Compass,
  Handshake,
  HeartHandshake,
  Hotel,
  Palmtree,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Truck,
  Users,
  Utensils,
} from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/for-partners")({
  head: () => ({
    meta: [
      {
        title:
          "For Partners & Suppliers — Join Our Travel Network | AM Travel's Guru Lanka",
      },
      {
        name: "description",
        content:
          "We invite hotels, luxury villas, vehicle fleets, tour drivers, guides, restaurants, safari operators, and wellness centres to partner with AM Travel's Guru Lanka.",
      },
      {
        property: "og:title",
        content: "For Partners & Suppliers — Join Our Travel Network",
      },
      {
        property: "og:description",
        content:
          "We welcome all vehicle fleets, hotels (budget up to 5-star), tour guides, and industry specialists to join us and grow together.",
      },
    ],
  }),
  component: ForPartnersPage,
});

const TYPES = [
  "Hotel",
  "Villa / Boutique Stay",
  "Vehicle Fleet Owner",
  "Tour Driver / Chauffeur",
  "Tourist Guide / Naturalist",
  "Restaurant / Food Service",
  "Safari Operator",
  "Wellness / Ayurvedic Centre",
  "Water Sports / Activity Provider",
  "Other Service Provider",
];

const PARTNER_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Prompt & Guaranteed Settlements",
    desc: "Backed by robust corporate governance and our strategic banking partner Hatton National Bank PLC (HNB), ensuring transparent contracts and on-time payments.",
  },
  {
    icon: Users,
    title: "Consistent Year-Round Guests",
    desc: "Connect your fleet, hotel, or guide service with high-value inbound travellers across our 10 Tour Concepts (Spiritual, Cultural, Cricket, Romantic, MICE, etc.).",
  },
  {
    icon: Handshake,
    title: "Long-Term Win-Win Growth",
    desc: "We treat our drivers, hoteliers, and guides as true family and long-term partners, helping elevate quality standards and livelihoods across Sri Lanka.",
  },
  {
    icon: Star,
    title: "Direct Package Integration",
    desc: "Your verified vehicles, rooms, and experiences get embedded directly into ready-made itineraries and bespoke VIP bookings.",
  },
];

const CATEGORIES = [
  {
    icon: Hotel,
    title: "Hotels, Villas & Resorts",
    desc: "From budget-friendly guesthouses to luxury 5-star beachfront resorts and heritage hill-country villas.",
  },
  {
    icon: Car,
    title: "Vehicle Fleets & Drivers",
    desc: "Clean tourist cars, KDH vans, mini-coaches, luxury buses, and responsible chauffeur drivers with clean track records.",
  },
  {
    icon: Compass,
    title: "Tour Guides & Historians",
    desc: "Licensed national guides, multilingual translators, cultural/Ramayana historians, and nature trek leaders.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Culinary",
    desc: "Authentic village dining spots, certified halal kitchens, vegetarian eateries, and coastal seafood restaurants.",
  },
  {
    icon: Trees,
    title: "Safari & Nature Operators",
    desc: "Licensed 4x4 safari jeeps for Yala, Udawalawe, Wilpattu, Minneriya, whale-watching boats, and adventure camps.",
  },
  {
    icon: Palmtree,
    title: "Wellness & Ayurvedic Spas",
    desc: "Authentic Ayurvedic doctors, herbal treatment centres, yoga retreats, and meditation ashrams.",
  },
];

function ForPartnersPage() {
  return (
    <div className="pb-28 md:pb-0">
      {/* Hero Header */}
      <section className="bg-tea-green py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
              <Sparkles className="size-3.5" />
              Join Our Travel Network
            </div>

            <h1 className="type-h1 mt-4 text-sand-cream">
              We invite our reliable service providers to join us and grow together
            </h1>

            <p className="type-body mt-4 max-w-2xl text-sand-cream/90 text-base md:text-lg leading-relaxed">
              We welcome all vehicle fleets, hotels, and (budget up to 5 star hotels) tour guides, drivers, safari operators, and specialists in the industry across Sri Lanka.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#register-form" className="btn-gold !px-6 !py-3 font-semibold shadow-sm">
                Register Your Listing <ArrowRight className="size-4" />
              </a>
              <Link
                to="/about"
                className="btn-outline !border-sand-cream/40 !px-6 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15"
              >
                Learn About Our Company
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-x py-16 md:py-24 border-b border-border/70">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Partnership Value
            </span>
            <h2 className="type-h2 mt-2 text-ink">Why Partner With AM Travel's Guru</h2>
            <p className="type-body mt-3 text-muted-foreground">
              We are building a transparent, dependable ecosystem that values every partner on the ground.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Reveal key={idx} delay={(idx % 4) * 70}>
                <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-spice-gold/60">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-ocean-teal/10 text-ocean-teal">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-ink leading-snug">{b.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-sand-cream/50 py-16 md:py-24 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                Who We Are Looking For
              </span>
              <h2 className="type-h2 mt-2 text-ink">Service Providers We Welcome</h2>
              <p className="type-body mt-3 text-muted-foreground">
                Whether you own a single luxury van, manage a boutique villa, or guide pilgrims across sacred trails — we want to collaborate with you.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Reveal key={idx} delay={(idx % 3) * 70}>
                  <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm h-full flex flex-col justify-between">
                    <div>
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-spice-gold/20 text-ink">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-ink">{cat.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listing Form */}
      <section id="register-form" className="section-x py-14 md:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Supplier Registration
            </span>
            <h2 className="type-h2 mt-1">Tell us about your business</h2>
            <p className="type-body mt-2 text-sm text-muted-foreground">
              Fill in the form below and our contracting team will contact you to establish partnerships and rates.
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-md">
            <EnquiryForm
              cta="Submit listing"
              confirmation="Thanks, our partnership team will reach out to you shortly."
              fields={[
                { name: "business", label: "Business / Property / Fleet Name", required: true },
                { name: "type", label: "Business Type", type: "select", options: TYPES, required: true },
                { name: "location", label: "Location / Base City", required: true },
                { name: "contact", label: "Contact Person & Designation", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone / WhatsApp Number", type: "tel", required: true },
                { name: "description", label: "Description of Vehicles / Rooms / Services Offered", type: "textarea", required: true },
              ]}
            />
          </div>
        </Reveal>
      </section>

      <StickyContactBar tag="Partner Network" />
    </div>
  );
}
