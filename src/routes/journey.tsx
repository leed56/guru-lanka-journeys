import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";

import { BRAND, COLLECTIONS, INTERESTS, estimateRange, routeForInterests, type Interest } from "@/data/site";
import { cn } from "@/lib/utils";

type Search = { interest?: Interest | undefined; days?: number | undefined; collection?: string | undefined };

export const Route = createFileRoute("/journey")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    interest: typeof search["interest"] === "string" ? (search["interest"] as Interest) : undefined,
    days: typeof search["days"] === "number" ? (search["days"] as number) : undefined,
    collection: typeof search["collection"] === "string" ? (search["collection"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Start My Journey — Build Your Sri Lanka Trip | AM Travel's Guru Lanka" },
      {
        name: "description",
        content:
          "Answer eight quick questions and we'll sketch your Sri Lanka route, style and estimated package price — then a planner takes it from there.",
      },
      { property: "og:title", content: "Start My Journey — Build Your Sri Lanka Trip" },
      { property: "og:description", content: "Eight questions. One route built around you." },
    ],
  }),
  component: Journey,
});

const DAYS = [3, 5, 7, 10, 14];
const BUDGETS = ["Budget", "Mid-range", "Luxury"];
const PARTY = ["Just me", "Couple", "Family", "Friends"];
const STYLE = ["Simple", "Comfortable", "Luxury"];
const FOOD = ["Vegetarian", "Halal", "No restrictions", "Other"];
const TRAVEL = ["Private vehicle", "Group tour"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Answers = {
  days: number;
  budget: string;
  party: string;
  interests: Interest[];
  style: string;
  food: string;
  travel: string;
  month: string;
};

function Journey() {
  const search = Route.useSearch();
  const preset = COLLECTIONS.find((c) => c.slug === search.collection);

  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({
    days: search.days ?? 7,
    budget: "",
    party: "",
    interests: search.interest ? [search.interest] : [],
    style: "",
    food: "",
    travel: "",
    month: "",
  });

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((p) => ({ ...p, [k]: v }));
  const next = () => setStep((s) => s + 1);
  const toggleInterest = (i: Interest) =>
    setA((p) => ({
      ...p,
      interests: p.interests.includes(i) ? p.interests.filter((x) => x !== i) : [...p.interests, i],
    }));

  const steps = [
    {
      q: "How many days?",
      body: (
        <div className="flex flex-wrap gap-3">
          {DAYS.map((d) => (
            <button key={d} type="button" onClick={() => { set("days", d); next(); }} className={cn("chip", a.days === d && "chip-active")}>
              {d} days
            </button>
          ))}
          <label className="chip">
            Custom
            <input
              type="number"
              min={1}
              max={40}
              value={a.days}
              onChange={(e) => set("days", Number(e.target.value))}
              className="w-14 bg-transparent outline-none"
            />
          </label>
        </div>
      ),
    },
    { q: "What's your budget?", body: <Chips options={BUDGETS} value={a.budget} onPick={(v) => { set("budget", v); next(); }} /> },
    { q: "Who's coming?", body: <Chips options={PARTY} value={a.party} onPick={(v) => { set("party", v); next(); }} /> },
    {
      q: "What do you love?",
      body: (
        <div className="flex flex-wrap gap-3">
          {INTERESTS.map((i) => (
            <button key={i.id} type="button" onClick={() => toggleInterest(i.id)} className={cn("chip", a.interests.includes(i.id) && "chip-active")}>
              {i.label}
            </button>
          ))}
        </div>
      ),
    },
    { q: "How fancy should it be?", body: <Chips options={STYLE} value={a.style} onPick={(v) => { set("style", v); next(); }} /> },
    { q: "Any food needs?", body: <Chips options={FOOD} value={a.food} onPick={(v) => { set("food", v); next(); }} /> },
    { q: "Just us, or a group tour?", body: <Chips options={TRAVEL} value={a.travel} onPick={(v) => { set("travel", v); next(); }} /> },
    {
      q: "Which month are you travelling?",
      body: (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {MONTHS.map((m) => (
            <button key={m} type="button" onClick={() => { set("month", m); next(); }} className={cn("chip justify-center", a.month === m && "chip-active")}>
              {m}
            </button>
          ))}
        </div>
      ),
    },
  ];

  const isResult = step >= steps.length;
  const route = preset ? preset.route : routeForInterests(a.interests);
  const title = [
    `${a.days} Days`,
    a.party || "Any group",
    a.style || a.budget || "Comfortable",
    a.interests.length ? a.interests.map((i) => INTERESTS.find((x) => x.id === i)?.label).join(" + ") : "Island highlights",
  ].join(" · ");

  return (
    <div className="min-h-[80vh] bg-sand-cream py-14 md:py-20">
      <div className="section-x max-w-3xl">
        {/* progress */}
        <div className="flex items-center justify-center gap-2.5" role="list" aria-label="Progress">
          {steps.map((s, i) => {
            const done = i < step || isResult;
            return (
              <button
                key={s.q}
                type="button"
                role="listitem"
                aria-label={s.q}
                aria-current={!isResult && i === step ? "step" : undefined}
                onClick={() => i <= step && setStep(i)}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-500",
                  done ? "bg-spice-gold" : "bg-sand-shade",
                  !isResult && i === step && "w-7 bg-ocean-teal",
                )}
              />
            );
          })}
        </div>


        <div className="mt-6 flex items-center justify-between">
          {step > 0 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-teal">
              <ArrowLeft className="size-4" /> Back
            </button>
          ) : (
            <span className="type-caption text-tea-green">Start my journey</span>
          )}
          <span className="type-caption text-muted-foreground">
            {isResult ? "Your journey" : `${step + 1} / ${steps.length}`}
          </span>
        </div>

        {isResult ? (
          <div key="result" className="card-surface animate-in fade-in slide-in-from-bottom-4 mt-8 p-7 duration-500 md:p-10">
            <p className="type-caption text-tea-green">Your Journey</p>
            <h1 className="type-h2 mt-3">{title}</h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
              {route.map((stop, idx) => (
                <span key={stop} className="flex items-center gap-2">
                  <span className="rounded-lg bg-muted px-3.5 py-2 text-sm">{stop}</span>
                  {idx < route.length - 1 ? <ChevronRight className="size-4 text-spice-gold" /> : null}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border p-5">
              <p className="type-h3">Estimated package: {estimateRange(a.days, a.style || a.budget || "Mid-range")}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Includes Hotels + Transport + Experiences + Guide
              </p>
            </div>

            {(a.month || a.food || a.travel) && (
              <p className="mt-5 text-sm text-muted-foreground">
                {[a.month && `Travelling ${a.month}`, a.travel, a.food].filter(Boolean).join(" · ")}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => setStep(3)} className="btn-outline text-ocean-teal">
                Customize Journey
              </button>
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="btn-gold">
                <MessageCircle className="size-4" /> Chat with Travel Guru
              </a>
              <Link to="/contact" search={{ tag: title }} className="btn-teal">
                Email this to us
              </Link>
            </div>
          </div>
        ) : (
          <div key={step} className="card-surface animate-in fade-in slide-in-from-bottom-4 mt-8 p-7 duration-500 md:p-10">
            {preset && step === 0 ? (
              <p className="type-caption mb-4 text-tea-green">Starting from the {preset.name} Collection</p>
            ) : null}
            <h1 className="type-h2">{steps[step]!.q}</h1>
            <div className="mt-7">{steps[step]!.body}</div>
            <button type="button" onClick={next} className="btn-teal mt-8">
              {step === steps.length - 1 ? "See my journey" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Chips({ options, value, onPick }: { options: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((o) => (
        <button key={o} type="button" onClick={() => onPick(o)} className={cn("chip", value === o && "chip-active")}>
          {o}
        </button>
      ))}
    </div>
  );
}
