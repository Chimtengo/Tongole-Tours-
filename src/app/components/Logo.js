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
export default function Logo({ size = 'md', dark = true, width, height, scale = 1 }) {
  const sizes = {
    sm: { w: 100, h: 45 },
    md: { w: 200, h: 90 },
    lg: { w: 250, h: 112 },
  }
  const s = sizes[size]
  const w = width ?? s.w
  const h = height ?? s.h

  return (
    <Link href="/" className="flex items-center group select-none">
      <div style={{ width: w, height: h, position: 'relative', flexShrink: 0 }}>
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
                  transform: `scale(${scale})`,
                  transformOrigin: 'left center',
                }
              : {
                  mixBlendMode: 'multiply',
                  transform: `scale(${scale})`,
                  transformOrigin: 'left center',
                }
          }
          priority
        />
      </div>
    </Link>
  )
}
