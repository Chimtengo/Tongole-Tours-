'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    bg: 'images/hero/slide-1.webp',
    tag:      'Wildlife & Safari',
    title:    'Discover Malawi\'s',
    titleEm:  'Wild Heart',
    subtitle: 'Game drives through Africa\'s most rewarding conservation success stories',
  },
  {
    bg: 'images/hero/slide-2.webp',
    tag:      'Lake Experiences',
    title:    'Lake Malawi —',
    titleEm:  'The Calendar Lake',
    subtitle: 'Island escapes, snorkelling, kayaking, and warm-water bliss',
  },
  {
    bg: 'images/hero/slide-3.webp',
    tag:      'Cultural Tours',
    title:    'Culture &',
    titleEm:  'Community',
    subtitle: 'Village visits, traditions, and authentic Malawian soul',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [loaded,  setLoaded]  = useState(false)

  useEffect(() => {
    setLoaded(true)
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden">

      {/* ── Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active ken-burns' : ''}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/35 to-midnight/80 z-10" />
      {/* Diagonal cut at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{ background: 'linear-gradient(to bottom right, transparent 49%, #fdf8f0 50%)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">

            {/* Tag */}
            <div className={`flex items-center gap-2 mb-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <span className="w-8 h-px bg-earth-400" />
              <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
                {slides[current].tag}
              </span>
            </div>

            {/* Title */}
            <h1 key={current} className="font-display text-white text-5xl md:text-7xl font-bold leading-tight mb-4 hero-title">
              {slides[current].title}
              <br />
              <em className="text-earth-300 not-italic">{slides[current].titleEm}</em>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle font-accent text-white/75 text-xl md:text-2xl italic mb-10 font-light">
              &ldquo;{slides[current].subtitle}&rdquo;
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="btn-shimmer bg-earth-500 hover:bg-earth-400 text-white
                           px-8 py-4 font-body text-sm tracking-widest uppercase
                           transition-all text-center"
              >
                Explore Tours
              </Link>
              <Link
                href="/about"
                className="border border-white/50 hover:border-earth-300 text-white
                           hover:text-earth-300 px-8 py-4 font-body text-sm tracking-widest
                           uppercase transition-all text-center backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current ? 'w-8 h-2 bg-earth-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        <span className="font-body text-white/40 text-xs tracking-widest uppercase mt-1"
              style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}