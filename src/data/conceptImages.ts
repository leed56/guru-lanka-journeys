import spiritual from "@/assets/concept-spiritual.jpg.asset.json";
import cultural from "@/assets/concept-cultural-heritage.jpg.asset.json";
import sports from "@/assets/concept-sports.jpg.asset.json";
import womens from "@/assets/concept-womens-friendship.jpg.asset.json";
import romantic from "@/assets/concept-romantic.jpg.asset.json";
import fun from "@/assets/concept-fun-leisure.jpg.asset.json";
import nature from "@/assets/concept-nature-trails.jpg.asset.json";
import business from "@/assets/concept-business.jpg.asset.json";
import mice from "@/assets/concept-mice.jpg.asset.json";
import retirement from "@/assets/concept-happy-retirement.jpg.asset.json";

export const CONCEPT_IMAGES: Record<string, string> = {
  spiritual: spiritual.url,
  "cultural-heritage": cultural.url,
  sports: sports.url,
  "womens-friendship": womens.url,
  romantic: romantic.url,
  "fun-leisure": fun.url,
  "nature-trails": nature.url,
  business: business.url,
  mice: mice.url,
  "happy-retirement": retirement.url,
};

export function conceptImage(slug: string): string | undefined {
  return CONCEPT_IMAGES[slug];
}
