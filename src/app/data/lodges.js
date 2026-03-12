const lodges = [
  {
    name: 'Tongole Wilderness Retreat',
    location: 'Nkhotakota Wildlife Reserve',
    details:
      'Hidden deep within the miombo woodlands of Nkhotakota Wildlife Reserve, Tongole Wilderness Retreat is a sanctuary of raw beauty and seclusion. Elevated wooden suites are crafted from natural materials, offering panoramic views over the Bua River and surrounding forest. Guests explore on guided walks, game drives and cultural visits to nearby communities, before returning to refined cuisine and tranquil evenings by the fire.',
  },
  {
    name: 'Mkulumadzi Lodge',
    location: 'Majete Wildlife Reserve',
    details:
      "Tucked away at the confluence of two rivers in the heart of Majete Wildlife Reserve, Nkulumadzi Lodge offers an exclusive safari experience in one of Malawi's most inspiring conservation success stories. Elevated chalets overlook the Shire River, blending seamlessly into the surrounding wilderness. Days are spent on expertly guided game drives in search of elephant, buffalo, black rhino and lion, while evenings unfold with sundowners on the riverbank and lantern-lit dinners under the stars.",
  },
  {
    name: 'Kuthengo Lodge',
    location: 'Liwonde National Park',
    details:
      'Set along the banks of the Shire River in Liwonde National Park, Kuthengo Lodge is an intimate, stylish retreat offering front-row seats to river life. Spacious tented suites open onto private decks where hippos grunt and elephants wander past. Days are filled with game drives across open floodplains and tranquil boat safaris that bring you astonishingly close to crocodiles and birdlife.',
  },
  {
    name: 'Mvuu Lodge',
    location: 'Liwonde National Park',
    details:
      'Nestled beneath towering baobabs in Liwonde National Park, Mvuu Lodge blends rustic charm with comfort in a spectacular riverside setting. Spectacular secluded suites with plunge pools and comfy tented chalets with private viewing decks overlook a lagoon frequently visited by elephants and antelope. Activities include game drives and serene boat safaris along the Shire River.',
  },
  {
    name: 'Blue Zebra Island Lodge',
    location: 'Mangochi, Lake Malawi',
    details:
      'Located on Nankoma Island within Lake Malawi National Park, Blue Zebra Island Lodge is a tropical escape surrounded by crystal-clear waters and golden beaches. Stylish safari-style tents and wooden chalets, some with private pools, are tucked among indigenous trees just steps from the lake. Days are spent kayaking, snorkelling among colourful cichlid fish, sailing at sunset or simply relaxing with your feet in the sand.',
  },
  {
    name: 'Mumbo Island Lodge',
    location: 'Mangochi, Lake Malawi',
    details:
      'A true barefoot luxury experience, Mumbo Island Lodge sits on a tiny, uninhabited island in the turquoise waters of Lake Malawi. Accessible only by boat, this eco-lodge offers rustic yet charming tents perched on rocky outcrops with uninterrupted lake views. Guests snorkel in some of the clearest freshwater in Africa, kayak around hidden coves, or unwind in hammocks overlooking the water.',
  },
  {
    name: 'The Commonage',
    location: 'Ntchisi Forest Reserve',
    details:
      'Perched on the edge of Ntchisi Forest Reserve, The Commonage offers cool mountain air and sweeping views over the Rift Valley. Guided forest walks reveal rare orchids, birds and endemic flora within ancient rainforest. The atmosphere is peaceful and restorative, ideal for travellers seeking respite between safari and lake experiences.',
  },
  {
    name: 'Kachenga Bush Camp',
    location: 'Nkhotakota Wildlife Reserve',
    details:
      'Situated within the vast wilderness of Nkhotakota Wildlife Reserve, Kachenga Bush Camp is an authentic and intimate safari camp. A perfect blend of comfort and nature in the beautiful chalets or the spacious camp site. Guests enjoy guided nature walks and hiking in one of Malawi\'s most untouched reserves, with evenings spent around the campfire beneath star-filled skies.',
  },
  {
    name: 'Chelinda Lodge',
    location: 'Nyika National Park',
    details:
      'Set high on the rolling grasslands of Nyika National Park, Chelinda Lodge feels like a Highland retreat with stone-and-timber cabins and roaring fireplaces overlooking vast open plains dotted with antelope and zebra. Guests explore on horseback, mountain bike or guided walks through wildflower-filled landscapes.',
  },
  {
    name: 'Chimwala Camp',
    location: 'Liwonde National Park',
    details:
      'Chimwala Camp offers a charming and comfortable safari base within Liwonde National Park. Surrounded by riverine woodland and open floodplains, the camp provides close access to exceptional wildlife viewing. Guests enjoy game drives and boat safaris along the Shire River, encountering elephants, hippos and abundant birdlife in an intimate setting.',
  },
  {
    name: 'Africa Wild Truck',
    location: 'Mulanje',
    details:
      'Set against the dramatic backdrop of Mount Mulanje, Africa Wild Truck provides a relaxed and adventurous base for exploring Malawi\'s most iconic mountain. Surrounded by tea estates and forest trails, guests can enjoy guided hikes to waterfalls, scenic viewpoints and cool mountain streams.',
  },
  {
    name: 'Kaya Mawa',
    location: 'Likoma Island, Lake Malawi',
    details:
      'Set on the remote shores of Likoma Island in the heart of Lake Malawi, Kaya Mawa is an intimate island retreat where barefoot luxury meets authentic Malawian charm. Surrounded by crystal-clear waters, secluded beaches, and dramatic granite rocks, the lodge blends beautifully into its natural surroundings. Guests can enjoy swimming, snorkeling, kayaking, sailing, and scuba diving in the warm waters of the lake, or simply unwind with a spa treatment and relaxed island dining.',
  },
  {
    name: 'Zomba Forest Lodge',
    location: 'Zomba Mountain',
    details:
      'Zomba Mountain offers cool air, forest trails and breathtaking viewpoints overlooking the plains below. Together, these mountain experiences reveal a different, serene side of Malawi.',
  },
]

