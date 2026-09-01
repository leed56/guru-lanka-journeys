import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  Building,
  Building2,
  CheckCircle2,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Home,
  Hotel,
  Landmark,
  Layers,
  Lightbulb,
  Plane,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wrench,
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
          "Strategic Partnerships & AMCI Global Ventures Group | AM Travel's Guru Lanka",
      },
      {
        name: "description",
        content:
          "AMCI Global Ventures Group of Companies: Strategic Banking Partner HNB Bank, Sri Lankan Airlines, corporate ventures, and global business platform hub. Partner with us.",
      },
      {
        property: "og:title",
        content: "Strategic Partnerships & AMCI Global Ventures Group",
      },
      {
        property: "og:description",
        content:
          "Creating Opportunities • Empowering Communities • Driving Towards Smart Sri Lanka.",
      },
    ],
  }),
  component: ForPartnersPage,
});

const GROUP_COMPANIES = [
  {
    id: 1,
    name: "AMCI Global Ventures (Pvt) Ltd",
    tagline: "Corporate Headquarters",
    icon: Landmark,
    description:
      "Strategic investment, business development, project management, international partnerships, and corporate governance across group operations.",
    badge: "Parent Group",
  },
  {
    id: 2,
    name: "AM Travel's Guru Lanka (Pvt) Ltd",
    tagline: "Guide to Endless Happiness",
    icon: Compass,
    description:
      "Inbound tourism, pilgrimage tours, wellness retreats, cultural heritage, eco-tourism, corporate MICE travel, and customized holiday experiences across Sri Lanka.",
    badge: "Signature Tourism Brand",
  },
  {
    id: 3,
    name: "AM Travel's Guru India (Pvt) Ltd",
    tagline: "International Tourism Bridge",
    icon: Globe2,
    description:
      "Developing international travel partnerships between India and Sri Lanka while promoting spiritual pilgrimages, cultural exchanges, and corporate business travel.",
    badge: "India Operations",
  },
  {
    id: 4,
    name: "AM Concept Innovations (Pvt) Ltd",
    tagline: "Innovation & Consultancy",
    icon: Lightbulb,
    description:
      "Business consultancy, innovative project development, marketing strategies, product development, branding, and entrepreneurship incubation solutions.",
    badge: "Consultancy & Tech",
  },
  {
    id: 5,
    name: "AM Concept Homes (Pvt) Ltd",
    tagline: "Smart Living Solutions",
    icon: Home,
    description:
      "Residential housing solutions, eco-friendly developments, smart home concepts, and modern lifestyle communities designed for sustainable living.",
    badge: "Property Development",
  },
  {
    id: 6,
    name: "AMCI Design and Fabrications",
    tagline: "Engineering & Architecture",
    icon: Wrench,
    description:
      "Architectural design, interior solutions, steel fabrication, construction support, engineering, and custom-built commercial and tourism projects.",
    badge: "Engineering & Build",
  },
  {
    id: 7,
    name: "Ambience Park Residences (Pvt) Ltd",
    tagline: "Premium Mixed Developments",
    icon: Building,
    description:
      "Premium residential and mixed-development projects designed with modern aesthetics, comfort, sustainability, and green living concepts.",
    badge: "Real Estate",
  },
  {
    id: 8,
    name: "AM Smart Travels Cabs (Pvt) Ltd",
    tagline: "Tuk Tuk Family Guru",
    icon: Truck,
    description:
      "A technology-enabled community transport network dedicated to improving the livelihoods of three-wheeler operators while delivering safe, reliable, and customer-friendly mobility.",
    badge: "Community Mobility",
  },
];

const STRATEGIC_COLLABORATIONS = [
  {
    category: "Strategic Banking Partner",
    name: "Hatton National Bank PLC (HNB)",
    location: "Sri Lanka",
    icon: Banknote,
    description:
      "Our trusted banking partner supporting our financial operations, sound corporate governance, international transactions, and long-term business growth.",
    quote: "Together, building trust, empowering businesses, and creating sustainable value for our communities.",
    highlight: true,
  },
  {
    category: "Airline Partner",
    name: "Sri Lankan Airlines",
    location: "National Carrier",
    icon: Plane,
    description:
      "Supporting international travel connectivity between Sri Lanka and global destinations while enhancing our tourism and pilgrimage travel networks.",
    highlight: false,
  },
  {
    category: "Travel Agency Partner",
    name: "Servin Journey Go",
    location: "Travel Industry",
    icon: Globe2,
    description:
      "A valued travel industry partner collaborating to provide professional travel planning, destination management, and exceptional customer experiences.",
    highlight: false,
  },
  {
    category: "Hotel & Resort Partner",
    name: "Rainbow 7 Hotel",
    location: "Negombo, Sri Lanka",
    icon: Hotel,
    description:
      "Providing quality hospitality services, comfortable accommodation, and warm Sri Lankan hospitality for our valued guests and pilgrims.",
    highlight: false,
  },
  {
    category: "Temple & Religious Partner",
    name: "Skanda Kumara Temple",
    location: "Kataragama, Sri Lanka",
    icon: Landmark,
    description:
      "A respected spiritual partner supporting religious, cultural, and pilgrimage tourism while preserving Sri Lanka's sacred traditions and heritage.",
    highlight: false,
  },
];

