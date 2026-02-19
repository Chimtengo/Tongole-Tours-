'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    bg: '/hero/slide-1.jpg',
    title: 'Experience Malawi',
    titleEm: 'The Indigenous Way',
    subtitle: 'Experience Malawi the indigenous way',
    tag: 'Tongole Tours',
  },
  {
    bg: '/hero/slide-2.jpg',
    title: 'Immersive Cultural,',
    titleEm: 'Wilderness & Adventure Experiences',
    subtitle: 'Authentic journeys across wildlife, lake, and cultural destinations in Malawi',
    tag: 'What We Offer',
  },
  {
    bg: '/hero/slide-3.jpg',
    title: 'For Local, Regional,',
    titleEm: 'and International Travellers',
    subtitle: 'Responsible travel that empowers communities and protects natural heritage',
    tag: 'Who We Serve',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1.2s ease',
          }}
        >
          {/* Ken Burns zoom effect */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: i === current ? 'kenBurns 8s ease forwards' : 'none',
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight/80 z-10" />

      {/* Decorative diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to bottom right, transparent 49%, #fdf8f0 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-8 h-px bg-earth-400" />
              <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
                {slides[current].tag}
              </span>
            </div>

            {/* Main title */}
            <h1 className="font-display text-white text-5xl md:text-7xl font-bold leading-tight mb-4 hero-title">
              {slides[current].title}
              <br />
              <em className="text-earth-300 not-italic">{slides[current].titleEm}</em>
            </h1>

            <p className="hero-subtitle font-accent text-white/80 text-xl md:text-2xl italic mb-10 font-light">
              "{slides[current].subtitle}"
            </p>

            {/* CTA */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="btn-primary bg-earth-500 hover:bg-earth-400 text-white px-8 py-4 font-body text-sm tracking-widest uppercase transition-all inline-block text-center"
              >
                Explore Tours
              </Link>
              <Link
                href="/about"
                className="border border-white/50 hover:border-earth-300 text-white hover:text-earth-300 px-8 py-4 font-body text-sm tracking-widest uppercase transition-all inline-block text-center backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-earth-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
        <span className="font-body text-white/50 text-xs tracking-widest uppercase rotate-90 mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}
