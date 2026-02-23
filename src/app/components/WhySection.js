'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const stats = [
  { value: 7,   suffix: '+',  label: 'Signature Itineraries'},
  { value: 100, suffix: '%',  label: 'Indigenous Malawian-Run' },
  { value: 5,   suffix: '+',  label: 'Years of Experience' },
  { value: 50,  suffix: '+',  label: 'Partner Lodges & Reserves' },
]

const features = [
  {
    icon: '',
    title: 'Wildlife Safaris',
    desc: 'Game drives through Liwonde, Majete and Nkhotakota with expert local guides who know every trail.',
  },
  {
    icon: '',
    title: 'Adventure & Trekking',
    desc: 'Summit Mulanje Mountain, trek Zomba Plateau, and explore Malawi\'s dramatic peaks and valleys.',
  },
  {
    icon: '',
    title: 'Lake Malawi Escapes',
    desc: 'Island hopping, snorkelling, kayaking, and beach bliss on the warm shores of the Calendar Lake.',
  },
  {
    icon: '',
    title: 'Cultural Immersion',
    desc: 'Village visits, traditional cuisine, artisan workshops and storytelling rooted in real Malawian heritage.',
  },
]

/* ─── Animated counter ─────────────────────────────── */
function Counter({ target, suffix }) {
  const [count,   setCount]   = useState(0)
  const spanRef   = useRef(null)
  const started   = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps    = 60
          const duration = 2000
          const inc      = target / steps
          let   cur      = 0
          const timer    = setInterval(() => {
            cur += inc
            if (cur >= target) { setCount(target); clearInterval(timer) }
            else               { setCount(Math.floor(cur)) }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (spanRef.current) observer.observe(spanRef.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={spanRef}>{count}{suffix}</span>
}

/* ─── Main component ───────────────────────────────── */
export default function WhySection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.section-reveal, .reveal-left, .reveal-right')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>

      {/* ── Features grid ── */}
      <section className="py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16 section-reveal">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3 mb-5">
              How Tongole Tours Serves
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Driving excellence in travel through key focus areas that support communities
              and protect Malawi&rsquo;s natural heritage for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`section-reveal delay-${(i + 1) * 100} group p-8 bg-white border
                             border-earth-100 hover:border-earth-300 hover:shadow-xl
                             transition-all duration-300 cursor-default`}
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-display text-midnight text-xl font-bold mb-3">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-earth-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-20 bg-midnight relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #d8913a 0%, transparent 50%),' +
              'radial-gradient(circle at 80% 20%, #1e6e1e 0%, transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="section-reveal text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="font-display text-earth-300 text-5xl font-bold mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="font-body text-white/60 text-sm tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image block */}
            <div className="reveal-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541795083-4cbb9a3f7acf?w=800&q=80"
                  alt="Malawi landscape"
                  className="w-full h-[480px] object-cover"
                />
                {/* Offset decorative boxes */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-earth-400/20 border border-earth-300 -z-10" />
                <div className="absolute -top-6  -left-6  w-32 h-32 bg-forest-200/30 border border-forest-300 -z-10" />
                {/* Quote bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-midnight/80 backdrop-blur-sm p-4">
                  <p className="font-accent text-earth-300 italic text-sm">
                    &ldquo;Experience Malawi the indigenous way&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="reveal-right">
              <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="font-display text-midnight text-4xl font-bold mt-3 mb-6 leading-tight">
                Tongole Tours —<br />
                <em className="text-earth-500 not-italic">
                  Malawi&rsquo;s Indigenous Tour Operator
                </em>
              </h2>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
                Tongole Tours is an indigenous Malawian-run tour company dedicated to delivering
                immersive cultural, wilderness, and adventure experiences. We connect local,
                regional, and international travellers to the authentic soul of Malawi.
              </p>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
                Guided by locals who know the land intimately, our tours immerse guests in real
                Malawian culture, wildlife, and adventure — while empowering communities and
                protecting natural heritage.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Authenticity', 'Community Empowerment', 'Environmental Stewardship', 'Excellence in Service'].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0" />
                    <span className="font-body text-sm text-gray-700">{v}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-shimmer inline-block bg-midnight hover:bg-dusk text-white
                           px-8 py-3 font-body text-sm tracking-widest uppercase transition-colors"
              >
                Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}