import { useEffect, useState } from "react";

import ayurveda from "@/assets/Ayurveda_wellness.jpg.asset.json";
import galle from "@/assets/Galle_Beach.jpg.asset.json";
import temple from "@/assets/Kataragama_murugan_tamil_Temple.jpg.asset.json";
import sigiriya from "@/assets/Sigiriya_Rock.jpg.asset.json";
import tea from "@/assets/Tea_Plantations.jpg.asset.json";
import wildlife from "@/assets/Wildlife.jpg.asset.json";
import waterfall from "@/assets/thushal-madhushankha-Wak57_M4JKM-unsplash.jpg.asset.json";
import poolVilla from "@/assets/chaminda-keragala-Hp2LhkqyHww-unsplash.jpg.asset.json";
import peacock from "@/assets/adithya-ramakrishnan-OIhMCWgOYo4-unsplash.jpg.asset.json";
import buddhas from "@/assets/bharath-reddy-KxHf3b7YCPk-unsplash.jpg.asset.json";
import train from "@/assets/gemmmm-BS8a67PahbM-unsplash.jpg.asset.json";
import street from "@/assets/alex-azabache-8weolGgaa9w-unsplash.jpg.asset.json";
import business from "@/assets/business_meeting.jpg.asset.json";

export const HERO_SLIDES = [
  { url: galle.url, alt: "Stilt fishermen and Galle Fort lighthouse on a Sri Lankan beach" },
  { url: train.url, alt: "Blue train crossing the Nine Arch Bridge in Ella" },
  { url: tea.url, alt: "Tea pluckers in the hill country tea plantations of Sri Lanka" },
  { url: waterfall.url, alt: "Devon Falls tumbling through misty hill-country tea estates" },
  { url: sigiriya.url, alt: "Sigiriya rock fortress rising above the jungle" },
  { url: wildlife.url, alt: "Elephants and deer at a waterhole in a Sri Lankan national park" },
  { url: peacock.url, alt: "Wild peacock calling from a fallen branch in a national park" },
  { url: temple.url, alt: "Evening ceremony at Kataragama Murugan temple" },
  { url: buddhas.url, alt: "Row of seated stone Buddha statues at a Sri Lankan temple" },
  { url: street.url, alt: "Busy Pettah market street in Colombo" },
  { url: business.url, alt: "Business colleagues meeting outdoors by a scenic lake in Sri Lanka" },
  { url: poolVilla.url, alt: "Infinity pool villa overlooking the Indian Ocean" },
  { url: ayurveda.url, alt: "Ayurvedic oil treatment in a garden pavilion" },
];


/** Slow, gentle crossfade + ken-burns drift between hero photographs. */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ocean-teal">
      {HERO_SLIDES.map((s, i) => (
        <img
          key={s.url}
          src={s.url}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className="hero-slide absolute inset-0 size-full object-cover"
          style={{ opacity: i === index ? 1 : 0 }}
          data-active={i === index ? "true" : "false"}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ocean-teal/45" />

      <div className="absolute bottom-6 right-5 z-10 flex gap-2 md:bottom-8 md:right-8">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.url}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={
              i === index
                ? "h-1.5 w-7 rounded-full bg-spice-gold transition-all"
                : "h-1.5 w-3 rounded-full bg-sand-cream/45 transition-all hover:bg-sand-cream/80"
            }
          />
        ))}
      </div>
    </div>
  );
}
