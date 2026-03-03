'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tours', href: '/tours' },
]

const lodgeLinks = [
  'Tongole Wilderness Retreat',
  'Mvuu Lodge - Liwonde',
  'Mkulumadzi Lodge - Majete',
  'Blue Zebra Lodge - Lake Malawi',
  'Kaya Mawa - Likoma Island',
  'Mumbo Island Lodge',
  'Chilinda Lodge - Nyika',
  'Zomba Forest Lodge',
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const desktopLinkClass = (href) => {
    const base = scrolled
      ? 'text-white/90 hover:text-earth-300'
      : 'text-midnight/80 hover:text-earth-500'
    const active = scrolled ? 'text-earth-300' : 'text-earth-600'
    return `nav-link font-body text-sm tracking-wider uppercase transition-colors ${isActive(href) ? active : base}`
  }

  const mobileLinkClass = (href) => {
    const base = scrolled
      ? 'text-white/85 hover:text-earth-300'
      : 'text-midnight/80 hover:text-earth-500'
    const active = scrolled ? 'text-earth-300' : 'text-earth-600'
    return `font-body text-sm tracking-wider uppercase transition-colors ${isActive(href) ? active : base}`
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight/35 backdrop-blur-md shadow-xl py-2 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-sm py-3 border-b border-midnight/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo size="md" dark={scrolled} />

        <div className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          <div className="relative group">
            <button
              type="button"
              className={`font-body text-sm tracking-wider uppercase transition-colors ${
                scrolled ? 'text-white/90 hover:text-earth-300' : 'text-midnight/80 hover:text-earth-500'
              }`}
            >
              Our Lodges
            </button>
            <div
              className="absolute top-full left-0 pt-3 opacity-0 invisible translate-y-1
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                         group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                         transition-all duration-200"
            >
              <div className="w-72 bg-white border border-earth-100 shadow-xl py-3">
                {lodgeLinks.map((lodge) => (
                  <div key={lodge} className="px-4 py-2 font-body text-sm text-midnight/80 hover:bg-earth-50">
                    {lodge}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className={desktopLinkClass('/contact')}>
            Contact
          </Link>

          <Link
            href="/contact"
            className="btn-shimmer bg-earth-500 hover:bg-earth-400 text-white px-6 py-2.5 text-sm font-body tracking-wider uppercase transition-colors"
          >
            Book a Tour
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled ? 'text-white' : 'text-midnight'
          }`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-midnight'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-midnight'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-midnight'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          menuOpen
            ? `max-h-[34rem] border-t ${scrolled ? 'bg-midnight/70 border-white/15' : 'bg-white/98 border-midnight/10'}`
            : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}

          <div>
            <div className={`font-body text-sm tracking-wider uppercase mb-2 ${scrolled ? 'text-white' : 'text-midnight'}`}>
              Our Lodges
            </div>
            <div className="pl-3 flex flex-col gap-2">
              {lodgeLinks.map((lodge) => (
                <div key={lodge} className={`font-body text-sm ${scrolled ? 'text-white/75' : 'text-midnight/70'}`}>
                  {lodge}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkClass('/contact')}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-earth-500 text-white px-6 py-3 text-sm font-body tracking-wider uppercase text-center"
          >
            Book a Tour
          </Link>
        </div>
      </div>
    </nav>
  )
}
