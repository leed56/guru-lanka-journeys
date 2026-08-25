import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";

import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { StickyContactBar } from "@/components/site/StickyContactBar";
import { CATEGORIES, DESTINATIONS } from "@/data/site";

export const Route = createFileRoute("/discover/$slug")({
  loader: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.label} in Sri Lanka | AM Travel's Guru Lanka`;
    const description = category.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const places = category.destinations
    .map((id) => DESTINATIONS.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <div className="pb-28 md:pb-0">
      <section className="relative isolate">
        <Placeholder label={category.label} ratio="aspect-[16/10] md:aspect-[21/8]" className="hero-fade" />
        <div className="section-x -mt-16 md:-mt-24">
          <div className="card-surface max-w-3xl p-6 md:p-10">
            <Link to="/discover" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-teal">
              <ArrowLeft className="size-4" /> All categories
            </Link>
            <h1 className="type-h1 mt-4">{category.label}</h1>
            <p className="type-body mt-4 text-muted-foreground">{category.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-x py-14 md:py-20">
        <Reveal>
          <h2 className="type-h2">A look at it</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.gallery.map((g, idx) => (
            <Reveal key={g} delay={idx * 90}>
              <div className="card-surface hover-lift">
                <Placeholder label={g} ratio="aspect-[4/5]" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand-cream py-14 md:py-20">
        <div className="section-x">
          <Reveal>
            <h2 className="type-h2">Where would you go for this?</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 80}>
                <Link
                  to="/explore"
                  search={{ place: p.id }}
                  className="card-surface hover-lift flex h-full items-start gap-3 p-5"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-spice-gold" />
                  <span className="min-w-0">
                    <span className="type-h3 block">{p.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{p.blurb}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StickyContactBar tag={category.label} />
    </div>
  );
}
