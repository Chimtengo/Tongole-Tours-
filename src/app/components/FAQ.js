'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'Who is Tongole Tours?',
    a: 'We are an indigenous Malawian-run tour company dedicated to delivering immersive cultural, wilderness, and adventure experiences. Guided by locals who know the land intimately, we connect travellers to the authentic soul of Malawi.',
  },
  {
    q: 'What makes Tongole Tours different from other operators?',
    a: 'Our competitive advantage lies in our niche focus on eco-tourism and community-based tourism, powerful storytelling, strong local partnerships, personalized customer service, and an unwavering commitment to sustainability. We offer unique customizable safari experiences with expert guides who have deep local knowledge.',
  },
  {
    q: 'Who are your tours designed for?',
    a: 'Our tours cater to international tourists (Europe, UK, USA, Asia, and African countries), domestic and regional travellers, wildlife photographers, conservation enthusiasts, eco-tourists, backpackers, and NGO staff. We have itineraries for every budget and interest.',
  },
  {
    q: 'What destinations do you cover in Malawi?',
    a: 'We cover all major destinations — Liwonde National Park, Majete Wildlife Reserve, Nkhotakota Wildlife Reserve, Nyika National Park, Lake Malawi islands (Likoma, Cape Maclear, Mumbo Island), Mount Mulanje, Zomba Plateau, and Ntchisi Forest Reserve, among many others.',
  },
  {
    q: 'How do you support local communities?',
    a: 'Community empowerment is central to our mission. We prioritize local employment, skills training, support local suppliers, and promote cultural preservation. The Tongole Foundation focuses on girls and women empowerment. We also run 100% solar-powered facilities.',
  },
  {
    q: 'Can we have a custom itinerary?',
    a: 'Absolutely. We specialise in tailor-made journeys for individuals, couples, families, and groups. Our team will work with you to design the perfect Malawi experience based on your interests, budget, and timeframe.',
  },
]

export default function FAQ() {
  const [open, setOpen]    = useState(0)
  const sectionRef         = useRef(null)

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
    <section ref={sectionRef} className="py-28 bg-earth-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Left ── */}
          <div className="reveal-left">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-midnight text-4xl font-bold mt-3 mb-6 leading-tight">
              Get Answers to<br />
              <em className="text-earth-500 not-italic">Common Questions</em>
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
              Find quick answers about Tongole Tours, our mission, our packages, and how
              we connect travellers to the authentic heart of Malawi.
            </p>

            <div className="bg-midnight p-8">
              <p className="font-accent text-earth-300 italic text-lg mb-4">
                &ldquo;Still have questions?&rdquo;
              </p>
              <p className="font-body text-white/70 text-sm mb-6 leading-relaxed">
                Our team is ready to provide detailed information and support for all
                your travel enquiries.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer inline-block bg-earth-500 hover:bg-earth-400 text-white
                           px-6 py-3 text-sm font-body tracking-widest uppercase transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ── Accordion ── */}
          <div className="reveal-right space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-earth-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left
                             hover:bg-earth-50 transition-colors"
                >
                  <span className="font-display text-midnight font-semibold text-sm pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-earth-400 text-xl flex-shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: open === i ? '300px' : '0px' }}
                >
                  <div className="px-5 pb-5 border-t border-earth-100">
                    <p className="font-body text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}