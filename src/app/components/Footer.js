import Link from 'next/link'
import Logo from './Logo'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Tours', href: '/tours' },
  { label: 'Contact', href: '/contact' },
]

const tourLinks = [
  { label: 'Forest-Lake Drive', href: '/tours/forest-lake-drive' },
  { label: 'Wings Over Malawi', href: '/tours/wings-over-malawi' },
  { label: 'The Big 5 Experience', href: '/tours/ultimate-big-5' },
  { label: 'Nyasa Experience', href: '/tours/nyasa-experience' },
  { label: 'Hiking & Trekking', href: '/tours/hiking-trekking' },
]

const lodgeLinks = [
  'Tongole Wilderness Retreat',
  'Mkulumadzi Lodge',
  'Kuthengo Lodge',
  'Mvuu Lodge',
  'Blue Zebra Island Lodge',
  'Mumbo Island Lodge',
  'Chelinda Lodge',
  'Kaya Mawa',
]

const contactItems = [
  { label: 'Location', value: 'Lilongwe, Malawi' },
  { label: 'Phone 1', value: '+265 882 437 039', href: 'tel:+265882437039' },
  { label: 'Phone 2', value: '+265 992 775 636', href: 'tel:+265992775636' },
  { label: 'Email', value: 'info@tongoletours.com', href: 'mailto:info@tongoletours.com' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo size="md" dark={true} />
            </div>

            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              An indigenous Malawian-run tour operator providing immersive cultural, wilderness,
              and adventure experiences to travellers from around the world.
            </p>
            <div className="space-y-2">
              {[
                'Sustainable & Responsible Tourism',
                'Community Empowerment',
                '100% Solar-Powered Facilities',
              ].map((value) => (
                <div key={value} className="font-body text-white/40 text-xs">{value}</div>
              ))}
            </div>
          </div>

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

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-earth-400 mb-6">Our Lodges</h4>
            <ul className="space-y-3">
              {lodgeLinks.map((lodge) => (
                <li key={lodge} className="font-body text-white/50 text-sm">
                  {lodge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 mb-10">
          <h4 className="font-body text-xs tracking-widest uppercase text-earth-400 mb-6">Contact Us</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactItems.map((item) => (
              <div key={item.label}>
                <div className="font-body text-xs text-earth-400 tracking-widest uppercase mb-2">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="font-body text-white/60 text-sm hover:text-earth-300 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="font-body text-white/60 text-sm">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>

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
