import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Hotel,
  Landmark,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";

export const Route = createFileRoute("/for-partners")({
  head: () => ({
    meta: [
      {
        title:
          "Partner With Us — Suppliers & B2B Travel Network | AM Travel's Guru Lanka",
      },
      {
        name: "description",
        content:
          "We invite reliable hotels, villas, vehicle fleets, tour guides, and travel specialists to join our global network and grow together with AM Travel's Guru Lanka.",
      },
      {
        property: "og:title",
        content: "Partner With Us — Suppliers & B2B Travel Network",
      },
      {
        property: "og:description",
        content:
          "Join our growing hospitality and travel partner network across Sri Lanka.",
      },
    ],
  }),
  component: ForPartnersPage,
});

const PARTNER_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Financial Integrity & Prompt Settlements",
    desc: "Backed by Hatton National Bank PLC (HNB) and robust corporate governance, ensuring transparent contracts and reliable, prompt settlement terms.",
  },
  {
    icon: Globe2,
    title: "Consistent Year-Round Passenger Flow",
    desc: "Access diverse inbound passenger segments across all 10 concepts — spiritual pilgrims, cricket teams, honeymoons, corporate MICE, and long-stay retirees.",
  },
  {
    icon: Handshake,
    title: "Bespoke Strategic Alliances",
    desc: "Joint promotional campaigns, co-branded itineraries, exclusive seasonal allocations, and long-term ecosystem collaborations.",
  },
  {
    icon: TrendingUp,
    title: "Global Distribution & Marketing",
    desc: "Your property or travel service promoted across international travel trade networks, B2B fairs, Indian liaison desks, and digital channels.",
  },
];

const SUPPLIER_CATEGORIES = [
  {
    icon: Hotel,
    title: "Hotels, Resorts & Luxury Villas",
    desc: "Boutique stays, heritage bungalows, 3 to 5-star hotels, and eco-lodges across all regions of Sri Lanka.",
  },
  {
    icon: Truck,
    title: "Vehicle Fleets & Chauffeur Guides",
    desc: "Luxury coaches, private tourist vans, premium sedans, and licensed English/multilingual tour chauffeurs.",
  },
  {
    icon: Compass,
    title: "Specialist Guides & Naturalists",
    desc: "Licensed national tour guides, Ramayana lore historians, birdwatching naturalists, and trekking leaders.",
  },
  {
    icon: Building2,
    title: "Corporate & MICE Service Providers",
    desc: "Convention venues, AV production teams, event managers, gala banquet providers, and team-building facilitators.",
  },
];

const PARTNER_TYPES = [
  "Hotel / Resort / Villa",
  "Transport Fleet / Chauffeur Service",
  "Tour Guide / Specialist Naturalist",
  "Travel Agency / Inbound Partner",
  "Restaurant / Culinary Experience",
  "Activity / Adventure / Water Sports Provider",
  "Corporate / MICE Vendor",
  "Investor / Other Service Provider",
];

function ForPartnersPage() {
  return (
    <div className="pb-28 md:pb-0">
      {/* Hero Header */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
              <Sparkles className="size-3.5" />
              B2B Partner &amp; Supplier Network
            </div>

            <h1 className="type-h1 mt-4 text-sand-cream">
              Partner With AM Travel's Guru Lanka
            </h1>

            <p className="type-body mt-4 max-w-2xl text-sand-cream/90 text-base md:text-lg leading-relaxed">
              We warmly invite reliable hotels, villas, vehicle fleet operators, tour guides, and activity specialists across Sri Lanka and internationally to join our trusted travel network and grow together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#partner-form" className="btn-gold !px-6 !py-3 font-semibold shadow-sm">
                Register Your Service <ArrowRight className="size-4" />
              </a>
              <Link
                to="/about"
                className="btn-outline !border-sand-cream/40 !px-6 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15"
              >
                View Corporate Profile &amp; AMCI Group
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-x py-16 md:py-24 border-b border-border/70">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Why Collaborate With Us
            </span>
            <h2 className="type-h2 mt-2 text-ink">The Value of Our Partnership</h2>
            <p className="type-body mt-3 text-muted-foreground">
              We operate as a forward-thinking destination management company backed by AMCI Global Ventures Group and Hatton National Bank PLC (HNB).
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Reveal key={idx} delay={(idx % 4) * 70}>
                <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-spice-gold/60 hover:shadow-md">
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

      {/* Supplier Categories We Work With */}
      <section className="bg-sand-cream/50 py-16 md:py-24 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                Ecosystem Categories
              </span>
              <h2 className="type-h2 mt-2 text-ink">Service Providers We Welcome</h2>
              <p className="type-body mt-3 text-muted-foreground">
                Whether you operate a boutique villa in Galle, an adventure camp in Kitulgala, or a coach fleet in Colombo, there is a place for you in our 10 tour concepts.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPLIER_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Reveal key={idx} delay={(idx % 4) * 80}>
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

      {/* Partner Registration Form */}
      <section id="partner-form" className="section-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Join Our Network
            </span>
            <h2 className="type-h2 mt-2 text-ink">Register Your Business</h2>
            <p className="type-body mt-3 text-muted-foreground">
              Submit your property or service details below. Our contracting and vendor relations team will review your submission and contact you to establish contract rates.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-sand-cream/50 p-4 border border-border/60">
                <CheckCircle2 className="size-5 text-ocean-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink">Verified Partnership Process</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Fast-track quality review, site inspection coordination, and formal vendor agreement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-sand-cream/50 p-4 border border-border/60">
                <CheckCircle2 className="size-5 text-ocean-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink">Integrated Itinerary Placement</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Your services directly embedded into ready-made and tailor-made packages for international travellers.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-md">
              <h3 className="type-h3 text-ink mb-2">Supplier Registration Form</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Fill in the details of your business to get listed with AM Travel's Guru Lanka.
              </p>

              <EnquiryForm
                cta="Submit Supplier Registration"
                confirmation="Thank you. Our partnership team will review your details and reach out."
                fields={[
                  { name: "business", label: "Business / Property Name", required: true },
                  {
                    name: "type",
                    label: "Business Category",
                    type: "select",
                    options: PARTNER_TYPES,
                    required: true,
                  },
                  { name: "contactPerson", label: "Contact Person & Designation", required: true },
                  { name: "email", label: "Official Email Address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp Number", type: "tel", required: true },
                  { name: "location", label: "Location / City", required: true },
                  {
                    name: "description",
                    label: "Brief Description of Facilities / Services Offered",
                    type: "textarea",
                    required: true,
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StickyContactBar tag="Partner Network" />
    </div>
  );
}
