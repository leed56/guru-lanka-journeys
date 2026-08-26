import { Link } from "@tanstack/react-router";

import mapAsset from "@/assets/sri-lanka-highlights-map.png.asset.json";

export function IslandMap({ className }: { className?: string }) {
  return (
    <Link
      to="/explore"
      aria-label="Explore Sri Lanka on the interactive map"
      title="Explore Sri Lanka"
      className={`group block ${className ?? ""}`}
    >
      <div className="relative mx-auto w-full max-w-[560px] rounded-3xl bg-sand-cream/95 p-4 shadow-2xl ring-1 ring-ink/5 transition-transform duration-300 ease-out group-hover:scale-[1.01] group-active:scale-[0.99]">
        <img
          src={mapAsset.url}
          alt="Illustrated map of Sri Lanka showing highlights from Jaffna to Galle"
          className="h-auto w-full select-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
