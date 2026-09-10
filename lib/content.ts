/**
 * Single source of truth for every project fact used in pages, metadata, and JSON-LD.
 * Last updated: 2026-09-06
 *
 * This site is the Primary Information Hub for South Banks Towns (formerly Coastal Towns).
 * Pricing-tracker angle belongs to the sibling domain coastaltowns.ca — do not duplicate that
 * sentence-level writing here.
 */

export const SITE_URL = "https://coastaltownsmississauga.com";
export const SITE_HOST = "coastaltownsmississauga.com";
export const SITE_SOURCE = "coastaltownsmississauga.com";

export const LAST_UPDATED = "September 6, 2026";
export const LAST_UPDATED_ISO = "2026-09-06";

export const PROJECT_NAME = "South Banks Towns";
export const PROJECT_NAME_LONG = "South Banks Towns (formerly Coastal Towns)";
export const LEGACY_NAME = "Coastal Towns";
export const LEGACY_NAME_ALT = "Coastal Townhomes";
export const BUILDER = "Deco Homes and Opus Homes";
export const BUILDER_SHORT = "Deco Homes & Opus Homes";
export const CITY = "Mississauga";
export const NEIGHBOURHOOD = "Lakeview Village";
export const PROVINCE = "Ontario";
export const COUNTRY = "Canada";
export const STREET_ADDRESS = "1110 Lakeshore Road East";
export const ADDRESS_LOCALITY = "Mississauga";
export const ADDRESS_REGION = "ON";
export const ADDRESS_COUNTRY = "CA";
export const POSTAL_PRIMARY = "L5E 1E4";
export const POSTAL_LEGACY = "L5E 1E8";

export const GEO = {
  latitude: 43.5764,
  longitude: -79.5489,
} as const;

export const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${STREET_ADDRESS}, ${CITY}, ${PROVINCE}`,
)}&z=15&output=embed`;

export const HOME_TYPES =
  "120+ three-storey freehold townhomes (3-bed, 3-bed + den, 4-bed, premium end-unit)";
export const STATUS = "Priority registration open";
export const STATUS_SHORT = "Priority registration";
export const LAUNCH = "Fall 2026 (reported)";
export const COMPLETION = "2028";
export const UNIT_COUNT = "120+";
export const PRICE_RANGE_DISPLAY = "$500,000s to ~$1,000,000";
export const PRICE_LOW = 500000;
export const PRICE_HIGH = 1000000;

export const SITE_NAME = "South Banks Towns (formerly Coastal Towns)";
export const SITE_ORG_NAME = "South Banks Towns Independent Information";

export const HERO_IMAGE = {
  src: "/images/south-banks-hero.webp",
  fallbackSrc: "/images/south-banks-hero.jpg",
  alt: "Lake Ontario shoreline in Mississauga's Lakeview area at golden hour — waterfront context for South Banks Towns, formerly marketed as Coastal Towns. Not an architectural rendering of the townhomes.",
  width: 1920,
  height: 1080,
  caption:
    "Lake Ontario shoreline context near Lakeview Village. This is location photography, not a South Banks Towns architectural rendering.",
} as const;

export const OG_IMAGE = {
  src: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "South Banks Towns (formerly Coastal Towns) — Lake Ontario waterfront context in Lakeview Village, Mississauga.",
} as const;

export const REGISTRATION_IMAGE = {
  src: "/images/registration-waterfront.webp",
  fallbackSrc: "/images/registration-waterfront.jpg",
  width: 1200,
  height: 1200,
  alt: "Lake Ontario water at dusk near Mississauga's Lakeview shoreline — VIP registration context for South Banks Towns. Not a townhome rendering.",
  caption: "Lake Ontario dusk light near Lakeview. Context photography, not a project rendering.",
} as const;

export type SiteImage = {
  id: string;
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  title: string;
  pending?: boolean;
};

