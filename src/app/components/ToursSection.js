'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { tours } from '../data/tours'

export default function ToursSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.section-reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 section-reveal">
          <div>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              Our Signature Journeys
            </h2>
          </div>
          <Link
            href="/tours"
            className="font-body text-sm tracking-widest uppercase text-earth-600 hover:text-midnight flex items-center gap-2 group whitespace-nowrap"
          >
            View All Tours
            <span className="group-hover:translate-x-2 transition-transform inline-block">-&gt;</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <article
              key={tour.slug}
              className={`tour-card section-reveal delay-${((i % 3) + 1) * 100} group bg-white border border-earth-100 overflow-hidden`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
                <div className="absolute top-4 left-4 bg-earth-500/90 text-white px-3 py-1 text-xs font-body tracking-widest uppercase">
                  {tour.type}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-3">
                <Link href={`/tours/${tour.slug}`} className="block">
                  <h3 className="font-display text-midnight text-xl font-bold leading-tight">
                    {tour.name}
                  </h3>
                </Link>
                <p className="font-accent text-earth-500 italic text-sm">
                  {tour.subtitle}
                </p>

                <div className="flex items-center justify-between gap-3 pt-2 border-t border-earth-100 mt-1">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="font-body text-xs text-earth-500 tracking-widest uppercase group-hover:text-midnight transition-colors flex items-center gap-2"
                  >
                    Explore Tour
                    <span className="text-earth-400 group-hover:translate-x-1 transition-transform inline-block text-sm">-&gt;</span>
                  </Link>
                  <Link
                    href={`/contact?tour=${tour.slug}`}
                    className="btn-shimmer bg-earth-500 hover:bg-earth-400 text-white px-4 py-2 text-xs font-body tracking-widest uppercase transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
