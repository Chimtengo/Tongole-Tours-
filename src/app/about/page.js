import Navbar from '../components/Navbar'
import Footer  from '../components/Footer'

const values = [
  {
    icon:  '🌍',
    title: 'Authenticity',
    desc:  'We offer genuine experiences rooted in real Malawian culture, people, and nature — not packaged imitations.',
  },
  {
    icon:  '🤝',
    title: 'Community Empowerment',
    desc:  'Our operations uplift local communities through employment, partnerships, girls & women empowerment, and the Tongole Foundation.',
  },
  {
    icon:  '🌿',
    title: 'Environmental Stewardship',
    desc:  'We champion responsible tourism that protects wildlife, forests, and natural habitats. We use 100% solar power in our facilities.',
  },
  {
    icon:  '🏘️',
    title: 'Cultural Respect',
    desc:  "We honour Malawi's traditions, diversity, and heritage in every experience — believing tourism is a tool for cultural preservation.",
  },
  {
    icon:  '🛡️',
    title: 'Safety & Professionalism',
    desc:  'We uphold the highest standards of comfort, security, and expertise. All guides are trained in First Aid and emergency evacuation.',
  },
  {
    icon:  '⭐',
    title: 'Excellence in Service',
    desc:  'We deliver exceptional, personalised, and memorable journeys for every traveller — exceeding expectations at every turn.',
  },
]

export default function About() {
  return (
    <main>
      <Navbar />

      {/* ── Page hero ── */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541795083-4cbb9a3f7acf?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-midnight/78" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">
            Who We Are
          </span>
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            About{' '}
            <em className="text-earth-300 not-italic">Tongole Tours</em>
          </h1>
          <p className="font-accent text-white/70 text-xl italic max-w-2xl">
            &ldquo;Experience Malawi the indigenous way&rdquo;
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image block */}
            <div>
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
            <div>
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

              <div className="grid grid-cols-2 gap-3">
                {['Authenticity', 'Community Empowerment', 'Environmental Stewardship', 'Excellence in Service'].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0" />
                    <span className="font-body text-sm text-gray-700">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Story ── */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                bg:    'bg-white',
                accent:'border-earth-400',
                label: 'Our Vision',
                labelColor: 'text-earth-500',
                text:  "To be Malawi's leading indigenous tour operator, known for delivering transformative journeys that celebrate cultural identity, protect wilderness, and inspire travellers worldwide to experience Malawi in its truest form.",
                textColor: 'text-midnight',
              },
              {
                bg:    'bg-midnight',
                accent:'border-earth-400',
                label: 'Our Mission',
                labelColor: 'text-earth-300',
                text:  "To provide exclusive, authentic, responsible, and immersive travel experiences that connect travellers to Malawi's culture, wilderness, and adventure — while empowering local communities and preserving natural heritage.",
                textColor: 'text-white',
              },
              {
                bg:    'bg-white',
                accent:'border-forest-500',
                label: 'Our Story',
                labelColor: 'text-forest-600',
                text:  "Tongole Tours was born from a deep love for this land. We believe Malawi — the Warm Heart of Africa — deserves a tour operator as authentic as its people. Every journey we craft is guided by locals who know the land intimately.",
                textColor: 'text-midnight',
              },
            ].map((card, i) => (
              <div key={i} className={`${card.bg} p-8 border-l-4 ${card.accent}`}>
                <h3 className={`font-body text-xs tracking-widest uppercase mb-4 ${card.labelColor}`}>
                  {card.label}
                </h3>
                <p className={`font-display text-lg leading-relaxed ${card.textColor}`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">
              What Drives Us
            </span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i}
                className="group p-8 border border-earth-100 hover:border-earth-300
                           hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-display text-midnight text-xl font-bold mb-3">{v.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-earth-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section className="py-24 bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-forest-300 text-xs tracking-widest uppercase">
                Our Commitment
              </span>
              <h2 className="font-display text-white text-4xl font-bold mt-3 mb-6">
                Sustainability &amp;<br />Social Responsibility
              </h2>
              <p className="font-body text-white/70 leading-relaxed mb-8">
                Sustainable tourism practices ensure long-term protection of Malawi&rsquo;s
                natural resources while enhancing community benefits for generations to come.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { aspect: 'Environmental', action: 'Waste reduction, conservation education' },
                  { aspect: 'Social',        action: 'Local employment and skills training' },
                  { aspect: 'Economic',      action: 'Support local suppliers and communities' },
                  { aspect: 'Cultural',      action: 'Promote and respect local traditions' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 p-4 border border-white/10">
                    <div className="font-body text-forest-300 text-xs tracking-widest uppercase mb-2">
                      {s.aspect}
                    </div>
                    <div className="font-body text-white/70 text-sm">{s.action}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="Conservation in Malawi"
                className="w-full h-[450px] object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
