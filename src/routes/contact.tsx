import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { tag?: string } => ({
    tag: typeof search.tag === "string" ? search.tag : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact AM Travel's Guru Lanka — Plan Your Sri Lanka Trip" },
      {
        name: "description",
        content:
          "Call, WhatsApp or send us a question. Our Sri Lanka travel planners reply within one working day.",
      },
      { property: "og:title", content: "Contact AM Travel's Guru Lanka" },
      { property: "og:description", content: "Talk to a Travel Guru about your Sri Lanka journey." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { tag } = Route.useSearch();

  return (
    <div className="pb-20">
      <section className="bg-sand-cream py-16 md:py-24">
        <div className="section-x max-w-3xl">
          <p className="type-caption text-tea-green">Contact</p>
          <h1 className="type-h1 mt-3">Talk to a Travel Guru</h1>
          <p className="type-body mt-4 text-muted-foreground">{BRAND.positioning}</p>
        </div>
      </section>

      <section className="section-x grid gap-12 py-14 md:grid-cols-[1fr_1.3fr] md:py-20">
        <Reveal>
          <h2 className="type-h2">Fastest ways</h2>
          <ul className="mt-6 grid gap-4">
            <li>
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="card-surface hover-lift flex items-center gap-3 p-5">
                <Phone className="size-5 text-ocean-teal" /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="card-surface hover-lift flex items-center gap-3 p-5">
                <MessageCircle className="size-5 text-tea-green" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="card-surface hover-lift flex items-center gap-3 p-5">
                <Mail className="size-5 text-spice-gold" /> {BRAND.email}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="type-h2 mb-6">Ask a question</h2>
          <EnquiryForm
            hiddenTag={tag}
            cta="Send enquiry"
            confirmation="Thanks, our team will reach out."
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone / WhatsApp", type: "tel" },
              { name: "message", label: "What are you planning?", type: "textarea", required: true },
            ]}
          />
        </Reveal>
      </section>
    </div>
  );
}
