'use client'

import { useEffect, useRef, useState } from 'react'

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
    desc: 'Island hopping, snorkelling, kayaking, Boat Safari and beach bliss on the warm shores of the Calendar Lake.',
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
            <span className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3 block">
              Why Choose Us
            </span>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mt-5">
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
    </div>
  )
}
