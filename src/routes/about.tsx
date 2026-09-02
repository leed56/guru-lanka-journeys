import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  Building,
  Building2,
  CheckCircle2,
  Compass,
  Facebook,
  Globe2,
  Handshake,
  HeartHandshake,
  Home,
  Hotel,
  Landmark,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { BRAND, COLLECTIONS } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Us & Corporate Profile — AM Travel's Guru Lanka | AMCI Global Ventures Group",
      },
      {
        name: "description",
        content:
          "Learn about AM Travel's Guru Lanka and AMCI Global Ventures Group: Board of Directors (A.M. Anura Mahendra, H.M. Keerthi Kumara, U. Anil Kumar), Corporate Profile, Group of Companies, Strategic Banking Partner HNB Bank, India Helpdesk, and Team.",
      },
      {
        property: "og:title",
        content: "About Us & Corporate Profile — AM Travel's Guru Lanka",
      },
      {
        property: "og:description",
        content:
          "Creating Opportunities • Empowering Communities • Driving Towards Smart Sri Lanka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const DIRECTORS = [
  {
    name: "A.M. Anura Mahendra",
    role: "Founder Chairman & Managing Director",
    isLeader: true,
    bio: "A visionary entrepreneur and pioneer in experiential Sri Lankan tourism. With decades of business leadership, strategic vision, and deep passion for the island's spiritual, cultural, and natural heritage, Mr. Anura Mahendra founded AM Travel's Guru Lanka and AMCI Global Ventures Group to introduce a smarter, more meaningful, and uniquely authentic travel ecosystem.",
    responsibilities: [
      "Strategic Vision & Global Brand Leadership",
      "Pioneering 10 Signature Tourism Concepts",
      "International Tourism Partnerships & Group Strategy",
    ],
  },
  {
    name: "H.M. Keerthi Kumara",
    role: "Director – Operations",
    isLeader: false,
    bio: "Driving the operational backbone of AM Travel's Guru Lanka. Mr. Keerthi Kumara oversees on-ground logistics, premium vehicle fleet management, licensed chauffeur-guide networks, partner hotel quality control, and seamless execution across all travel trails.",
    responsibilities: [
      "Island-Wide Tour Operations & Fleet Logistics",
      "Chauffeur-Guide Standards & Guest Safety Protocols",
      "Hospitality & Hotel Quality Assurance",
    ],
  },
  {
    name: "U. Anil Kumar",
    role: "Director – Finance",
    isLeader: false,
    bio: "Stewarding financial governance, corporate planning, and fiscal integrity. Mr. Anil Kumar ensures competitive pricing structures, secure international transaction channels, corporate transparency, and sustainable commercial partnerships.",
    responsibilities: [
      "Corporate Financial Planning & Governance",
      "Commercial Pricing & Partner Contracts",
      "Fiscal Compliance & Investment Management",
    ],
  },
];

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

const CORE_VALUES = [
  { title: "Integrity", desc: "Honesty, accountability, and transparent business ethics in every relationship." },
  { title: "Innovation", desc: "Developing forward-thinking concepts and smart solutions for tourism and business." },
  { title: "Professionalism", desc: "Delivering excellence, reliability, and precision from first inquiry to conclusion." },
  { title: "Customer Excellence", desc: "Uncompromising focus on customer delight, warmth, and memorable experiences." },
  { title: "Sustainability", desc: "Promoting green practices, heritage preservation, and responsible tourism." },
  { title: "Partnership", desc: "Building long-term, mutually rewarding alliances with global collaborators." },
  { title: "Community Empowerment", desc: "Creating local employment, driver welfare, and grassroots prosperity." },
];

