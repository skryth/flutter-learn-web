import { useRef, useState } from 'react'
import styles from './index.module.css'
import AnimatedOption from '../AnimatedOption'
import type { UserSelectAnswer } from '../../hooks/tasks/useUserTaskAnswer'
import type { TaskAnswer, TaskWithAnswers } from '../../app/store/slices/taskSlice'
import { getCleanCode } from '../../libs/helpers/detectLanguage.ts'

interface FillCodeTaskProps {
  code: string
  options: TaskWithAnswers['answers']
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
  const cleanCode = getCleanCode(code);
  const codeParts = cleanCode.split('PLACEHOLDER_ANSWER');
  const answerSlotRef = useRef<HTMLSpanElement>(null);
  const [animatingOption, setAnimatingOption] = useState<TaskAnswer | null>(null);

  const handleOptionSelect = (option: TaskAnswer) => {
    setAnimatingOption(option)
    
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