export default function Marquee() {
  const text = "New insights. New ideas. New opportunities. "
  const repeatedText = text.repeat(10)

  return (
    <section className="py-8 bg-[#111111] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          <span className="text-[#F5F0EB] text-lg md:text-xl font-light tracking-[0.1em] uppercase">
            {repeatedText}
          </span>
          <span className="text-[#F5F0EB] text-lg md:text-xl font-light tracking-[0.1em] uppercase">
            {repeatedText}
          </span>
        </div>
      </div>
    </section>
  )
}
