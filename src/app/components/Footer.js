import Link from 'next/link'
import Logo from './Logo'

const exploreLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About Us',  href: '/about' },
  { label: 'Our Tours', href: '/tours' },
  { label: 'Contact',   href: '/contact' },
]

const tourLinks = [
  { label: 'Forest-Lake Drive',    href: '/tours/forest-lake-drive' },
  { label: 'Wings Over Malawi',    href: '/tours/wings-over-malawi' },
  { label: 'The Big 5 Experience', href: '/tours/ultimate-big-5' },
  { label: 'Nyasa Experience',     href: '/tours/nyasa-experience' },
  { label: 'Hiking & Trekking',    href: '/tours/hiking-trekking' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-2">
            {/* Logo — screen blend mode works on dark footer */}
            <div className="mb-5">
              <Logo size="md" dark={true} />
            </div>

            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              An indigenous Malawian-run tour operator providing immersive cultural, wilderness,
              and adventure experiences to travellers from around the world.
            </p>
            <div className="space-y-2">
              {[
                '🌿 Sustainable & Responsible Tourism',
                '🤝 Community Empowerment',
                '☀️ 100% Solar-Powered Facilities',
              ].map((v, i) => (
                <div key={i} className="font-body text-white/40 text-xs">{v}</div>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-earth-400 mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-white/50 hover:text-earth-300 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-earth-400 mb-6">Our Tours</h4>
            <ul className="space-y-3">
              {tourLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-white/50 hover:text-earth-300 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📍', label: 'Location', value: 'Lilongwe, Malawi' },
              { icon: '📞', label: 'Phone',    value: '+265 882 437 039  /  +265 992 775 636' },
              { icon: '✉️', label: 'Email',    value: 'info@tongoletours.com' },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <div className="font-body text-xs text-earth-400 tracking-widest uppercase mb-1">{c.label}</div>
                  <div className="font-body text-white/60 text-sm">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Tongole Tours and Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-body text-white/30 hover:text-earth-300 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}