'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { tours } from '../data/tours'

export default function ToursSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.section-reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 section-reveal">
          <div>
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Our Signature Journeys
            </span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              7 Ways to Experience<br />
              <em className="text-earth-400 not-italic">Malawi</em>
            </h2>
          </div>
          <Link
            href="/tours"
            className="font-body text-sm tracking-widest uppercase text-earth-600 hover:text-midnight flex items-center gap-2 group"
          >
            View All Tours
            <span className="group-hover:translate-x-2 transition-transform">-&gt;</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className={`tour-card section-reveal delay-${((i % 3) + 1) * 100} group bg-white border border-gray-100 overflow-hidden cursor-pointer`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-earth-500/90 text-white px-3 py-1 text-xs font-body tracking-widest uppercase">
                  {tour.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-midnight/80 text-earth-300 px-3 py-1 text-xs font-body">
                  {tour.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-midnight text-xl font-bold mb-1">{tour.name}</h3>
                <p className="font-accent text-earth-500 italic text-sm mb-4">{tour.subtitle}</p>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-forest-600 bg-forest-50 px-2 py-1">
                    {tour.target}
                  </span>
                  <span className="font-body text-xs text-earth-500 tracking-wider uppercase group-hover:text-midnight transition-colors">
                    Learn More -&gt;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
