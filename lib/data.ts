export interface TourStop {
  time: string;
  title: string;
  description: string;
}

export interface Tour {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  priceNum: number;
  maxGuests: number;
  time: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  badge: string;
  difficulty: string;
  minAge: number;
  includes: string[];
  notIncludes: string[];
  itinerary: TourStop[];
  galleryImages: { url: string; alt: string }[];
  faqs: { question: string; answer: string }[];
}

export const TOURS: Tour[] = [
  {
    slug: "sunrise-coastal-circuit",
    name: "Sunrise Coastal Circuit",
    tagline: "Golden light, secret cliffs, and a sea that glows.",
    duration: "4 hours",
    price: "$89",
    priceNum: 89,
    maxGuests: 12,
    time: "6:30 AM",
    difficulty: "Easy",
    minAge: 5,
    description:
      "Catch golden hour from the water as we trace the island's dramatic eastern cliffs and hidden coves.",
    longDescription:
      "There is no better way to begin a day on Koh Rong Sanloem than from the bow of a boat as the sun breaks over the Cardamom Mountains. This four-hour circuit hugs the island's dramatic eastern shoreline, passing limestone outcrops, jungle-fringed coves that appear on no map, and the bioluminescent bay that still glows faintly at dawn. A light Khmer breakfast — fresh fruit, sticky rice, and iced coffee — is served on deck as you watch the island wake up. Return to the pier by 10:30 AM with enough morning left to explore the village or claim a hammock before the crowds arrive.",
    image:
      "https://images.unsplash.com/photo-1637578338411-ecb137b7bbb7?w=600&h=400&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1772356847188-2f35d5d4177c?w=1800&h=900&fit=crop&auto=format",
    badge: "Most Popular",
    includes: [
      "Khmer breakfast (fruit, sticky rice, iced coffee)",
      "Bottled water and soft drinks",
      "Life jackets and safety equipment",
      "Experienced licensed captain",
      "Binoculars for wildlife spotting",
      "Waterproof bag for belongings",
    ],
    notIncludes: [
      "Hotel transfers",
      "Alcoholic beverages",
      "Gratuities (appreciated)",
    ],
    itinerary: [
      {
        time: "6:15 AM",
        title: "Pier Meeting & Safety Briefing",
        description:
          "Meet your captain at the main pier in Saracen Bay. Quick safety walkthrough, lifejacket fitting, and departure as the sky begins to lighten.",
      },
      {
        time: "6:30 AM",
        title: "Departure — Northern Tip",
        description:
          "We head north along the calm inner waters, passing the fishing village stilts and the mangrove fringe that shelters juvenile reef fish.",
      },
      {
        time: "7:00 AM",
        title: "Sunrise at Shark Bay Cliffs",
        description:
          "Anchor off the eastern limestone cliffs as the sun clears the horizon. Breakfast is served on deck with front-row views. Dolphins are frequent visitors at this hour.",
      },
      {
        time: "7:45 AM",
        title: "Lazy Beach Cove Stop",
        description:
          "15-minute swim stop at a sheltered cove with powder-fine sand. The water is exceptionally clear and calm in the morning.",
      },
      {
        time: "8:15 AM",
        title: "Bioluminescent Bay (Dawn View)",
        description:
          "Slow drift through the famous bay. Though at its most dramatic at night, faint bioluminescence is sometimes visible in dawn shadows near the mangroves.",
      },
      {
        time: "9:15 AM",
        title: "Southern Reef Pass",
        description:
          "Gentle cruise along the southern reef shelf. Spot sea turtles surfacing to breathe — sightings on roughly 70% of morning runs.",
      },
      {
        time: "10:00 AM",
        title: "Return to Saracen Bay Pier",
        description:
          "Arrive back rested, fed, and sun-kissed. Your captain will share his favourite local lunch spots for the rest of the day.",
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1637578338411-ecb137b7bbb7?w=800&h=600&fit=crop&auto=format",
        alt: "Small boat on Cambodia shore at sunrise",
      },
      {
        url: "https://images.unsplash.com/photo-1595781723824-9213a40e3257?w=800&h=600&fit=crop&auto=format",
        alt: "Wooden dock extending into calm sea",
      },
      {
        url: "https://images.unsplash.com/photo-1612158560555-34306ad5e77c?w=800&h=600&fit=crop&auto=format",
        alt: "Clear shallow water with sunlight on sandy floor",
      },
      {
        url: "https://images.unsplash.com/photo-1651510688982-75f481b89027?w=800&h=600&fit=crop&auto=format",
        alt: "Palm-lined beach at first light",
      },
    ],
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Sunscreen (reef-safe recommended), a light layer, your camera, and a sense of wonder. We supply water, breakfast, and all safety gear.",
      },
      {
        question: "Is it suitable for young children?",
        answer:
          "Yes — the circuit is calm-water sailing with no open-ocean exposure. Children aged 5 and up are welcome. Child lifejackets are available.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Safety is our first priority. If conditions are unsafe, we will postpone and offer a full refund or reschedule at no cost.",
      },
      {
        question: "Can I see bioluminescence on this tour?",
        answer:
          "The dawn light reduces visibility, but faint bioluminescence is occasionally visible near the mangroves. For the full show, book our Sunset & Stars tour.",
      },
    ],
  },
  {
    slug: "full-island-explorer",
    name: "Full Island Explorer",
    tagline: "Eight hours. Every cove. One unforgettable circumnavigation.",
    duration: "8 hours",
    price: "$165",
    priceNum: 165,
    maxGuests: 8,
    time: "9:00 AM",
    difficulty: "Moderate",
    minAge: 8,
    description:
      "A complete circumnavigation with snorkeling stops, a beach lunch, and access to the secluded Blue Lagoon.",
    longDescription:
      "The Full Island Explorer is our flagship journey — a complete circumnavigation of Koh Rong Sanloem for those who want to see everything the island holds. You'll snorkel two distinct reef systems, swim in the legendary Blue Lagoon accessible only by boat, and picnic on a beach that sees fewer than twenty visitors a day. A freshly prepared Khmer seafood lunch is served under the shade of swaying palms at our private beach stop. With just eight guests per departure, this is the most intimate way to know the island. Come back knowing its every secret.",
    image:
      "https://images.unsplash.com/photo-1645109344928-b1efdeecfae5?w=600&h=400&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=1800&h=900&fit=crop&auto=format",
    badge: "Best Value",
    includes: [
      "Full snorkeling kit (mask, fins, wetsuit)",
      "Khmer seafood beach lunch",
      "Bottled water, soft drinks, and fresh coconuts",
      "Life jackets and safety equipment",
      "Experienced licensed captain and first-mate",
      "Underwater camera hire (limited availability)",
      "Reef-safe sunscreen",
    ],
    notIncludes: [
      "Hotel transfers",
      "Alcoholic beverages (available to purchase onboard)",
      "Gratuities (appreciated)",
    ],
    itinerary: [
      {
        time: "8:45 AM",
        title: "Pier Meeting & Briefing",
        description:
          "Meet at Saracen Bay pier for snorkeling instruction, kit fitting, and a route overview from your captain.",
      },
      {
        time: "9:00 AM",
        title: "Departure — Northern Passage",
        description:
          "Head north through the inner lagoon. Watch for sea eagles in the canopy above the mangrove edge.",
      },
      {
        time: "9:45 AM",
        title: "Snorkel Stop 1 — Northern Reef",
        description:
          "45-minute snorkel at the island's most diverse reef patch. Expect sea anemones, clownfish, parrotfish, and if you're lucky, a resting turtle.",
      },
      {
        time: "11:00 AM",
        title: "Blue Lagoon",
        description:
          "The centrepiece of the day. Swim in the landlocked turquoise lagoon accessible only by sea. Crystal clear, completely sheltered, and strikingly blue.",
      },
      {
        time: "12:00 PM",
        title: "Beach Lunch — Secret Beach",
        description:
          "Anchor off our private beach stop. Freshly grilled fish, rice, mango salad, and cold drinks are laid out under the palms. 90 minutes to swim, relax, or explore.",
      },
      {
        time: "1:30 PM",
        title: "Snorkel Stop 2 — Southern Reef",
        description:
          "The southern reef is shallower and sunnier — perfect for beginners. Large table corals and resident reef sharks (harmless blacktips) are a highlight.",
      },
      {
        time: "3:00 PM",
        title: "Eastern Cliffs Cruise",
        description:
          "Cruise the dramatic eastern face of the island with its limestone columns and cave mouths. The captain will navigate close for photographs.",
      },
      {
        time: "4:30 PM",
        title: "Return to Saracen Bay",
        description:
          "Arrive back salty, satisfied, and with a camera full of memories. Cold towels and fresh fruit on the final leg.",
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1645109344928-b1efdeecfae5?w=800&h=600&fit=crop&auto=format",
        alt: "Tropical beach with turquoise water and boat",
      },
      {
        url: "https://images.unsplash.com/photo-1612158560555-34306ad5e77c?w=800&h=600&fit=crop&auto=format",
        alt: "Crystal clear water with sunlight on sandy floor",
      },
      {
        url: "https://images.unsplash.com/photo-1560364897-91578ff41817?w=800&h=600&fit=crop&auto=format",
        alt: "Turquoise water surface from below",
      },
      {
        url: "https://images.unsplash.com/photo-1681401354749-9cfa1852af09?w=800&h=600&fit=crop&auto=format",
        alt: "Row of boats on a sandy beach",
      },
    ],
    faqs: [
      {
        question: "Do I need snorkeling experience?",
        answer:
          "No — our first-mate provides a full in-water briefing for beginners. Wetsuits keep you buoyant and comfortable. Nervous swimmers are welcome.",
      },
      {
        question: "Is the Blue Lagoon safe to swim in?",
        answer:
          "Completely. The lagoon is sheltered, shallow at the edges, and free of strong currents. It is one of the safest swims on the island.",
      },
      {
        question: "What is the food like?",
        answer:
          "Our beach lunch is prepared fresh each morning by our partner restaurant: grilled reef fish, coconut rice, green mango salad, and seasonal fruit. Vegetarian options available on request.",
      },
      {
        question: "Why only 8 guests?",
        answer:
          "We deliberately cap the Explorer at 8 to protect the reef, keep the experience intimate, and ensure our captain can give everyone proper attention.",
      },
    ],
  },
  {
    slug: "sunset-and-stars",
    name: "Sunset & Stars",
    tagline: "The sky on fire. The sea lit from within.",
    duration: "3 hours",
    price: "$75",
    priceNum: 75,
    maxGuests: 16,
    time: "5:30 PM",
    difficulty: "Easy",
    minAge: 0,
    description:
      "Watch the sky turn crimson as we drift along the western shore. Complimentary drinks and fresh fruit included.",
    longDescription:
      "As the heat of the afternoon softens and the western sky begins its slow transformation, we slip out of the harbour and turn toward the open sea. The Sunset & Stars cruise is three hours of deliberate stillness — cold drinks in hand, music low, the silhouette of Koh Rong Sanloem darkening against an extraordinary canvas. As night falls, we drift into the bioluminescent bay where the water glows a vivid blue-green with every movement. A phenomenon caused by single-celled plankton, it is one of the rarest and most otherworldly experiences in Southeast Asia — and it happens every single night.",
    image:
      "https://images.unsplash.com/photo-1651510688982-75f481b89027?w=600&h=400&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?w=1800&h=900&fit=crop&auto=format",
    badge: "Romantic",
    includes: [
      "Welcome drink on departure",
      "Wine, beer, and soft drinks throughout",
      "Fresh tropical fruit platter",
      "Bioluminescent bay swim (torches provided)",
      "Life jackets and safety equipment",
      "Bluetooth speaker / curated soundtrack",
      "Waterproof phone pouch",
    ],
    notIncludes: [
      "Hotel transfers",
      "Additional spirits or cocktails",
      "Gratuities (appreciated)",
    ],
    itinerary: [
      {
        time: "5:15 PM",
        title: "Pier Meeting",
        description:
          "Gather at Saracen Bay pier. Welcome drinks are poured as the boat is prepared. We depart the moment the light begins to turn golden.",
      },
      {
        time: "5:30 PM",
        title: "Western Shore Cruise",
        description:
          "Drift along the island's quieter western side as the sun descends. This stretch is rarely visited — jungle right to the waterline, complete silence.",
      },
      {
        time: "6:15 PM",
        title: "Sunset Anchor Point",
        description:
          "We drop anchor at our curated viewpoint — a shallow bank with an unobstructed western horizon. Fruit platter served. Cameras out.",
      },
      {
        time: "6:50 PM",
        title: "Golden Hour Drift",
        description:
          "After the sun sets, the sky holds its colour for another 20–30 minutes. We drift slowly, drinks in hand, as the stars begin to emerge.",
      },
      {
        time: "7:30 PM",
        title: "Bioluminescent Bay",
        description:
          "The highlight. We enter the sheltered bay as darkness falls. Step off the boat ladder into water that glows vivid blue-green with every stroke. An experience unlike anything else.",
      },
      {
        time: "8:30 PM",
        title: "Return to Pier",
        description:
          "Return in the dark with the Milky Way overhead and the bay still glowing in your memory. The captain will suggest dinner spots nearby.",
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?w=800&h=600&fit=crop&auto=format",
        alt: "Silhouette of palms at Cambodia sunset",
      },
      {
        url: "https://images.unsplash.com/photo-1707111642741-7b89c943f9c3?w=800&h=600&fit=crop&auto=format",
        alt: "Boat on the ocean at sunset",
      },
      {
        url: "https://images.unsplash.com/photo-1563774365568-53994a6554dd?w=800&h=600&fit=crop&auto=format",
        alt: "Silhouette of a boat at dusk",
      },
      {
        url: "https://images.unsplash.com/photo-1637578338353-9289a78a8477?w=800&h=600&fit=crop&auto=format",
        alt: "Boats resting on calm evening water",
      },
    ],
    faqs: [
      {
        question: "Is the bioluminescence guaranteed?",
        answer:
          "The plankton are present year-round, but brightness varies with the moon phase and water temperature. New moon periods give the most vivid displays. We run the tour regardless — the sunset and cruise are worth it on any night.",
      },
      {
        question: "Can we swim in the bioluminescent bay?",
        answer:
          "Yes, and we strongly encourage it. The swim is the centrepiece of the evening. The bay is calm, shallow near the edges, and the glow intensifies with movement.",
      },
      {
        question: "Is this tour good for couples?",
        answer:
          "It's our most requested anniversary and honeymoon experience. We can arrange a private charter for two if you prefer complete privacy — contact us for pricing.",
      },
      {
        question: "What should I wear?",
        answer:
          "Light summer clothing plus a layer for after dark. Bring a swimsuit underneath if you plan to swim in the bay. We recommend leaving valuables ashore.",
      },
    ],
  },
];

