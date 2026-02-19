import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const values = [
  {
    icon: '',
    title: 'Authenticity',
    desc: 'We offer genuine experiences rooted in real Malawian culture, people, and nature — not packaged imitations.',
  },
  {
    icon: '',
    title: 'Community Empowerment',
    desc: 'Our operations uplift local communities through employment, partnerships, girls & women empowerment, and the Tongole Foundation.',
  },
  {
    icon: '',
    title: 'Environmental Stewardship',
    desc: 'We champion responsible tourism that protects wildlife, forests, and natural habitats. We use 100% solar power in our facilities.',
  },
  {
    icon: '',
    title: 'Cultural Respect',
    desc: 'We honour Malawi\'s traditions, diversity, and heritage in every experience — believing tourism is a tool for cultural preservation.',
  },
  {
    icon: '',
    title: 'Safety & Professionalism',
    desc: 'We uphold the highest standards of comfort, security, and expertise. All guides are trained in First Aid and emergency evacuation.',
  },
  {
    icon: '',
    title: 'Excellence in Service',
    desc: 'We deliver exceptional, personalized, and memorable journeys for every traveller — exceeding expectations at every turn.',
  },
]

const team = [
  {
    name: 'Team Member 1',
    role: 'Founder',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
  {
    name: 'Team Member 2',
    role: 'Managing Director',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
  {
    name: 'Team Member 3',
    role: 'Head of Operations & Lead Safari Guide',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
  {
    name: 'Team Member 4',
    role: 'Community Liaison & Cultural Experience Lead',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
  {
    name: 'Team Member 5',
    role: 'Marine Guide & Lake Malawi Specialist',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
  {
    name: 'Team Member 6',
    role: 'Guest Experience & Logistics Coordinator',
    photo: '/team/placeholder.svg',
    bio: 'Example bio of your team members.',
    whatTheyDo: 'Example summary of what this team member does.',
  },
]

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541795083-4cbb9a3f7acf?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="font-body text-earth-300 text-xs tracking-widest uppercase">Who We Are</span>
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold mt-3 mb-6">
            About <em className="text-earth-300 not-italic">Tongole Tours</em>
          </h1>
          <p className="font-accent text-white/70 text-xl italic max-w-2xl">
            "Experience Malawi the indigenous way"
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to bottom right, transparent 49%, #fdf8f0 50%)' }}
        />
      </section>

      {/* Vision & Mission */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-earth-400">
              <h3 className="font-body text-xs tracking-widest uppercase text-earth-500 mb-4">Our Vision</h3>
              <p className="font-display text-midnight text-lg leading-relaxed">
                To be Malawi's leading indigenous tour operator, known for delivering transformative
                journeys that celebrate cultural identity, protect wilderness, and inspire travellers
                worldwide to experience Malawi in its truest form.
              </p>
            </div>
            <div className="bg-midnight p-8 border-l-4 border-earth-400">
              <h3 className="font-body text-xs tracking-widest uppercase text-earth-300 mb-4">Our Mission</h3>
              <p className="font-display text-white text-lg leading-relaxed">
                To provide exclusive, authentic, responsible, and immersive travel experiences that
                connect travellers to Malawi's culture, wilderness, and adventure — empowering local
                communities and preserving natural heritage.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-forest-500">
              <h3 className="font-body text-xs tracking-widest uppercase text-forest-600 mb-4">Our Story</h3>
              <p className="font-display text-midnight text-lg leading-relaxed">
                Tongole Tours is an indigenous Malawian-run company born from a deep love for this
                land. We believe Malawi — the Warm Heart of Africa — deserves a tour operator as
                authentic as its people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">What Drives Us</span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-8 border border-earth-100 hover:border-earth-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-display text-midnight text-xl font-bold mb-3">{v.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-earth-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-forest-300 text-xs tracking-widest uppercase">Our Commitment</span>
              <h2 className="font-display text-white text-4xl font-bold mt-3 mb-6">
                Sustainability & Social Responsibility
              </h2>
              <p className="font-body text-white/70 leading-relaxed mb-8">
                Sustainable tourism practices ensure long-term protection of Malawi's natural
                resources while enhancing community benefits for generations to come.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { aspect: 'Environmental', action: 'Waste reduction, conservation education' },
                  { aspect: 'Social', action: 'Local employment and skills training' },
                  { aspect: 'Economic', action: 'Support local suppliers and communities' },
                  { aspect: 'Cultural', action: 'Promote and respect local traditions' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 p-4 border border-white/10">
                    <div className="font-body text-forest-300 text-xs tracking-widest uppercase mb-2">{s.aspect}</div>
                    <div className="font-body text-white/70 text-sm">{s.action}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[360px] md:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="Conservation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-earth-500 text-xs tracking-widest uppercase">Our People</span>
            <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mt-3">
              Meet The Tongole Team
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              The team behind every journey, bringing together local expertise, cultural knowledge, and trusted on-the-ground support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                className="bg-white border border-earth-100 overflow-hidden hover:shadow-lg hover:border-earth-300 transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={member.photo}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="font-display text-midnight text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="font-body text-earth-600 text-xs tracking-widest uppercase mb-5">{member.role}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-gray-400 mb-2">Bio</p>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-gray-400 mb-2">What They Do</p>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">{member.whatTheyDo}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
