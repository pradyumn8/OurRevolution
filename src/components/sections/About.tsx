import { motion } from 'framer-motion'

const team = [
  { name: 'Jen Doran', title: 'Founder, Creative Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop' },
  { name: 'Diana Yako', title: 'Founder, Client Services Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop' },
  { name: 'Alex Tomkins', title: 'Design Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
  { name: 'Alex Perestrelo', title: 'Senior Account Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-6">About Us</p>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] leading-snug">
            "Every brand has the power to shape the future. We help them to make that impact meaningful and memorable."
          </blockquote>
          <p className="mt-8 text-[#2B2B2B] text-lg leading-relaxed max-w-2xl">
            We're an independent creative company with a clear focus on what comes next.
            From brand strategy through to design and communication, we create something
            that stands out today, for people to hold onto tomorrow.
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-4">The Team</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111]">
            Each studio thrives on its independence.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-[#E8E0D5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[#111111] font-medium">{member.name}</h3>
              <p className="text-[#9A9490] text-sm">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
