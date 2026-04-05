import { useEffect, useRef } from "react"

const BACKGROUND_COLOR = "rgba(0,0,0,0)"
const BALL_COLOR = "#111111"
const PADDLE_COLOR = "#111111"

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
  targetY: number
  isVertical: boolean
}

export function AnimatedHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
  const paddlesRef = useRef<Paddle[]>([])
  const scaleRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
      initializeGame()
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      const BALL_SPEED = 5 * scale
      const ballRadius = 8 * scale

      const ballStartX = canvas.width * 0.85
      const ballStartY = canvas.height * 0.15

      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -BALL_SPEED,
        dy: BALL_SPEED,
        radius: ballRadius,
      }

      const paddleThickness = 6 * scale
      const paddleLength = 120 * scale

      paddlesRef.current = [
        // Left
        { x: 0, y: canvas.height / 2 - paddleLength / 2, width: paddleThickness, height: paddleLength, targetY: canvas.height / 2 - paddleLength / 2, isVertical: true },
        // Right
        { x: canvas.width - paddleThickness, y: canvas.height / 2 - paddleLength / 2, width: paddleThickness, height: paddleLength, targetY: canvas.height / 2 - paddleLength / 2, isVertical: true },
        // Top
        { x: canvas.width / 2 - paddleLength / 2, y: 0, width: paddleLength, height: paddleThickness, targetY: canvas.width / 2 - paddleLength / 2, isVertical: false },
        // Bottom
        { x: canvas.width / 2 - paddleLength / 2, y: canvas.height - paddleThickness, width: paddleLength, height: paddleThickness, targetY: canvas.width / 2 - paddleLength / 2, isVertical: false },
      ]
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy = -ball.dy
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx = -ball.dx

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (ball.x - ball.radius < paddle.x + paddle.width && ball.x + ball.radius > paddle.x && ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
            ball.dx = -ball.dx
          }
        } else {
          if (ball.y - ball.radius < paddle.y + paddle.height && ball.y + ball.radius > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy = -ball.dy
          }
        }
      })

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2
          paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
          paddle.y += (paddle.targetY - paddle.y) * 0.08
        } else {
          paddle.targetY = ball.x - paddle.width / 2
          paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
          paddle.x += (paddle.targetY - paddle.x) * 0.08
        }
      })
    }

    const drawGame = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw ball
      ctx.fillStyle = BALL_COLOR
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw paddles with rounded ends
      ctx.fillStyle = PADDLE_COLOR
      paddlesRef.current.forEach((paddle) => {
        const radius = Math.min(paddle.width, paddle.height) / 2
        ctx.beginPath()
        ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, radius)
        ctx.fill()
      })
    }

    let animationId: number
    const gameLoop = () => {
      updateGame()
      drawGame()
      animationId = requestAnimationFrame(gameLoop)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    gameLoop()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: BACKGROUND_COLOR }}
      aria-label="Animated pong game background"
    />
  )
}
