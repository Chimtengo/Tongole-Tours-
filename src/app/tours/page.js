import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { tours } from '../data/tours'

const itineraryDescriptions = {
  'forest-lake-drive': [
    'The Forest-Lake Drive is a scenic journey that combines Malawi\'s breath-taking highland forests with the tranquil beauty of Lake Malawi.',
    'This itinerary offers travellers a refreshing blend of cool mountain air, lush greenery, and crystal-clear lakeside views.Scenic road trips, Nature and eco-tourism experiences, Photography opportunities and Relaxation combined with light adventure.',
  ],
  'wings-over-malawi': [
    'This is an exclusive fly-in safari experience that allows guests to discover the beauty of Malawi from both the sky and the ground. From the air, travellers will enjoy panoramic views of the vast waters of Lake Malawi, sparkling like a silver ribbon beneath the sun, and the wildlife-rich plains of National Parks and Wildlife Reserve leaving with them unforgettable aerial views of a journey that truly captures the Warm Heart of Africa from above.',
    'Each landing opens the door to curated ground experiences from game drives, boat safaris, guided bush walks, cultural encounters, and lakeside relaxation before lifting off again to the next extraordinary location. Wings over Malawi offers Maximum comfort with minimal travel time, access to remote and exclusive destinations, and it is perfect for discerning travellers seeking adventure and efficiency.',
  ],
  'explore-malawi': [
    'Explore Malawi is a spectacular fly-in journey across Malawi, designed to showcase the country’s incredible diversity from southern wildlife reserves of Majete where the Big Five roam freely and Liwonde with its boat safaris on the majestic Shire river, to northern Lake Malawi island and highland plateaus of Nyika National Parks',
    'Traveling seamlessly by light aircraft, this itinerary connects Malawi’s south, centre, and north, creating a smooth and immersive safari that combines wildlife, wilderness, and lake experiences in one unforgettable adventure in the sky.',
  ],
  'ultimate-big-5': [
    'The Ultimate Big Five is an immersive road safari through Malawi\'s premier wildlife destinations, offering thrilling encounters with Africa\'s most iconic animals in diverse and unspoiled landscapes. This journey combines adventure, conservation success stories, and authentic bush experiences all connected by scenic drives through the Warm Heart of Africa.',
    'The itinerary offers a road safari adventure through varied landscapes, guaranteed Big Five tracking opportunities, combination of game drives and river safaris, conservation-focused destinations and authentic and less-crowded safari experience.',
  ],
  'nature-experience': [
    'Nature Experience is a scenic road journey through Malawi\'s most captivating natural landscapes, designed for travelers who wish to explore the country at a relaxed pace while fully immersing themselves in its beauty. Traveling by road allows guests to appreciate the changing scenery from rolling hills and rural villages to wildlife reserves and lakeshore vistas creating a truly authentic Malawian adventure.',
  ],
  'hiking-trekking': [
    'Hiking &Trekking is an immersive road-based adventure designed for travelers who crave fresh air, dramatic landscapes, and the thrill of exploring Malawi on foot. This itinerary takes guests deep into the country\'s most scenic highlands, forest reserves, and mountain trails combining challenging hikes with breathtaking natural beauty.',
  ],
  'nyasa-experience': [
    'Nyasa Experience is a scenic road journey along the shimmering shores of Lake Malawi historically known as Lake Nyasa combining lakeside relaxation, island charm, and untouched wilderness. This itinerary follows the rhythm of Africa\'s third-largest lake, offering guests a seamless blend of beach, culture, and nature.',
  ],
}

const services = [
  { icon: '', name: 'Safari Tours', desc: 'Liwonde, Majete, Nyika' },
  { icon: '', name: 'Lake Malawi', desc: 'Beaches, islands, snorkelling' },
  { icon: '', name: 'Cultural Tours', desc: 'Village visits, festivals' },
  { icon: '', name: 'Adventure & Trekking', desc: 'Mulanje, Zomba, and more' },
  { icon: '', name: 'Custom Planning', desc: 'Tailor-made itineraries' },
]

export default function Tours() {
  return (
    <main>
      <Navbar />

      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            Our <em className="text-earth-300 not-italic">Tours</em>
          </h1>
        </div>
      </section>

      <section className="py-14 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white border border-earth-100 hover:border-earth-300 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-display text-midnight text-sm font-bold mb-1">{s.name}</div>
                <div className="font-body text-gray-400 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Our Packages
            </span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              7 Signature Itineraries
            </h2>
            <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Click any tour below to explore the full itinerary, experiences, and booking details.
            </p>
          </div>

          <div className="space-y-8">
            {tours.map((tour, i) => (
              <article
                key={tour.slug}
                className="tour-card group grid md:grid-cols-2 overflow-hidden border border-earth-100 hover:border-earth-300"
              >
                <div className={`relative h-64 md:h-auto min-h-[280px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />

                  <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-earth-500/90 flex items-center justify-center">
                    <span className="font-display text-white font-bold">0{tour.id}</span>
                  </div>

                  <div className="absolute bottom-5 left-5 bg-midnight/80 text-earth-300 px-3 py-1 text-xs font-body tracking-widest uppercase">
                    {tour.type}
                  </div>

                  <div className="absolute bottom-5 right-5 bg-earth-500/90 text-white px-3 py-1 text-xs font-body">
                    {tour.duration}
                  </div>
                </div>

                <div className={`p-8 md:p-10 bg-white flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Link href={`/tours/${tour.slug}`} className="block">
                    <h2 className="font-display text-midnight text-2xl md:text-3xl font-bold mb-1">
                      {tour.name}
                    </h2>
                  </Link>
                  <p className="font-accent text-earth-500 italic text-base mb-4">{tour.subtitle}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{tour.tagline}</p>

                  <div className="bg-earth-50 p-4 mb-5">
                    <p className="font-body text-xs text-gray-500">
                      <strong className="text-midnight">Route: </strong>{tour.route}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {(itineraryDescriptions[tour.slug] || []).map((desc, j) => (
                      <p key={j} className="font-body text-xs text-gray-600 leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-earth-100">
                    <span className="font-body text-xs bg-forest-50 text-forest-700 px-3 py-1">
                      {tour.target}
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="font-body text-xs text-earth-500 tracking-widest uppercase group-hover:text-midnight transition-colors flex items-center gap-2"
                      >
                        View Details
                        <span className="group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
                      </Link>
                      <Link
                        href={`/contact?tour=${tour.slug}`}
                        className="btn-shimmer bg-earth-500 group-hover:bg-earth-400 text-white px-5 py-2 text-xs font-body tracking-widest uppercase transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
