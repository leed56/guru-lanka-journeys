export const BRAND = {
  name: "AM Travel's Guru Lanka",
  tagline: "Guide to Endless Happiness",
  positioning: "You imagine the journey. We design the experience.",
  brandLine: "New Thoughts • New Missions • Unique Concepts • Great Hospitality",
  phone: "+94 77 000 0000",
  whatsapp: "94770000000",
  email: "hello@amtravelsguru.lk",
};

export const NAV = [
  { label: "Discover", to: "/discover" },
  { label: "Explore Map", to: "/explore" },
  { label: "Trips", to: "/trips" },
  { label: "Packages", to: "/packages" },
  { label: "For Agents", to: "/for-agents" },
  { label: "For Partners", to: "/for-partners" },
  { label: "Contact", to: "/contact" },
] as const;

/* ---------------- Phase 3 — Discover categories ---------------- */
export type Category = {
  slug: string;
  label: string;
  intro: string;
  destinations: string[]; // destination ids in the Explorer
  gallery: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "beaches",
    label: "Beaches",
    intro:
      "Warm water, soft sand and a coastline that changes character every hour you drive along it. The south is calm and golden, the east is wide and wild, the west is where the sun goes down over the sea.",
    destinations: ["unawatuna", "mirissa", "tangalle", "pasikuda", "arugam-bay"],
    gallery: ["Palm-lined bay", "Sunset surf break", "Fishing stilts at dawn", "Reef shallows"],
  },
  {
    slug: "history-old-cities",
    label: "History & Old Cities",
    intro:
      "Two thousand years of kings, monks and engineers left cities of stone across the dry zone. You can walk them in a morning and still be talking about them at dinner.",
    destinations: ["anuradhapura", "polonnaruwa", "sigiriya", "galle", "kandy"],
    gallery: ["Rock fortress steps", "Old ramparts", "Stone reservoir", "Royal ruins"],
  },
  {
    slug: "safaris-wildlife",
    label: "Safaris & Wildlife",
    intro:
      "Leopards, elephants, sloth bears and more birds than you can name — inside parks you can reach on a normal driving day. Early mornings are worth the alarm.",
    destinations: ["tangalle", "arugam-bay", "polonnaruwa", "dambulla"],
    gallery: ["Jeep track at sunrise", "Elephant herd", "Lagoon birdlife", "Dry-zone forest"],
  },
  {
    slug: "adventure-sports",
    label: "Adventure & Sports",
    intro:
      "Surf, hike, raft, climb, cycle. Sri Lanka is small enough that you can chase waves in the morning and be in the mountains by evening.",
    destinations: ["ella", "arugam-bay", "kandy", "kalpitiya"],
    gallery: ["Rafting rapids", "Ridge trail", "Surf point", "Kite lagoon"],
  },
  {
    slug: "yoga-ayurveda",
    label: "Yoga & Ayurveda",
    intro:
      "Ayurveda here is ordinary life, not a spa trend. Stay a week, follow a routine, and let a doctor design the treatments around you.",
    destinations: ["negombo", "tangalle", "nuwara-eliya", "unawatuna"],
    gallery: ["Herb garden", "Treatment pavilion", "Morning practice deck", "Oil apothecary"],
  },
  {
    slug: "temples-sacred-sites",
    label: "Temples & Sacred Sites",
    intro:
      "Buddhist, Hindu, Christian and Muslim sites often sit within a few streets of each other. Dress simply, go slowly, and ask before photographing.",
    destinations: ["kandy", "nallur", "nagadeepa", "dambulla", "anuradhapura"],
    gallery: ["Cave temple ceiling", "Gopuram detail", "Bo tree courtyard", "Evening puja"],
  },
  {
    slug: "diving-whale-watching",
    label: "Diving & Whale Watching",
    intro:
      "Blue whales off the south, wrecks and reefs off the east, and dolphins in big fast pods. Season matters more than anything else here — we'll time it for you.",
    destinations: ["mirissa", "trincomalee", "nilaveli", "kalpitiya"],
    gallery: ["Whale fluke", "Reef wall", "Wreck dive", "Dolphin pod"],
  },
  {
    slug: "tea-country-mountains",
    label: "Tea Country & Mountains",
    intro:
      "Cool air, blue-green ridges and slow trains through the estates. This is where people who came for the beach end up wanting to stay longer.",
    destinations: ["nuwara-eliya", "ella", "haputale", "kandy"],
    gallery: ["Tea terraces", "Estate bungalow", "Train viaduct", "Mist at dawn"],
  },
  {
    slug: "eco-stays-villages",
    label: "Eco Stays & Villages",
    intro:
      "Small lodges run by the families who own the land, off-grid cabins, and villages where lunch is cooked over firewood.",
    destinations: ["haputale", "polonnaruwa", "kalpitiya", "arugam-bay"],
    gallery: ["Forest cabin", "Village paddy field", "Mud-oven kitchen", "Lake canoe"],
  },
  {
    slug: "luxury-escapes",
    label: "Luxury Escapes",
    intro:
      "Private villas, restored estate houses and hotels by architects who understood this island. Discreet, staffed, and usually with nobody else around.",
    destinations: ["galle", "tangalle", "nuwara-eliya", "kandy"],
    gallery: ["Infinity pool", "Colonial suite", "Private chef table", "Villa garden"],
  },
  {
    slug: "weddings-honeymoons",
    label: "Weddings & Honeymoons",
    intro:
      "Beach ceremonies, fort courtyards and hill-country lawns, with the paperwork handled and both families looked after.",
    destinations: ["galle", "unawatuna", "nuwara-eliya", "bentota-area"],
    gallery: ["Beach ceremony", "Fort courtyard", "Lantern dinner", "Estate lawn"],
  },
  {
    slug: "food-cooking",
    label: "Food & Cooking",
    intro:
      "Rice and curry is never one dish — it's eight small ones. Cook with a family, walk a market, and learn what each spice is actually doing.",
    destinations: ["colombo", "galle", "jaffna", "kandy"],
    gallery: ["Spice market", "Hopper pan", "Home kitchen class", "Street food night"],
  },
  {
    slug: "village-life",
    label: "Village Life",
    intro:
      "Bullock carts, catamaran rides, paddy fields and afternoon tea with people who live there. Quiet, honest travel that keeps money local.",
    destinations: ["polonnaruwa", "dambulla", "haputale", "negombo"],
    gallery: ["Paddy harvest", "Catamaran crossing", "Village lane", "Weaving hut"],
  },
  {
    slug: "conferences-business-trips",
    label: "Conferences & Business Trips",
    intro:
      "Meeting rooms that work, transfers that run on time, and an island worth extending the trip for once the sessions are done.",
    destinations: ["colombo", "negombo", "kandy", "galle"],
    gallery: ["Conference hall", "Rooftop reception", "Boardroom", "Incentive dinner"],
  },
];

