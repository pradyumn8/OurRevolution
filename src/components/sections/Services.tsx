import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ImageTrail } from '@/components/ui/image-trail'

const services = [
  {
    number: '01',
    title: 'The Strategy',
    description:
      "The brands that 'get' the power of strategy are the brands that go the distance. We're here to help you shape yours. To provide the spark that gives you your 'guiding light'.",
    items: ['Brand Strategy', 'Brand Architecture', 'Brand Naming', 'Tone of Voice', 'Brand Guardianship'],
  },
  {
    number: '02',
    title: 'The Design',
    description:
      "Your brand's symbology comes to life through creative design. The kind that doesn't just reflect the latest trends but leads them forward. That ignites real connection between you and your consumers.",
    items: ['Brand Identity', 'Packaging Design', 'Brand Guidelines', 'Art Direction', 'Photography'],
  },
  {
    number: '03',
    title: 'The Communications',
    description:
      'Through the communication system of a brand, we create powerful ideas that drive people to think and feel differently. Through inspiring communications we capture opportunity and build growth.',
    items: ['Content Creation', 'Campaign', 'Copywriting', 'Shopper Marketing'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group"
    >
      <div className="border-t border-[#E8E0D5] pt-8">
        <span className="text-sm text-[#9A9490] font-mono">{service.number}</span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#111111] mt-3 mb-6">{service.title}</h3>
        <p className="text-[#2B2B2B] leading-relaxed mb-8 text-base">{service.description}</p>
        <ul className="space-y-2">
          {service.items.map((item) => (
            <li key={item} className="text-sm text-[#9A9490] flex items-center gap-2">
              <span className="w-1 h-1 bg-[#9A9490] rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#F5F0EB]">
      {/* Image trail interactive layer */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-auto z-0">
        <ImageTrail
          containerRef={containerRef}
          rotationRange={20}
          interval={150}
          animationSequence={[
            [{ scale: 1.1, opacity: 1 }, { duration: 0.15, ease: "circOut" }],
            [{ scale: 0, opacity: 0 }, { duration: 0.6, ease: "circIn" }],
          ]}
        >
          <div className="w-6 h-6 rounded-full bg-[#E8E0D5] opacity-40" />
          <div className="w-4 h-4 rounded-full bg-[#9A9490] opacity-30" />
          <div className="w-8 h-8 rounded-full bg-[#E8E0D5] opacity-20" />
        </ImageTrail>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111111]">
            Thinking, doing and making<br />for the future.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
