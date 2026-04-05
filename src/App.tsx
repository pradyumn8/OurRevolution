import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import PixelShowcase from '@/components/sections/PixelShowcase'
import News from '@/components/sections/News'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Section 1 — Hero / Intro */}
      <Hero />

      {/* Section 2 — Marquee / Ticker */}
      <Marquee />

      {/* Section 3 — Services Overview */}
      <Services />

      {/* Section 4 — Featured Work / Portfolio */}
      <Work />

      {/* Section 5 — About / Philosophy */}
      <About />

      {/* Section 6 — Pixel Text Showcase */}
      <PixelShowcase />

      {/* Section 7 — News / Insights */}
      <News />

      {/* Section 7 — Footer */}
      <Footer />
    </div>
  )
}