/* ---------------- Phase 4 — Explorer destinations ---------------- */
export type Region = "North" | "East" | "South" | "West" | "Hill Country" | "Cultural Triangle";
export type Interest = "beach" | "mountains" | "wildlife" | "culture" | "spiritual" | "wellness";

export type Destination = {
  id: string;
  name: string;
  region: Region;
  x: number;
  y: number;
  interests: Interest[];
  blurb: string;
};

export const DESTINATIONS: Destination[] = [
  { id: "jaffna", name: "Jaffna", region: "North", x: 76, y: 58, interests: ["culture", "spiritual"], blurb: "Discover vibrant Tamil culture, historic forts, colourful temples, unique cuisine, and the authentic northern spirit of Sri Lanka." },
  { id: "nallur", name: "Nallur", region: "North", x: 86, y: 68, interests: ["spiritual", "culture"], blurb: "Experience the magnificent Nallur Kandaswamy Kovil, a spiritual landmark celebrated for its stunning architecture, traditions, and vibrant cultural festivals." },
  { id: "nagadeepa", name: "Nagadeepa", region: "North", x: 32, y: 68, interests: ["spiritual"], blurb: "Visit this sacred island of ancient Buddhist heritage, peaceful temples, and spiritual beauty surrounded by the blue waters of Jaffna." },
  { id: "delft", name: "Delft", region: "North", x: 19, y: 84, interests: ["culture"], blurb: "Step into a world of wild ponies, ancient stone walls, baobab trees, and unforgettable island landscapes shaped by centuries of history." },
  { id: "trincomalee", name: "Trincomalee", region: "East", x: 274, y: 241, interests: ["beach", "spiritual"], blurb: "Explore a spectacular natural harbour, ancient temples, colonial history, and beautiful beaches surrounded by the turquoise waters of the east coast." },
  { id: "nilaveli", name: "Nilaveli", region: "East", x: 269, y: 222, interests: ["beach"], blurb: "Relax on one of Sri Lanka’s most beautiful beaches, with crystal-clear waters, golden sands, and easy access to Pigeon Island." },
  { id: "pasikuda", name: "Pasikuda", region: "East", x: 331, y: 351, interests: ["beach", "wellness"], blurb: "Walk into calm, shallow turquoise waters and enjoy one of Sri Lanka’s most beautiful tropical beach escapes." },
  { id: "arugam-bay", name: "Arugam Bay", region: "East", x: 377, y: 534, interests: ["beach", "wildlife"], blurb: "Ride world-famous waves, discover laid-back beach life, and explore lagoons, wildlife, and hidden coastal treasures around this surfing paradise." },
  { id: "galle", name: "Galle", region: "South", x: 108, y: 666, interests: ["culture", "beach"], blurb: "Step inside the historic Galle Fort, where colonial architecture, charming streets, boutique cafés, galleries, and ocean views create timeless memories." },
  { id: "unawatuna", name: "Unawatuna", region: "South", x: 113, y: 676, interests: ["beach", "wellness"], blurb: "Relax on a beautiful palm-fringed beach, discover colourful marine life, and enjoy unforgettable sunsets beside Sri Lanka’s southern coast." },
  { id: "mirissa", name: "Mirissa", region: "South", x: 148, y: 686, interests: ["beach", "wildlife"], blurb: "The launching point for blue whale mornings, and a palm-covered headland to nap under after." },
  { id: "weligama", name: "Weligama", region: "South", x: 143, y: 681, interests: ["beach"], blurb: "A gentle beginner surf bay with stilt fishermen at the eastern end." },
  { id: "tangalle", name: "Tangalle", region: "South", x: 203, y: 671, interests: ["beach", "wildlife", "wellness"], blurb: "Quiet coves and boutique villas, an easy hour from the big southern safari parks." },
  { id: "bentota-area", name: "Bentota", region: "West", x: 71, y: 604, interests: ["beach", "wellness"], blurb: "Enjoy golden beaches, river adventures, water sports, luxury resorts, and unforgettable tropical moments along Sri Lanka’s beautiful southwest coast." },
  { id: "colombo", name: "Colombo", region: "West", x: 48, y: 520, interests: ["culture"], blurb: "Discover Sri Lanka’s vibrant capital, blending modern city life with colonial architecture, temples, shopping, restaurants, art, and oceanfront sunsets." },
  { id: "negombo", name: "Negombo", region: "West", x: 44, y: 472, interests: ["beach", "wellness"], blurb: "Enjoy golden beaches, colourful fishing traditions, fresh seafood, canals, and a relaxed coastal atmosphere just minutes from the airport." },
  { id: "kalpitiya", name: "Kalpitiya", region: "West", x: 32, y: 300, interests: ["beach", "wildlife"], blurb: "Experience dolphins, lagoons, kitesurfing, beautiful beaches, and peaceful coastal adventures in one of Sri Lanka’s emerging destinations." },
  { id: "kandy", name: "Kandy", region: "Hill Country", x: 177, y: 458, interests: ["culture", "spiritual", "mountains"], blurb: "Experience the cultural heart of Sri Lanka with the Temple of the Sacred Tooth Relic, scenic hills, traditions, and vibrant heritage." },
  { id: "nuwara-eliya", name: "Nuwara Eliya", region: "Hill Country", x: 203, y: 516, interests: ["mountains", "wellness"], blurb: "Escape into cool mountain air, emerald tea plantations, colonial charm, waterfalls, and beautiful landscapes known as Sri Lanka’s Little England." },
  { id: "ella", name: "Ella", region: "Hill Country", x: 246, y: 530, interests: ["mountains"], blurb: "Journey through misty mountains, tea plantations, waterfalls, and spectacular viewpoints, with unforgettable adventures around every corner." },
  { id: "haputale", name: "Haputale", region: "Hill Country", x: 229, y: 547, interests: ["mountains", "wellness"], blurb: "Enjoy breathtaking mountain scenery, endless tea estates, dramatic viewpoints, and peaceful escapes surrounded by Sri Lanka’s cool highlands." },
  { id: "anuradhapura", name: "Anuradhapura", region: "Cultural Triangle", x: 139, y: 287, interests: ["spiritual", "culture"], blurb: "Walk among ancient stupas, sacred Bodhi trees, royal ruins, and remarkable monuments in Sri Lanka’s legendary first capital." },
  { id: "polonnaruwa", name: "Polonnaruwa", region: "Cultural Triangle", x: 241, y: 349, interests: ["culture", "wildlife"], blurb: "Discover magnificent medieval ruins, royal palaces, ancient temples, and the impressive Gal Vihara carved into solid rock." },
  { id: "sigiriya", name: "Sigiriya", region: "Cultural Triangle", x: 198, y: 346, interests: ["culture", "mountains"], blurb: "Climb the iconic Lion Rock, admire ancient frescoes, and enjoy breathtaking views across Sri Lanka’s lush cultural landscape." },
  { id: "dambulla", name: "Dambulla", region: "Cultural Triangle", x: 180, y: 363, interests: ["spiritual", "culture"], blurb: "Explore magnificent cave temples filled with centuries-old Buddha statues and paintings, surrounded by beautiful landscapes and spiritual heritage." },
];

