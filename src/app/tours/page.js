import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { tours } from '../data/tours'

const services = [
  { icon: '🦁', name: 'Safari Tours',        desc: 'Liwonde, Majete, Nyika' },
  { icon: '🌊', name: 'Lake Malawi',          desc: 'Beaches, islands, snorkelling' },
  { icon: '🏘️', name: 'Cultural Tours',       desc: 'Village visits, festivals' },
  { icon: '🏔️', name: 'Adventure & Trekking', desc: 'Mulanje, Zomba, and more' },
  { icon: '📋', name: 'Custom Planning',       desc: 'Tailor-made itineraries' },
]

export default function Tours() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
            Signature Journeys
          </span>
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            Our <em className="text-earth-300 not-italic">Tours</em>
          </h1>
          <p className="font-accent text-white/70 text-xl italic max-w-2xl">
            7 immersive ways to discover the real Malawi
          </p>
        </div>
        <div className="diagonal-cut" />
      </section>

      {/* ── Services overview ── */}
      <section className="py-14 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <div key={i}
                className="text-center p-6 bg-white border border-earth-100 hover:border-earth-300 transition-all duration-300">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-display text-midnight text-sm font-bold mb-1">{s.name}</div>
                <div className="font-body text-gray-400 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tour cards — each links to its detail page ── */}
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
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="tour-card group grid md:grid-cols-2 overflow-hidden border border-earth-100 hover:border-earth-300 block"
              >
                {/* Image */}
                <div className={`relative h-64 md:h-auto min-h-[280px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />

                  {/* Tour number */}
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-earth-500/90 flex items-center justify-center">
                    <span className="font-display text-white font-bold">0{tour.id}</span>
                  </div>

                  {/* Type badge */}
                  <div className="absolute bottom-5 left-5 bg-midnight/80 text-earth-300 px-3 py-1 text-xs font-body tracking-widest uppercase">
                    {tour.type}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-5 right-5 bg-earth-500/90 text-white px-3 py-1 text-xs font-body">
                    {tour.duration}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 bg-white flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="font-display text-midnight text-2xl md:text-3xl font-bold mb-1">
                    {tour.name}
                  </h2>
                  <p className="font-accent text-earth-500 italic text-base mb-4">{tour.subtitle}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{tour.tagline}</p>

                  {/* Route */}
                  <div className="bg-earth-50 p-4 mb-5">
                    <p className="font-body text-xs text-gray-500">
                      <strong className="text-midnight">Route: </strong>{tour.route}
                    </p>
                  </div>

                  {/* Highlights preview */}
                  <div className="grid grid-cols-1 gap-1.5 mb-6">
                    {tour.highlights.slice(0, 3).map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-earth-400 rounded-full flex-shrink-0" />
                        <span className="font-body text-xs text-gray-600">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-earth-100">
                    <span className="font-body text-xs bg-forest-50 text-forest-700 px-3 py-1">
                      {tour.target}
                    </span>
                    <span className="btn-shimmer bg-earth-500 group-hover:bg-earth-400 text-white px-5 py-2 text-xs font-body tracking-widest uppercase transition-colors flex items-center gap-2">
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}