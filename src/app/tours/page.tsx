import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { tours } from '../data/tours'

const services = [
  { icon: '??', name: 'Safari Tours', desc: 'Guided tours to Liwonde, Majete, Nyika' },
  { icon: '??', name: 'Lake Malawi Packages', desc: 'Beach holidays, snorkelling, island tours' },
  { icon: '???', name: 'Cultural Tours', desc: 'Village visits, festivals, museums' },
  { icon: '???', name: 'Adventure Tourism', desc: 'Hiking Mount Mulanje and Zomba Plateau' },
  { icon: '??', name: 'Travel Planning', desc: 'Customized itineraries and bookings' },
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
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">Signature Journeys</span>
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            Our <em className="text-earth-300 not-italic">Tours</em>
          </h1>
          <p className="font-accent text-white/70 text-xl italic max-w-2xl">
            7 immersive ways to discover the real Malawi
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to bottom right, transparent 49%, #fdf8f0 50%)' }}
        />
      </section>

      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <div key={i} className="text-center p-6 bg-white border border-earth-100 hover:border-earth-300 transition-all">
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
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">Our Packages</span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              7 Signature Itineraries
            </h2>
          </div>

          <div className="space-y-10">
            {tours.map((tour, i) => (
              <div
                key={tour.slug}
                className="grid md:grid-cols-2 gap-0 overflow-hidden border border-earth-100 hover:shadow-2xl transition-shadow"
              >
                <div className={`relative h-72 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-earth-500/90 text-white px-3 py-1 text-xs font-body tracking-widest uppercase">
                    {tour.type}
                  </div>
                </div>

                <div className={`p-10 bg-white flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-earth-400 text-3xl font-bold">
                      0{tour.id}
                    </span>
                    <div className="w-px h-10 bg-earth-200" />
                    <span className="font-body text-xs text-gray-400 tracking-widest uppercase">{tour.duration}</span>
                  </div>

                  <h2 className="font-display text-midnight text-3xl font-bold mb-1">{tour.name}</h2>
                  <p className="font-accent text-earth-500 italic mb-4">{tour.subtitle}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{tour.focus}</p>

                  <div className="bg-earth-50 p-4 mb-5">
                    <p className="font-body text-xs text-gray-500">
                      <strong className="text-midnight">Route: </strong>{tour.route}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {tour.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-earth-400 rounded-full flex-shrink-0" />
                        <span className="font-body text-xs text-gray-600">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-body text-xs bg-forest-50 text-forest-700 px-3 py-1">
                      {tour.target}
                    </span>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="font-body text-xs border border-earth-300 text-midnight px-4 py-2 tracking-widest uppercase hover:bg-earth-50 transition-colors"
                      >
                        View Details
                      </Link>
                      <a href="/contact" className="btn-primary bg-earth-500 hover:bg-earth-400 text-white px-6 py-2.5 text-xs font-body tracking-widest uppercase transition-colors">
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
