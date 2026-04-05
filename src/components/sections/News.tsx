import { motion } from 'framer-motion'

const articles = [
  {
    category: 'Brand Strategy',
    title: 'Why brand strategy is the foundation of every great business',
    excerpt: 'In an ever-evolving marketplace, the brands that stand the test of time are those built on a foundation of clear, purposeful strategy.',
    date: 'March 2026',
  },
  {
    category: 'Design Thinking',
    title: 'The art of packaging design in a digital-first world',
    excerpt: 'As consumer touchpoints multiply, the physical packaging experience becomes more — not less — important for brand connection.',
    date: 'February 2026',
  },
  {
    category: 'Culture',
    title: 'Building brands that thrive in culture',
    excerpt: "Culture moves fast. The brands that win are those that don't just keep up — they help shape where culture goes next.",
    date: 'January 2026',
  },
]

export default function News() {
  return (
    <section id="news" className="py-24 md:py-32 bg-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#9A9490] mb-4">News & Insights</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111111]">Latest thinking.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="border-t-2 border-[#111111] pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9A9490] font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#9A9490]">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[#111111] mb-4 group-hover:text-[#9A9490] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-[#2B2B2B] text-sm leading-relaxed mb-6">{article.excerpt}</p>
                <span className="text-sm uppercase tracking-[0.1em] text-[#111111] border-b border-[#111111] pb-0.5 group-hover:text-[#9A9490] group-hover:border-[#9A9490] transition-colors">
                  Read more
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
