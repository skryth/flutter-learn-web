import { getCleanCode } from '../../libs/helpers/detectLanguage.ts'
import styles from './index.module.css'
interface CodeWithInputProps {
    code: string,
    inputValue: string,
    setValue: (value: string) => void,
    onEnter: VoidFunction,
    disabled?: boolean
}
const CodeWithInput: React.FC<CodeWithInputProps> = ({
    code,
    inputValue,
    setValue,
    onEnter,
    disabled = false
}) => {
  const cleanCode = getCleanCode(code);
  const codeParts = cleanCode.split('PLACEHOLDER_ANSWER')
  
  return (
    <div className={styles.code}>
      <div className={styles.customCode}>
        <pre className={styles.codeBlock}>
          <code>
            {codeParts[0]}
            <input
              disabled={disabled}
              type="text"
              value={inputValue}
              onChange={e => setValue(e.target.value)}
              className={styles.inlineInput}
              autoFocus
              onKeyDown={(e) => {
              if (e.key === 'Enter' && inputValue.trim()) {
                onEnter();
              }
            }}
            />
            {codeParts[1]}
          </code>
        </pre>
      </div>
    </div>
  )
}
export default CodeWithInput