# Guru Lanka Journey

PROJECT: AM Travel's Guru Lanka — a Sri Lanka travel & tourism website. Build this as a modern, mobile-first, animated marketing + discovery website (Stage 1 — no backend/auth logic yet, just working forms that submit to an email/webhook placeholder). Use React + Tailwind. Read all phases before starting — later phases depend on the design system built in Phase 0.

Tagline: "Guide to Endless Happiness" Positioning line: "You imagine the journey. We design the experience." Brand line: New Thoughts • New Missions • Unique Concepts • Great Hospitality

================================================================ PHASE 0 — DESIGN SYSTEM (build this first, every later phase must use it)

Do not use a generic travel-template look (cream background + terracotta accent, or dark-hero + bold-sans). Build a distinct identity from Sri Lanka's own materials — tea, spice, ocean, temple stone.

Color tokens:

--color-ocean-teal: #0B4F4A (deep sections, footer, video overlays)

--color-tea-green: #4C7A57 (hill-country accents, secondary buttons)

--color-spice-gold: #E0A458 (the ONE warm accent — CTAs, the map route-line — use sparingly)

--color-sand-cream: #F6EFE3 (light section backgrounds)

--color-ink: #1C2B28 (body text, not pure black)

Typography:

Display/headline font: a warm, slightly rounded serif with a carved/hand-lettered feel (evokes temple inscriptions and old Ceylon tea labels). Use only for hero lines and section titles.

Body/UI font: a clean geometric sans, used for body copy, buttons, nav, forms. Must stay easy to scan on mobile.

Set a clear type scale (mobile and desktop sizes) for h1/h2/h3/body/caption.

Layout rules:

Full-bleed photography between sections, not everything boxed in cards.

Generous whitespace; sand-cream and ocean-teal alternate as section backgrounds.

Rounded corners on cards/buttons (moderate radius, not pill-shaped everywhere).

Motion rules (define as reusable utilities/animation variants):

Page load: hero image does one slow crossfade — no bouncing text, no typewriter effects.

Scroll reveal: elements fade + lift ~16px into view on scroll, staggered ~100ms apart, triggered once (not on every scroll pass).

Hover: cards lift a few px + their photo gently scales up (~1.03x); buttons shift color/underline — nothing more elaborate.

Respect prefers-reduced-motion: fall back to opacity fades only, no movement, for all of the above.

Explicitly avoid: particle effects, spinning icons, letter-by-letter text typing, parallax on every section, auto-playing carousels.

Build a small style-guide section (can be a hidden dev route) showing color swatches, type scale, and button/card states — reference this instead of re-deciding style choices in later phases.

================================================================ PHASE 1 — GLOBAL LAYOUT (header, footer, sticky contact bar)

Header: logo left (placeholder logo slot), simple nav — Discover | Explore Map | Trips | Packages | For Agents | For Partners | Contact. Collapses to a mobile hamburger menu below 768px.

Footer: company name, tagline, brand line, social icons (Facebook/Instagram/WhatsApp), quick links repeating the nav, copyright line.

Sticky elements (present on every page):

A floating action button, bottom-right, always visible: "Talk to a Travel Guru" — opens a small menu with Call / WhatsApp / Ask a Question. Give it a slow, soft pulse animation (respecting reduced-motion).

On content pages (Trips, Packages, destination detail pages), also show a slim sticky bar at the bottom on mobile with Call / WhatsApp / Enquire Now buttons.

================================================================ PHASE 2 — HOMEPAGE

Build sections top to bottom, each visitor-facing label phrased as a plain question, not a feature name:

HERO — full-bleed photo/video background, headline "Where do you want to go in Sri Lanka?", subheadline with the positioning line, primary button "Start My Journey", and 6 quick-pick chips: Beaches | Mountains | Wildlife | Temples | Wellness | History. Clicking a chip scrolls to / opens the journey builder (Phase 8) pre-filtered to that interest.

WHY SRI LANKA — 4–5 large photos in a scroll-reveal grid, one short line of copy each (no paragraphs).

EXPLORE THE MAP — teaser section linking to the full Sri Lanka Explorer (Phase 4): a stylized map graphic with a few glowing pins, headline "Tap a place, see what's there", button "Explore the Map".

READY-MADE TRIPS — horizontally scrollable / grid of cards for the 8 Guru Collections (Phase 5): Beach, Hill Country, Wildlife, Spiritual, Wellness, Romance, Family, Eco. Each card: one photo, one line of copy, "See this trip" button.

