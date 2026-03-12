'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { lodges } from '../data/lodges'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.4 1.7.7 2.6.8A2 2 0 0 1 22 16.9z" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7v3h3.1v8h3.4z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 1 0 12 7.2zm0 8A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4z" />
      <circle cx="17.4" cy="6.6" r="1.1" />
      <path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4A5.3 5.3 0 0 1 16.7 22H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2zm0 1.6A3.7 3.7 0 0 0 3.6 7.3v9.4a3.7 3.7 0 0 0 3.7 3.7h9.4a3.7 3.7 0 0 0 3.7-3.7V7.3a3.7 3.7 0 0 0-3.7-3.7H7.3z" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 3H22l-6.8 7.7L23 21h-6.2l-4.9-6.4L6.2 21H3l7.2-8.2L1 3h6.3l4.4 5.9L18.9 3zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19z" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tours', href: '/tours' },
]

const TONGOLE_LODGE_NAME = 'Tongole Wilderness Retreat'
const TONGOLE_YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/pljEv_UjYCk'
const KACHENGA_LODGE_NAME = 'Kachenga Bush Camp'
const KACHENGA_LODGE_URL = 'https://kachengabushcamp.mw/'
const OUR_LODGE_NAMES = new Set(['Tongole Wilderness Retreat', 'Kachenga Bush Camp'])

const buildLodgeGallery = (name, location) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return [
    {
      src: `/images/lodges/${slug}/01.jpg`,
      alt: `${name} signature view`,
      caption: 'Signature lodge experience',
      destination: location,
    },
    {
      src: `/images/lodges/${slug}/02.jpg`,
      alt: `${name} wildlife and activities`,
      caption: 'Wildlife and guided activities',
      destination: location,
    },
    {
      src: `/images/lodges/${slug}/03.jpg`,
      alt: `${name} surrounding destination`,
      caption: 'Destination highlights',
      destination: location,
    },
  ]
}

