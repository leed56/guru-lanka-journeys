import { createFileRoute } from "@tanstack/react-router";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/for-partners")({
  head: () => ({
    meta: [
      { title: "Join Our Travel Network — For Suppliers | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Hotels, villas, guides, drivers, restaurants, safari operators and wellness centres: list your business with Guru Lanka and reach our travellers.",
      },
      { property: "og:title", content: "Join Our Travel Network — For Suppliers" },
      { property: "og:description", content: "List your business with Guru Lanka." },
    ],
  }),
  component: ForPartners,
});

const TYPES = ["Hotel", "Villa", "Guide", "Driver", "Restaurant", "Safari operator", "Wellness centre", "Other"];

function ForPartners() {
  return (
    <div className="pb-20">
      <section className="bg-tea-green py-16 text-sand-cream md:py-24">
        <div className="section-x max-w-3xl">
          <p className="type-caption text-spice-gold">Join our travel network</p>
          <h1 className="type-h1 mt-3">List your business with Guru Lanka</h1>
          <p className="type-body mt-4 opacity-90">
            We build journeys for travellers who stay longer and ask for the real thing. If you run a
            hotel, villa, vehicle, kitchen, jeep or treatment room worth recommending, tell us about
            it — our planners work from a shortlist they trust.
          </p>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="type-h2 mb-6">Tell us about your business</h2>
          <EnquiryForm
            cta="Submit listing"
            confirmation="Thanks, our team will reach out."
            fields={[
              { name: "business", label: "Business name", required: true },
              { name: "type", label: "Business type", type: "select", options: TYPES, required: true },
              { name: "location", label: "Location", required: true },
              { name: "contact", label: "Contact person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "description", label: "Description", type: "textarea", required: true },
            ]}
          />
        </Reveal>
      </section>
    </div>
  );
}