export const GALLERY_ITEMS: SiteImage[] = [
  {
    id: "renderings-pending",
    src: "/images/south-banks-hero.webp",
    fallbackSrc: "/images/south-banks-hero.jpg",
    width: 1920,
    height: 1080,
    title: "Official renderings — to be added",
    alt: "Lake Ontario shoreline used as a labelled placeholder until licensed South Banks Towns architectural renderings are available.",
    caption:
      "Official South Banks Towns / Coastal Towns architectural renderings have not been confirmed as licensable for this site. This panel is a labelled “to be added” state, not a substitute streetscape.",
    pending: true,
  },
  {
    id: "site-plan-pending",
    src: "/images/jim-tovey-conservation.webp",
    fallbackSrc: "/images/jim-tovey-conservation.jpg",
    width: 1920,
    height: 1080,
    title: "Site plan — to be added",
    alt: "Waterfront conservation boardwalk near Lakeview Village, used as a labelled placeholder until an official South Banks Towns site plan is released.",
    caption:
      "No official South Banks Towns site plan has been published for republication here. Register for updates when a confirmed plan is released.",
    pending: true,
  },
  {
    id: "conservation",
    src: "/images/jim-tovey-conservation.webp",
    fallbackSrc: "/images/jim-tovey-conservation.jpg",
    width: 1920,
    height: 1080,
    title: "Jim Tovey Lakeview Conservation Area context",
    alt: "Boardwalk through shoreline grasses on a restored Lake Ontario conservation shoreline near Lakeview Village, Mississauga.",
    caption:
      "Waterfront conservation context consistent with the Jim Tovey Lakeview Conservation Area (64 acres / 26 hectares). Context photography; not a South Banks Towns amenity rendering.",
  },
  {
    id: "pier",
    src: "/images/lakeview-pier.webp",
    fallbackSrc: "/images/lakeview-pier.jpg",
    width: 1920,
    height: 1080,
    title: "Pier and boardwalk context",
    alt: "Wooden pier extending into Lake Ontario, illustrating the waterfront boardwalk character described for Lakeview Village.",
    caption:
      "Lakeview Village’s master plan cites a 600-metre pier with a retail boardwalk. This is waterfront context photography, not a confirmed South Banks Towns construction photo.",
  },
  {
    id: "promenade",
    src: "/images/lakefront-promenade.webp",
    fallbackSrc: "/images/lakefront-promenade.jpg",
    width: 1600,
    height: 1200,
    title: "Lakefront Promenade Park context",
    alt: "Tree-lined waterfront path beside Lake Ontario in Mississauga, illustrating parks near 1110 Lakeshore Road East.",
    caption:
      "Named nearby parks include Lakefront Promenade Park and Marie Curtis Park. Confirm walking distances independently; this is not a project site photo.",
  },
  {
    id: "trail",
    src: "/images/waterfront-trail.webp",
    fallbackSrc: "/images/waterfront-trail.jpg",
    width: 1920,
    height: 1080,
    title: "Great Lakes Waterfront Trail context",
    alt: "Crushed-stone waterfront trail along a restored Lake Ontario shoreline near Mississauga.",
    caption:
      "The Jim Tovey Lakeview Conservation Area connects to the Great Lakes Waterfront Trail. Context photography of shoreline parkland, not a South Banks Towns rendering.",
  },
];

export const HOME_ANSWER =
  "This project was originally marketed as Coastal Towns and has since been rebranded to South Banks Towns — a pre-construction waterfront community of 120+ freehold townhomes by Deco Homes and Opus Homes at 1110 Lakeshore Road East in Mississauga's Lakeview Village. Reported pricing spans the $500,000s to roughly $1 million, with a Fall 2026 launch and 2028 completion.";

