import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface TourStop { time: string; title: string; description: string; }
interface Tour {
  name: string; tagline: string; duration: string; price: string; priceNum: number;
  maxGuests: number; time: string; difficulty: string; minAge: number;
  description: string; longDescription: string;
  image: string; heroImage: string; badge: string;
  includes: string[]; notIncludes: string[];
  itinerary: TourStop[];
  gallery: { url: string; alt: string }[];
  faqs: { question: string; answer: string }[];
}

const TOURS: Tour[] = [
  {
    name: "Sunrise Coastal Circuit",
    tagline: "Golden light, secret cliffs, and a sea that glows.",
    duration: "4 hours", price: "$89", priceNum: 89,
    maxGuests: 12, time: "6:30 AM", difficulty: "Easy", minAge: 5,
    description: "Catch golden hour from the water as we trace the island's dramatic eastern cliffs and hidden coves.",
    longDescription: "There is no better way to begin a day on Koh Rong Sanloem than from the bow of a boat as the sun breaks over the Cardamom Mountains. This four-hour circuit hugs the island's dramatic eastern shoreline, passing limestone outcrops, jungle-fringed coves that appear on no map, and the bioluminescent bay that still glows faintly at dawn. A light Khmer breakfast — fresh fruit, sticky rice, and iced coffee — is served on deck as you watch the island wake up. Return to the pier by 10:30 AM with enough morning left to explore the village or claim a hammock.",
    image: "https://images.unsplash.com/photo-1637578338411-ecb137b7bbb7?w=600&h=400&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1772356847188-2f35d5d4177c?w=1600&h=800&fit=crop&auto=format",
    badge: "Most Popular",
    includes: ["Khmer breakfast (fruit, sticky rice, iced coffee)", "Bottled water & soft drinks", "Life jackets & safety equipment", "Licensed captain", "Binoculars for wildlife spotting", "Waterproof bag"],
    notIncludes: ["Hotel transfers", "Alcoholic beverages", "Gratuities"],
    itinerary: [
      { time: "6:15 AM", title: "Pier Meeting & Safety Briefing", description: "Meet your captain at the main pier in Saracen Bay. Safety walkthrough, lifejacket fitting, and departure as the sky begins to lighten." },
      { time: "6:30 AM", title: "Departure — Northern Tip", description: "Head north along the calm inner waters, passing the fishing village stilts and the mangrove fringe sheltering juvenile reef fish." },
      { time: "7:00 AM", title: "Sunrise at Shark Bay Cliffs", description: "Anchor off the eastern limestone cliffs as the sun clears the horizon. Breakfast served on deck. Dolphins are frequent visitors at this hour." },
      { time: "7:45 AM", title: "Lazy Beach Cove Stop", description: "15-minute swim stop at a sheltered cove with powder-fine sand. The water is exceptionally clear and calm in the morning." },
      { time: "8:15 AM", title: "Bioluminescent Bay (Dawn View)", description: "Slow drift through the famous bay. Faint bioluminescence is sometimes visible in dawn shadows near the mangroves." },
      { time: "9:15 AM", title: "Southern Reef Pass", description: "Gentle cruise along the southern reef shelf. Sea turtle sightings on roughly 70% of morning runs." },
      { time: "10:00 AM", title: "Return to Saracen Bay Pier", description: "Arrive back rested, fed, and sun-kissed." },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1637578338411-ecb137b7bbb7?w=800&h=500&fit=crop&auto=format", alt: "Small boat on Cambodia shore" },
      { url: "https://images.unsplash.com/photo-1595781723824-9213a40e3257?w=800&h=500&fit=crop&auto=format", alt: "Wooden dock into the sea" },
      { url: "https://images.unsplash.com/photo-1612158560555-34306ad5e77c?w=800&h=500&fit=crop&auto=format", alt: "Clear shallow water with sunlight" },
      { url: "https://images.unsplash.com/photo-1651510688982-75f481b89027?w=800&h=500&fit=crop&auto=format", alt: "Palm-lined beach at first light" },
    ],
    faqs: [
      { question: "What should I bring?", answer: "Reef-safe sunscreen, a light layer, your camera. We supply water, breakfast, and all safety gear." },
      { question: "Is it suitable for young children?", answer: "Yes — calm-water sailing with no open-ocean exposure. Children aged 5+ welcome. Child lifejackets available." },
      { question: "What if the weather is bad?", answer: "If conditions are unsafe we postpone and offer a full refund or free reschedule." },
      { question: "Can I see bioluminescence?", answer: "The dawn light reduces visibility, but faint glow is occasionally visible near the mangroves. For the full show, book Sunset & Stars." },
    ],
  },
  {
    name: "Full Island Explorer",
    tagline: "Eight hours. Every cove. One unforgettable circumnavigation.",
    duration: "8 hours", price: "$165", priceNum: 165,
    maxGuests: 8, time: "9:00 AM", difficulty: "Moderate", minAge: 8,
    description: "A complete circumnavigation with snorkeling stops, a beach lunch, and access to the secluded Blue Lagoon.",
    longDescription: "The Full Island Explorer is our flagship journey — a complete circumnavigation of Koh Rong Sanloem for those who want to see everything the island holds. You'll snorkel two distinct reef systems, swim in the legendary Blue Lagoon accessible only by boat, and picnic on a beach that sees fewer than twenty visitors a day. A freshly prepared Khmer seafood lunch is served under the shade of swaying palms. With just eight guests per departure, this is the most intimate way to know the island.",
    image: "https://images.unsplash.com/photo-1645109344928-b1efdeecfae5?w=600&h=400&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=1600&h=800&fit=crop&auto=format",
    badge: "Best Value",
    includes: ["Full snorkeling kit (mask, fins, wetsuit)", "Khmer seafood beach lunch", "Water, soft drinks & fresh coconuts", "Life jackets & safety equipment", "Captain and first-mate", "Reef-safe sunscreen"],
    notIncludes: ["Hotel transfers", "Alcoholic beverages (available to purchase)", "Gratuities"],
    itinerary: [
      { time: "8:45 AM", title: "Pier Meeting & Briefing", description: "Meet at Saracen Bay pier for snorkeling instruction, kit fitting, and a route overview." },
      { time: "9:00 AM", title: "Departure — Northern Passage", description: "Head north through the inner lagoon. Watch for sea eagles above the mangrove edge." },
      { time: "9:45 AM", title: "Snorkel Stop 1 — Northern Reef", description: "45-minute snorkel at the island's most diverse reef patch. Clownfish, parrotfish, and resting turtles." },
      { time: "11:00 AM", title: "Blue Lagoon", description: "Swim in the landlocked turquoise lagoon accessible only by sea. Crystal clear, completely sheltered." },
      { time: "12:00 PM", title: "Beach Lunch — Secret Beach", description: "Grilled fish, coconut rice, mango salad, and cold drinks under the palms. 90 minutes to relax." },
      { time: "1:30 PM", title: "Snorkel Stop 2 — Southern Reef", description: "Shallower and sunnier — perfect for beginners. Large table corals and resident blacktip reef sharks." },
      { time: "3:00 PM", title: "Eastern Cliffs Cruise", description: "Dramatic limestone columns and cave mouths. The captain navigates close for photographs." },
      { time: "4:30 PM", title: "Return to Saracen Bay", description: "Arrive back salty, satisfied, and with a camera full of memories." },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1645109344928-b1efdeecfae5?w=800&h=500&fit=crop&auto=format", alt: "Tropical beach with turquoise water" },
      { url: "https://images.unsplash.com/photo-1612158560555-34306ad5e77c?w=800&h=500&fit=crop&auto=format", alt: "Crystal clear water with sunlight" },
      { url: "https://images.unsplash.com/photo-1560364897-91578ff41817?w=800&h=500&fit=crop&auto=format", alt: "Turquoise water surface from below" },
      { url: "https://images.unsplash.com/photo-1681401354749-9cfa1852af09?w=800&h=500&fit=crop&auto=format", alt: "Row of boats on a sandy beach" },
    ],
    faqs: [
      { question: "Do I need snorkeling experience?", answer: "No — our first-mate provides a full in-water briefing. Wetsuits keep you buoyant. Nervous swimmers are welcome." },
      { question: "Is the Blue Lagoon safe to swim in?", answer: "Completely. Sheltered, shallow at the edges, and free of strong currents." },
      { question: "What is the food like?", answer: "Freshly grilled reef fish, coconut rice, green mango salad, and seasonal fruit. Vegetarian options on request." },
      { question: "Why only 8 guests?", answer: "We deliberately cap the Explorer at 8 to protect the reef and keep the experience intimate." },
    ],
  },
  {
    name: "Sunset & Stars",
    tagline: "The sky on fire. The sea lit from within.",
    duration: "3 hours", price: "$75", priceNum: 75,
    maxGuests: 16, time: "5:30 PM", difficulty: "Easy", minAge: 0,
    description: "Watch the sky turn crimson as we drift along the western shore. Complimentary drinks and fresh fruit included.",
    longDescription: "As the heat of the afternoon softens and the western sky begins its slow transformation, we slip out of the harbour and turn toward the open sea. The Sunset & Stars cruise is three hours of deliberate stillness — cold drinks in hand, music low, the silhouette of Koh Rong Sanloem darkening against an extraordinary canvas. As night falls, we drift into the bioluminescent bay where the water glows a vivid blue-green with every movement — one of the rarest experiences in Southeast Asia, happening every single night.",
    image: "https://images.unsplash.com/photo-1651510688982-75f481b89027?w=600&h=400&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?w=1600&h=800&fit=crop&auto=format",
    badge: "Romantic",
    includes: ["Welcome drink on departure", "Wine, beer & soft drinks throughout", "Fresh tropical fruit platter", "Bioluminescent bay swim", "Life jackets & safety equipment", "Waterproof phone pouch"],
    notIncludes: ["Hotel transfers", "Additional spirits or cocktails", "Gratuities"],
    itinerary: [
      { time: "5:15 PM", title: "Pier Meeting", description: "Welcome drinks poured as the boat is prepared. We depart the moment the light turns golden." },
      { time: "5:30 PM", title: "Western Shore Cruise", description: "Drift along the island's quieter western side — jungle right to the waterline, complete silence." },
      { time: "6:15 PM", title: "Sunset Anchor Point", description: "Drop anchor at our curated viewpoint with an unobstructed western horizon. Fruit platter served." },
      { time: "6:50 PM", title: "Golden Hour Drift", description: "After sunset the sky holds its colour for 20–30 minutes. Drinks in hand as stars emerge." },
      { time: "7:30 PM", title: "Bioluminescent Bay", description: "Step into water that glows vivid blue-green with every stroke. An experience unlike anything else." },
      { time: "8:30 PM", title: "Return to Pier", description: "Return in the dark with the Milky Way overhead and the bay still glowing in your memory." },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?w=800&h=500&fit=crop&auto=format", alt: "Silhouette of palms at Cambodia sunset" },
      { url: "https://images.unsplash.com/photo-1707111642741-7b89c943f9c3?w=800&h=500&fit=crop&auto=format", alt: "Boat on the ocean at sunset" },
      { url: "https://images.unsplash.com/photo-1563774365568-53994a6554dd?w=800&h=500&fit=crop&auto=format", alt: "Silhouette of a boat at dusk" },
      { url: "https://images.unsplash.com/photo-1637578338353-9289a78a8477?w=800&h=500&fit=crop&auto=format", alt: "Boats on calm evening water" },
    ],
    faqs: [
      { question: "Is the bioluminescence guaranteed?", answer: "The plankton are present year-round; brightness varies with moon phase. New moon periods give the most vivid displays." },
      { question: "Can we swim in the bioluminescent bay?", answer: "Yes — the swim is the centrepiece of the evening. Calm, shallow at the edges, and the glow intensifies with movement." },
      { question: "Is this good for couples?", answer: "Our most requested anniversary experience. Private charters for two available — contact us for pricing." },
      { question: "What should I wear?", answer: "Light summer clothing plus a layer for after dark. Bring a swimsuit if you plan to swim in the bay." },
    ],
  },
];

