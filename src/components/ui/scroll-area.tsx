import * as React from 'react'
import { cn } from '@/lib/utils'

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  viewportClassName?: string
}

export function ScrollArea({ className, viewportClassName, children, ...props }: ScrollAreaProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const thumbRef = React.useRef<HTMLDivElement>(null)
  const [thumbHeight, setThumbHeight] = React.useState(0)
  const [thumbTop, setThumbTop] = React.useState(0)
  const [isScrolling, setIsScrolling] = React.useState(false)

  React.useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const updateThumb = () => {
      const { scrollHeight, clientHeight, scrollTop } = viewport
      if (scrollHeight <= clientHeight) {
        setThumbHeight(0)
        return
      }
      const ratio = clientHeight / scrollHeight
      setThumbHeight(Math.max(ratio * clientHeight, 30))
      setThumbTop((scrollTop / scrollHeight) * clientHeight)
    }

    updateThumb()
    viewport.addEventListener('scroll', updateThumb)
    const observer = new ResizeObserver(updateThumb)
    observer.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', updateThumb)
      observer.disconnect()
    }
  }, [children])

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setIsScrolling(true)}
      onMouseLeave={() => setIsScrolling(false)}
      {...props}
    >
      <div
        ref={viewportRef}
        className={cn('h-full w-full overflow-y-auto scrollbar-none', viewportClassName)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
      {thumbHeight > 0 && (
        <div className={cn(
          'absolute right-0 top-0 w-1.5 h-full transition-opacity duration-300',
          isScrolling ? 'opacity-100' : 'opacity-0'
        )}>
          <div
            ref={thumbRef}
            className="w-full rounded-full bg-[#9A9490]/50"
            style={{ height: thumbHeight, transform: `translateY(${thumbTop}px)` }}
          />
        </div>
      )}
    </div>
  )
}
