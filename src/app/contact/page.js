'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer  from '../components/Footer'

const contactInfo = [
  { icon: '📍', label: 'Office',       value: 'Lilongwe, Malawi' },
  { icon: '📞', label: 'Phone',        value: '+265 882 437 039\n+265 992 775 636' },
  { icon: '✉️', label: 'Email',        value: 'info@tongoletours.com' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 8:00am – 5:00pm\nSat: 9:00am – 1:00pm' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', tourInterest: '', travellers: '', message: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => setSubmitted(true)

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-midnight/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            Plan Your <em className="text-earth-300 not-italic">Journey</em>
          </h1>
          <p className="font-accent text-white/70 text-xl italic max-w-2xl">
            Let us craft your perfect Malawi experience
          </p>
        </div>
        <div className="diagonal-cut" />
      </section>

      {/* ── Main section ── */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">

            {/* ── Contact info ── */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
                  Contact Information
                </span>
                <h2 className="font-display text-midnight text-3xl font-bold mt-3 mb-5">
                  We&rsquo;re Here to Help
                </h2>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  Whether you want to book a signature itinerary or design a fully custom journey,
                  our team is ready to make your Malawi dream a reality.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white border border-earth-100">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="font-body text-xs text-earth-500 tracking-widest uppercase mb-1">
                        {c.label}
                      </div>
                      <div className="font-body text-midnight text-sm whitespace-pre-line">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-midnight p-6">
                <h3 className="font-display text-earth-300 text-xl font-bold mb-3">
                  Who We Welcome
                </h3>
                <div className="space-y-2">
                  {[
                    '🌍 International tourists (Europe, UK, USA, Asia)',
                    '🌱 Eco-tourists & backpackers',
                    '📷 Wildlife photographers & researchers',
                    '🏢 Corporate & NGO clients',
                    '🏠 Domestic & regional travellers',
                  ].map((m, i) => (
                    <div key={i} className="font-body text-white/60 text-sm">{m}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Form ── */}
            <div className="md:col-span-3 bg-white p-10 border border-earth-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">🌍</div>
                  <h3 className="font-display text-midnight text-3xl font-bold mb-4">
                    Thank You, {form.name || 'Traveller'}!
                  </h3>
                  <p className="font-body text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                    We&rsquo;ve received your enquiry and our team will be in touch within 24 hours
                    to help plan your perfect Malawi journey.
                  </p>
                  <div className="mt-8 font-accent text-earth-500 italic text-lg">
                    &ldquo;Experience Malawi the indigenous way&rdquo;
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-midnight text-3xl font-bold mb-2">
                    Book or Enquire
                  </h2>
                  <p className="font-body text-gray-500 text-sm mb-8">
                    Fill in the form and we&rsquo;ll get back to you within 24 hours.
                  </p>

                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                          Full Name *
                        </label>
                        <input
                          name="name" type="text" value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-earth-200 focus:border-earth-400
                                     px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                          Email *
                        </label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-earth-200 focus:border-earth-400
                                     px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                          Phone
                        </label>
                        <input
                          name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+265 000 000 000"
                          className="w-full border border-earth-200 focus:border-earth-400
                                     px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                          Number of Travellers
                        </label>
                        <select
                          name="travellers" value={form.travellers} onChange={handleChange}
                          className="w-full border border-earth-200 focus:border-earth-400
                                     px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50"
                        >
                          <option value="">Select...</option>
                          <option>1 (Solo)</option>
                          <option>2 (Couple)</option>
                          <option>3–5 (Small Group)</option>
                          <option>6–10 (Group)</option>
                          <option>10+ (Large Group)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                        Tour of Interest
                      </label>
                      <select
                        name="tourInterest" value={form.tourInterest} onChange={handleChange}
                        className="w-full border border-earth-200 focus:border-earth-400
                                   px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50"
                      >
                        <option value="">Select a tour...</option>
                        <option>Forest-Lake Drive (Grand Malawi Explorer)</option>
                        <option>Wings Over Malawi (Fly-In Safari)</option>
                        <option>Explore Malawi (Air Option 2)</option>
                        <option>The Ultimate Big 5 Experience</option>
                        <option>Nature Experience (Eco-Immersion)</option>
                        <option>Hiking &amp; Trekking (Peaks &amp; Valleys)</option>
                        <option>Nyasa Experience (Lake Malawi)</option>
                        <option>Custom / Tailor-Made Journey</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                        Message
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your ideal Malawi experience — dates, special requirements, interests..."
                        className="w-full border border-earth-200 focus:border-earth-400
                                   px-4 py-3 text-sm font-body outline-none transition-colors bg-earth-50 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="btn-shimmer w-full bg-earth-500 hover:bg-earth-400 text-white
                                 py-4 font-body text-sm tracking-widest uppercase transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}