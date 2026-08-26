import { Link } from "@tanstack/react-router";

import mapAsset from "@/assets/sri-lanka-highlights-map.png.asset.json";

type Hotspot = {
  label: string;
  /** percentage position of the label block on the image */
  x: number;
  y: number;
  w: number;
  h: number;
  place?: string;
};

const HOTSPOTS: Hotspot[] = [
  { label: "Jaffna", x: 14, y: 5, w: 22, h: 9, place: "jaffna" },
  { label: "Mannar Island", x: 4, y: 26, w: 24, h: 9 },
  { label: "Trincomalee", x: 66, y: 32, w: 24, h: 12, place: "trincomalee" },
  { label: "Anuradhapura", x: 7, y: 41, w: 24, h: 10, place: "anuradhapura" },
  { label: "Sigiriya", x: 47, y: 39, w: 20, h: 7, place: "sigiriya" },
  { label: "Dambulla", x: 32, y: 45, w: 20, h: 10, place: "dambulla" },
  { label: "Batticaloa", x: 76, y: 51, w: 22, h: 9, place: "pasikuda" },
  { label: "Kandy", x: 38, y: 54, w: 24, h: 7, place: "kandy" },
  { label: "Negombo", x: 11, y: 58, w: 20, h: 10, place: "negombo" },
  { label: "Nuwara Eliya", x: 38, y: 65, w: 22, h: 10, place: "nuwara-eliya" },
  { label: "Ella", x: 46, y: 70, w: 20, h: 10, place: "ella" },
  { label: "Arugam Bay", x: 80, y: 70, w: 20, h: 8, place: "arugam-bay" },
  { label: "Colombo", x: 9, y: 75, w: 22, h: 10, place: "colombo" },
  { label: "Yala National Park", x: 66, y: 78, w: 26, h: 12, place: "tangalle" },
  { label: "Bentota", x: 15, y: 84, w: 20, h: 10, place: "bentota-area" },
  { label: "Galle Fort", x: 28, y: 92, w: 20, h: 7, place: "galle" },
  { label: "Mirissa", x: 48, y: 92, w: 18, h: 7, place: "mirissa" },
];

export function IslandMap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[560px]">
        <img
          src={mapAsset.url}
          alt="Illustrated map of Sri Lanka showing highlights from Jaffna to Galle"
          className="h-auto w-full select-none"
          loading="lazy"
        />
        {HOTSPOTS.map((h) => (
          <Link
            key={h.label}
            to="/explore"
            search={h.place ? { place: h.place } : {}}
            aria-label={`Explore ${h.label}`}
            title={h.label}
            style={{ left: `${h.x}%`, top: `${h.y}%`, width: `${h.w}%`, height: `${h.h}%` }}
            className="group absolute flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline-none"
          >
            <span className="max-w-full rounded-full border border-spice-gold/50 bg-ink/75 px-1.5 py-0.5 text-center text-[10px] font-semibold leading-tight text-sand-cream shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-200 group-hover:bg-ocean-teal/90 group-hover:text-sand-cream group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.45)] sm:px-2.5 sm:py-1 sm:text-xs">
              {h.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

