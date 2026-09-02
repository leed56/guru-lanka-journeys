export const CONCEPT_IMAGES: Record<string, string> = {
  spiritual: "/images/concept-covers/spiritual.jpg",
  "cultural-heritage": "/images/concept-covers/cultural-heritage.jpg",
  sports: "/images/concept-covers/sports.jpg",
  "womens-friendship": "/images/concept-covers/womens-friendship.jpg",
  romantic: "/images/concept-covers/romantic.jpg",
  "fun-leisure": "/images/concept-covers/fun-leisure.jpg",
  "nature-trails": "/images/concept-covers/nature-trails.jpg",
  business: "/images/concept-covers/business.jpg",
  mice: "/images/concept-covers/mice.jpg",
  "happy-retirement": "/images/concept-covers/happy-retirement.jpg",
};

export function conceptImage(slug: string): string | undefined {
  return CONCEPT_IMAGES[slug];
}
