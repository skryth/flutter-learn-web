import { Image } from '../ui/Image'
import styles from './index.module.css'
import type { UserAnswerType } from '../../pages/lessons/TaskPage'
interface EmulatorFlutterProps {
    userAnswerType: UserAnswerType
}

const EmulatorFlutter: React.FC<EmulatorFlutterProps> = ({
    userAnswerType
}) => {
  return (
    <div className={styles.emulator}>
      <div className={styles.phoneFrame}>
        <div className={styles.screen}>
          {Boolean(userAnswerType) && <Image 
            src={`example-${userAnswerType}`}
            alt="Flutter app result" 
            className={styles.result}
          />}
        </div>
        <Image 
          src='phone' 
          alt="Phone frame" 
          className={styles.frame}
        />
      </div>
    </div>
  )
}

export default EmulatorFlutter