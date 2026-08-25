import { cn } from "@/lib/utils";

const TONES = [
  "bg-ocean-teal text-sand-cream",
  "bg-tea-green text-sand-cream",
  "bg-sand-shade text-ink",
  "bg-ink text-sand-cream",
  "bg-spice-gold text-ink",
  "bg-stone text-ink",
];

function toneFor(label: string) {
  let h = 0;
  for (const ch of label) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return TONES[h % TONES.length]!;
}

/**
 * Placeholder photography. Deliberately a flat colour block with a label —
 * real photography gets swapped in later.
 */
export function Placeholder({
  label,
  className,
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={cn("photo-zoom relative isolate", ratio, className)}>
      <div
        className={cn(
          "photo-inner absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center",
          toneFor(label),
        )}
      >
        <span className="type-caption opacity-70">Placeholder photo</span>
        <span className="type-h3 leading-tight">{label}</span>
      </div>
    </div>
  );
}
