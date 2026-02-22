import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import WhySection   from './components/WhySection'
import ToursSection from './components/ToursSection'
import FAQ          from './components/FAQ'
import Partners     from './components/Partners'
import Footer       from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhySection />
      <ToursSection />
      <FAQ />
      <Partners />
      <Footer />
    </main>
  )
}