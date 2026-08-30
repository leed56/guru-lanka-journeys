import kataragama from "@/assets/Kataragama_murugan_tamil_Temple.jpg.asset.json";
import nallur from "@/assets/destination-nallur.jpg.asset.json";
import dambulla from "@/assets/destination-dambulla.jpg.asset.json";
import a1 from "@/assets/spiritual-a1-tooth-relic.jpg.asset.json";
import a2 from "@/assets/spiritual-a2-ruwanwelisaya.jpg.asset.json";
import a3 from "@/assets/spiritual-a3-samadhi-buddha.jpg.asset.json";
import a4 from "@/assets/spiritual-a4-maha-bodhi.jpg.asset.json";
import a5 from "@/assets/spiritual-a5-monks.jpg.asset.json";
import a6 from "@/assets/spiritual-a6-avukana.jpg.asset.json";
import a7 from "@/assets/spiritual-a7-meditation.jpg.asset.json";
import b1 from "@/assets/spiritual-b1-ganesh.jpg.asset.json";
import b2 from "@/assets/spiritual-b2-murugan.jpg.asset.json";
import b3 from "@/assets/spiritual-b3-shiva-family.jpg.asset.json";

export type ConceptSection = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  chants?: string[];
  image?: string;
  alt?: string;
  gallery?: { src: string; alt: string }[];
};

export type ConceptDetail = {
  eyebrow: string;
  heading: string;
  lead: string[];
  sections: ConceptSection[];
  promise: { title: string; lines: string[]; signature: string; tagline: string };
};

export const CONCEPT_DETAILS: Record<string, ConceptDetail> = {
  spiritual: {
    eyebrow: "Sacred journeys • Inner peace • Divine blessings",
    heading: "Introduction of Spiritual Tourism",
    lead: [
      "Our Spiritual Tourism concept is thoughtfully designed to take devotees on meaningful worship trails across Sri Lanka, connecting them with the island's most sacred Buddhist temples and Tamil Hindu Kovils.",
      "We believe a pilgrimage is more than travelling from one sacred place to another.",
      "It is a journey of faith, peace, devotion, and inner happiness.",
    ],
    sections: [
      {
        eyebrow: "A",
        title: "Buddhist Sacred Pilgrimage",
        paragraphs: [
          "Our Buddhist pilgrimage trails are carefully designed around Sri Lanka's most sacred places of worship, creating a peaceful and meaningful spiritual experience throughout the journey.",
          "With love, respect, and personal care, we value every step of your sacred journey — giving devotees the opportunity to worship, reflect, meditate, and experience the true spirit of Buddhist heritage.",
        ],
        chants: ["Namo Buddhaya", "Theruwan Saranai!"],
        image: a1.url,
        alt: "Temple of the Sacred Tooth Relic illuminated at night in Kandy",
        gallery: [
          { src: a2.url, alt: "Ruwanwelisaya stupa in Anuradhapura" },
          { src: a3.url, alt: "Samadhi Buddha statue with flower offerings, Anuradhapura" },
          { src: a4.url, alt: "Jaya Sri Maha Bodhi sacred bo tree, Anuradhapura" },
          { src: a5.url, alt: "Buddhist monks walking down forest temple steps" },
          { src: a6.url, alt: "Avukana standing Buddha statue carved from rock" },
          { src: a7.url, alt: "Monk meditating beneath an ancient tree" },
        ],
      },
      {
        eyebrow: "B",
        title: "Tamil Hindu Kovil Worship Trails",
        paragraphs: [
          "Our Tamil Hindu Kovil trails bring together some of Sri Lanka's most spiritually significant temples and sacred destinations.",
          "We have designed these journeys with unique experiences, devotion, and thoughtful care, allowing devotees to worship peacefully, discover our rich Hindu heritage, and create unforgettable spiritual memories.",
          "We hope every devotee will return to these sacred destinations again and again, blessed with divine grace, happiness, and inner peace.",
        ],
        chants: ["Om Namah Shivaya!", "Om Saravana Bhavaya Namah!"],
        image: b2.url,
        alt: "Lord Murugan with his peacock, worshipped across Sri Lanka's Hindu kovils",
        gallery: [
          { src: b1.url, alt: "Lord Ganesh, the remover of obstacles" },
          { src: b3.url, alt: "Lord Shiva with Parvati, Ganesh and Murugan" },
          { src: kataragama.url, alt: "Kataragama Murugan kovil in southern Sri Lanka" },
        ],
      },
    ],
    promise: {
      title: "Our Promise",
      lines: [
        "Your faith is sacred to us.",
        "Your journey is our responsibility.",
        "Your happiness is our blessing.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },
};

export const CONCEPT_GALLERIES: Record<string, { src: string; alt: string }[]> = {
  spiritual: [
    { src: dambulla.url, alt: "Golden Buddha statues inside the Dambulla cave temple" },
    { src: nallur.url, alt: "Nallur Kandaswamy Kovil in Jaffna" },
    { src: kataragama.url, alt: "Kataragama Murugan temple" },
  ],
};

export function conceptDetail(slug: string): ConceptDetail | undefined {
  return CONCEPT_DETAILS[slug];
}