export const REGIONS: Region[] = ["North", "East", "South", "West", "Hill Country", "Cultural Triangle"];

export const INTERESTS: { id: Interest; label: string }[] = [
  { id: "beach", label: "Beaches" },
  { id: "mountains", label: "Mountains" },
  { id: "wildlife", label: "Wildlife" },
  { id: "spiritual", label: "Temples" },
  { id: "wellness", label: "Wellness" },
  { id: "culture", label: "History" },
];

/* ---------------- Phase 5 — Guru Collections ---------------- */
export type Collection = {
  slug: string;
  name: string;
  line: string;
  intro: string;
  route: string[];
  days: string;
};

export const COLLECTIONS: Collection[] = [
  { slug: "beach", name: "Beach", line: "Southern sand, warm water and nowhere to be.", days: "7 days", route: ["Colombo", "Bentota", "Unawatuna", "Mirissa", "Weligama", "Tangalle"], intro: "A slow run down the south-west coast, stopping wherever the water is calmest that week." },
  { slug: "hill-country", name: "Hill Country", line: "Tea, trains and cold mornings.", days: "6 days", route: ["Colombo", "Kandy", "Nuwara Eliya", "Haputale", "Ella"], intro: "Up into the estates by road and back down by train, with time to actually walk the ridges." },
  { slug: "wildlife", name: "Wildlife", line: "Leopards, elephants and 5am alarms.", days: "8 days", route: ["Colombo", "Dambulla", "Polonnaruwa", "Tangalle", "Arugam Bay"], intro: "Three different parks with three different landscapes, spaced so you're never in a jeep two days running." },
  { slug: "spiritual", name: "Spiritual", line: "Temples, stupas and quiet hours.", days: "7 days", route: ["Colombo", "Anuradhapura", "Dambulla", "Kandy", "Nallur"], intro: "A pilgrimage route across the island's Buddhist and Hindu heartlands, timed around ceremonies." },
  { slug: "wellness", name: "Wellness", line: "Ayurveda on a proper schedule.", days: "10 days", route: ["Negombo", "Bentota", "Nuwara Eliya", "Tangalle"], intro: "A doctor-led programme with treatments, diet and rest — long enough to be worth doing." },
  { slug: "romance", name: "Romance", line: "Two people, one very good week.", days: "7 days", route: ["Colombo", "Galle", "Unawatuna", "Ella", "Kandy"], intro: "Fort evenings, a mountain bungalow and a private car for the whole route." },
  { slug: "family", name: "Family", line: "Enough to do, nothing too far.", days: "9 days", route: ["Negombo", "Sigiriya", "Kandy", "Bentota", "Colombo"], intro: "Short driving days, a rock to climb, elephants, and a beach at the end of it." },
  { slug: "eco", name: "Eco", line: "Small lodges, local hands.", days: "8 days", route: ["Colombo", "Kalpitiya", "Polonnaruwa", "Haputale", "Arugam Bay"], intro: "Community-run stays and low-impact transport, with meals cooked where you sleep." },
];