const GOV_AUTHORITIES = [
  "Ministry of Buddhasasana, Religious and Cultural Affairs",
  "Ministry responsible for Hindu Religious and Cultural Affairs",
  "Sri Lanka Tourism Promotion Bureau (SLTPB)",
  "Sri Lanka Tourism Development Authority (SLTDA)",
];

const BUSINESS_SECTORS = [
  "Tourism & Hospitality",
  "Spiritual & Religious Tourism",
  "Transportation & Mobility",
  "Property Development",
  "Construction & Fabrication",
  "Business Consultancy",
  "International Trade",
  "Marketing & Branding",
  "Community Development",
  "Investment Facilitation",
];

const PARTNER_TYPES = [
  "Hotel / Resort / Villa",
  "Travel Agency / Tour Operator",
  "Airline / Transport Fleet",
  "Investor / Financial Institution",
  "Corporate Client (MICE / B2B)",
  "Government / Cultural Authority",
  "Community Organization",
  "Other Service Provider",
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
              AMCI Global Ventures (Pvt) Ltd • Group of Companies
            </div>

            <h1 className="type-h1 mt-4 text-sand-cream">
              Strategic Partnerships &amp; Collaborations
            </h1>

            <p className="mt-3 text-sm md:text-base font-semibold uppercase tracking-widest text-spice-gold">
              Creating Opportunities • Empowering Communities • Connecting the World
            </p>

            <p className="type-body mt-4 max-w-2xl text-sand-cream/90 text-base md:text-lg leading-relaxed">
              Driving Towards <strong>"SMART SRI LANKA"</strong>. AMCI Global Ventures is a diversified business group established with the vision of creating innovative business solutions, developing sustainable communities, and building strong international partnerships.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#partner-form" className="btn-gold !px-6 !py-3 font-semibold shadow-sm">
                Become a Partner <ArrowRight className="size-4" />
              </a>
              <a
                href="#group-ecosystem"
                className="btn-outline !border-sand-cream/40 !px-6 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15"
              >
                Explore Group Companies
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic Banking Partner Feature */}
      <section className="section-x -mt-8 md:-mt-12 relative z-10">
        <Reveal>
          <div className="rounded-3xl border-2 border-spice-gold/60 bg-card p-6 md:p-10 shadow-xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-ocean-teal/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                  <Banknote className="size-4" /> Strategic Banking Partner
                </div>
                <h2 className="type-h2 mt-3 text-ink">
                  Hatton National Bank PLC (HNB) – Sri Lanka
                </h2>
                <p className="type-body mt-3 text-ink-soft leading-relaxed">
                  We are pleased to maintain a strong banking relationship with <strong>Hatton National Bank PLC (HNB)</strong>, one of Sri Lanka’s most respected, stable, and trusted premier financial institutions.
                </p>
                <p className="type-body mt-2 text-ink-soft leading-relaxed">
                  As our valued banking partner, HNB supports our commitment to financial integrity, sound corporate governance, secure international transactions, and sustainable business growth as we expand our operations locally and internationally.
                </p>
                <div className="mt-5 rounded-2xl bg-sand-cream/70 border border-spice-gold/30 p-4">
                  <p className="font-display italic text-sm md:text-base text-ink font-medium">
                    "Together, building trust, empowering businesses, and creating sustainable value for our communities."
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-sand-cream/40 p-6 text-center space-y-4">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-ocean-teal text-sand-cream shadow-md">
                  <Landmark className="size-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">Hatton National Bank PLC</h3>
                <p className="text-xs text-muted-foreground">
                  Official Corporate &amp; International Banking Partner of AMCI Global Ventures Group
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-center gap-2 text-xs font-semibold text-ocean-teal">
                  <ShieldCheck className="size-4" /> Trusted Financial Governance
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AMCI Group of Companies Ecosystem */}
      <section id="group-ecosystem" className="section-x py-16 md:py-24 border-b border-border/70">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Corporate Portfolio
            </span>
            <h2 className="type-h2 mt-2 text-ink">Our Group of Companies</h2>
            <p className="type-body mt-3 text-muted-foreground">
              A synergistic ecosystem spanning tourism, international trade, property development, smart mobility, architectural design, and business consultancy.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUP_COMPANIES.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <Reveal key={comp.id} delay={(idx % 4) * 70}>
                <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-spice-gold/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-ocean-teal/10 text-ocean-teal">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-sand-cream px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-muted-foreground">
                        {comp.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold leading-snug text-ink">
                      {comp.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-tea-green">{comp.tagline}</p>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 text-2xs font-bold text-ocean-teal">
                    AMCI Global Ventures Group
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* AMCI Global Business Platform Hub & Sectors */}
      <section className="bg-sand-cream/50 py-16 md:py-24 border-b border-border/70">
        <div className="section-x">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                B2B Networking Platform
              </span>
              <h2 className="type-h2 mt-2 text-ink">
                AMCI Global Business Platform Hub
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-spice-gold">
                Connecting Business Partners Worldwide
              </p>
              <p className="type-body mt-4 text-ink-soft leading-relaxed">
                A strategic business networking platform connecting foreign investors, entrepreneurs, SMEs, manufacturers, exporters, importers, travel operators, financial institutions, and international business communities with opportunities in Sri Lanka.
              </p>

              <div className="mt-6 rounded-2xl bg-card border border-border/80 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Community &amp; Mobility Initiatives:
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-2 text-xs font-medium text-ink">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> Community empowerment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> Driver education &amp; welfare
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> Financial inclusion programs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> Smart mobility (Tuk Tuk Family Guru)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> Tourism transport integration
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-ocean-teal" /> University talent bridge
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-sm">
                <h3 className="type-h3 text-ink">Our Key Business Sectors</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Active sectors across AMCI Global Ventures Group
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {BUSINESS_SECTORS.map((sec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl bg-sand-cream/60 p-3 text-xs font-semibold text-ink"
                    >
                      <span className="size-1.5 rounded-full bg-ocean-teal shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic Partners & Institutional Collaborations */}
      <section className="section-x py-16 md:py-24 border-b border-border/70">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Trusted Network
            </span>
            <h2 className="type-h2 mt-2 text-ink">Strategic Partners &amp; Collaborations</h2>
            <p className="type-body mt-3 text-muted-foreground">
              We collaborate with leading institutions that share our vision of delivering excellence, promoting sustainable tourism, and empowering local communities.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STRATEGIC_COLLABORATIONS.map((collab, idx) => {
            const Icon = collab.icon;
            return (
              <Reveal key={idx} delay={(idx % 3) * 80}>
                <div
                  className={`card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border p-6 shadow-sm ${
                    collab.highlight
                      ? "border-spice-gold bg-card ring-1 ring-spice-gold/20"
                      : "border-border/80 bg-card"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-ocean-teal/10 text-ocean-teal">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-sand-cream px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-ocean-teal">
                        {collab.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-ink">{collab.name}</h3>
                    <p className="text-xs font-semibold text-muted-foreground">{collab.location}</p>
                    <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                      {collab.description}
                    </p>
                  </div>

                  {collab.quote ? (
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <p className="text-2xs italic text-ocean-teal font-medium">
                        {collab.quote}
                      </p>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}

          {/* Government & Tourism Authorities Box */}
          <Reveal delay={240}>
            <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-sand-cream/70 p-6 shadow-sm">
              <div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-ocean-teal text-sand-cream">
                  <Landmark className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">Government &amp; Tourism Authorities</h3>
                <p className="text-xs font-semibold text-muted-foreground">Institutions in Collaboration</p>

                <ul className="mt-3 space-y-2">
                  {GOV_AUTHORITIES.map((auth, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs font-medium text-ink">
                      <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-ocean-teal" />
                      <span>{auth}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 text-2xs font-bold text-ocean-teal">
                Sustainable Growth &amp; Cultural Harmony
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner Onboarding / Expression of Interest Form */}
      <section id="partner-form" className="section-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              Join Our Network
            </span>
            <h2 className="type-h2 mt-2 text-ink">Partner With AMCI Group</h2>
            <p className="type-body mt-3 text-muted-foreground">
              We welcome hotels, vehicle fleets, tour guides, travel agents, corporate entities, and investors to join our growing global ecosystem.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-sand-cream/50 p-4 border border-border/60">
                <ShieldCheck className="size-5 text-ocean-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink">Transparent Corporate Partnership</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Backed by sound corporate governance, ethical business practices, and prompt settlement terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-sand-cream/50 p-4 border border-border/60">
                <Globe2 className="size-5 text-ocean-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink">Global Reach &amp; High-Value Flow</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Connecting your property or service with travelers, pilgrim circuits, cricket tours, and corporate groups worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-sand-cream/50 p-4 border border-border/60">
                <Handshake className="size-5 text-ocean-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink">Bespoke Strategic Alliances</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Joint marketing, co-branded itineraries, and long-term ecosystem development.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-md">
              <h3 className="type-h3 text-ink mb-2">Submit Partnership Expression</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Tell us about your organization or service. Our corporate development team will reach out within one business day.
              </p>

              <EnquiryForm
                cta="Submit Partnership Request"
                confirmation="Thank you. Our corporate partnerships team will contact you shortly."
                fields={[
                  { name: "company", label: "Company / Organization Name", required: true },
                  {
                    name: "type",
                    label: "Partnership Category",
                    type: "select",
                    options: PARTNER_TYPES,
                    required: true,
                  },
                  { name: "contactPerson", label: "Contact Person & Designation", required: true },
                  { name: "email", label: "Official Email", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "location", label: "City / Country", required: true },
                  {
                    name: "proposal",
                    label: "Brief Description / Collaboration Proposal",
                    type: "textarea",
                    required: true,
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StickyContactBar tag="Strategic Partnership" />
    </div>
  );
}