const HIGHLIGHTS = [
  { icon: "⚓", title: "Private Skippered Vessel", body: "Each tour is led by a licensed captain with 15+ years navigating these waters. Safety briefings and lifejackets provided." },
  { icon: "🤿", title: "Snorkeling Equipment", body: "Masks, fins, and wetsuits included on all Explorer tours. Crystal-clear underwater visibility year-round." },
  { icon: "🦜", title: "Wildlife Encounters", body: "Dolphins, sea turtles, and nesting seabirds are frequent companions. Our routes are designed around seasonal sightings." },
  { icon: "🍽️", title: "Fresh Local Catering", body: "Seasonal Khmer dishes, island-caught seafood, and cold drinks prepared each morning by our partner restaurant." },
];

const GALLERY = [
  { url: "https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=600&h=500&fit=crop&auto=format", alt: "Koh Rong Sanloem beach with palm trees and blue water", span: "col-span-2 row-span-2" },
  { url: "https://images.unsplash.com/photo-1770850994573-2ac1784b345b?w=400&h=250&fit=crop&auto=format", alt: "Colorful boats moored at Cambodia island dock", span: "" },
  { url: "https://images.unsplash.com/photo-1595781723824-9213a40e3257?w=400&h=250&fit=crop&auto=format", alt: "Wooden dock extending into the sea, Cambodia", span: "" },
  { url: "https://images.unsplash.com/photo-1681401354749-9cfa1852af09?w=400&h=250&fit=crop&auto=format", alt: "Row of boats on a sandy Cambodian beach", span: "" },
  { url: "https://images.unsplash.com/photo-1770850994002-718c87787ce5?w=400&h=250&fit=crop&auto=format", alt: "Blue stilt house with boats on calm water, Cambodia", span: "" },
];

