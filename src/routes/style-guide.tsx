import { createFileRoute } from "@tanstack/react-router";

import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/style-guide")({
  head: () => ({
    meta: [
      { title: "Style Guide (internal) | AM Travel's Guru Lanka" },
      { name: "description", content: "Internal reference for colour, type scale and component states." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StyleGuide,
});

const SWATCHES = [
  { name: "ocean-teal", cls: "bg-ocean-teal", hex: "#0B4F4A" },
  { name: "tea-green", cls: "bg-tea-green", hex: "#4C7A57" },
  { name: "spice-gold", cls: "bg-spice-gold", hex: "#E0A458" },
  { name: "sand-cream", cls: "bg-sand-cream", hex: "#F6EFE3" },
  { name: "ink", cls: "bg-ink", hex: "#1C2B28" },
];

function StyleGuide() {
  return (
    <div className="section-x space-y-16 py-14">
      <header>
        <p className="type-caption text-tea-green">Internal reference</p>
        <h1 className="type-h1 mt-3">Style guide</h1>
        <p className="type-body mt-3 max-w-xl text-muted-foreground">
          Reference this instead of re-deciding style choices. Tokens live in src/styles.css.
        </p>
      </header>

      <section>
        <h2 className="type-h2">Colour</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SWATCHES.map((s) => (
            <div key={s.name} className="card-surface">
              <div className={`${s.cls} h-24`} />
              <div className="p-4">
                <p className="text-sm font-medium">--color-{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="type-h2">Type scale</h2>
        <div className="mt-6 space-y-4 border-t border-border pt-6">
          <p className="type-h1">H1 — Display serif (Fraunces)</p>
          <p className="type-h2">H2 — Section title</p>
          <p className="type-h3">H3 — Card title</p>
          <p className="type-body max-w-xl">
            Body — Outfit, geometric sans. Used for all copy, buttons, nav and forms; stays easy to
            scan at mobile widths.
          </p>
          <p className="type-caption text-muted-foreground">Caption / eyebrow</p>
        </div>
      </section>

      <section>
        <h2 className="type-h2">Buttons</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-gold">Gold — primary CTA</button>
          <button className="btn-teal">Teal — secondary</button>
          <button className="btn-green">Tea green</button>
          <button className="btn-outline text-ocean-teal">Outline</button>
          <span className="chip">Chip</span>
          <span className="chip chip-active">Chip active</span>
        </div>
      </section>

      <section>
        <h2 className="type-h2">Card states</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <article className="card-surface">
            <Placeholder label="Rest" />
            <p className="p-5 text-sm text-muted-foreground">Resting card</p>
          </article>
          <article className="card-surface hover-lift">
            <Placeholder label="Hover me" />
            <p className="p-5 text-sm text-muted-foreground">Lifts 4px, photo scales 1.03x</p>
          </article>
          <article className="card-surface ring-2 ring-spice-gold">
            <Placeholder label="Selected" />
            <p className="p-5 text-sm text-muted-foreground">Selected / focused</p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="type-h2">Motion</h2>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
          <li>Hero: one slow crossfade on load (.hero-fade).</li>
          <li>Scroll reveal: fade + 16px lift, 100ms stagger, once (&lt;Reveal /&gt;).</li>
          <li>Hover: .hover-lift + .photo-zoom.</li>
          <li>FAB: .soft-pulse. Map route: .route-draw (the one showpiece animation).</li>
          <li>All of the above collapse to opacity-only under prefers-reduced-motion.</li>
        </ul>
      </section>
    </div>
  );
}