export const QUICK_FACTS: { label: string; value: string }[] = [
  { label: "Current name", value: "South Banks Towns" },
  { label: "Formerly marketed as", value: "Coastal Towns / Coastal Townhomes" },
  { label: "Builders", value: "Deco Homes & Opus Homes" },
  { label: "Type", value: "3-storey freehold townhomes (120+ units)" },
  { label: "Address", value: "1110 Lakeshore Road East, Mississauga, ON" },
  { label: "Master plan", value: "Lakeview Village (177 acres, waterfront)" },
  {
    label: "Price range (reported, varies by source)",
    value: "$500,000s to ~$1,000,000",
  },
  { label: "Launch", value: "Fall 2026 (reported)" },
  { label: "Completion", value: "2028" },
  { label: "Status", value: "Priority registration open" },
];

export type FloorCollection = {
  id: string;
  name: string;
  status: string;
  summary: string;
};

export const COLLECTIONS: FloorCollection[] = [
  {
    id: "three-bedroom",
    name: "3-Bedroom",
    status: "Configuration type — sizes unreleased",
    summary:
      "The three-bedroom freehold townhome is the core family layout reported for South Banks Towns. Each home is described as a three-storey coastal-style town with a private entrance and layered outdoor space. Exact interior square footage, garage configuration, and plan names have not been published. Register to receive the confirmed 3-bedroom collection sheet when Deco Homes and Opus Homes release it.",
  },
  {
    id: "three-bedroom-den",
    name: "3-Bedroom + Den",
    status: "Configuration type — sizes unreleased",
    summary:
      "A 3-bedroom-plus-den option is listed among the South Banks Towns configurations. The den is typically used as a work-from-home room, guest space, or fourth sleeping area depending on the unreleased floor plate. No plan name or den dimensions have been confirmed. This page does not invent a square-footage figure.",
  },
  {
    id: "four-bedroom",
    name: "4-Bedroom",
    status: "Configuration type — sizes unreleased",
    summary:
      "Four-bedroom townhomes are reported as part of the 120-plus freehold collection. In a three-storey waterfront town, a fourth bedroom usually sits on an upper level or is created from a wider interior plate. Until a brochure names the 4-bedroom plans, treat any specific size quoted elsewhere as unverified.",
  },
  {
    id: "end-unit",
    name: "Premium End-Unit",
    status: "Configuration type — sizes unreleased",
    summary:
      "Premium end-unit layouts are cited separately from interior row towns — typically extra windows, a wider lot, or additional outdoor exposure. End units at South Banks Towns have not been priced or sized in a primary source. Register for the allocation sheet rather than relying on another Lakeview Village builder’s end-unit numbers.",
  },
];

export type PricingRow = {
  label: string;
  value: string;
  source: string;
};

export const PRICING_ROWS: PricingRow[] = [
  {
    label: "Reported starting range (several sources)",
    value: "From the $500,000s",
    source: "Multiple aggregator listings under the South Banks name",
  },
  {
    label: "Reported starting range (alternate)",
    value: "From the $700,000s",
    source: "thesouthbankstowns.ca",
  },
  {
    label: "Reported full span",
    value: "$500,000s to about $1,000,000",
    source: "uphomes.ca; southbankstowns.com",
  },
  {
    label: "Confirmed builder price list",
    value: "Not published as a single official list as of September 6, 2026",
    source: "No primary Deco Homes / Opus Homes price sheet located",
  },
  {
    label: "Deposit structure",
    value: "Register for the current structure when it is released",
    source: "No South Banks-specific deposit schedule found",
  },
  {
    label: "Launch timing (reported)",
    value: "Fall 2026 (“coming this fall” in summer-2026 listings)",
    source: "southbanks.ca; uphomes.ca",
  },
  {
    label: "Targeted completion",
    value: "2028",
    source: "remaxpluscity.com; condoroyalty.com",
  },
];

export type ComparisonRow = {
  project: string;
  builder: string;
  notes: string;
};