HOW LONG IS YOUR TRIP — row of duration chips: 3 / 5 / 7 / 10 / 14 Days, plus "Or tell us" which opens the journey builder.

ARE YOU A TRAVEL AGENT — banner section, ocean-teal background, headline "Grow your Sri Lanka business with us", button "Partner With Us" → links to Phase 7 B2B page.

WHO WE WORK WITH — logos/icons row: Hotels · Villas · Guides · Drivers · Restaurants · Wellness · Safari, button "List Your Business" → links to Phase 7 Supplier page.

WHAT TRAVELLERS SAY — testimonial cards with photo, short quote (keep each under 2 sentences), name/origin.

================================================================ PHASE 3 — DISCOVER SECTION (14 categories)

Build a Discover grid/carousel page and 14 individual category pages. Use visitor-facing labels as the primary label everywhere (internal name in parentheses is for your reference only, don't show it):

Beaches (Beach & Coastal) · History & Old Cities (Culture & Heritage) · Safaris & Wildlife (Wildlife & Nature) · Adventure & Sports · Yoga & Ayurveda (Wellness & Ayurveda) · Temples & Sacred Sites (Religious & Pilgrimage) · Diving & Whale Watching (Marine & Ocean) · Tea Country & Mountains (Hill Country & Tea) · Eco Stays & Villages (Eco & Sustainable) · Luxury Escapes (Luxury & Bespoke) · Weddings & Honeymoons (Romance & Weddings) · Food & Cooking (Culinary & Food) · Village Life (Rural & Community) · Conferences & Business Trips (MICE & Business)

Grid page: 14 tappable tiles, each a photo + label, scroll-reveal on load. Each category detail page: hero photo, 2–3 sentence intro in plain language, photo gallery (use placeholder images), a list of 3–5 linked destinations relevant to that category (linking into the Explorer map, Phase 4), and the sticky Call/WhatsApp/Enquire bar.

================================================================ PHASE 4 — SRI LANKA EXPLORER (interactive map — signature feature)

Build an interactive map of Sri Lanka (SVG or a lightweight map library) with tappable pins grouped by region:

North: Jaffna, Nallur, Nagadeepa, Delft

East: Trincomalee, Nilaveli, Pasikuda, Arugam Bay

South: Galle, Unawatuna, Mirissa, Weligama, Tangalle

West: Colombo, Negombo, Kalpitiya

Hill Country: Kandy, Nuwara Eliya, Ella, Haputale

Cultural Triangle: Anuradhapura, Polonnaruwa, Sigiriya, Dambulla

Behavior:

Tapping a pin opens a detail panel (slide-in on mobile, side panel on desktop) with a photo and a few sentences about the place — no full page navigation needed.

THE SIGNATURE MOMENT: when a visitor arrives from a homepage interest chip (e.g. "Wildlife") or picks an interest filter on this page, animate a gold (--color-spice-gold) route line drawing itself from Colombo out to the matching destinations, like tracing a route with a finger. This should be the single most polished animation on the site — everything else stays quieter than this.

Layout: make the map asymmetric/off-center and larger than a typical "contact us" map — it's a centerpiece, not a widget.

================================================================ PHASE 5 — READY-MADE TRIPS (Guru Collections)

Build a page listing the 8 collections as cards (photo, name, one-line description, "See this trip" button): Beach, Hill Country, Wildlife, Spiritual, Wellness, Romance, Family, Eco.

Each collection detail page: hero photo, short intro, the route as a simple horizontal step list (e.g. Unawatuna → Mirissa → Weligama → Bentota), a "Customize this trip" button that opens the journey builder (Phase 8) pre-filled with this route, and the sticky contact bar.

================================================================ PHASE 6 — EXCLUSIVE TOUR PACKAGES (9 categories)

Build a packages page with 9 expandable sections/cards, each with its sub-items listed underneath:

Spiritual Tours — Tamil Religious Trails · Hindu Religious Trails (Ramayana) · Buddhist Sacred Temples & Heritage Trails

Cultural & Heritage Tours — Cultural Heritage & Monument Trails · Research, Study & Experiential Tourism

Sports Tourism — Cricket Tours · Fellowship & Networking Evenings · T10/T20/30-Over Matches · School/Old Boys/Club/Women's Teams · Badminton Tournaments · Age-Group, Men's & Women's Events

Romantic Tourism — Wedding Function Arrangements · Honeymoon Packages · Romantic Getaways

Women's Friendship Tours — OGA Tours · Office & Professional Women's Tours · Women's Clubs · Family Women's Club Events · Women's Training Programs · Young Women's & University Events

Fun & Leisure Tours — Beach Party Experiences (12–24hr) · Live Music/DJ · Water Sports & Adventure · Romantic Water Trails · River/Lake/Sea Boat Parties

Luxury Tour Packages — Beach & Coastal Trails · Mountain & Nature Trails · Eco Trails · Wildlife & Adventure Trails · City & Lifestyle Trails · Spiritual & Cultural Luxury

Business Opportunity & Innovation Tours — Meetings with Importers/Exporters/Traders · Entrepreneur & Innovator Networks · Employment & Career Opportunities · University Student Business Experiences · Investment Opportunities · Real Estate & Property · Office/Workspace Sharing

MICE & Corporate Tourism — Corporate Forums & Conferences · Awards & Felicitation Events · Work-Study Programs · Sales Incentive Tours · Corporate Group Tours · Tailor-Made Experiences

Each of the 9 cards expands (accordion or modal) to show its sub-items as a simple bullet list plus a short "Customize this tour" button that opens a contact/enquiry form pre-tagged with that category name.

Section footer line: "Unique Experiences · Tailor-Made Concepts · Great Hospitality — AM Travel's Guru Lanka 🇱🇰"

================================================================ PHASE 7 — THREE DOORS (agent & supplier pages)

Build two simple landing pages, linked from the homepage banners:

FOR TRAVEL AGENTS ("Become Our B2B Partner"): headline "Grow your Sri Lanka business with us", short explanation of the partnership (net rates, package catalogue, brochures, itinerary support, commission — describe as coming features, not live functionality yet), and a registration form: company name, country, contact person, email, phone, message. On submit, show a confirmation state — "Thanks, our team will reach out" — no real backend required yet, just a working form UI with a placeholder submit handler.

FOR SUPPLIERS ("Join Our Travel Network"): headline "List your business with Guru Lanka", short explanation for hotels/guides/drivers/restaurants/safari operators/wellness centers, and a registration form: business name, business type (dropdown), location, contact person, email, phone, description. Same confirmation-state pattern on submit.

================================================================ PHASE 8 — "START MY JOURNEY" (conversational trip builder)

Build this as a step-by-step conversational flow (one question per screen/card, progress dots at top, back button), not a long form:

"How many days?" — number stepper or preset chips (3/5/7/10/14/custom)

"What's your budget?" — 3 tiers: Budget / Mid-range / Luxury

"Who's coming?" — Just me / Couple / Family / Friends

"What do you love?" — multi-select chips: Beach / Mountains / Wildlife / Culture / Spiritual / Wellness

"How fancy should it be?" — (can combine with budget tier, or keep separate: Simple / Comfortable / Luxury)

"Any food needs?" — free text or chips: Vegetarian / Halal / No restrictions / Other

"Just us, or a group tour?" — Private vehicle / Group tour

"Which month are you travelling?" — month picker

Result screen — "Your Journey" card:

Title line built from answers, e.g. "8 Days · Couple · Luxury · Beach + Hill Country + Wildlife"

A simple route line, e.g. "Colombo → Sigiriya → Kandy → Ella → Yala → Galle → Bentota" — for this Stage 1 build, generate this route from a static lookup table matching interest combinations to a pre-written route (no real routing logic yet)

"Estimated package: USD [placeholder range]" with the note "Includes Hotels + Transport + Experiences + Guide"

Two buttons: "Customize Journey" (reopens the flow at step 4) and "Chat with Travel Guru" (opens the WhatsApp/contact flow from Phase 1)

Use the scroll-reveal / fade transitions from Phase 0 between steps — no jarring page reloads.

================================================================ BUILD ORDER

Build and verify in this order, since each phase depends on the design system from Phase 0: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. Use placeholder photography (clearly marked as placeholder) throughout — real photography will be swapped in later; do not generate AI-style stock photography, use simple colored placeholder blocks with labels instead so it's obvious what needs replacing.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://guru-lanka-journeys.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4fce5a7b-cb44-4051-8d0c-f826347b33be).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
