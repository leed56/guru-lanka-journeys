export type TourPlanItem = {
  name: string;
  category?: string;
  days: string;
  nights: string;
  tier?: string; // Standard | Semi-Luxury | Luxury | Fully Customised
  highlights?: string;
};

export type ConceptTourGroup = {
  id: number;
  slug: string;
  conceptName: string;
  subtitle: string;
  packages: TourPlanItem[];
};

export const TOUR_PLANS: ConceptTourGroup[] = [
  {
    id: 1,
    slug: "spiritual",
    conceptName: "Spiritual Tourism",
    subtitle: "Sacred Buddhist Pilgrimages & Tamil Hindu Kovil Trails",
    packages: [
      {
        name: "Tamil Sacred Kovil Trail",
        category: "Tamil Religious",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Standard & Curated",
        highlights: "Koneswaram, Nallur, Nagadeepa, Munneswaram & Kataragama worship trails",
      },
      {
        name: "Tamil Sacred Kovil Trail (Extended)",
        category: "Tamil Religious",
        days: "8 Days",
        nights: "7 Nights",
        tier: "Standard & Curated",
        highlights: "Comprehensive worship across Northern, Eastern & Southern historic kovils",
      },
      {
        name: "Jaffna Sacred Peninsula Trail",
        category: "Tamil Religious",
        days: "4 Days",
        nights: "3 Nights",
        tier: "Standard",
        highlights: "Nallur Kandaswamy, Nagapooshani Amman, Keerimalai & Jaffna heritage",
      },
      {
        name: "Northern & Eastern Sacred Circuit",
        category: "Tamil Religious",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Standard & Curated",
        highlights: "Trincomalee Koneswaram, Batticaloa, Nallur & coastal sacred shrines",
      },
      {
        name: "Buddhist Sacred Pilgrimage",
        category: "Buddhist Sacred",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Standard & Curated",
        highlights: "Temple of the Tooth, Anuradhapura Atamasthana, Dambulla & Avukana",
      },
    ],
  },
  {
    id: 2,
    slug: "cultural-heritage",
    conceptName: "Cultural & Heritage Tourism",
    subtitle: "Ancient Royal Kingdoms, UNESCO Monuments & Ramayana Legend Trails",
    packages: [
      {
        name: "Ancient Kingdoms & Monuments Tour",
        category: "Heritage Discovery",
        days: "8 Days",
        nights: "7 Nights",
        tier: "Semi-Luxury",
        highlights: "Sigiriya, Polonnaruwa, Anuradhapura, Kandy, Galle Fort & Dambulla",
      },
      {
        name: "Ramayana Heritage Trail (Standard)",
        category: "Ramayana Heritage",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Standard",
        highlights: "Seetha Amman, Ashoka Vatika, Ravana Ella, Sanjeevani & Divurumpola",
      },
      {
        name: "Ramayana Heritage Trail (Luxury)",
        category: "Ramayana Heritage",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Luxury",
        highlights: "Premium resort stays, private guided transport, sacred puja timings",
      },
      {
        name: "Grand Ramayana Epic Expedition",
        category: "Ramayana Heritage",
        days: "13 Days",
        nights: "12 Nights",
        tier: "Comprehensive",
        highlights: "Complete all-island Ramayana trail from North to Central Highlands & South",
      },
      {
        name: "Hindu Religious Heritage Circuit",
        category: "Hindu Heritage",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Standard & Curated",
        highlights: "Pancha Ishwaram kovils, historic temple architecture & living traditions",
      },
    ],
  },
  {
    id: 3,
    slug: "sports",
    conceptName: "Sports Tourism",
    subtitle: "Cricket Matches, Tournaments, Club Exchanges & Island Adventures",
    packages: [
      {
        name: "Cricket Match & Island Discovery",
        category: "Cricket Tours",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Club & School",
        highlights: "4 days of competitive/friendly matches + 2 days of island sightseeing & beach leisure",
      },
      {
        name: "Comprehensive Cricket & Holiday Tour",
        category: "Cricket Tours",
        days: "8 Days",
        nights: "7 Nights",
        tier: "Teams & Groups",
        highlights: "5 days of cricket matches/training + 2 days of cultural and wildlife excursions",
      },
      {
        name: "Badminton Tournament & Island Tour",
        category: "Badminton",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Tournament & Friendly",
        highlights: "Indoor court match fixtures, local club exchanges & hill-country exploration",
      },
    ],
  },
  {
    id: 4,
    slug: "romantic",
    conceptName: "Romantic Tourism @ AM Romance Guru",
    subtitle: "Intimate Getaways, Honeymoon Journeys & Special Celebrations",
    packages: [
      {
        name: "Romantic Island Getaway",
        category: "Couples & Getaway",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Romantic Boutique",
        highlights: "Private beach dinners, scenic train ride, couple spa & hill country views",
      },
      {
        name: "Grand Honeymoon & Romance Journey",
        category: "Honeymoon Luxury",
        days: "11 Days",
        nights: "10 Nights",
        tier: "Luxury & Exclusive",
        highlights: "Secluded pool villas, sunset sailing, tea planter bungalow & photoshoot session",
      },
    ],
  },
  {
    id: 5,
    slug: "womens-friendship",
    conceptName: "Women's Friendship Tourism",
    subtitle: "Safe, Respectful & Enriching Group Travel Exclusively for Women",
    packages: [
      {
        name: "Women's Rejuvenation & Connection Tour",
        category: "Group & OGA",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Comfort & Safe",
        highlights: "Wellness retreats, culinary sessions, tea country relaxation & coastal escape",
      },
      {
        name: "Women's Weekend Getaway & Exploration",
        category: "Short Break",
        days: "4 Days",
        nights: "3 Nights",
        tier: "Social & Fun",
        highlights: "Galle Fort boutique shopping, spa afternoon, beach sunset & group bonding",
      },
    ],
  },
  {
    id: 6,
    slug: "fun-leisure",
    conceptName: "Fun & Leisure Escapes",
    subtitle: "Coastal Beach Gatherings, Water Sports, Adventure & Social Holidays",
    packages: [
      {
        name: "Coastal Beach & Water Sports Break",
        category: "Beach & Water",
        days: "4 Days",
        nights: "3 Nights",
        tier: "Action & Leisure",
        highlights: "Bentota water sports, jet ski, catamaran cruise & beach barbecues",
      },
      {
        name: "Island Leisure & Adventure Escape",
        category: "Adventure & Leisure",
        days: "6 Days",
        nights: "5 Nights",
        tier: "Dynamic",
        highlights: "Kitulgala white-water rafting, Ella mountain viewpoints & Mirissa coastal vibe",
      },
      {
        name: "Complete Sri Lanka Leisure Holiday",
        category: "All-Round Leisure",
        days: "7 Days",
        nights: "6 Nights",
        tier: "All-Inclusive Fun",
        highlights: "Beaches, hill-country cool, wildlife safari & vibrant evening dining",
      },
    ],
  },
  {
    id: 7,
    slug: "nature-trails",
    conceptName: "Nature Tourism & Trails",
    subtitle: "Rainforests, Highlands, Waterfalls, Wildlife & Eco-Living",
    packages: [
      {
        name: "Highland Nature & Rainforest Trail",
        category: "Eco & Wildlife",
        days: "7 Days",
        nights: "6 Nights",
        tier: "Eco-Discovery",
        highlights: "Sinharaja Rainforest trek, Knuckles range, Horton Plains & waterfall bathing",
      },
      {
        name: "Grand Wilderness & Wildlife Expedition",
        category: "Comprehensive Nature",
        days: "13 Days",
        nights: "12 Nights",
        tier: "Deep Nature",
        highlights: "National park safaris (Yala/Wilpattu/Minneriya), tea estates & off-grid eco lodges",
      },
    ],
  },
  {
    id: 8,
    slug: "business",
    conceptName: "Pathway to Incorporate the Business",
    subtitle: "Business Opportunities, Partnerships, Set-Up & Operational Support",
    packages: [
      {
        name: "Sri Lanka Business Gateway & Exploration Tour",
        category: "B2B & Investment",
        days: "4 Days",
        nights: "4 Nights",
        tier: "Executive",
        highlights: "Market-entry assessment, BOI & legal meetings, B2B partner introductions & site visits",
      },
    ],
  },
  {
    id: 9,
    slug: "mice",
    conceptName: "MICE & Corporate Tourism",
    subtitle: "Meetings, Incentives, Conferences, Exhibitions & Corporate Retreats",
    packages: [
      {
        name: "Corporate Retreat & Executive Meeting",
        category: "Corporate Meetings",
        days: "3 Days",
        nights: "2 Nights",
        tier: "Corporate Executive",
        highlights: "Conference hall facilities, team-building sessions & beachfront gala dinner",
      },
      {
        name: "Incentive Travel, Conference & Island Tour",
        category: "Incentive & Conference",
        days: "5 Days",
        nights: "4 Nights",
        tier: "Corporate Group",
        highlights: "Full convention handling, awards night, cultural excursion & team rewards",
      },
    ],
  },
  {
    id: 10,
    slug: "happy-retirement",
    conceptName: "Happy Retirement Life",
    subtitle: "Peaceful Living, Authentic Ayurveda, Gentle Climates & Warm Hospitality",
    packages: [
      {
        name: "Personalised Long-Stay & Wellness Retreat",
        category: "Retirement & Wellness",
        days: "Flexible Duration",
        nights: "Flexible Nights",
        tier: "Fully Customised",
        highlights: "Doctor-guided Ayurveda, unhurried sightseeing, garden villas & dedicated companion care",
      },
    ],
  },
];
