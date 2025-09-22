import { useRef, useEffect, useState } from 'react'
import styles from './index.module.css'
import { Typography } from '../ui/Typography'

interface AnimatedOptionProps {
  option: string
  isSelected: boolean
  isAnimating: boolean
  onSelect: () => void
  targetRect: DOMRect | null
}

const AnimatedOption: React.FC<AnimatedOptionProps> = ({
  option,
  isSelected,
  isAnimating,
  onSelect,
  targetRect
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [startRect, setStartRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    if (buttonRef.current && !startRect) {
      setStartRect(buttonRef.current.getBoundingClientRect())
    }
  }, [])

  const handleClick = () => {
    if (!isSelected && !isAnimating) {
      if (buttonRef.current) {
        setStartRect(buttonRef.current.getBoundingClientRect())
      }
      onSelect()
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        className={`${styles.option} ${isAnimating ? styles.animating : ''} ${isSelected ? styles.selected : ''}`}
        onClick={handleClick}
        disabled={isSelected || isAnimating}
        style={isAnimating && targetRect && startRect ? {
          '--start-x': `${startRect.x}px`,
          '--start-y': `${startRect.y}px`,
          '--start-width': `${startRect.width}px`,
          '--start-height': `${startRect.height}px`,
          '--target-x': `${targetRect.x}px`,
          '--target-y': `${targetRect.y}px`,
          '--target-width': `${targetRect.width}px`,
          '--target-height': `${targetRect.height}px`
        } as React.CSSProperties : undefined}
      >
        <Typography color='darkblue' size='sm' weight='bold'>
          {option}
        </Typography>
      </button>
      {isAnimating && <div style={{
        width: `${startRect && startRect.width}px`,
        height: `${startRect && startRect.height}px`
      }}></div>}
    </>
  )
}

export default AnimatedOption