export const HIGHLIGHTS = [
  {
    icon: "⚓",
    title: "Private Skippered Vessel",
    body: "Each tour is led by a licensed captain with 15+ years navigating these waters. Safety briefings and lifejackets provided.",
  },
  {
    icon: "🤿",
    title: "Snorkeling Equipment",
    body: "Masks, fins, and wetsuits included on all Explorer tours. Crystal-clear underwater visibility year-round.",
  },
  {
    icon: "🦜",
    title: "Wildlife Encounters",
    body: "Dolphins, sea turtles, and nesting seabirds are frequent companions. Our routes are designed around seasonal sightings.",
  },
  {
    icon: "🍽️",
    title: "Fresh Local Catering",
    body: "Seasonal Khmer dishes, island-caught seafood, and cold drinks prepared each morning by our partner restaurant.",
  },
];

export const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1651510709022-e3b9d1e32950?w=600&h=500&fit=crop&auto=format",
    alt: "Koh Rong Sanloem beach with palm trees and blue water",
    span: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1770850994573-2ac1784b345b?w=400&h=250&fit=crop&auto=format",
    alt: "Colorful boats moored at Cambodia island dock",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1595781723824-9213a40e3257?w=400&h=250&fit=crop&auto=format",
    alt: "Wooden dock extending into the sea, Cambodia",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1681401354749-9cfa1852af09?w=400&h=250&fit=crop&auto=format",
    alt: "Row of boats on a sandy Cambodian beach",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1770850994002-718c87787ce5?w=400&h=250&fit=crop&auto=format",
    alt: "Blue stilt house with boats on calm water, Cambodia",
    span: "",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sophie Andersen",
    origin: "Copenhagen, Denmark",
    stars: 5,
    text: "The Full Island Explorer was the single best day of our holiday. The captain knew every secret cove. We swam with a sea turtle at the Blue Lagoon — I'll never forget it.",
    avatar: "SA",
    tour: "Full Island Explorer",
  },
  {
    name: "Marco Ferretti",
    origin: "Milan, Italy",
    stars: 5,
    text: "Booked the Sunset & Stars cruise for our anniversary. The drinks, the colours, the bioluminescence — absolute perfection. Already planning to return next year.",
    avatar: "MF",
    tour: "Sunset & Stars",
  },
  {
    name: "Priya Nair",
    origin: "Mumbai, India",
    stars: 5,
    text: "Small group, attentive crew, stunning coastline. The sunrise tour left us speechless. Easily the highlight of our whole trip.",
    avatar: "PN",
    tour: "Sunrise Coastal Circuit",
  },
];

export const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

export const STATS = [
  { val: "12+", label: "Years at Sea" },
  { val: "4,800+", label: "Happy Guests" },
  { val: "3", label: "Tour Routes" },
  { val: "5★", label: "Average Rating" },
];
