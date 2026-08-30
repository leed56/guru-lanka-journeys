import { createFileRoute } from "@tanstack/react-router";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/for-agents")({
  head: () => ({
    meta: [
      { title: "Become Our B2B Partner — For Travel Agents | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Sell Sri Lanka with a local DMC: net rates, a package catalogue, brochures, itinerary support and commission. Register your agency in a minute.",
      },
      { property: "og:title", content: "Become Our B2B Partner — For Travel Agents" },
      { property: "og:description", content: "Grow your Sri Lanka business with AM Travel's Guru Lanka." },
    ],
  }),
  component: ForAgents,
});

const COMING = [
  { title: "Net rates", note: "Agent-only pricing on every collection and package." },
  { title: "Package catalogue", note: "Downloadable itineraries you can brand as your own." },
  { title: "Brochures", note: "Print-ready and digital assets for your storefront." },
  { title: "Itinerary support", note: "A planner on our side who answers the same day." },
  { title: "Commission", note: "Clear per-booking terms, settled monthly." },
];

function ForAgents() {
  return (
    <div className="pb-20">
      <section className="bg-ocean-teal py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-3xl">
          <p className="type-caption text-spice-gold">B2B PARTNER</p>
          <h1 className="type-h1 mt-3">Tie up with us as a Business Partner</h1>
          <p className="type-body mt-4 opacity-85">
            We’re your trusted ground operator—you keep the client, we handle the rest. Register now as
            a partner and unlock our growing suite of services as they go live.
          </p>
        </div>
      </section>

      <section className="section-x grid gap-12 py-14 md:grid-cols-2 md:py-20">
        <div>
          <Reveal>
            <h2 className="type-h2">What partners get</h2>
          </Reveal>
          <ul className="mt-8 grid gap-5">
            {COMING.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 80} as="li">
                <p className="type-h3">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <h2 className="type-h2 mb-6">Register your agency</h2>
          <EnquiryForm
            cta="Register agency"
            confirmation="Thanks, our team will reach out."
            fields={[
              { name: "company", label: "Company name", required: true },
              { name: "country", label: "Country", required: true },
              { name: "contact", label: "Contact person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        </Reveal>
      </section>
    </div>
  );
}