interface GalleryPhoto { url: string; alt: string; category: string; }

const ALL_PHOTOS: GalleryPhoto[] = [
  // Beaches
  { url: "https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=800&h=600&fit=crop&auto=format", alt: "Koh Rong Sanloem beach with palm trees and blue water", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1616421310226-7453165b353e?w=800&h=600&fit=crop&auto=format", alt: "Palm trees lining tropical Cambodia beach shore", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1651513018689-e1d31d8351a7?w=800&h=600&fit=crop&auto=format", alt: "Beach with palm trees and body of water", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1651510688982-75f481b89027?w=800&h=600&fit=crop&auto=format", alt: "Palm tree on white sand beach", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=600&fit=crop&auto=format", alt: "Palm tree near tropical seashore", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1672841828459-bc913fdcd995?w=800&h=600&fit=crop&auto=format", alt: "Tropical beach with palm trees and clear water", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&h=600&fit=crop&auto=format", alt: "Palm tree on white sand beach daytime", category: "Beaches" },
  { url: "https://images.unsplash.com/photo-1619118986411-29b465253365?w=800&h=600&fit=crop&auto=format", alt: "Green palm tree beside blue water", category: "Beaches" },
  // Boats & Water
  { url: "https://images.unsplash.com/photo-1770850994573-2ac1784b345b?w=800&h=600&fit=crop&auto=format", alt: "Colorful boats moored at Cambodia island dock", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1770850994002-718c87787ce5?w=800&h=600&fit=crop&auto=format", alt: "Blue stilt house with boats on calm water", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1681401354749-9cfa1852af09?w=800&h=600&fit=crop&auto=format", alt: "Row of boats on a sandy Cambodian beach", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1637578338411-ecb137b7bbb7?w=800&h=600&fit=crop&auto=format", alt: "Small boat on the shore of a beach", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1637578338353-9289a78a8477?w=800&h=600&fit=crop&auto=format", alt: "Couple of boats sitting in the water", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1595781722250-fa17ab97594b?w=800&h=600&fit=crop&auto=format", alt: "Brown wooden dock on sea during daytime", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1595781723824-9213a40e3257?w=800&h=600&fit=crop&auto=format", alt: "Wooden dock on sea under blue sky", category: "Boats & Water" },
  { url: "https://images.unsplash.com/photo-1569669798404-bd6634017312?w=800&h=600&fit=crop&auto=format", alt: "Brown wooden beach dock", category: "Boats & Water" },
  // Sunsets
  { url: "https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?w=800&h=600&fit=crop&auto=format", alt: "Silhouette of palm trees at sunset", category: "Sunsets" },
  { url: "https://images.unsplash.com/photo-1707111642741-7b89c943f9c3?w=800&h=600&fit=crop&auto=format", alt: "Boat on the ocean at sunset", category: "Sunsets" },
  { url: "https://images.unsplash.com/photo-1563774365568-53994a6554dd?w=800&h=600&fit=crop&auto=format", alt: "Silhouette of a boat at dusk", category: "Sunsets" },
  { url: "https://images.unsplash.com/photo-1645109344928-b1efdeecfae5?w=800&h=600&fit=crop&auto=format", alt: "Tropical beach with boat in the water at golden hour", category: "Sunsets" },
  // Underwater
  { url: "https://images.unsplash.com/photo-1612158560555-34306ad5e77c?w=800&h=600&fit=crop&auto=format", alt: "Clear blue water with sunlight on sandy ocean floor", category: "Underwater" },
  { url: "https://images.unsplash.com/photo-1560364897-91578ff41817?w=800&h=600&fit=crop&auto=format", alt: "Rippling turquoise water surface from below", category: "Underwater" },
  { url: "https://images.unsplash.com/photo-1646995919720-a27def2d37e9?w=800&h=600&fit=crop&auto=format", alt: "Clear turquoise water with sunlight on sandy floor", category: "Underwater" },
  { url: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&h=600&fit=crop&auto=format", alt: "Aerial view of green palms on tropical seashore", category: "Underwater" },
];

const TESTIMONIALS = [
  { name: "Sophie Andersen", origin: "Copenhagen, Denmark", stars: 5, text: "The Full Island Explorer was the single best day of our holiday. The captain knew every secret cove. We swam with a sea turtle at the Blue Lagoon — I'll never forget it.", avatar: "SA" },
  { name: "Marco Ferretti", origin: "Milan, Italy", stars: 5, text: "Booked the Sunset & Stars cruise for our anniversary. The drinks, the colours, the bioluminescence — absolute perfection. Already planning to return next year.", avatar: "MF" },
  { name: "Priya Nair", origin: "Mumbai, India", stars: 5, text: "Small group, attentive crew, stunning coastline. The sunrise tour left us speechless. Easily the highlight of our whole trip.", avatar: "PN" },
];

const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

// ─── Gallery Page ────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Beaches", "Boats & Water", "Sunsets", "Underwater"];

function GalleryPage({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  const filtered = activeCategory === "All"
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0d0f14] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0f14]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-white/70 hover:text-[#e8a04a] text-sm font-medium">
          <span>←</span> Back
        </button>
        <div className="font-display text-white text-xl font-semibold">
          TIKI TOUR<span className="text-[#e8a04a]">.</span>
        </div>
        <div className="w-20 hidden sm:block" />
      </nav>

      {/* HERO HEADER */}
      <div className="relative pt-16 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=1600&h=500&fit=crop&auto=format"
            alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0d0f14 0%, transparent 40%, #0d0f14 100%)" }} />
        </div>
        <div className="relative z-10 pt-10">
          <p className="text-[#e8a04a] text-xs font-medium tracking-[0.2em] uppercase mb-3">Koh Rong Sanloem · Cambodia</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-light mb-3">
            Photo <em>Gallery</em>
          </h1>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            {ALL_PHOTOS.length} photographs from the island — beaches, boats, sunsets, and the sea.
          </p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="sticky top-16 z-40 bg-[#0d0f14]/95 backdrop-blur border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat
                  ? "bg-[#e8a04a] text-[#1a1a2e] border-[#e8a04a]"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}>
              {cat}
              <span className={`ml-2 text-xs ${activeCategory === cat ? "text-[#1a1a2e]/60" : "text-white/30"}`}>
                {cat === "All" ? ALL_PHOTOS.length : ALL_PHOTOS.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((photo, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl bg-[#1a1f2a] cursor-zoom-in group"
              onClick={() => setLightbox(photo)}>
              <div className="relative">
                <img src={photo.url} alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500 group-hover:brightness-90" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm line-clamp-1">
                    {photo.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/30 text-center py-20">No photos in this category.</p>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl font-light">✕</button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.url.replace("w=800&h=600", "w=1400&h=900")} alt={lightbox.alt}
              className="w-full h-full object-contain rounded-xl" />
            <div className="mt-4 text-center">
              <span className="inline-block bg-[#e8a04a]/20 text-[#e8a04a] text-xs px-3 py-1 rounded-full mb-2">{lightbox.category}</span>
              <p className="text-white/60 text-sm">{lightbox.alt}</p>
            </div>
            {/* Prev / Next */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 text-lg"
              onClick={(e) => { e.stopPropagation(); const idx = filtered.indexOf(lightbox); setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]); }}>
              ‹
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 text-lg"
              onClick={(e) => { e.stopPropagation(); const idx = filtered.indexOf(lightbox); setLightbox(filtered[(idx + 1) % filtered.length]); }}>
              ›
            </button>
          </div>
        </div>
      )}

      <footer className="bg-[#08090c] py-10 px-6 text-center mt-10">
        <div className="font-display text-white text-xl font-semibold mb-2">TIKI TOUR<span className="text-[#e8a04a]">.</span></div>
        <p className="text-white/20 text-xs">Koh Rong Sanloem, Sihanoukville, Cambodia</p>
      </footer>
    </div>
  );
}

