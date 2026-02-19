import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { tours } from '../../data/tours'

type TourPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export default async function TourDetailsPage({ params }: TourPageProps) {
  const { slug } = await params
  const tour = tours.find((item) => item.slug === slug)

  if (!tour) notFound()

  return (
    <main>
      <Navbar />

      <section
        className="relative pt-40 pb-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/tours"
            className="inline-block font-body text-xs tracking-widest uppercase text-earth-200 hover:text-white mb-6"
          >
            Back to Tours
          </Link>
          <p className="font-body text-earth-300 text-xs tracking-widest uppercase mb-2">{tour.type}</p>
          <h1 className="font-display text-white text-4xl md:text-6xl font-bold mb-3">{tour.name}</h1>
          <p className="font-accent text-earth-200 text-xl italic">{tour.subtitle}</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to bottom right, transparent 49%, #fdf8f0 50%)' }}
        />
      </section>

      <section className="py-20 bg-earth-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 border border-earth-100">
              <p className="font-body text-[10px] tracking-widest uppercase text-gray-400 mb-2">Duration</p>
              <p className="font-body text-midnight text-sm">{tour.duration}</p>
            </div>
            <div className="bg-white p-5 border border-earth-100">
              <p className="font-body text-[10px] tracking-widest uppercase text-gray-400 mb-2">Target</p>
              <p className="font-body text-midnight text-sm">{tour.target}</p>
            </div>
            <div className="bg-white p-5 border border-earth-100">
              <p className="font-body text-[10px] tracking-widest uppercase text-gray-400 mb-2">Route</p>
              <p className="font-body text-midnight text-sm">{tour.route}</p>
            </div>
          </div>

          <div className="bg-white p-8 border border-earth-100 mb-6">
            <h2 className="font-display text-midnight text-3xl font-bold mb-4">Overview</h2>
            <p className="font-body text-gray-600 leading-relaxed">{tour.focus}</p>
          </div>

          <div className="bg-white p-8 border border-earth-100 mb-6">
            <h2 className="font-display text-midnight text-3xl font-bold mb-4">What To Expect</h2>
            <div className="space-y-4">
              {tour.details.map((item, index) => (
                <p key={index} className="font-body text-gray-600 leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 border border-earth-100 mb-8">
            <h2 className="font-display text-midnight text-3xl font-bold mb-4">Highlights</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {tour.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-400 flex-shrink-0" />
                  <span className="font-body text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tours"
              className="font-body text-xs border border-earth-300 text-midnight px-5 py-3 tracking-widest uppercase hover:bg-earth-50 transition-colors"
            >
              Back to Tours
            </Link>
            <Link
              href="/contact"
              className="btn-primary bg-earth-500 hover:bg-earth-400 text-white px-6 py-3 text-xs font-body tracking-widest uppercase transition-colors"
            >
              Enquire About This Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
