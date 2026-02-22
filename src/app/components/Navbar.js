'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tours',    href: '/tours' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-midnight/96 backdrop-blur-sm shadow-xl py-2' : 'bg-midnight/40 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — dark=true so it renders correctly on dark navbar */}
        <Logo size="md" dark={true} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-white/80 hover:text-earth-300 font-body text-sm tracking-wider uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-shimmer bg-earth-500 hover:bg-earth-400 text-white px-6 py-2.5 text-sm font-body tracking-wider uppercase transition-colors"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-midnight/98 backdrop-blur-sm overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-earth-300 font-body text-sm tracking-wider uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
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