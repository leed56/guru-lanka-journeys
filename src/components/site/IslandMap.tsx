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
            className="absolute rounded-md ring-spice-gold/0 transition-all duration-200 hover:bg-spice-gold/15 hover:ring-2 hover:ring-spice-gold focus-visible:bg-spice-gold/15 focus-visible:ring-2 focus-visible:ring-spice-gold focus-visible:outline-none"
          />
        ))}
      </div>
    </div>
  );
}
