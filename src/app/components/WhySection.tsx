'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 7, suffix: '+', label: 'Signature Itineraries', icon: '' },
  { value: 100, suffix: '%', label: 'Indigenous Malawian Run', icon: '' },
  { value: 5, suffix: '+', label: 'Years of Experience', icon: '' },
  { value: 50, suffix: '+', label: 'Conservation Partners', icon: '' },
]

const features = [
  {
    icon: '01',
    title: 'Wildlife Safaris',
    desc: 'Game drives through Liwonde, Majete, and Nkhotakota with expert local guides who know every trail.',
  },
  {
    icon: '02',
    title: 'Adventure & Trekking',
    desc: 'Summit Mulanje Mountain, trek Zomba Plateau, and explore Malawi\'s dramatic peaks and valleys.',
  },
  {
    icon: '03',
    title: 'Lake Malawi Escapes',
    desc: 'Island hopping, snorkelling, kayaking, and beach bliss on the warm shores of the Calendar Lake.',
  },
  {
    icon: '04',
    title: 'Cultural Immersion',
    desc: 'Village visits, traditional cuisine, artisan workshops, and storytelling rooted in real Malawian heritage.',
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.section-reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* Why Join section */}
      <section className="py-24 bg-fdf8f0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 section-reveal">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3 mb-5">
              How Tongole Tours Serves
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Driving excellence in travel through key focus areas that support communities
              and protect Malawi's natural heritage for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`section-reveal delay-${(i + 1) * 100} group p-8 bg-white border border-earth-100 hover:border-earth-300 hover:shadow-xl transition-all duration-400 cursor-default`}
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-display text-midnight text-xl font-bold mb-3">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-earth-400 group-hover:w-16 transition-all duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 bg-midnight relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #d8913a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e6e1e 0%, transparent 50%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="section-reveal text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="font-display text-earth-300 text-5xl font-bold mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-white/60 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-28 bg-fdf8f0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="relative">
                <div className="relative h-[360px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/wilderness.jpg"
                    alt="Malawi landscape and wilderness"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="hidden md:block absolute top-8 -right-10 w-52 h-64 rounded-lg overflow-hidden border-4 border-fdf8f0 shadow-xl">
                  <Image
                    src="/images/cultural.jpg"
                    alt="Cultural experience in Malawi"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 md:mt-0 md:absolute md:bottom-6 md:left-6 md:right-16 bg-gradient-to-r from-midnight/90 to-earth-700/80 backdrop-blur-sm p-5 rounded-lg border border-earth-300/30 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-earth-200 mb-2">Our Promise</p>
                  <p className="font-accent text-earth-100 italic text-sm md:text-base">
                    "Experience Malawi the indigenous way"
                  </p>
                  <p className="font-body text-white/70 text-xs mt-2">Tongole Tours Team</p>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <span className="font-body text-earth-500 text-xs tracking-widest uppercase">Who We Are</span>
              <h2 className="font-display text-midnight text-4xl font-bold mt-3 mb-6 leading-tight">
                Tongole Tours -<br />
                <em className="text-earth-500 not-italic">Malawi's Indigenous Tour Operator</em>
              </h2>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-5">
                Tongole Tours is an indigenous Malawian-run tour company dedicated to delivering
                immersive cultural, wilderness, and adventure experiences. We connect local, regional,
                and international travellers to the authentic soul of Malawi.
              </p>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
                Guided by locals who know the land intimately, our tours immerse guests in real
                Malawian culture, wildlife, and adventure. We are committed to sustainability,
                community empowerment, and protecting the natural heritage of this beautiful nation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Authenticity', 'Community Empowerment', 'Environmental Stewardship', 'Excellence in Service'].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0" />
                    <span className="font-body text-sm text-gray-700">{v}</span>
                  </div>
                ))}
              </div>

              <a href="/about" className="btn-primary inline-block bg-midnight hover:bg-dusk text-white px-8 py-3 font-body text-sm tracking-widest uppercase transition-colors">
                Our Full Story
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
