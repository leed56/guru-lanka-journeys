import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  Compass,
  Facebook,
  Globe2,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { BRAND, COLLECTIONS } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AM Travel's Guru Lanka | Board of Directors, Team & Helpdesk" },
      {
        name: "description",
        content:
          "Learn about AM Travel's Guru Lanka: our story, Board of Directors (A.M. Anura Mahendra, H.M. Keerthi Kumara, U. Anil Kumar), Helpdesk in India, experienced team across 10 tour concepts, and contact details.",
      },
      { property: "og:title", content: "About Us — AM Travel's Guru Lanka" },
      {
        property: "og:description",
        content: "You imagine the journey. We design the experience. Meet the leadership and team behind Guru Lanka.",
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
    bio: "A visionary entrepreneur and pioneer in experiential Sri Lankan tourism. With decades of business leadership, strategic vision, and deep passion for the island's spiritual, cultural, and natural heritage, Mr. Anura Mahendra founded AM Travel's Guru Lanka to introduce a smarter, more meaningful, and uniquely authentic travel ecosystem.",
    responsibilities: [
      "Strategic Vision & Global Brand Leadership",
      "Pioneering 10 Signature Tourism Concepts",
      "International Tourism Partnerships & B2B Alliances",
    ],
  },
  {
    name: "H.M. Keerthi Kumara",
    role: "Director – Operations",
    isLeader: false,
    bio: "Driving the operational backbone of AM Travel's Guru Lanka. Mr. Keerthi Kumara oversees on-ground logistics, premium vehicle fleet management, licensed chauffeur-guide networks, partner hotel quality control, and seamless execution across all travel trails.",
    responsibilities: [
      "Island-Wide Tour Operations & Fleet Management",
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
              AM Travel's Guru Lanka • About Us
            </div>
            <h1 className="type-h1 mt-4 text-sand-cream">{BRAND.positioning}</h1>
            <p className="type-body mt-4 max-w-2xl opacity-90">{BRAND.brandLine}</p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider opacity-85">
              <span>• Founder Led</span>
              <span>• Experienced Team</span>
              <span>• Dedicated India Helpdesk</span>
              <span>• 10 Tour Concepts</span>
            </div>
          </Reveal>
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
                <strong>AM TRAVEL’S GURU LANKA</strong> is a newly launched Sri Lankan travel and tourism venture created with a clear
                purpose — to introduce a smarter, more meaningful, and uniquely Sri Lankan way of experiencing travel.
              </p>
              <p>
                We are developing a new generation of tourism concepts that blend Sri Lanka’s timeless traditions, rich
                culture, spirituality, nature, hospitality, and heritage with innovative business models, modern travel
                solutions, and carefully designed experiences.
              </p>
              <p className="text-base font-semibold text-ocean-teal">
                Our vision is simple: to make every journey more than a trip — to make it a memorable experience.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-sand-cream/40 p-6">
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

            <div className="rounded-2xl border border-border/80 bg-sand-cream/40 p-6">
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
              Guiding AM Travel's Guru Lanka with visionary leadership, operational mastery, and sound corporate governance.
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

      {/* 3) Helpdesk in India */}
      <section id="helpdesk-india" className="section-x py-14 md:py-20 border-b border-border/70">
        <Reveal className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
            03 • Regional Support
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
                To ensure seamless coordination for travelers from across India, AM Travel's Guru Lanka maintains a dedicated helpdesk to assist with inquiries, customized Ramayana &amp; Hindu pilgrim trails, cricket matches, and corporate MICE retreats.
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
                    <a href={`mailto:${BRAND.email}`} className="font-semibold text-ocean-teal hover:underline">
                      {BRAND.email}
                    </a>
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

      {/* 4) Our Team */}
      <section id="our-team" className="bg-sand-cream/40 py-14 md:py-20 border-b border-border/70">
        <div className="section-x">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
              04 • Our Specialists
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

      {/* 5) Contact Details */}
      <section id="contact-details" className="section-x py-14 md:py-20">
        <Reveal className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tea-green">
            05 • Get in Touch
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
                        General Inquiries:{" "}
                        <a href={`mailto:${BRAND.email}`} className="text-ocean-teal hover:underline">
                          {BRAND.email}
                        </a>
                      </p>
                      <p className="text-sm font-semibold text-ink">
                        Marketing &amp; B2B:{" "}
                        <a href={`mailto:${BRAND.marketingEmail}`} className="text-ocean-teal hover:underline">
                          {BRAND.marketingEmail}
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
