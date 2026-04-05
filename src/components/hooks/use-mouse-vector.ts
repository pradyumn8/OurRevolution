import { useEffect, useRef, useState } from "react"

interface MouseVector {
  x: number
  y: number
}

export function useMouseVector(containerRef?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MouseVector>({ x: 0, y: 0 })
  const [vector, setVector] = useState<MouseVector>({ x: 0, y: 0 })
  const lastPosition = useRef<MouseVector>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef?.current
      let x = e.clientX
      let y = e.clientY

      if (container) {
        const rect = container.getBoundingClientRect()
        x = e.clientX - rect.left
        y = e.clientY - rect.top
      }

      setVector({
        x: x - lastPosition.current.x,
        y: y - lastPosition.current.y,
      })
      setPosition({ x, y })
      lastPosition.current = { x, y }
    }

    const target = containerRef?.current || window
    target.addEventListener("mousemove", handleMouseMove as EventListener)

    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener)
    }
  }, [containerRef])

  return { position, vector }
}
