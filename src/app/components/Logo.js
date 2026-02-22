import Link from 'next/link'
import Image from 'next/image'

/**
 * Logo component
 *
 * The PNG has a white background. We handle two contexts:
 *  - dark=true  (Navbar, Footer — dark bg)  → invert filter to flip white→transparent
 *  - dark=false (light pages)               → mix-blend-mode: multiply
 *
 * By default dark=true since Navbar & Footer are always dark.
 */
export default function Logo({ size = 'md', dark = true }) {
  const sizes = {
    sm: { w: 90,  h: 40 },
    md: { w: 140, h: 62 },
    lg: { w: 190, h: 84 },
  }
  const s = sizes[size]

  return (
    <Link href="/" className="flex items-center group select-none">
      <div style={{ width: s.w, height: s.h, position: 'relative', flexShrink: 0 }}>
        <Image
          src="/logo.png"
          alt="Tongole Tours and Travel"
          fill
          className="object-contain transition-opacity duration-300 group-hover:opacity-85"
          style={
            dark
              ? {
                  // On dark backgrounds: brighten so the orange pops,
                  // and use multiply to dissolve the white
                  filter: 'brightness(1.15)',
                  mixBlendMode: 'screen',
                }
              : {
                  mixBlendMode: 'multiply',
                }
          }
          priority
        />
      </div>
    </Link>
  )
}