// ─── Tour Detail Page ─────────────────────────────────────────────────────────

function TourDetail({ tour, onBack }: { tour: Tour; onBack: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [guests, setGuests] = useState(2);
  const [activeMonth, setActiveMonth] = useState("Aug");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const otherTours = TOURS.filter((t) => t.name !== tour.name);

  return (
    <div className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">

      {/* MINI NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/90 backdrop-blur border-b border-[#e0d8ce] px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-[#1a1a2e] hover:text-[#e8a04a] text-sm font-medium">
          <span>←</span> All Tours
        </button>
        <div className="font-display text-[#1a1a2e] text-xl font-semibold">
          TIKI TOUR<span className="text-[#e8a04a]">.</span>
        </div>
        <a href="#tour-book" className="bg-[#e8a04a] text-[#1a1a2e] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#d48f39] hidden sm:block">
          Book Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative h-[68vh] min-h-[440px] flex items-end overflow-hidden pt-16">
        <img src={tour.heroImage} alt={tour.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.15) 60%, transparent 100%)" }} />
        <div className="relative z-10 px-6 md:px-14 pb-10 max-w-3xl">
          <span className="inline-block bg-[#e8a04a] text-[#1a1a2e] text-xs font-semibold px-3 py-1 rounded-full mb-4">{tour.badge}</span>
          <h1 className="font-display text-white text-4xl md:text-6xl font-light leading-tight mb-2">{tour.name}</h1>
          <p className="text-white/65 text-lg italic font-display">{tour.tagline}</p>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#1a1a2e] px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
          {[
            { icon: "⏱", label: "Duration", val: tour.duration },
            { icon: "🕐", label: "Departs", val: tour.time },
            { icon: "👥", label: "Max guests", val: `${tour.maxGuests} people` },
            { icon: "📊", label: "Difficulty", val: tour.difficulty },
            { icon: "🧒", label: "Min age", val: tour.minAge === 0 ? "All ages" : `${tour.minAge}+` },
            { icon: "💰", label: "Price", val: `${tour.price} / person` },
          ].map(({ icon, label, val }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-xl">{icon}</span>
              <div>
                <div className="text-white/40 text-xs">{label}</div>
                <div className="text-white text-sm font-semibold">{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT + BOOKING */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_340px] gap-12 items-start">

        {/* LEFT */}
        <div className="space-y-16">

          {/* Overview */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-3">Overview</p>
            <p className="text-[#3a3a4e] text-lg leading-relaxed font-light">{tour.longDescription}</p>
          </div>

          {/* Itinerary */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-6">Itinerary</p>
            <div className="relative">
              <div className="absolute left-[52px] top-3 bottom-3 w-px bg-[#e0d8ce]" />
              <ol className="space-y-0">
                {tour.itinerary.map((stop, i) => (
                  <li key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center shrink-0 w-[52px]">
                      <div className="w-3 h-3 rounded-full border-2 border-[#e8a04a] bg-[#f5f0e8] mt-1.5 z-10 group-hover:bg-[#e8a04a]" />
                    </div>
                    <div className="pb-7 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-[#e8a04a] text-sm font-semibold">{stop.time}</span>
                        <h3 className="text-[#1a1a2e] font-semibold text-sm">{stop.title}</h3>
                      </div>
                      <p className="text-[#5a6070] text-sm leading-relaxed">{stop.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Includes / Not Included */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">What's Included</p>
              <ul className="space-y-2.5">
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#3a3a4e]">
                    <span className="text-[#e8a04a] mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">Not Included</p>
              <ul className="space-y-2.5">
                {tour.notIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5a6070]">
                    <span className="text-[#b0a89a] mt-0.5 shrink-0">✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">Photo Gallery</p>
            <div className="grid grid-cols-2 gap-3">
              {tour.gallery.map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-xl bg-[#c9b99a] ${i === 0 ? "col-span-2 h-60" : "h-44"}`}>
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-5">Frequently Asked Questions</p>
            <dl className="space-y-3">
              {tour.faqs.map((faq, i) => (
                <div key={i} className="border border-[#e0d8ce] rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#faf7f2]">
                    <span className="font-semibold text-[#1a1a2e] text-sm pr-4">{faq.question}</span>
                    <span className={`text-[#e8a04a] text-lg shrink-0 ${openFaq === i ? "rotate-45" : ""}`} style={{ display: "inline-block" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-[#5a6070] text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </dl>
          </div>

        </div>

        {/* BOOKING PANEL */}
        <div id="tour-book" className="lg:sticky lg:top-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-[#1a1a2e] px-7 py-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">From</p>
                  <div className="font-display text-[#e8a04a] text-4xl font-semibold">{tour.price}</div>
                  <p className="text-white/40 text-xs mt-0.5">per person</p>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm font-medium">{tour.duration}</div>
                  <div className="text-white/50 text-xs">{tour.time} departure</div>
                  <div className="text-white/50 text-xs">Max {tour.maxGuests} guests</div>
                </div>
              </div>
            </div>
            {submitted ? (
              <div className="px-7 py-10 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-display text-[#1a1a2e] text-2xl font-semibold mb-2">Request Received!</h3>
                <p className="text-[#5a6070] text-sm leading-relaxed">
                  Thanks, {name.split(" ")[0] || "there"}. We'll confirm your spot for <strong>{tour.name}</strong> in {activeMonth} via {email}.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-5 text-[#e8a04a] text-sm hover:underline">Make another booking</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="px-7 py-6 space-y-5">
                <div>
                  <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">Month</label>
                  <div className="flex flex-wrap gap-2">
                    {MONTHS.map((m) => (
                      <button type="button" key={m} onClick={() => setActiveMonth(m)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium border ${activeMonth === m ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "border-[#e0d8ce] text-[#5a6070] hover:border-[#1a1a2e]"}`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">Guests</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-9 h-9 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center">−</button>
                    <span className="font-display text-[#1a1a2e] text-2xl font-semibold w-6 text-center">{guests}</span>
                    <button type="button" onClick={() => setGuests(Math.min(tour.maxGuests, guests + 1))}
                      className="w-9 h-9 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center">+</button>
                    <span className="text-[#8090a8] text-xs">max {tour.maxGuests}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">Full Name</label>
                  <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Sophie Andersen"
                    className="w-full border border-[#e0d8ce] rounded-xl px-4 py-2.5 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">Email</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sophie@example.com"
                    className="w-full border border-[#e0d8ce] rounded-xl px-4 py-2.5 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
                </div>
                <div className="bg-[#f5f0e8] rounded-xl px-4 py-3 flex justify-between items-center">
                  <span className="text-[#5a6070] text-xs">{guests} {guests === 1 ? "guest" : "guests"} · {activeMonth}</span>
                  <span className="font-display text-[#1a1a2e] text-lg font-semibold">${tour.priceNum * guests}</span>
                </div>
                <button type="submit" className="w-full bg-[#e8a04a] hover:bg-[#d48f39] text-[#1a1a2e] font-semibold py-3.5 rounded-full text-sm tracking-wide hover:scale-[1.01] active:scale-[0.99]">
                  Request to Book
                </button>
                <p className="text-center text-[#8090a8] text-xs leading-relaxed">
                  No payment now · Free cancellation 48h before
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* OTHER TOURS */}
      <section className="bg-[#ede5d8] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-3">More experiences</p>
          <h2 className="font-display text-[#1a1a2e] text-3xl font-light mb-8">Other tours you might love</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherTours.map((t) => (
              <button key={t.name} onClick={() => { onBack(); setTimeout(() => {}, 0); window.scrollTo(0, 0); }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 flex text-left w-full"
                onClick={() => { window.scrollTo(0, 0); onBack(); }}>
                <div className="relative w-36 shrink-0 bg-[#1a3340]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#e8a04a] font-semibold">{t.badge}</span>
                    <h3 className="font-display text-[#1a1a2e] text-lg font-semibold mt-1 mb-1">{t.name}</h3>
                    <p className="text-[#5a6070] text-xs leading-relaxed line-clamp-2">{t.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-[#8090a8]">⏱ {t.duration} · 👥 Max {t.maxGuests}</span>
                    <span className="font-display text-[#e8a04a] font-semibold">{t.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a2e] py-10 px-6 text-center">
        <div className="font-display text-white text-xl font-semibold mb-2">TIKI TOUR<span className="text-[#e8a04a]">.</span></div>
        <p className="text-white/30 text-xs">Koh Rong Sanloem, Sihanoukville, Cambodia · info@tikitour.com</p>
      </footer>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ onViewTour, onViewGallery }: { onViewTour: (tour: Tour) => void; onViewGallery: () => void }) {
  const [activeMonth, setActiveMonth] = useState("Aug");
  const [guests, setGuests] = useState(2);
  const [selectedTour, setSelectedTour] = useState(TOURS[0].name);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#f5f0e8] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(26,26,46,0.85) 0%, transparent 100%)" }}>
        <div className="font-display text-white text-2xl font-semibold tracking-tight">
          TIKI TOUR<span className="text-[#e8a04a]">.</span>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {["Tours", "Experience", "Gallery", "Testimonials", "Book Now"].map((l) => (
            <li key={l}>
              <a href={l === "Book Now" ? "#book" : `#${l.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium tracking-wide ${l === "Book Now" ? "bg-[#e8a04a] text-[#1a1a2e] px-5 py-2 rounded-full hover:bg-[#d48f39]" : "text-white/80 hover:text-white"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(true)}>☰</button>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a2e]/95 flex flex-col items-center justify-center gap-8">
          <button className="absolute top-5 right-8 text-white text-3xl" onClick={() => setMenuOpen(false)}>✕</button>
          {["Tours", "Experience", "Gallery", "Testimonials", "Book Now"].map((l) => (
            <a key={l} href={l === "Book Now" ? "#book" : `#${l.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-white text-3xl font-light italic hover:text-[#e8a04a]">{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1616421310226-7453165b353e?w=1800&h=1000&fit=crop&auto=format"
          alt="Palm trees lining a tropical Cambodia island beach" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(26,26,46,0.65) 0%, rgba(26,26,46,0.3) 60%, rgba(20,60,80,0.5) 100%)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#e8a04a] text-sm font-medium tracking-[0.2em] uppercase mb-6">Koh Rong Sanloem · Cambodia</p>
          <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-tight mb-6">
            The island,<br /><span className="italic text-[#e8d4a0]">seen from the sea.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Private skippered boat tours around one of Cambodia's most beautiful coastlines. Small groups, wild coves, unforgettable days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tours" className="bg-[#e8a04a] text-[#1a1a2e] font-semibold px-8 py-4 rounded-full hover:bg-[#d48f39] hover:scale-[1.02] text-sm tracking-wide">Explore Tours</a>
            <a href="#book" className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 text-sm tracking-wide font-medium">Book a Date</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-[#1a1a2e] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ val: "12+", label: "Years at Sea" }, { val: "4,800+", label: "Happy Guests" }, { val: "3", label: "Tour Routes" }, { val: "5★", label: "Average Rating" }].map(({ val, label }) => (
            <div key={label}>
              <div className="font-display text-[#e8a04a] text-3xl font-semibold">{val}</div>
              <div className="text-white/50 text-sm mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TOURS */}
      <section id="tours" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">Choose your adventure</p>
          <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">Three ways to<br /><em>know the island</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <article key={tour.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
              onClick={() => { onViewTour(tour); window.scrollTo(0, 0); }}>
              <div className="relative h-52 bg-[#1a3340]">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#e8a04a] text-[#1a1a2e] text-xs font-semibold px-3 py-1 rounded-full tracking-wide">{tour.badge}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-[#1a1a2e] text-xl font-semibold leading-tight">{tour.name}</h3>
                  <span className="font-display text-[#e8a04a] text-xl font-semibold ml-4 shrink-0">{tour.price}</span>
                </div>
                <p className="text-[#5a6070] text-sm leading-relaxed mb-5">{tour.description}</p>
                <div className="flex gap-4 text-xs text-[#8090a8] mb-6">
                  <span>⏱ {tour.duration}</span>
                  <span>🕐 {tour.time}</span>
                  <span>👥 Max {tour.maxGuests}</span>
                </div>
                <div className="flex gap-2">
                  <span className="flex-1 text-center border border-[#e0d8ce] text-[#5a6070] text-sm font-medium py-2.5 rounded-full group-hover:bg-[#f5f0e8]">
                    View Details
                  </span>
                  <span onClick={(e) => { e.stopPropagation(); setSelectedTour(tour.name); document.getElementById("book")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="flex-1 text-center border-2 border-[#1a1a2e] text-[#1a1a2e] text-sm font-semibold py-2.5 rounded-full hover:bg-[#1a1a2e] hover:text-white tracking-wide">
                    Book Now
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="experience" className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-xl">
            <p className="text-[#e8a04a] text-sm font-medium tracking-[0.18em] uppercase mb-3">What's included</p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-light">Everything you need,<br /><em className="text-[#e8d4a0]">nothing you don't</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="flex gap-5 p-6 rounded-2xl border border-white/[0.08] hover:border-[#e8a04a]/30 hover:bg-white/[0.03]">
                <span className="text-3xl shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <h3 className="font-display text-white text-xl font-semibold mb-2">{h.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">Out on the water</p>
            <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">The view from here</h2>
          </div>
          <button onClick={() => { onViewGallery(); window.scrollTo(0, 0); }}
            className="hidden sm:flex items-center gap-2 border-2 border-[#1a1a2e] text-[#1a1a2e] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#1a1a2e] hover:text-white shrink-0 ml-6">
            See More
            <span className="text-base">→</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[180px]">
          {GALLERY.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl bg-[#c9b99a] ${img.span}`}>
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        {/* Mobile See More */}
        <div className="mt-8 text-center sm:hidden">
          <button onClick={() => { onViewGallery(); window.scrollTo(0, 0); }}
            className="border-2 border-[#1a1a2e] text-[#1a1a2e] text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#1a1a2e] hover:text-white">
            See All {ALL_PHOTOS.length} Photos →
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-[#ede5d8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">Guest stories</p>
            <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">Days they still<br /><em>talk about</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-0.5 mb-5">{Array.from({ length: t.stars }).map((_, i) => <span key={i} className="text-[#e8a04a] text-sm">★</span>)}</div>
                <p className="text-[#3a3a4e] leading-relaxed mb-6 italic font-display text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white text-xs font-semibold shrink-0">{t.avatar}</div>
                  <div>
                    <div className="text-[#1a1a2e] font-semibold text-sm">{t.name}</div>
                    <div className="text-[#8090a8] text-xs">{t.origin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">Reserve your spot</p>
            <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">Book your<br /><em>island escape</em></h2>
            <p className="text-[#5a6070] mt-4 text-sm leading-relaxed">Spaces are limited. Secure yours with a small deposit — full payment at the dock.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
            <div className="grid gap-6">
              <div>
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">Choose Tour</label>
                <select value={selectedTour} onChange={(e) => setSelectedTour(e.target.value)}
                  className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 appearance-none">
                  {TOURS.map((t) => <option key={t.name} value={t.name}>{t.name} — {t.price}/person</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">Month</label>
                <div className="flex gap-2 flex-wrap">
                  {MONTHS.map((m) => (
                    <button key={m} onClick={() => setActiveMonth(m)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border ${activeMonth === m ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "border-[#e0d8ce] text-[#5a6070] hover:border-[#1a1a2e]"}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">Guests</label>
                <div className="flex items-center gap-4">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center">−</button>
                  <span className="font-display text-[#1a1a2e] text-2xl font-semibold w-8 text-center">{guests}</span>
                  <button onClick={() => setGuests(Math.min(16, guests + 1))} className="w-10 h-10 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center">+</button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" placeholder="Sophie Andersen" className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">Email</label>
                  <input type="email" placeholder="sophie@example.com" className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
                </div>
              </div>
              <div className="bg-[#f5f0e8] rounded-xl px-5 py-4 flex justify-between items-center">
                <span className="text-[#5a6070] text-sm">{selectedTour} · {guests} {guests === 1 ? "guest" : "guests"} · {activeMonth}</span>
                <span className="font-display text-[#1a1a2e] text-lg font-semibold">
                  ${(TOURS.find((t) => t.name === selectedTour)?.priceNum ?? 0) * guests}
                </span>
              </div>
              <button className="w-full bg-[#e8a04a] hover:bg-[#d48f39] text-[#1a1a2e] font-semibold py-4 rounded-full text-sm tracking-wide hover:scale-[1.01] active:scale-[0.99]">Request Booking</button>
              <p className="text-center text-[#8090a8] text-xs">No full payment required now · Free cancellation 48h before</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a2e] py-12 px-6 text-center">
        <div className="font-display text-white text-2xl font-semibold mb-3">TIKI TOUR<span className="text-[#e8a04a]">.</span></div>
        <p className="text-white/40 text-sm mb-6">Koh Rong Sanloem, Sihanoukville, Cambodia · info@tikitour.com · +855 12 000 000</p>
        <div className="flex justify-center gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white/60">Privacy Policy</a>
          <a href="#" className="hover:text-white/60">Terms & Conditions</a>
          <a href="#" className="hover:text-white/60">Safety Standards</a>
        </div>
        <p className="text-white/20 text-xs mt-8">© 2026 TIKI TOUR. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

type Page = "home" | "gallery" | Tour;

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const goHome = () => { setPage("home"); window.scrollTo(0, 0); };

  if (page === "gallery") {
    return <GalleryPage onBack={goHome} />;
  }
  if (page !== "home") {
    return <TourDetail tour={page} onBack={goHome} />;
  }
  return (
    <HomePage
      onViewTour={(tour) => { setPage(tour); window.scrollTo(0, 0); }}
      onViewGallery={() => setPage("gallery")}
    />
  );
}