/* ---------------- Phase 6 — Exclusive tour packages ---------------- */
export const PACKAGES: { name: string; items: string[] }[] = [
  { name: "Spiritual Tours", items: ["Tamil Religious Trails", "Hindu Religious Trails (Ramayana)", "Buddhist Sacred Temples & Heritage Trails"] },
  { name: "Cultural & Heritage Tours", items: ["Cultural Heritage & Monument Trails", "Research, Study & Experiential Tourism"] },
  { name: "Sports Tourism", items: ["Cricket Tours", "Fellowship & Networking Evenings", "T10/T20/30-Over Matches", "School/Old Boys/Club/Women's Teams", "Badminton Tournaments", "Age-Group, Men's & Women's Events"] },
  { name: "Romantic Tourism", items: ["Wedding Function Arrangements", "Honeymoon Packages", "Romantic Getaways"] },
  { name: "Women's Friendship Tours", items: ["OGA Tours", "Office & Professional Women's Tours", "Women's Clubs", "Family Women's Club Events", "Women's Training Programs", "Young Women's & University Events"] },
  { name: "Fun & Leisure Tours", items: ["Beach Party Experiences (12–24hr)", "Live Music/DJ", "Water Sports & Adventure", "Romantic Water Trails", "River/Lake/Sea Boat Parties"] },
  { name: "Luxury Tour Packages", items: ["Beach & Coastal Trails", "Mountain & Nature Trails", "Eco Trails", "Wildlife & Adventure Trails", "City & Lifestyle Trails", "Spiritual & Cultural Luxury"] },
  { name: "Business Opportunity & Innovation Tours", items: ["Meetings with Importers/Exporters/Traders", "Entrepreneur & Innovator Networks", "Employment & Career Opportunities", "University Student Business Experiences", "Investment Opportunities", "Real Estate & Property", "Office/Workspace Sharing"] },
  { name: "MICE & Corporate Tourism", items: ["Corporate Forums & Conferences", "Awards & Felicitation Events", "Work-Study Programs", "Sales Incentive Tours", "Corporate Group Tours", "Tailor-Made Experiences"] },
];

