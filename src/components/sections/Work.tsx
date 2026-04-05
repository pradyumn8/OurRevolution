import { motion } from 'framer-motion'
import NeuralBackground from '@/components/ui/flow-field-background'
import { ScrollArea } from '@/components/ui/scroll-area'

const projects = [
  {
    title: 'Yerbi',
    category: 'Brand Strategy | Packaging Design',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop',
  },
  {
    title: 'Aura Botanics',
    category: 'Brand Identity | Art Direction',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    title: 'Nova Spirits',
    category: 'Packaging Design | Campaign',
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop',
  },
  {
    title: 'Pure Elements',
    category: 'Brand Strategy | Brand Identity',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop',
  },
  {
    title: 'Bloom & Co',
    category: 'Brand Guidelines | Photography',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop',
  },
  {
    title: 'Meridian',
    category: 'Brand Architecture | Communications',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-[#2B2B2B]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white text-xl font-semibold">{project.title}</h3>
          <p className="text-white/70 text-sm mt-1">{project.category}</p>
        </div>
      </div>
      <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-[#F5F0EB] text-lg font-medium">{project.title}</h3>
        <p className="text-[#9A9490] text-sm">{project.category}</p>
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative min-h-screen bg-[#111111] overflow-hidden">
      {/* Neural particle background */}
      <div className="absolute inset-0 opacity-30">
        <NeuralBackground color="#9A9490" trailOpacity={0.08} particleCount={400} speed={0.6} />
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-4">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0EB]">
              From brand strategy through<br />to design and communication.
            </h2>
          </motion.div>

          <ScrollArea className="max-h-[800px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </ScrollArea>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#F5F0EB] border-b border-[#F5F0EB] pb-1 hover:text-[#9A9490] hover:border-[#9A9490] transition-colors"
            >
              View all work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