const STRATEGIC_COLLABORATIONS = [
  {
    category: "Strategic Banking Partner",
    name: "Hatton National Bank PLC (HNB)",
    location: "Sri Lanka",
    icon: Banknote,
    description:
      "Our trusted banking partner supporting financial integrity, corporate governance, secure transactions, and sustainable business growth.",
    quote: "Together, building trust, empowering businesses, and creating sustainable value for our communities.",
    highlight: true,
  },
  {
    category: "Airline Partner",
    name: "Sri Lankan Airlines",
    location: "National Carrier",
    icon: Plane,
    description:
      "Supporting international connectivity between Sri Lanka and global destinations while enhancing pilgrimage and leisure travel.",
    highlight: false,
  },
  {
    category: "Travel Agency Partner",
    name: "Servin Journey Go",
    location: "Travel Industry",
    icon: Globe2,
    description:
      "Collaborating to provide professional travel planning, destination management, and exceptional customer experiences.",
    highlight: false,
  },
  {
    category: "Hotel & Resort Partner",
    name: "Rainbow 7 Hotel",
    location: "Negombo, Sri Lanka",
    icon: Hotel,
    description:
      "Providing quality hospitality services, comfortable accommodation, and warm Sri Lankan hospitality for guests and pilgrims.",
    highlight: false,
  },
  {
    category: "Temple & Religious Partner",
    name: "Skanda Kumara Temple",
    location: "Kataragama, Sri Lanka",
    icon: Landmark,
    description:
      "Supporting religious, cultural, and pilgrimage tourism while preserving Sri Lanka's sacred traditions and heritage.",
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

const CONCEPT_TEAM_EXPERTISE = [
  { id: 1, name: "Spiritual Tourism", focus: "Sacred Buddhist & Tamil Kovil pilgrimage specialists" },
  { id: 2, name: "Cultural & Heritage", focus: "Ramayana lore historians & UNESCO monument guides" },
  { id: 3, name: "Sports Tourism", focus: "Cricket fixtures coordinators & ground logistics managers" },
  { id: 4, name: "Romantic Tourism", focus: "Honeymoon concierge & private celebration planners" },
  { id: 5, name: "Women's Friendship", focus: "Female tour directors & safe community hosts" },
  { id: 6, name: "Fun & Leisure", focus: "Water sports, coastal guides & entertainment managers" },
  { id: 7, name: "Nature Trails", focus: "Licensed naturalists, trek leaders & wildlife experts" },
  { id: 8, name: "Pathway to Business", focus: "Corporate incorporation consultants & B2B liaisons" },
  { id: 9, name: "MICE Tourism", focus: "Convention managers & executive gala event organizers" },
  { id: 10, name: "Happy Retirement", focus: "Ayurvedic wellness advisors & long-stay companion staff" },
];

function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-cream/25 bg-sand-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spice-gold">
              <Sparkles className="size-3.5" />
              AM Travel's Guru Lanka • Corporate Profile &amp; About Us
            </div>
            <h1 className="type-h1 mt-4 text-sand-cream">{BRAND.positioning}</h1>
            <p className="type-body mt-4 max-w-2xl opacity-90">{BRAND.brandLine}</p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider opacity-85">
              <span>• Founder Led</span>
              <span>• AMCI Group of Companies</span>
              <span>• HNB Banking Partner</span>
              <span>• Dedicated India Helpdesk</span>
              <span>• 10 Tour Concepts</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <section className="sticky top-[73px] z-30 border-b border-border/80 bg-background/95 backdrop-blur py-3 shadow-2xs">
        <div className="section-x flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold text-ink">
          <a href="#what-is-guru" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            1. What is AM Travel's Guru
          </a>
          <a href="#board-of-directors" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            2. Board of Directors
          </a>
          <a href="#corporate-profile" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            3. Corporate Profile (AMCI Group)
          </a>
          <a href="#group-companies" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            4. Group of Companies
          </a>
          <a href="#banking-partner" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            5. Strategic Partners (HNB)
          </a>
          <a href="#helpdesk-india" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            6. Helpdesk in India
          </a>
          <a href="#our-team" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            7. Our Team
          </a>
          <a href="#contact-details" className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1 hover:border-ocean-teal hover:text-ocean-teal transition-all">
            8. Contact Details
          </a>
        </div>
      </section>

      {/* 1) What is AM Travel's Guru */}
      <section id="what-is-guru" className="section-x py-14 md:py-20 border-b border-border/70">
        <Reveal className="max-w-4xl space-y-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              01 • Introduction
            </span>
            <h2 className="type-h2 mt-2 text-ink">What is AM Travel's Guru</h2>
            <div className="type-body mt-5 space-y-4 text-ink-soft">
              <p>
                <strong>AM TRAVEL’S GURU LANKA (PVT) LTD</strong> is the signature inbound tourism subsidiary of <strong>AMCI GLOBAL VENTURES (PVT) LTD Group of Companies</strong>, created with a clear purpose — to introduce a smarter, more meaningful, and uniquely Sri Lankan way of experiencing travel.
              </p>
              <p>
                Under the visionary corporate motto <em>"Creating Opportunities • Empowering Communities • Connecting the World"</em> and driving towards <strong>"SMART SRI LANKA"</strong>, we develop next-generation travel solutions that blend timeless traditions, sacred spirituality, cricket culture, pristine nature, and genuine warmth with innovative business models and trusted banking partnerships.
              </p>
              <p className="text-base font-semibold text-ocean-teal">
                Our vision is simple: to make every journey more than a trip — to make it a memorable experience.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/80 bg-sand-cream/40 p-6 md:p-8">
              <h3 className="type-h3 text-ink">Our Difference</h3>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                We believe that modern travellers are looking for more than sightseeing. They want experiences,
                connections, discovery, comfort, authenticity, and unforgettable memories.
              </p>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                That is why AM TRAVEL’S GURU LANKA is developing 10 unique tourism and business concepts, designed to
                create exciting opportunities for both our international travel partners and individual travellers.
              </p>
            </div>

            <div className="rounded-3xl border border-border/80 bg-sand-cream/40 p-6 md:p-8">
              <h3 className="type-h3 text-ink">Professional Service &amp; Hospitality</h3>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                We are building our operation around experienced tourism and service professionals who understand the
                importance of quality, reliability, and personal attention.
              </p>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                Our team is committed to providing a service-oriented travel experience, from the first enquiry to the
                final moment of the journey.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-spice-gold/40 bg-sand-cream/70 p-6 md:p-8">
            <h3 className="type-h3 text-ink">Our Promise</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-sm font-medium text-ink">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-ocean-teal" /> We don’t simply arrange journeys — we create experiences.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-ocean-teal" /> We connect people and communities.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-ocean-teal" /> We build lasting global partnerships.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-ocean-teal" /> We share Sri Lanka with the world.
              </li>
            </ul>
            <p className="font-display mt-6 text-xl text-ocean-teal">
              Discover Sri Lanka differently. Experience the Sri Lankan way.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 2) Board of Directors */}
      <section id="board-of-directors" className="bg-sand-cream/50 py-14 md:py-20 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              02 • Leadership &amp; Governance
            </span>
            <h2 className="type-h2 mt-2 text-ink">Board of Directors</h2>
            <p className="type-body mt-3 max-w-2xl text-muted-foreground">
              Guiding AM Travel's Guru Lanka and AMCI Global Ventures Group with visionary leadership, operational mastery, and sound corporate governance.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {DIRECTORS.map((dir, idx) => (
              <Reveal key={dir.name} delay={idx * 100}>
                <div
                  className={`rounded-3xl border p-6 transition-all shadow-sm md:p-8 ${
                    dir.isLeader
                      ? "border-spice-gold/60 bg-card ring-1 ring-spice-gold/20"
                      : "border-border/80 bg-card"
                  }`}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex size-7 items-center justify-center rounded-full bg-ocean-teal text-xs font-bold text-sand-cream">
                          {idx + 1}
                        </span>
                        <h3 className="type-h2 text-xl md:text-2xl text-ink">{dir.name}</h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                            dir.isLeader
                              ? "bg-spice-gold/20 text-ink"
                              : "bg-ocean-teal/10 text-ocean-teal"
                          }`}
                        >
                          {dir.role}
                        </span>
                      </div>

                      <p className="type-body text-ink-soft leading-relaxed">{dir.bio}</p>

                      <div className="pt-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Key Leadership Areas:
                        </span>
                        <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                          {dir.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs font-medium text-ink">
                              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ocean-teal" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Corporate Profile (AMCI Global Ventures Group) */}
      <section id="corporate-profile" className="section-x py-14 md:py-20 border-b border-border/70">
        <Reveal className="max-w-4xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              03 • Corporate Profile
            </span>
            <h2 className="type-h2 mt-2 text-ink">
              AMCI Global Ventures (Pvt) Ltd — Group of Companies
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-spice-gold">
              Creating Opportunities • Empowering Communities • Connecting the World
            </p>
            <p className="type-body mt-4 text-ink-soft leading-relaxed">
              <strong>AMCI GLOBAL VENTURES (PVT) LTD</strong> is a diversified Sri Lankan business group established with the vision of creating innovative business solutions, developing sustainable communities, and building strong international partnerships.
            </p>
            <p className="type-body mt-3 text-ink-soft leading-relaxed">
              Our mission is to connect people, businesses, investors, and communities through innovation, entrepreneurship, tourism, real estate, design, and value-added business services. We believe that business success should create opportunities for society while delivering lasting value to customers, partners, shareholders, and future generations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/80 bg-sand-cream/40 p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                <Sparkles className="size-4" /> Our Vision
              </div>
              <h3 className="type-h3 mt-2 text-ink">Asia's Most Trusted Ecosystem</h3>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                To become one of Asia's most trusted diversified business groups by creating innovative business ecosystems that inspire growth, prosperity, and happiness.
              </p>
            </div>

            <div className="rounded-3xl border border-border/80 bg-sand-cream/40 p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                <Compass className="size-4" /> Our Mission
              </div>
              <ul className="mt-3 space-y-2 text-xs font-medium text-ink-soft">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal shrink-0" /> Deliver innovative business solutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal shrink-0" /> Promote sustainable tourism &amp; cultural heritage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal shrink-0" /> Support entrepreneurship &amp; SME development</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal shrink-0" /> Build strategic international partnerships</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal shrink-0" /> Empower local communities through employment</li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="type-h3 text-ink">Our Core Values</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map((cv, idx) => (
                <div key={idx} className="rounded-2xl border border-border/70 bg-card p-4 shadow-2xs">
                  <span className="text-xs font-bold text-ocean-teal block">{cv.title}</span>
                  <p className="mt-1 text-2xs text-muted-foreground leading-relaxed">{cv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4) Group of Companies & AMCI Business Platform Hub */}
      <section id="group-companies" className="bg-sand-cream/50 py-14 md:py-20 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                04 • Group Portfolio
              </span>
              <h2 className="type-h2 mt-2 text-ink">Our Group of Companies</h2>
              <p className="type-body mt-3 text-muted-foreground">
                A synergistic business ecosystem spanning tourism, real estate, design, engineering, mobility, and business consultancy.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GROUP_COMPANIES.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <Reveal key={comp.id} delay={(idx % 4) * 60}>
                  <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-spice-gold/60 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-ocean-teal/10 text-ocean-teal">
                          <Icon className="size-5" />
                        </div>
                        <span className="rounded-full bg-sand-cream px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-muted-foreground">
                          {comp.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 text-base font-bold text-ink leading-snug">
                        {comp.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-tea-green">{comp.tagline}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {comp.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 text-2xs font-bold text-ocean-teal">
                      AMCI Global Ventures Group
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* AMCI Business Platform Hub Box */}
          <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
                  Global Hub
                </span>
                <h3 className="type-h2 mt-1 text-ink">AMCI Global Business Platform Hub</h3>
                <p className="text-sm font-semibold uppercase text-spice-gold mt-1">
                  Connecting Business Partners Worldwide
                </p>
                <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                  A strategic business networking platform connecting foreign investors, entrepreneurs, SMEs, manufacturers, exporters, importers, travel operators, and financial institutions with opportunities in Sri Lanka.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 text-xs font-medium text-ink">
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal" /> Community empowerment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal" /> Driver education &amp; welfare</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal" /> Smart mobility solutions</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-ocean-teal" /> University student talent bridge</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-sand-cream/40 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Group Business Sectors:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-ink">
                  {BUSINESS_SECTORS.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 rounded-lg bg-card p-2 border border-border/60">
                      <span className="size-1.5 rounded-full bg-ocean-teal shrink-0" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Strategic Banking Partner (HNB) & Collaborations */}
      <section id="banking-partner" className="section-x py-14 md:py-20 border-b border-border/70">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              05 • Strategic Alliances
            </span>
            <h2 className="type-h2 mt-2 text-ink">Strategic Partners &amp; Collaborations</h2>
            <p className="type-body mt-3 text-muted-foreground">
              AMCI Global Ventures Group builds trusted, long-term relationships with leading financial, airline, hospitality, and institutional partners.
            </p>
          </div>
        </Reveal>

        {/* HNB Spotlight */}
        <Reveal delay={100} className="mt-10">
          <div className="rounded-3xl border-2 border-spice-gold/60 bg-card p-6 md:p-10 shadow-lg">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-ocean-teal/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ocean-teal">
                  <Banknote className="size-4" /> Strategic Banking Partner
                </div>
                <h3 className="type-h2 mt-3 text-ink">
                  Hatton National Bank PLC (HNB) – Sri Lanka
                </h3>
                <p className="type-body mt-3 text-ink-soft leading-relaxed">
                  We are pleased to maintain a strong banking relationship with <strong>Hatton National Bank PLC (HNB)</strong>, one of Sri Lanka’s most respected and trusted premier financial institutions.
                </p>
                <p className="type-body mt-2 text-ink-soft leading-relaxed">
                  As our valued banking partner, HNB supports our commitment to financial integrity, sound corporate governance, and sustainable business growth locally and internationally.
                </p>
                <div className="mt-4 rounded-2xl bg-sand-cream/70 border border-spice-gold/30 p-4">
                  <p className="font-display italic text-sm text-ink font-medium">
                    "Together, building trust, empowering businesses, and creating sustainable value for our communities."
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-sand-cream/40 p-6 text-center space-y-3">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-ocean-teal text-sand-cream shadow-md">
                  <Landmark className="size-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-ink">Hatton National Bank PLC</h4>
                <p className="text-xs text-muted-foreground">
                  Official Corporate Banking Partner of AMCI Global Ventures Group
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-ocean-teal">
                  <ShieldCheck className="size-4" /> Sound Financial Governance
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other Partners Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STRATEGIC_COLLABORATIONS.slice(1).map((collab, idx) => {
            const Icon = collab.icon;
            return (
              <Reveal key={idx} delay={(idx % 3) * 70}>
                <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-ocean-teal/10 text-ocean-teal">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-sand-cream px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-ocean-teal">
                        {collab.category}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-bold text-ink">{collab.name}</h4>
                    <p className="text-xs font-semibold text-muted-foreground">{collab.location}</p>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                      {collab.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Government Authorities */}
          <Reveal delay={210}>
            <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-sand-cream/60 p-6 shadow-sm">
              <div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-ocean-teal text-sand-cream">
                  <Landmark className="size-5" />
                </div>
                <h4 className="mt-4 text-base font-bold text-ink">Government &amp; Tourism Authorities</h4>
                <p className="text-xs font-semibold text-muted-foreground">Institutions in Collaboration</p>

                <ul className="mt-3 space-y-1.5">
                  {GOV_AUTHORITIES.map((auth, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5 text-xs font-medium text-ink">
                      <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-ocean-teal" />
                      <span>{auth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6) Helpdesk in India */}
      <section id="helpdesk-india" className="section-x py-14 md:py-20 border-b border-border/70">
        <Reveal className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
            06 • Regional Support
          </span>
          <h2 className="type-h2 mt-2 text-ink">Helpdesk in India</h2>
          <p className="type-body mt-3 text-muted-foreground">
            Dedicated coordination and client support for our valued travelers, pilgrim groups, travel agents, and corporate partners across India.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-2xl bg-ocean-teal/10 p-3 text-ocean-teal">
                <Globe2 className="size-6" />
              </div>
              <h3 className="type-h3 mt-4 text-ink">India Liaison &amp; Travel Assistance</h3>
              <p className="type-body mt-3 text-sm text-ink-soft leading-relaxed">
                To ensure seamless coordination for travelers from across India, AM Travel's Guru Lanka and AM Travel's Guru India (Pvt) Ltd maintain dedicated liaison desks to assist with inquiries, customized Ramayana &amp; Hindu pilgrim trails, cricket matches, and corporate MICE retreats.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-medium text-ink">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-ocean-teal" /> Direct assistance with flight schedules &amp; visa guidance (ETA)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-ocean-teal" /> Tailored Hindu kovil, Ramayana &amp; Buddhist pilgrim schedules
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-ocean-teal" /> Special B2B tariff coordination for Indian travel agents
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border/80 bg-sand-cream/50 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center rounded-2xl bg-spice-gold/20 p-3 text-ink">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="type-h3 mt-4 text-ink">Quick Helpdesk Contact</h3>
                <p className="type-body mt-2 text-sm text-ink-soft">
                  Reach our dedicated helpdesk team via WhatsApp, call, or email for instant support.
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-ocean-teal" />
                    <span className="font-semibold text-ink">{BRAND.phoneIntl} / {BRAND.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="size-4 text-tea-green" />
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ocean-teal hover:underline"
                    >
                      WhatsApp Helpdesk ({BRAND.whatsappDisplay})
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-spice-gold" />
                    <div>
                      <span className="text-2xs text-muted-foreground block font-semibold uppercase tracking-wider">India Desk Email</span>
                      <a href={`mailto:${BRAND.indiaEmail}`} className="font-semibold text-ocean-teal hover:underline">
                        {BRAND.indiaEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/contact"
                  search={{ tag: "India Helpdesk Enquiry" }}
                  className="btn-gold w-full !py-2.5 !text-xs font-bold text-center"
                >
                  Contact India Helpdesk
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7) Our Team */}
      <section id="our-team" className="bg-sand-cream/40 py-14 md:py-20 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              07 • Our Specialists
            </span>
            <h2 className="type-h2 mt-2 text-ink">Our Team Across 10 Tour Concepts</h2>
            <p className="type-body mt-3 max-w-2xl text-muted-foreground">
              We have an experienced and dedicated team of specialists, tour directors, licensed chauffeur-guides, and naturalists for every one of our 10 tour concepts.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CONCEPT_TEAM_EXPERTISE.map((team, tIdx) => (
              <Reveal key={team.id} delay={(tIdx % 5) * 60}>
                <div className="card-surface hover-lift flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-2xs">
                  <div>
                    <span className="inline-block rounded-md bg-ocean-teal/10 px-2 py-0.5 text-2xs font-bold uppercase tracking-wider text-ocean-teal">
                      Concept {String(team.id).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-ink">{team.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {team.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <Link
                      to="/concepts/$slug"
                      params={{ slug: COLLECTIONS[team.id - 1]?.slug || "spiritual" }}
                      className="text-2xs font-bold uppercase tracking-wider text-ocean-teal hover:underline"
                    >
                      View Concept &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Contact Details */}
      <section id="contact-details" className="section-x py-14 md:py-20">
        <Reveal className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
            08 • Get in Touch
          </span>
          <h2 className="type-h2 mt-2 text-ink">Official Contact Details</h2>
          <p className="type-body mt-3 text-muted-foreground">
            We welcome individual travellers, families, tour operators, and corporate groups to connect with our head office.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Address & Phones */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ocean-teal/10 text-ocean-teal">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Head Office Address</h3>
                  <p className="mt-1 text-base font-semibold text-ink leading-relaxed">
                    {BRAND.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ocean-teal/10 text-ocean-teal">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telephone &amp; Hotline</h3>
                  <p className="mt-1 text-base font-semibold text-ink">
                    <a href={`tel:${BRAND.phone}`} className="hover:text-ocean-teal">{BRAND.phone}</a>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <a href={`tel:${BRAND.phoneIntl.replace(/\s/g, "")}`} className="hover:text-ocean-teal">{BRAND.phoneIntl}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-tea-green/20 text-tea-green">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Direct</h3>
                  <p className="mt-1 text-base font-semibold text-ink">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean-teal hover:underline"
                    >
                      {BRAND.whatsappDisplay} ({BRAND.phoneIntl})
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Emails & Social */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-spice-gold/20 text-ink">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Official Emails</h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm font-semibold text-ink">
                        Marketing &amp; Inquiries:{" "}
                        <a href={`mailto:${BRAND.marketingEmail}`} className="text-ocean-teal hover:underline">
                          {BRAND.marketingEmail}
                        </a>
                      </p>
                      <p className="text-sm font-semibold text-ink">
                        Operations &amp; Travel:{" "}
                        <a href={`mailto:${BRAND.operationEmail}`} className="text-ocean-teal hover:underline">
                          {BRAND.operationEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ocean-teal/10 text-ocean-teal">
                    <Facebook className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Social &amp; Community</h3>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      <a
                        href={BRAND.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ocean-teal hover:underline"
                      >
                        Follow Us on Facebook &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <Link to="/contact" className="btn-gold w-full !py-3 font-semibold text-center block">
                  Send Us an Inquiry
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Callout Section */}
      <section className="bg-ocean-teal py-14 text-sand-cream md:py-20">
        <div className="section-x max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center rounded-full bg-sand-cream/10 p-3 text-spice-gold">
              <HeartHandshake className="size-7" />
            </div>
            <h2 className="type-h2 mt-4 text-sand-cream">Let's Design Your Journey</h2>
            <p className="type-body mt-3 opacity-90">
              Tell us who is travelling, your preferred concept or custom dates — our team will create a tailored Sri Lankan experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/journey" className="btn-gold !px-7 !py-3 font-semibold shadow-sm">
                Design a Journey
              </Link>
              <Link to="/contact" className="btn-outline !border-sand-cream/40 !px-7 !py-3 font-semibold !text-sand-cream hover:!bg-sand-cream/15">
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