export const LAKEVIEW_COMPARISON: ComparisonRow[] = [
  {
    project: "South Banks Towns (formerly Coastal Towns)",
    builder: "Deco Homes & Opus Homes",
    notes:
      "120+ three-storey freehold townhomes at 1110 Lakeshore Road East. Reported pricing spans the $500,000s to about $1 million. Fall 2026 launch reported; 2028 completion.",
  },
  {
    project: "Aura Lakeview Village Towns",
    builder: "Caivan Communities",
    notes:
      "A separate townhome release inside the same 177-acre Lakeview Village master plan. Not a Deco/Opus project and not a rename of Coastal Towns.",
  },
  {
    project: "Pier House Towns",
    builder: "Branthaven",
    notes:
      "Another distinct Lakeview Village townhome community by a different builder. School names sometimes cited beside Pier House are not confirmed as the South Banks catchment.",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Is Coastal Towns the same project as South Banks?",
    a: "Yes. Coastal Towns (also marketed as Coastal Townhomes) was the original working name for this Deco Homes and Opus Homes waterfront townhome project in Mississauga's Lakeview Village. Multiple recent sources confirm the project has since been rebranded and is now marketed as South Banks, or South Banks Towns.",
  },
  {
    q: "What is South Banks Towns?",
    a: "South Banks Towns is a pre-construction community of 120-plus three-storey freehold townhomes by Deco Homes and Opus Homes at 1110 Lakeshore Road East in Mississauga's Lakeview Village, a 177-acre master-planned waterfront redevelopment on Lake Ontario.",
  },
  {
    q: "Who is building South Banks Towns?",
    a: "South Banks Towns is a joint development by Deco Homes, founded in 1995 and known for its 4,000-square-foot Decor Studio with over 1,000 design options, and Opus Homes, a GTA builder known for its 'Living Refined™' positioning.",
  },
  {
    q: "Where is South Banks Towns located?",
    a: "South Banks Towns is located at 1110 Lakeshore Road East in Mississauga, Ontario, within Lakeview Village, a 177-acre master-planned waterfront community on the shore of Lake Ontario.",
  },
  {
    q: "What home types will South Banks Towns include?",
    a: "South Banks Towns includes more than 120 three-storey freehold townhomes with private entrances, offered in 3-bedroom, 3-bedroom-plus-den, 4-bedroom, and premium end-unit configurations.",
  },
  {
    q: "How much do homes cost at South Banks Towns?",
    a: "Reported pricing varies by source: some cite 'from the $500,000s,' others 'from the $700,000s,' and one source states a range up to $1 million. Register directly for the current, confirmed price list.",
  },
  {
    q: "When does South Banks Towns launch?",
    a: "Multiple sources reported South Banks Towns as 'coming this fall,' pointing to a Fall 2026 launch, with a targeted completion date of 2028.",
  },
  {
    q: "What is near South Banks Towns?",
    a: "South Banks Towns sits near the Jim Tovey Lakeview Conservation Area (64 acres), Lakefront Promenade Park, and Marie Curtis Park, within a master plan that includes 45+ acres of green space, a 600-metre pier with a retail boardwalk, and a marina.",
  },
  {
    q: "How does South Banks Towns compare to other Lakeview Village communities?",
    a: "South Banks Towns is one of several Lakeview Village releases, alongside Aura Lakeview Village Towns by Caivan Communities and Pier House Towns by Branthaven — each a separate project by a different builder within the same 177-acre master plan.",
  },
  {
    q: "What transit serves South Banks Towns?",
    a: "Reported access includes Long Branch GO Station (roughly 4-8 minutes), Port Credit (about 8 minutes), the QEW (under 10 minutes), and Highway 427, with Toronto Pearson International Airport also accessible.",
  },
  {
    q: "Is South Banks Towns a good investment?",
    a: "South Banks Towns sits within Lakeview Village, reported to be backed by more than $1 billion in surrounding infrastructure investment on genuinely scarce GTA waterfront land — generally favourable long-term fundamentals. Independently verify current pricing, deposit terms, and launch timing given the conflicting figures reported.",
  },
  {
    q: "How do I register for South Banks Towns updates?",
    a: "Register directly on this site with your first name, last name, email, and phone number to be added to the South Banks Towns update list.",
  },
  {
    q: "What schools are near South Banks Towns?",
    a: "Exact school catchment for this address has not been confirmed. The general area falls within the Peel District School Board and the Dufferin-Peel Catholic District School Board; confirm the exact catchment directly before purchasing.",
  },
  {
    q: "What is the deposit structure for South Banks Towns?",
    a: "A confirmed deposit structure has not been published from a primary source. Register for updates to receive the current structure directly.",
  },
  {
    q: "What is Lakeview Village?",
    a: "Lakeview Village is a 177-acre master-planned waterfront redevelopment of the former Lakeview Generating Station site on Lake Ontario in Mississauga, combining homes from multiple builders with parks, a pier, a marina, and an Innovation District.",
  },
  {
    q: "What is the Jim Tovey Lakeview Conservation Area?",
    a: "The Jim Tovey Lakeview Conservation Area is a 64-acre (26-hectare) public waterfront park adjacent to Lakeview Village, built partly from recycled demolition material from the former power plant and connecting to the Great Lakes Waterfront Trail.",
  },
];

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for South Banks Towns (formerly Coastal Towns). It is not the official website of Deco Homes & Opus Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about South Banks Towns (formerly Coastal Towns) and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const PRICING_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of September 6, 2026.";

