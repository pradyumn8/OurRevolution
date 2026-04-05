import { useEffect, useRef } from "react"

const COLOR = "#F5F0EB"
const HIT_COLOR = "#9A9490"
const BALL_COLOR = "#F5F0EB"
const LETTER_SPACING = 1

const PIXEL_MAP: Record<string, number[][]> = {
  O: [[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]],
  U: [[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]],
  R: [[1,1,1,1],[1,0,0,1],[1,1,1,1],[1,0,1,0],[1,0,0,1]],
  E: [[1,1,1,1],[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,1,1,1]],
  V: [[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0]],
  L: [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,1,1,1]],
  T: [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  I: [[1,1,1],[0,1,0],[0,1,0],[0,1,0],[1,1,1]],
  N: [[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1]],
}

interface Pixel { x: number; y: number; size: number; hit: boolean }
interface Ball { x: number; y: number; dx: number; dy: number; radius: number }

export default function PixelShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement!
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      init()
    }

    const init = () => {
      pixelsRef.current = []
      const word = "REVOLUTION"
      const scale = Math.min(canvas.width / 1000, canvas.height / 600)
      const PIXEL_SIZE = 6 * scale

      const calculateWordWidth = (w: string, ps: number) =>
        w.split("").reduce((width, letter) => {
          const lw = PIXEL_MAP[letter]?.[0]?.length ?? 0
          return width + lw * ps + LETTER_SPACING * ps
        }, 0) - LETTER_SPACING * ps

      const totalWidth = calculateWordWidth(word, PIXEL_SIZE)
      const scaleFactor = (canvas.width * 0.85) / totalWidth
      const ps = PIXEL_SIZE * scaleFactor
      const textHeight = 5 * ps

      let startX = (canvas.width - calculateWordWidth(word, ps)) / 2
      const startY = (canvas.height - textHeight) / 2

      word.split("").forEach((letter) => {
        const map = PIXEL_MAP[letter]
        if (!map) return
        for (let i = 0; i < map.length; i++) {
          for (let j = 0; j < map[i].length; j++) {
            if (map[i][j]) {
              pixelsRef.current.push({ x: startX + j * ps, y: startY + i * ps, size: ps, hit: false })
            }
          }
        }
        startX += (map[0].length + LETTER_SPACING) * ps
      })

      const speed = 4 * scale * scaleFactor
      ballRef.current = {
        x: canvas.width * 0.1,
        y: canvas.height * 0.2,
        dx: speed,
        dy: speed * 0.8,
        radius: ps * 0.4,
      }
    }

    const update = () => {
      const ball = ballRef.current
      ball.x += ball.dx
      ball.y += ball.dy
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy = -ball.dy
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx = -ball.dx

      pixelsRef.current.forEach((pixel) => {
        if (!pixel.hit &&
          ball.x + ball.radius > pixel.x && ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y && ball.y - ball.radius < pixel.y + pixel.size) {
          pixel.hit = true
          const cx = pixel.x + pixel.size / 2
          const cy = pixel.y + pixel.size / 2
          if (Math.abs(ball.x - cx) > Math.abs(ball.y - cy)) ball.dx = -ball.dx
          else ball.dy = -ball.dy
        }
      })
    }

    const draw = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      ctx.fillStyle = BALL_COLOR
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    let animationId: number
    const loop = () => { update(); draw(); animationId = requestAnimationFrame(loop) }

    resize()
    window.addEventListener("resize", resize)
    loop()
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animationId) }
  }, [])

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] bg-[#111111] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-[#9A9490] text-xs uppercase tracking-[0.4em] mt-[35vh] md:mt-[42vh]">
          Defining brands. Shaping culture.
        </p>
      </div>
    </section>
  )
}
