import Image from 'next/image'
import Link from 'next/link'

const links = {
  Explore: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Tours', href: '/tours' },
    { label: 'Contact Us', href: '/contact' },
  ],
  'Our Tours': [
    { label: 'Forest-Lake Drive', href: '/tours' },
    { label: 'Wings Over Malawi', href: '/tours' },
    { label: 'The Big 5 Experience', href: '/tours' },
    { label: 'Nyasa Experience', href: '/tours' },
    { label: 'Hiking & Trekking', href: '/tours' },
  ],
}

const COMPANY_LOGO_SRC = '/logo.png'

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-flex" aria-label="Tongole Tours home">
                <Image
                  src={COMPANY_LOGO_SRC}
                  alt="Tongole Tours logo"
                  width={220}
                  height={72}
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              An indigenous Malawian-run tour operator providing immersive cultural, wilderness,
              and adventure experiences to travellers from around the world.
            </p>

            {/* Values */}
            <div className="space-y-2">
              {[
                'Sustainable & Responsible Tourism',
                'Community Empowerment',
                '100% Solar-Powered Facilities',
              ].map((v, i) => (
                <div key={i} className="font-body text-white/40 text-xs">{v}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-body text-xs tracking-widest uppercase text-earth-400 mb-6">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-body text-white/50 hover:text-earth-300 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Location', value: 'Lilongwe, Malawi' },
              { label: 'Phone', value: '+265 882 437 039 / +265 992 775 636' },
              { label: 'Email', value: 'info@tongoletours.com' },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3">
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
            © {new Date().getFullYear()} Tongole Tours Company. All rights reserved.
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

