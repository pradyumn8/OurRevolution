import { AnimatedHeroSection } from '@/components/ui/animated-hero-section'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#F5F0EB]">
      {/* Animated pong background */}
      <AnimatedHeroSection />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl px-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-6 font-medium">
            Global Strategic Brand Design Agency
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#111111] mb-8 leading-tight">
            Creating what<br />the future holds.
          </h1>
          <p className="text-lg md:text-xl text-[#2B2B2B] max-w-2xl mx-auto leading-relaxed mb-10">
            We are a design company that helps brands define and thrive in culture.
            Creating influential strategy, brand identity, packaging design and communications.
          </p>
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#111111] border-b-2 border-[#111111] pb-1 pointer-events-auto hover:text-[#9A9490] hover:border-[#9A9490] transition-colors"
            whileHover={{ y: 2 }}
          >
            Learn more about us
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 pointer-events-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-[#9A9490]" />
        </motion.div>
      </div>
    </section>
  )
}
