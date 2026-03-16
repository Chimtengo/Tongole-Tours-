'use client'

import { useEffect, useMemo, useState } from 'react'

export default function ItineraryImageSlider({ images, alt }) {
  const safeImages = useMemo(() => {
    if (!Array.isArray(images) || images.length === 0) return []
    return images.filter(Boolean)
  }, [images])

  const [sources, setSources] = useState(safeImages)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setSources(safeImages)
    setActiveIndex(0)
  }, [safeImages])

  useEffect(() => {
    if (sources.length <= 1) return undefined
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sources.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [sources.length])

  if (sources.length === 0) {
    return null
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % sources.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + sources.length) % sources.length)
  }

  const handleError = (badSrc) => {
    setSources((prev) => {
      const next = prev.filter((src) => src !== badSrc)
      if (next.length === 0) return prev
      return next
    })
    setActiveIndex((prev) => {
      if (prev >= sources.length - 1) return 0
      return prev
    })
  }

  return (
    <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden group">
      {sources.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          onError={() => handleError(src)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />

      {sources.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-midnight/70 text-white text-sm w-9 h-9 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-midnight/70 text-white text-sm w-9 h-9 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