const normalizeLodgeName = (value) => {
  if (!value) return ''
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

const lodgeAliasLookup = new Map(
  [
    ['Tongole', 'Tongole Wilderness Retreat'],
    ['Tongole Wilderness Retreat', 'Tongole Wilderness Retreat'],
    ['Mkulumadzi', 'Mkulumadzi Lodge'],
    ['Mkulumadzi Lodge', 'Mkulumadzi Lodge'],
    ['Mvuu', 'Mvuu Lodge'],
    ['Mvuu Lodge', 'Mvuu Lodge'],
    ['Mvuu Camp', 'Mvuu Lodge'],
    ['Kuthengo', 'Kuthengo Lodge'],
    ['Kuthengo Lodge', 'Kuthengo Lodge'],
    ['Blue Zebra', 'Blue Zebra Island Lodge'],
    ['Blue Zebra Island Lodge', 'Blue Zebra Island Lodge'],
    ['Mumbo island', 'Mumbo Island Lodge'],
    ['Mumbo Island Lodge', 'Mumbo Island Lodge'],
    ['Kaya Mawa', 'Kaya Mawa'],
    ['Kachenga Bush Camp', 'Kachenga Bush Camp'],
    ['Kachenga Lodge & Campsite', 'Kachenga Bush Camp'],
    ['Kachenga Lodge & Campsite - Chipata/Chipata', 'Kachenga Bush Camp'],
    ['Chelinda', 'Chelinda Lodge'],
    ['Chelinda Lodge', 'Chelinda Lodge'],
    ['Chimwala Camp', 'Chimwala Camp'],
    ['Zomba Forest Lodge', 'Zomba Forest Lodge'],
    ['Zomba Forest Lodge - Zomba mountain', 'Zomba Forest Lodge'],
    ['Africa Wild truck', 'Africa Wild Truck'],
    ['Africa Wild Truck', 'Africa Wild Truck'],
  ].map(([key, value]) => [normalizeLodgeName(key), value])
)

const getLodgeByName = (name) => {
  if (!name) return null
  const normalized = normalizeLodgeName(name)
  const exact = lodges.find((lodge) => normalizeLodgeName(lodge.name) === normalized)
  if (exact) return exact
  const aliased = lodgeAliasLookup.get(normalized)
  if (!aliased) return null
  return lodges.find((lodge) => lodge.name === aliased) || null
}

export { lodges, getLodgeByName, normalizeLodgeName }
