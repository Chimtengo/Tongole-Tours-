export type Tour = {
  id: number
  slug: string
  name: string
  subtitle: string
  duration: string
  type: string
  target: string
  image: string
  route: string
  focus: string
  highlights: string[]
  details: string[]
}

export const tours: Tour[] = [
  {
    id: 1,
    slug: 'forest-lake-drive',
    name: 'Forest-Lake Drive',
    subtitle: 'The Grand Malawi Explorer - High-End Road',
    duration: '12 Days / 11 Nights',
    type: 'Luxury Road Safari',
    target: 'International Luxury Travellers',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
    route: 'Blantyre Airport -> Mkulumadzi -> Mvuu Lodge -> Pumulani Lodge -> Blue Zebra Lodge -> Tongole -> Lilongwe Airport',
    focus: '11-night luxury overland adventure through Malawi\'s finest wilderness lodges.',
    highlights: ['Majete Wildlife Reserve', 'Liwonde National Park', 'Lake Malawi beaches', 'Nkhotakota Wildlife Reserve', 'Luxury lodge stays'],
    details: [
      'A road-based signature journey blending wildlife, lake, and forest experiences in one seamless itinerary.',
      'Designed for travellers who want a premium, slow-paced discovery of Malawi with high-comfort lodge stays.',
      'Includes curated safari activities, lake relaxation, and guided nature moments across multiple ecosystems.',
    ],
  },
  {
    id: 2,
    slug: 'wings-over-malawi',
    name: 'Wings Over Malawi',
    subtitle: 'Air Option 1 - Premium Fly-In Safari',
    duration: '10 Days / 9 Nights',
    type: 'Luxury Fly-In Safari',
    target: 'High-Net-Worth Travellers',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80',
    route: 'Lilongwe Airport -> Tongole -> Blue Zebra -> Mvuu -> Mkulumadzi -> Blantyre Airport',
    focus: 'Premium fly-in experience saving travel time for maximum wilderness immersion.',
    highlights: ['Charter flight convenience', 'Tongole Wilderness Retreat', 'Blue Zebra Island stay', 'Liwonde game drives', 'Majete wildlife'],
    details: [
      'Built for guests who want to minimize road transfers and maximize time in each destination.',
      'Combines aerial transfers with top safari and lake properties for a high-end journey.',
      'Ideal for shorter travel windows without sacrificing depth of experience.',
    ],
  },
  {
    id: 3,
    slug: 'explore-malawi',
    name: 'Explore Malawi',
    subtitle: 'Air Option 2 - Diverse Biomes',
    duration: '11 Days / 10 Nights',
    type: 'Explorer Safari',
    target: 'International Guests and Residents',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    route: 'Blantyre Airport -> Mkulumadzi -> Kuthengo -> Kaya Mawa -> Tongole -> Chilinda -> Lilongwe Airport',
    focus: 'Explore forest, lake, and montane grassland ecosystems by air.',
    highlights: ['Majete Wildlife Reserve', 'Liwonde National Park', 'Likoma Island', 'Nkhotakota Wildlife Reserve', 'Nyika National Park'],
    details: [
      'A multi-biome itinerary showcasing the range of landscapes that make Malawi unique.',
      'Moves from warm lake environments to cooler highland zones with varied wildlife and culture.',
      'Best for travellers seeking variety, contrast, and broad destination coverage.',
    ],
  },
  {
    id: 4,
    slug: 'ultimate-big-5',
    name: 'The Ultimate Big 5',
    subtitle: 'Wildlife Focus Journey',
    duration: '10 Days / 9 Nights',
    type: 'Wildlife Safari',
    target: 'Wildlife Enthusiasts',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    route: 'Blantyre Airport -> Mkulumadzi -> Mvuu -> Tongole -> Lilongwe Airport',
    focus: 'A wildlife-driven itinerary inspired by conservation recovery success in Malawi.',
    highlights: ['Big 5 tracking opportunities', 'African Parks conservation story', 'Expert local guides', 'Liwonde and Majete focus'],
    details: [
      'Prioritizes game-viewing and interpretation with experienced guides.',
      'Balances high-probability wildlife zones with quality lodge access and practical routing.',
      'Strong choice for photographers and repeat safari travellers.',
    ],
  },
  {
    id: 5,
    slug: 'nature-experience',
    name: 'Nature Experience',
    subtitle: 'Eco-Immersion Journey',
    duration: '12 Days / 11 Nights',
    type: 'Eco Safari',
    target: 'Remote Explorers',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
    route: 'Lilongwe -> Ntchisi Forest Lodge -> Kachenga Bush Camp -> Joma Adventures -> Chimwala -> Zomba Forest Lodge -> Blantyre',
    focus: 'Affordable, immersive eco-travel for residents and adventurous travellers.',
    highlights: ['Ntchisi Forest', 'Bush camp stay', 'Community-adjacent experiences', 'Zomba landscapes'],
    details: [
      'A grounded, nature-first route focused on immersion over luxury.',
      'Suitable for guests interested in conservation, simple comfort, and authentic settings.',
      'Includes forest activities, wilderness stays, and meaningful local context.',
    ],
  },
  {
    id: 6,
    slug: 'hiking-trekking',
    name: 'Hiking & Trekking',
    subtitle: 'Malawi Peaks & Valleys',
    duration: '12 Days / 11 Nights',
    type: 'Adventure Trekking',
    target: 'Budget Adventure Travellers',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200&q=80',
    route: 'Lilongwe -> Chongoni Hills -> Chipata Mountain -> Seven Hills of Senga -> Zomba Mountain -> Mulanje Mountain -> Blantyre',
    focus: 'Active trekking and hiking across Malawi\'s most scenic mountains and hills.',
    highlights: ['Mount Mulanje trekking', 'Zomba Plateau hikes', 'Chongoni terrain', 'Mixed lodge and campsite style'],
    details: [
      'An adventure-led itinerary for active travellers comfortable with regular hiking days.',
      'Combines well-known peaks with lesser-visited ridge and hill routes.',
      'Best for guests prioritizing movement, landscapes, and challenge.',
    ],
  },
  {
    id: 7,
    slug: 'nyasa-experience',
    name: 'Nyasa Experience',
    subtitle: 'Lake Malawi Island Hopping',
    duration: '13 Days / 12 Nights',
    type: 'Lake & Island Tour',
    target: 'International and Resident Travellers',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    route: 'Lilongwe -> Mumbo Island (Cape Maclear) -> Blue Zebra -> Pure Likoma -> Tongole -> Kumbali Country Lodge -> Lilongwe',
    focus: 'A lake-centered journey with island stays, water activities, and relaxed pacing.',
    highlights: ['Mumbo Island', 'Blue Zebra Island Lodge', 'Likoma Island', 'Snorkeling and kayaking', 'Lakefront relaxation'],
    details: [
      'Designed around Lake Malawi experiences with carefully sequenced island and lakeshore properties.',
      'Blends activity and downtime for travellers who want both exploration and rest.',
      'Works well for couples, small groups, and multi-interest itineraries.',
    ],
  },
]