/* ---------------- Phase 8 — static route lookup ---------------- */
const ROUTE_TABLE: { key: Interest[]; route: string[] }[] = [
  { key: ["beach", "mountains", "wildlife"], route: ["Colombo", "Sigiriya", "Kandy", "Ella", "Yala", "Galle", "Bentota"] },
  { key: ["beach", "mountains"], route: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Mirissa", "Galle"] },
  { key: ["beach", "wildlife"], route: ["Colombo", "Bentota", "Tangalle", "Yala", "Mirissa"] },
  { key: ["mountains", "wildlife"], route: ["Colombo", "Dambulla", "Kandy", "Nuwara Eliya", "Udawalawe"] },
  { key: ["culture", "spiritual"], route: ["Colombo", "Anuradhapura", "Dambulla", "Polonnaruwa", "Kandy"] },
  { key: ["wellness", "beach"], route: ["Negombo", "Bentota", "Unawatuna", "Tangalle"] },
  { key: ["beach"], route: ["Colombo", "Bentota", "Unawatuna", "Mirissa", "Tangalle"] },
  { key: ["mountains"], route: ["Colombo", "Kandy", "Nuwara Eliya", "Haputale", "Ella"] },
  { key: ["wildlife"], route: ["Colombo", "Dambulla", "Polonnaruwa", "Yala", "Tangalle"] },
  { key: ["culture"], route: ["Colombo", "Sigiriya", "Polonnaruwa", "Anuradhapura", "Kandy"] },
  { key: ["spiritual"], route: ["Colombo", "Anuradhapura", "Dambulla", "Kandy", "Nallur"] },
  { key: ["wellness"], route: ["Negombo", "Bentota", "Nuwara Eliya", "Tangalle"] },
];

export function routeForInterests(interests: Interest[]): string[] {
  if (interests.length === 0) return ["Colombo", "Sigiriya", "Kandy", "Ella", "Galle"];
  const sorted = [...interests];
  const match = ROUTE_TABLE.find((r) => r.key.every((k) => sorted.includes(k)) && r.key.length === Math.min(sorted.length, r.key.length));
  return match?.route ?? ROUTE_TABLE.find((r) => sorted.includes(r.key[0]!))?.route ?? ["Colombo", "Kandy", "Ella", "Galle"];
}

export function estimateRange(days: number, tier: string): string {
  const perDay = tier === "Luxury" ? [320, 480] : tier === "Mid-range" ? [160, 240] : [80, 130];
  return `USD ${perDay[0]! * days} – ${perDay[1]! * days}`;
}