const lodgeDetails = lodges.map((lodge) => ({
  ...lodge,
  gallery: buildLodgeGallery(lodge.name, lodge.location),
}))

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLodge, setActiveLodge] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const ourLodges = lodgeDetails.filter((lodge) => OUR_LODGE_NAMES.has(lodge.name))
  const otherLodges = lodgeDetails.filter((lodge) => !OUR_LODGE_NAMES.has(lodge.name))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!activeLodge) return undefined

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setActiveLodge(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % activeLodge.gallery.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + activeLodge.gallery.length) % activeLodge.gallery.length)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [activeLodge])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const desktopLinkClass = (href) => {
    const base = scrolled
      ? 'text-white/90 hover:text-earth-300'
      : 'text-midnight/80 hover:text-earth-500'
    const active = 'text-earth-500'
    return `nav-link font-body text-sm tracking-wider uppercase transition-colors ${isActive(href) ? active : base}`
  }

  const mobileLinkClass = (href) => {
    const base = scrolled
      ? 'text-white/85 hover:text-earth-300'
      : 'text-midnight/80 hover:text-earth-500'
    const active = 'text-earth-500'
    return `font-body text-sm tracking-wider uppercase transition-colors ${isActive(href) ? active : base}`
  }

  const openLodgeGallery = (lodge) => {
    setActiveLodge(lodge)
    setActiveImageIndex(0)
  }

  const closeLodgeGallery = () => setActiveLodge(null)

  const goToNextImage = () => {
    if (!activeLodge) return
    setActiveImageIndex((prev) => (prev + 1) % activeLodge.gallery.length)
  }

  const goToPreviousImage = () => {
    if (!activeLodge) return
    setActiveImageIndex((prev) => (prev - 1 + activeLodge.gallery.length) % activeLodge.gallery.length)
  }

  const activeImage = activeLodge?.gallery?.[activeImageIndex]
  const isTongolePopup = activeLodge?.name === TONGOLE_LODGE_NAME

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-[#10263A]/88 border-b border-white/12">
          <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-5 font-body text-xs text-white/75">
              <a href="mailto:info@tongoletours.com" className="hover:text-earth-300 transition-colors inline-flex items-center gap-1.5">
                <MailIcon className="w-3.5 h-3.5 text-sky-400" />
                info@tongoletours.com
              </a>
              <a href="tel:+265882437039" className="hover:text-earth-300 transition-colors inline-flex items-center gap-1.5">
                <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
                +265 882 437 039
              </a>
            </div>
            <div className="ml-auto flex items-center gap-3 text-white/75">
              <a href="#" aria-label="Facebook" className="hover:text-earth-300 transition-colors">
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-earth-300 transition-colors">
                <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
              </a>
              <a href="#" aria-label="X" className="hover:text-earth-300 transition-colors">
                <XIcon className="w-4 h-4 text-white/85" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 ${
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

            <div className="group">
              <button
                type="button"
                className={`font-body text-sm tracking-wider uppercase transition-colors inline-flex items-center gap-1 ${
                  scrolled ? 'text-white/90 hover:text-earth-300' : 'text-midnight/80 hover:text-earth-500'
                }`}
              >
                Our Lodges
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 z-50
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                         group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                         transition-all duration-200"
              >
                <div className="w-[min(88vw,1100px)] max-w-[calc(100vw-2rem)] bg-midnight/95 backdrop-blur-md border border-white/15 shadow-2xl p-4 md:p-5 mx-auto relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 20% 30%, #d8913a 0%, transparent 55%), radial-gradient(circle at 80% 75%, #1e6e1e 0%, transparent 55%)',
                    }}
                  />
                  <div className="relative z-10 font-body text-sm tracking-widest uppercase text-earth-300 mb-4 text-center">
                    Accommodation & Destination
                  </div>
                  <div className="relative z-10 grid md:grid-cols-2 gap-6">
                    <div className="max-h-[70vh] overflow-y-auto overscroll-contain pr-1">
                      <div className="sticky top-0 z-10 bg-midnight/95 backdrop-blur-md py-2 font-display text-[13px] tracking-[0.18em] uppercase text-earth-200 mb-3">
                        Our Lodges
                      </div>
                      <div className="grid gap-4">
                        {ourLodges.map((lodge) => (
                          <div
                            key={lodge.name}
                            role="button"
                            tabIndex={0}
                            onClick={() => openLodgeGallery(lodge)}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                openLodgeGallery(lodge)
                              }
                            }}
                            className="p-4 bg-white/5 border border-white/10 hover:border-earth-300 hover:bg-white/10 transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-300/70"
                          >
                            <h4 className="font-display text-white text-lg font-bold leading-tight">{lodge.name}</h4>
                            <p className="font-body text-earth-300 text-[11px] tracking-widest uppercase mt-1 mb-3">
                              {lodge.location}
                            </p>
                            <div className="mt-3 flex items-center gap-3">
                              {lodge.name === TONGOLE_LODGE_NAME && (
                                <a
                                  href="https://tongole.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(event) => event.stopPropagation()}
                                  className="inline-flex items-center justify-center bg-earth-500 hover:bg-earth-400 text-white px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-colors"
                                >
                                  Visit Page
                                </a>
                              )}
                              {lodge.name === KACHENGA_LODGE_NAME && (
                                <a
                                  href={KACHENGA_LODGE_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(event) => event.stopPropagation()}
                                  className="inline-flex items-center justify-center bg-earth-500 hover:bg-earth-400 text-white px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-colors"
                                >
                                  Visit Page
                                </a>
                              )}
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  openLodgeGallery(lodge)
                                }}
                                className="ml-auto font-body text-xs text-white/65 tracking-wide uppercase hover:text-earth-200 transition-colors"
                              >
                                View gallery
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="max-h-[70vh] overflow-y-auto overscroll-contain pr-1">
                      <div className="sticky top-0 z-10 bg-midnight/95 backdrop-blur-md py-2 font-display text-[13px] tracking-[0.18em] uppercase text-earth-200 mb-3">
                        Other Lodges
                      </div>
                      <div className="grid gap-4">
                        {otherLodges.map((lodge) => (
                          <div
                            key={lodge.name}
                            role="button"
                            tabIndex={0}
                            onClick={() => openLodgeGallery(lodge)}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                openLodgeGallery(lodge)
                              }
                            }}
                            className="p-4 bg-white/5 border border-white/10 hover:border-earth-300 hover:bg-white/10 transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-300/70"
                          >
                            <h4 className="font-display text-white text-lg font-bold leading-tight">{lodge.name}</h4>
                            <p className="font-body text-earth-300 text-[11px] tracking-widest uppercase mt-1 mb-3">
                              {lodge.location}
                            </p>
                            <div className="mt-3 flex items-center">
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  openLodgeGallery(lodge)
                                }}
                                className="ml-auto font-body text-xs text-white/65 tracking-wide uppercase hover:text-earth-200 transition-colors"
                              >
                                View gallery
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                {ourLodges.map((lodge) => (
                  <button
                    key={lodge.name}
                    type="button"
                    onClick={() => {
                      openLodgeGallery(lodge)
                      setMenuOpen(false)
                    }}
                    className={`font-body text-sm text-left hover:text-earth-400 transition-colors ${
                      scrolled ? 'text-white/75' : 'text-midnight/70'
                    }`}
                  >
                    {lodge.name}
                  </button>
                ))}
              </div>

              <div className={`mt-4 font-body text-sm tracking-wider uppercase mb-2 ${scrolled ? 'text-white' : 'text-midnight'}`}>
                Other Lodges
              </div>
              <div className="pl-3 flex flex-col gap-2">
                {otherLodges.map((lodge) => (
                  <button
                    key={lodge.name}
                    type="button"
                    onClick={() => {
                      openLodgeGallery(lodge)
                      setMenuOpen(false)
                    }}
                    className={`font-body text-sm text-left hover:text-earth-400 transition-colors ${
                      scrolled ? 'text-white/75' : 'text-midnight/70'
                    }`}
                  >
                    {lodge.name}
                  </button>
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

      {activeLodge && activeImage && (
        <div className="fixed inset-0 z-[70] px-4 py-8 md:px-8 md:py-10 flex items-start md:items-center justify-center overflow-y-auto">
          <button
            type="button"
            aria-label="Close lodge gallery"
            onClick={closeLodgeGallery}
            className="absolute inset-0 bg-midnight/85 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-6xl max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)] bg-midnight border border-white/15 shadow-2xl overflow-y-auto">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 30%, #d8913a 0%, transparent 58%), radial-gradient(circle at 80% 70%, #1e6e1e 0%, transparent 58%)',
              }}
            />
            <button
              type="button"
              onClick={closeLodgeGallery}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors font-body text-xs tracking-widest uppercase"
            >
              Close
            </button>

            <div className="relative z-10 grid lg:grid-cols-[1.8fr,1fr]">
              <div className="bg-black/30 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="aspect-[16/10] bg-black/35">
                  {isTongolePopup ? (
                    <iframe
                      src={TONGOLE_YOUTUBE_EMBED_URL}
                      title="Tongole Wilderness Retreat Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {isTongolePopup ? (
                  <div className="px-4 py-3 border-t border-white/10 font-body text-xs text-white/70">
                    Featured video above. Browse lodge gallery thumbnails on the right.
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={goToPreviousImage}
                      className="font-body text-xs tracking-widest uppercase text-earth-300 hover:text-earth-200 transition-colors"
                    >
                      Previous
                    </button>
                    <div className="font-body text-xs text-white/70">
                      {activeImageIndex + 1} / {activeLodge.gallery.length}
                    </div>
                    <button
                      type="button"
                      onClick={goToNextImage}
                      className="font-body text-xs tracking-widest uppercase text-earth-300 hover:text-earth-200 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-2xl text-white font-bold leading-tight">{activeLodge.name}</h3>
                <p className="font-body text-earth-300 text-[11px] tracking-widest uppercase mt-2 mb-3">
                  {activeLodge.location}
                </p>
                <p className="font-body text-sm text-white/75 leading-relaxed mb-5">
                  {activeLodge.details}
                </p>
                {activeLodge.name === TONGOLE_LODGE_NAME && (
                  <a
                    href="https://tongole.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mb-5 bg-earth-500 hover:bg-earth-400 text-white px-4 py-2 font-body text-xs tracking-widest uppercase transition-colors"
                  >
                    Visit Page
                  </a>
                )}
                <div className="font-body text-[10px] tracking-widest uppercase text-earth-300 mb-3">
                  Gallery & Destinations
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {activeLodge.gallery.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`group border transition-colors ${
                        activeImageIndex === index
                          ? 'border-earth-300'
                          : 'border-white/15 hover:border-earth-400'
                      }`}
                    >
                      <div className="aspect-square bg-black/30 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    </button>
                  ))}
                </div>
                <p className="font-body text-xs text-white/65 mt-4 leading-relaxed">
                  {activeImage.caption} - {activeImage.destination}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
