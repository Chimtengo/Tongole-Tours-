import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { tours, getTourBySlug } from '../../data/tours'

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.name} | Tongole Tours`,
    description: tour.overview,
  }
}

export default async function TourDetailPage({ params }) {
  // Next.js 15: params must be awaited
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <main>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/30 to-midnight/80" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-24">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-white/50 text-xs font-body tracking-widest uppercase">
              <Link href="/" className="hover:text-earth-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/tours" className="hover:text-earth-300 transition-colors">Tours</Link>
              <span>/</span>
              <span className="text-earth-300">{tour.name}</span>
            </div>

            {/* Type badge */}
            <div className="inline-block bg-earth-500/80 text-white px-4 py-1.5 text-xs font-body tracking-widest uppercase mb-5">
              {tour.type}
            </div>

            <h1 className="font-display text-white text-5xl md:text-7xl font-bold leading-tight mb-4 hero-title">
              {tour.name}
            </h1>
            <p className="font-accent text-earth-300 text-xl md:text-2xl italic mb-5 hero-subtitle">
              {tour.subtitle}
            </p>
            <p className="font-body text-white/75 text-base md:text-lg max-w-2xl mb-10 hero-cta">
              {tour.tagline}
            </p>

            {/* Quick stats */}
            <div className="hero-cta flex flex-wrap gap-4">
              {[
                { icon: '🗓️', label: 'Duration', value: tour.duration },
                { icon: '👥', label: 'Best For',  value: tour.target },
              ].map((stat, i) => (
                <div key={i} className="bg-midnight/60 backdrop-blur-sm border border-white/20 px-5 py-3">
                  <div className="font-body text-white/50 text-xs tracking-widest uppercase mb-1">
                    {stat.icon} {stat.label}
                  </div>
                  <div className="font-display text-white font-semibold text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Immersive Moments
            </span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              What You&rsquo;ll Experience
            </h2>
          </div>

          <div className="space-y-16">
            {tour.experiences.map((exp, i) => (
              <div key={i} className={`grid md:grid-cols-2 overflow-hidden shadow-xl`}>

                {/* Image */}
                <div className={`relative h-72 md:h-auto min-h-[320px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-earth-500 flex items-center justify-center">
                    <span className="font-display text-white font-bold text-lg">{i + 1}</span>
                  </div>
                </div>

                {/* Text */}
                <div className={`p-10 md:p-14 bg-earth-50 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="w-12 h-0.5 bg-earth-400 mb-5" />
                  <h3 className="font-display text-midnight text-2xl md:text-3xl font-bold mb-5 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY ── */}
      <section className="py-28 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-earth-400 text-xs tracking-widest uppercase">
              Day by Day
            </span>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold mt-3">
              Your Itinerary
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {tour.itinerary.map((item, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  {i < tour.itinerary.length - 1 && (
                    <div className="w-px flex-1 bg-earth-800 mt-2 min-h-[2rem]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <div className="font-body text-earth-400 text-xs tracking-widest uppercase mb-1">
                    {item.day}
                  </div>
                  <h3 className="font-display text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED / NOT INCLUDED ── */}
      <section className="py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-forest-500">
              <h3 className="font-display text-midnight text-2xl font-bold mb-6">
                ✓ What&rsquo;s Included
              </h3>
              <ul className="space-y-3">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-forest-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-earth-400">
              <h3 className="font-display text-midnight text-2xl font-bold mb-6">
                ○ Not Included
              </h3>
              <ul className="space-y-3">
                {tour.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-earth-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="grid grid-cols-4 h-48 md:h-64">
        {tour.experiences.map((exp, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-midnight/20 hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </section>

      {/* ── BOOKING CTA ── */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="absolute inset-0 bg-midnight/82" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
            Ready to go?
          </span>
          <h2 className="font-display text-white text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Book the<br />
            <em className="text-earth-300 not-italic">{tour.name}</em>
          </h2>
          <p className="font-accent text-white/70 text-xl italic mb-10 max-w-xl mx-auto">
            &ldquo;{tour.tagline}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-shimmer bg-earth-500 hover:bg-earth-400 text-white px-10 py-4 font-body text-sm tracking-widest uppercase transition-all"
            >
              Enquire &amp; Book Now
            </Link>
            <Link
              href="/tours"
              className="border border-white/50 hover:border-earth-300 text-white hover:text-earth-300 px-10 py-4 font-body text-sm tracking-widest uppercase transition-all"
            >
              View All Tours
            </Link>
          </div>

          <p className="font-body text-white/40 text-sm">
            {tour.duration} &nbsp;·&nbsp; Expert local guide included
          </p>
        </div>
      </section>

      {/* ── OTHER TOURS ── */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Keep Exploring
            </span>
            <h2 className="font-display text-midnight text-3xl font-bold mt-3">
              Other Signature Journeys
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tours
              .filter((t) => t.slug !== tour.slug)
              .slice(0, 3)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/tours/${t.slug}`}
                  className="tour-card group bg-white border border-earth-100 overflow-hidden block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 bg-earth-500/80 text-white text-xs font-body tracking-widest uppercase px-2 py-0.5">
                      {t.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-midnight text-lg font-bold mb-1">{t.name}</h3>
                    <p className="font-accent text-earth-500 italic text-sm mb-3">{t.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-gray-400">{t.duration}</span>
                      <span className="font-body text-xs text-earth-500 tracking-wider uppercase group-hover:text-midnight transition-colors">
                        View →
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
