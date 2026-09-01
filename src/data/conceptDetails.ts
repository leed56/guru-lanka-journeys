import galleryManifest from "@/data/conceptGalleryManifest.json";

export type ConceptSection = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  chants?: string[];
  image?: string;
  alt?: string;
};

export type ConceptDetail = {
  id: number;
  eyebrow: string;
  heading: string;
  subheading?: string;
  lead: string[];
  highlights?: string[];
  sections: ConceptSection[];
  promise: {
    title: string;
    lines: string[];
    signature: string;
    tagline: string;
  };
};

export const CONCEPT_DETAILS: Record<string, ConceptDetail> = {
  spiritual: {
    id: 1,
    eyebrow: "Sacred Journeys • Inner Peace • Divine Blessings",
    heading: "Spiritual Tourism",
    subheading: "Sacred Pilgrimages Across Buddhist & Tamil Hindu Traditions",
    lead: [
      "Our Spiritual Tourism concept is thoughtfully designed to take devotees on meaningful worship trails across Sri Lanka, connecting them with the island's most sacred Buddhist temples and Tamil Hindu Kovils.",
      "We believe a pilgrimage is more than travelling from one sacred place to another. It is a journey of faith, peace, devotion, and inner happiness.",
    ],
    highlights: [
      "Dedicated worship trails across ancient Buddhist shrines and sacred Tamil Hindu Kovils",
      "Private transfers, respectful timings, and guidance aligned with temple ceremonies and puja hours",
      "Meditation, reflection, and blessings in peaceful, sacred settings",
    ],
    sections: [
      {
        eyebrow: "Part A",
        title: "Buddhist Sacred Pilgrimage",
        paragraphs: [
          "Our Buddhist pilgrimage trails are carefully designed around Sri Lanka's most sacred places of worship, creating a peaceful and meaningful spiritual experience throughout the journey.",
          "With love, respect, and personal care, we value every step of your sacred journey — giving devotees the opportunity to worship, reflect, meditate, and experience the true spirit of Buddhist heritage.",
        ],
        bulletPoints: [
          "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) in Kandy",
          "Ruwanwelisaya, Jaya Sri Maha Bodhi, and Samadhi Buddha in Anuradhapura",
          "Dambulla Cave Temple complex and ancient rock hermitages",
          "Avukana Buddha statue and historic meditation monasteries",
        ],
        chants: ["Namo Buddhaya", "Theruwan Saranai!"],
      },
      {
        eyebrow: "Part B",
        title: "Tamil Hindu Kovil Worship Trails",
        paragraphs: [
          "Our Tamil Hindu Kovil trails bring together some of Sri Lanka's most spiritually significant temples and sacred destinations.",
          "We have designed these journeys with unique experiences, devotion, and thoughtful care, allowing devotees to worship peacefully, discover our rich Hindu heritage, and create unforgettable spiritual memories.",
          "We hope every devotee will return to these sacred destinations again and again, blessed with divine grace, happiness, and inner peace.",
        ],
        bulletPoints: [
          "Nallur Kandaswamy Kovil and Nagapooshani Amman Kovil in Jaffna",
          "Koneswaram Temple perched high on Swami Rock in Trincomalee",
          "Kataragama Murugan Kovil in the sacred south",
          "Munneswaram and Sri Bhakta Hanuman Temple along the Ramayana trail",
        ],
        chants: ["Om Namah Shivaya!", "Om Saravana Bhavaya Namah!"],
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

  "cultural-heritage": {
    id: 2,
    eyebrow: "Where Ancient History Meets Living Spirituality",
    heading: "Cultural & Heritage Tourism",
    subheading: "Discover the Ancient Lion Kingdom • Civilisation, Monuments & Ramayana Lore",
    lead: [
      "Sri Lanka is a remarkable island where ancient civilisation, spirituality, culture, nature, and sacred traditions have lived together for thousands of years.",
      "From the magnificent Buddhist heritage of Anuradhapura, Polonnaruwa, and Kandy to the sacred Hindu traditions of Kataragama, Nallur, and the Ramayana, Sri Lanka offers a unique journey through living history.",
    ],
    highlights: [
      "UNESCO World Heritage rock fortresses, ancient royal palaces, and monumental stupas",
      "Living cultural traditions, artisan craft villages, and traditional folklore",
      "Authentic Ramayana trail connections across mountains, caves, and temples",
    ],
    sections: [
      {
        eyebrow: "Monuments & Kingdoms",
        title: "Ancient Cities & Royal Capitals",
        paragraphs: [
          "Discover ancient temples, sacred mountains, stupas, kovils, royal cities, rock monuments, and traditional communities — where every place has a story and every journey creates a memory.",
          "Walk through the stone pathways of Anuradhapura and Polonnaruwa, marvel at the engineering of Sigiriya Lion Rock, and witness centuries-old traditions preserved in the royal hill capital of Kandy.",
        ],
        bulletPoints: [
          "Sigiriya Rock Fortress — ancient palace in the sky with 5th-century frescoes",
          "Polonnaruwa Medieval Capital — royal pavilions, lotus baths, and Gal Vihara",
          "Anuradhapura Ancient Capital — towering stupas and monastic colleges",
          "Galle Dutch Fort — 17th-century ramparts and living historic streets",
        ],
      },
      {
        eyebrow: "Epic Legends",
        title: "The Sacred Ramayana Heritage Trail",
        paragraphs: [
          "Our heritage also carries stories connecting the island with the great Ramayana tradition — Lord Rama, Goddess Sita, Lord Hanuman, and King Ravana.",
          "These stories form an important part of the island's cultural and spiritual tourism experience, alongside Sri Lanka's archaeological and historical heritage.",
        ],
        bulletPoints: [
          "Seetha Amman Temple and Ashoka Vatika in Hakgala",
          "Ravana Ella Waterfalls and Ravana Caves in Ella",
          "Sanjeevani drop sites and ancient herbs in Rumassala and Ritigala",
          "Chariot Path and Divurumpola sacred agni pariksha grounds",
        ],
      },
    ],
    promise: {
      title: "Visit Sri Lanka",
      lines: [
        "Learn • Explore • Experience • Respect",
        "Discover the Ancient Lion Kingdom — Feel its culture, experience its spirituality, and be proud of its heritage.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },

  sports: {
    id: 3,
    eyebrow: "Sports Beyond the Game • Towards Friendship & Wellbeing",
    heading: "Sports Tourism",
    subheading: "Cricket Tours, Club Exchanges, Tournaments & Island Adventures",
    lead: [
      "At AM Travel's Guru, we believe sports and cricket connect people, cultures, and unforgettable life experiences.",
      "We create professional Cricket and Sports Tourism experiences for teams, clubs, schools, corporate groups, families, and fans visiting Sri Lanka.",
    ],
    highlights: [
      "Custom match fixtures against local clubs, school academies, and veteran teams",
      "Access to international-standard grounds, practice nets, and local coaching staff",
      "Post-match social evenings, trophy ceremonies, and curated island holiday itineraries",
    ],
    sections: [
      {
        eyebrow: "Cricket for Everyone",
        title: "Inclusive Sports Experiences",
        paragraphs: [
          "Cricket belongs to everyone — men, women, children, families, and passionate fans. From friendly matches and tournaments to school exchanges and cricket holidays, we coordinate the complete experience.",
          "We welcome cricket lovers from India, Bangladesh, Pakistan, Hong Kong, Thailand, Malaysia, the UAE, the UK, Australia, and around the world.",
        ],
        bulletPoints: [
          "T10, T20, and 30-over competitive and friendly match fixtures",
          "School and university sports exchange programmes",
          "Women's cricket development tours and junior academy matches",
          "Corporate sports retreats and inter-company challenges",
        ],
      },
      {
        eyebrow: "From Pitch to Paradise",
        title: "The Complete Sri Lankan Sports Holiday",
        paragraphs: [
          "We coordinate everything from match logistics and turf ground bookings to hotel accommodation, private team coaching buses, sightseeing, and evening fellowship dinners.",
          "After the match, players and families explore golden beaches, wildlife safaris, misty tea estates, wellness centres, and famous coastal surf spots.",
        ],
        bulletPoints: [
          "Professional ground bookings across Colombo, Kandy, Galle, and Dambulla",
          "Umpiring, match balls, scorers, and medical coordination provided",
          "Fellowship dinners and networking events with local sports clubs",
          "Combined leisure tours covering beaches, wildlife, and tea country",
        ],
      },
    ],
    promise: {
      title: "Our Sports Promise",
      lines: [
        "Play together.",
        "Travel together.",
        "Connect through sports.",
        "Return with lifelong friendship and happiness.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },

  romantic: {
    id: 4,
    eyebrow: "Where Every Journey Becomes a Love Story",
    heading: "Romantic Tourism",
    subheading: "Curated Honeymoons, Anniversary Escapes & Intimate Celebrations",
    lead: [
      "At AM Romance Guru, we believe romance is not just about a destination — it is about the beautiful moments created together along the journey.",
      "Discover Sri Lanka through specially curated romantic experiences — from golden sunrises and breathtaking sunsets to scenic train rides, tropical beaches, misty mountains, tea estates, waterfalls, wildlife, heritage, and wellness.",
    ],
    highlights: [
      "Private luxury pool villas, colonial tea planters' bungalows, and ocean-view suites",
      "Candlelight dinners on secluded beaches and beneath star-filled hill country skies",
      "Couple spa treatments, private scenic transfers, and bespoke romantic surprises",
    ],
    sections: [
      {
        eyebrow: "Curated Moments",
        title: "Intimate Experiences Designed for Two",
        paragraphs: [
          "Enjoy candlelight dinners, private island experiences, couple photography, special celebrations, and delightful surprises designed to turn every day of your journey into a cherished memory.",
          "Every route is paced unhurriedly, ensuring privacy, comfort, and plenty of time to relax together.",
        ],
        bulletPoints: [
          "Romantic welcome with garlands, chilled king coconuts, and celebratory treats",
          "Golden sunrise viewpoints and private sunset catamaran cruises",
          "First-class observation carriage on the scenic Ella hill-country train",
          "Private candlelight beach dinners with fresh seafood and lanterns",
          "Couple Ayurvedic massages and botanical flower-bath treatments",
          "Professional couple photoshoot sessions at iconic Sri Lankan viewpoints",
        ],
      },
    ],
    promise: {
      title: "Our Romance Promise",
      lines: [
        "Travel together.",
        "Feel more.",
        "Love more.",
        "Remember forever.",
      ],
      signature: "AM Romance Guru",
      tagline: "Creating Romantic Journeys • Celebrating Togetherness • Making Memories",
    },
  },

  "womens-friendship": {
    id: 5,
    eyebrow: "Travel • Connect • Celebrate • Empower",
    heading: "Women's Friendship Tourism",
    subheading: "Safe, Respectful & Enriching Group Travel Exclusively for Women",
    lead: [
      "We proudly introduce Women's Friendship Tourism to the Sri Lankan tourism industry — a respectful, safe, and enjoyable concept created exclusively for women to travel freely, experience Sri Lanka, build friendships, and create unforgettable memories together.",
      "Women are not only beautiful — they are great human leaders.",
    ],
    highlights: [
      "Strict safety protocols, vetted female-friendly stays, and supportive professional guides",
      "Perfect for Old Girls' Associations (OGA), women entrepreneurs, and social circles",
      "Blend of wellness, light adventure, artisan workshops, and coastal relaxation",
    ],
    sections: [
      {
        eyebrow: "Sisterhood & Exploration",
        title: "Freedom, Friendship & Joy",
        paragraphs: [
          "From nature, adventure, games, sports, and wellness to peaceful retreats, cultural experiences, and meaningful exchanges with Sri Lankan women artisans, every journey is designed around freedom, friendship, fun, and connection.",
          "Our programmes create a comfortable environment where women of all generations can unwind, laugh, share stories, and celebrate milestones together.",
        ],
        bulletPoints: [
          "Ladies' Entrepreneur Clubs and professional networking getaways",
          "Girls' School Old Girls' Association (OGA) reunions and holiday tours",
          "Wellness, yoga, and Ayurvedic rejuvenation retreats",
          "Culinary masterclasses with local village women and tea-plucking experiences",
          "Safe beach escapes, shopping excursions, and boutique handicraft visits",
        ],
      },
    ],
    promise: {
      title: "Our Friendship Promise",
      lines: [
        "Travel together.",
        "Connect naturally.",
        "Celebrate womanhood.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },

  "fun-leisure": {
    id: 6,
    eyebrow: "One Country • Many Experiences • Endless Memories",
    heading: "Fun & Leisure Escapes",
    subheading: "Vibrant Coastal Escapes, Water Sports, Adventure Trails & Social Occasions",
    lead: [
      "Our objective is to create innovative, enjoyable, and affordable leisure experiences in Sri Lanka for different age groups, communities, and travel interests — bringing people together to relax, enjoy, connect, and create unforgettable memories.",
    ],
    highlights: [
      "Custom beach gatherings, water sports, boat excursions, and coastal live music",
      "Thrilling hill country adventures: white-water rafting, zip-lining, and jungle hikes",
      "Flexible, energetic itineraries for youth groups, families, and social communities",
    ],
    sections: [
      {
        eyebrow: "Coastal & Island Fun",
        title: "Destinations with a Difference",
        paragraphs: [
          "We identify and develop suitable Sri Lankan destinations tailored to the personality and energy of each group.",
          "Whether you seek lively coastal energy, serene tea-country cool, or adrenaline-filled mountain rivers, we craft experiences that maximize every moment.",
        ],
        bulletPoints: [
          "Beach & Coastal Escapes: Bentota, Hikkaduwa, Unawatuna, Mirissa, Trincomalee, Pasikuda",
          "Hill Country Escapes: Kandy, Nuwara Eliya, Ella, Haputale",
          "Nature & Adventure Escapes: Kitulgala rafting, Sigiriya, Dambulla, Knuckles mountain range",
          "City & Entertainment Escapes: Colombo, Negombo, Kandy",
        ],
      },
      {
        eyebrow: "Social & Outdoor Leisure",
        title: "Water Sports, Nightlife & Social Gatherings",
        paragraphs: [
          "For suitable age groups and destinations, we introduce carefully selected evening and leisure experiences, combining dining, music, social occasions, and the warm, vibrant atmosphere of Sri Lanka.",
          "We also connect sports and water adventures with tourism, creating special programmes for social clubs, youth groups, and active families.",
        ],
        bulletPoints: [
          "Jet skiing, wakeboarding, banana boat rides, and lagoon catamaran safaris",
          "Snorkelling with sea turtles and coral reef exploration in Pigeon Island & Hikkaduwa",
          "Beachfront sunset barbecues and live music dinners",
          "Group safari jeep convoys through national parks",
        ],
      },
    ],
    promise: {
      title: "Our Leisure Vision",
      lines: [
        "One country.",
        "Many experiences.",
        "Endless memories.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },

  "nature-trails": {
    id: 7,
    eyebrow: "Discover the Wild Beauty of Sri Lanka • Breathe, Explore, Connect",
    heading: "Nature Tourism & Trails",
    subheading: "Rainforests, Highlands, Cascading Waterfalls, Wildlife & Eco-Living",
    lead: [
      "Sri Lanka is a land where nature is never far away. From mist-covered mountains and ancient forests to golden beaches, spectacular waterfalls, rivers, lakes, and rich wildlife, this island offers an extraordinary variety of natural wonders.",
      "At AM Travel's Guru, we invite you to discover Sri Lanka beyond the standard routes — to slow down, breathe deeply, and experience the beauty of nature in a more meaningful way.",
    ],
    highlights: [
      "Guided treks through Sinharaja UNESCO Rainforest, Knuckles Range, and Horton Plains",
      "Ethical wildlife safaris in Yala, Wilpattu, Minneriya, and Udawalawe",
      "Responsible eco-lodges, waterfall bathing spots, and sustainable community trails",
    ],
    sections: [
      {
        eyebrow: "Natural Wonders",
        title: "From Mountains to Ocean",
        paragraphs: [
          "Within a single journey, you can experience mist-clad mountains, primary rainforests, dramatic waterfalls, tea estates, wild animal sanctuaries, rural farming villages, freshwater lagoons, and pristine coastlines.",
          "Our nature trails are led by knowledgeable local naturalists who share the ecology, birdlife, and botanical wonders of the island.",
        ],
        bulletPoints: [
          "Forests & Wilderness: Sinharaja Rainforest and Knuckles Mountain Range nature treks",
          "Mountains & Highlands: World's End precipice, Little Adam's Peak, and Lipton's Seat",
          "Waterfalls & Rivers: Diyaluma, Bambarakanda, Devon, and St. Clair's falls",
          "Wildlife Safaris: Elephants, leopards, sloth bears, and 400+ species of birds",
          "Village & Rural Living: Traditional farming communities, lake catamarans, and organic food",
        ],
      },
      {
        eyebrow: "Eco-Philosophy",
        title: "Responsible Travel & Conservation",
        paragraphs: [
          "Our Nature Tourism vision encourages responsible travel that respects Sri Lanka's environment, wildlife, local communities, and cultural heritage.",
          "We believe tourism should not only bring visitors to beautiful places — it should also help protect those places for future generations.",
        ],
        bulletPoints: [
          "Zero-waste trail practices and single-use plastic reduction",
          "Support for local community guides, village homestays, and regional artisans",
          "Ethical wildlife viewing guidelines with non-intrusive safari practices",
        ],
      },
    ],
    promise: {
      title: "Our Nature Promise",
      lines: [
        "Come closer to Sri Lanka.",
        "Come closer to nature.",
        "Travel responsibly: Leave only footprints, take only memories.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },

  business: {
    id: 8,
    eyebrow: "Business Opportunities • Partnerships • Set-Up • Operational Support",
    heading: "Pathway to Incorporate",
    subheading: "Your Gateway to Doing Business & Investing in Sri Lanka",
    lead: [
      "Starting a business in a new country can be challenging. Finding the right opportunity, understanding the local market, establishing a company, finding premises and talent, connecting with professional services, and building reliable partnerships require local knowledge.",
      "Our objective is to become a trusted Business Gateway to Sri Lanka, connecting foreign investors, entrepreneurs, companies, professionals, and local partners with the right opportunities, resources, and operational support.",
    ],
    highlights: [
      "Company incorporation, bank account opening, and regulatory navigation support",
      "B2B partner matchmaking, supplier sourcing, and distributor network setup",
      "Office premises identification, co-working connections, and talent recruitment",
    ],
    sections: [
      {
        eyebrow: "Pillars 1 & 2",
        title: "Foreign Investor Entry & Start-Up Advisory",
        paragraphs: [
          "We help international investors explore high-potential sectors in Sri Lanka, offering structured market-entry guidance, partner identification, and end-to-end setup facilitation.",
          "For entrepreneurs with ambitious concepts, we provide feasibility understanding, corporate structuring, and launch guidance to ensure informed capital decisions.",
        ],
        bulletPoints: [
          "Sector opportunity assessments in tourism, renewable energy, IT, agriculture, and logistics",
          "Company registration (PVT LTD), BOI facilitation, and legal counsel coordination",
          "Taxation advisory, accounting firm introductions, and commercial banking assistance",
          "Executive office space and flexible incubation workspace arrangements",
        ],
      },
      {
        eyebrow: "Pillars 3 & 4",
        title: "Trading, Logistics & Talent Recruitment",
        paragraphs: [
          "For companies involved in importing, exporting, distribution, and trading, we provide operational coordination across shipping, clearance, documentation, and warehousing.",
          "We also build bridges between growing businesses and Sri Lanka's educated university talent pool for internships, trainee programmes, and full-time hiring.",
        ],
        bulletPoints: [
          "Import/export documentation, customs clearance, and logistics coordination",
          "Local warehousing, distribution network connections, and supplier vetting",
          "University student recruitment bridge for IT, management, finance, and hospitality",
          "Joint venture facilitation connecting foreign capital with vetted local enterprises",
        ],
      },
    ],
    promise: {
      title: "Our Business Philosophy",
      lines: [
        "Your idea.",
        "Our local connections.",
        "The right professionals.",
        "A clear pathway to business.",
      ],
      signature: "AMCI Global Ventures & AM Travel's Guru",
      tagline: "Creating Opportunities • Empowering Communities • Building Sustainable Futures",
    },
  },

  mice: {
    id: 9,
    eyebrow: "Meetings • Incentives • Conferences • Exhibitions",
    heading: "MICE Tourism & Corporate Travel",
    subheading: "Business Beyond Boundaries — Experiences Beyond Business",
    lead: [
      "MICE tourism brings together business travel and extraordinary island experiences, creating high-value journeys for corporate organizations, executives, and international delegates.",
      "At AM Travel's Guru, we manage corporate forums, incentive awards, conferences, and exhibitions with flawless attention to detail.",
    ],
    highlights: [
      "State-of-the-art convention halls and oceanfront meeting pavilions",
      "Exciting employee incentive itineraries combining adventure, wellness, and beach luxury",
      "Complete logistics: airport meet & greet, luxury coaches, AV setups, and gala dinners",
    ],
    sections: [
      {
        eyebrow: "The Four Pillars",
        title: "Meetings, Incentives, Conferences & Exhibitions",
        paragraphs: [
          "The real strength of MICE tourism in Sri Lanka is converting corporate travel into memorable island stories. A multi-day conference transitions smoothly into cultural tours, wellness retreats, beach banquets, and networking galas.",
        ],
        bulletPoints: [
          "Meetings: Board meetings, strategic retreats, leadership forums, and team-building workshops in Colombo, Kandy, Bentota, and Galle",
          "Incentive Travel: High-performing sales rewards, dealer reward trips, and executive luxury holidays with curated leisure itineraries",
          "Conferences: International business summits, medical symposiums, IT conventions, and trade forums with full delegate management",
          "Exhibitions & Events: Product launches, B2B trade expos, gala dinners, award ceremonies, and fashion/cultural showcases",
        ],
      },
    ],
    promise: {
      title: "Our MICE Vision",
      lines: [
        "Meet.",
        "Inspire.",
        "Connect.",
        "Experience.",
      ],
      signature: "AM MICE Guru — AM Travel's Guru",
      tagline: "Business Beyond Boundaries — Experiences Beyond Business",
    },
  },

  "happy-retirement": {
    id: 10,
    eyebrow: "Retire • Relax • Rediscover • Stay Longer",
    heading: "Happy Retirement Life",
    subheading: "Peaceful Living, Authentic Ayurveda, Gentle Climates & Warm Hospitality",
    lead: [
      "We warmly invite retired citizens to discover Sri Lanka as your ideal destination for a happy, healthy, and peaceful retirement life.",
      "Enjoy a fulfilling new chapter surrounded by natural beauty, wellness, spirituality, warm hospitality, and your choice of tropical coastal warmth or refreshing mountain air.",
      "Make Sri Lanka your home away from home — and turn retirement into a beautiful journey of happiness, wellness, and endless memories.",
    ],
    highlights: [
      "Unhurried daily pacing, private driver-guides, and 24/7 dedicated assistance",
      "Authentic Ayurvedic wellness treatments and gentle herbal therapies",
      "Comfortable long-stay garden villas, hill country cottages, and beachside retreats",
    ],
    sections: [
      {
        eyebrow: "Rest & Rejuvenation",
        title: "A Gentle Lifestyle Tailored for You",
        paragraphs: [
          "Our retirement programmes are designed around slow mornings, wholesome organic cuisine, pleasant walks in scenic nature, and restful evenings.",
          "We offer long-stay options where visitors can spend weeks or months relaxing in scenic tea-country bungalows or tranquil coastal residences with complete housekeeping, culinary, and medical access support.",
        ],
        bulletPoints: [
          "Personalized Ayurvedic wellness schedules guided by experienced Ayurvedic physicians",
          "Gentle morning walks through tea gardens, botanical parks, and golden beaches",
          "Comfortable accommodations with modern accessibility, ground-floor suites, and lush gardens",
          "Cultural visits to quiet temples, colonial libraries, art galleries, and craft markets",
          "Dedicated companion guides and private air-conditioned vehicles for easy mobility",
        ],
      },
    ],
    promise: {
      title: "Our Retirement Promise",
      lines: [
        "Retire peacefully.",
        "Live healthily.",
        "Cherish every sunrise.",
      ],
      signature: "AM Travel's Guru",
      tagline: "Guide to Endless Happiness",
    },
  },
};

export function conceptDetail(slug: string): ConceptDetail | undefined {
  return CONCEPT_DETAILS[slug];
}

export function conceptGallery(slug: string): string[] {
  const images = (galleryManifest as Record<string, string[]>)[slug];
  return images || [];
}
