import { useRef, useState } from 'react'
import styles from './index.module.css'
import AnimatedOption from '../AnimatedOption'
import type { ExampleFillCodeAnswer, ExampleFillCodeTask } from '../../libs/contants/example'
import type { UserSelectAnswer } from '../../hooks/useUserTaskAnswer'

interface FillCodeTaskProps {
  code: string
  options: ExampleFillCodeTask['answers']
  onSelect: (value: UserSelectAnswer) => void
  selectedOption: UserSelectAnswer,
  checked: boolean
}

const FillCodeTask: React.FC<FillCodeTaskProps> = ({
  code,
  options,
  onSelect,
  selectedOption,
  checked
}) => {
  const codeParts = code.split('PLACEHOLDER_ANSWER')
  const answerSlotRef = useRef<HTMLSpanElement>(null)
  const [animatingOption, setAnimatingOption] = useState<ExampleFillCodeAnswer | null>(null)

  const handleOptionSelect = (option: ExampleFillCodeAnswer) => {
    setAnimatingOption(option)
    
    let rect: DOMRect | null = null
    if (answerSlotRef.current) {
      rect = answerSlotRef.current.getBoundingClientRect()
    }
    
    setTimeout(() => {
      onSelect(option)
      setAnimatingOption(null)
    }, 380)
  }
  return (
    <div className={styles.container}>
      <div className={styles.codeBlock}>
        <pre className={styles.code}>
          <code>
            {codeParts[0]}
            <span 
              ref={answerSlotRef} 
              className={styles.answerSlot}
            >
              {selectedOption.answer_text || '_____'}
            </span>
            {codeParts[1]}
          </code>
        </pre>
      </div>
    
      <div className={`${styles.options} ${checked ? styles.checked : ''}`}>
        {options.map((option) => (
          <AnimatedOption
            key={option.id}
            option={option.answer_text}
            isSelected={selectedOption.id === option.id}
            isAnimating={animatingOption?.id === option.id}
            onSelect={() => handleOptionSelect(option)}
            targetRect={animatingOption === option && answerSlotRef.current ? 
              answerSlotRef.current.getBoundingClientRect() : null}
          />
        ))}
      </div>
    </div>
  )
}

export default FillCodeTask