export const NAV: { href: string; label: string }[] = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "South Banks Towns Mississauga | Formerly Coastal Towns",
    description:
      "South Banks Towns (formerly Coastal Towns) — waterfront freehold towns by Deco & Opus in Lakeview Village.",
    h1: "South Banks Towns (formerly Coastal Towns) — Waterfront Townhomes in Lakeview Village",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "South Banks Towns Floor Plans",
    description: "Explore South Banks Towns' freehold townhome configurations in Lakeview Village.",
    h1: "South Banks Towns Floor Plans — Freehold Townhomes",
  },
  pricing: {
    path: "/pricing",
    title: "South Banks Towns Prices",
    description:
      "South Banks Towns pricing, reconciled across sources and tracked as details are confirmed.",
    h1: "South Banks Towns Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "South Banks Towns Location | Lakeview Village",
    description:
      "South Banks Towns sits in Lakeview Village at 1110 Lakeshore Rd E — parks, transit & builders compared.",
    h1: "South Banks Towns Location — Lakeview Village, Mississauga",
  },
  gallery: {
    path: "/gallery",
    title: "South Banks Towns Renderings & Site Plan",
    description:
      "South Banks Towns renderings and site plan status, plus Lakeview Village waterfront context photography.",
    h1: "South Banks Towns Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "South Banks Towns FAQ",
    description: "Is Coastal Towns the same as South Banks? Answers to the most common questions.",
    h1: "South Banks Towns FAQ",
  },
  register: {
    path: "/register",
    title: "Register — South Banks Towns Updates",
    description: "Register for South Banks Towns' current pricing, floor plans, and launch date.",
    h1: "Register for South Banks Towns Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration received | South Banks Towns",
    description:
      "The Registration Team has your South Banks Towns (formerly Coastal Towns) registration.",
    h1: "You are on the South Banks Towns update list",
  },
  blog: {
    path: "/blog/lakeview-village-waterfront-buyer-guide",
    title: "Lakeview Village, Mississauga: A Waterfront Buyer's Guide",
    description:
      "Lakeview Village, Mississauga: A Waterfront Buyer's Guide to Every Builder Releasing Homes There",
    h1: "Lakeview Village, Mississauga: A Waterfront Buyer's Guide to Every Builder Releasing Homes There",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | coastaltownsmississauga.com",
    description:
      "How this independent South Banks Towns information site collects and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | coastaltownsmississauga.com",
    description: "Terms of use for this independent South Banks Towns information website.",
    h1: "Terms of Use",
  },
} as const satisfies Record<string, PageMeta>;

export const SITEMAP_PATHS = [
  "/",
  "/floor-plans",
  "/pricing",
  "/location",
  "/gallery",
  "/faq",
  "/register",
  "/thank-you",
  "/blog/lakeview-village-waterfront-buyer-guide",
  "/privacy",
  "/terms",
] as const;
