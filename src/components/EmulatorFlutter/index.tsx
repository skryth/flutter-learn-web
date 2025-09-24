import { useAppSelector } from '../../app/store/hooks'
import type { UserAnswerType } from '../../hooks/tasks/useUserTaskAnswer'
import { Image } from '../ui/Image'
import styles from './index.module.css'
interface EmulatorFlutterProps {
    userAnswerType: UserAnswerType
}

const EmulatorFlutter: React.FC<EmulatorFlutterProps> = ({
    userAnswerType
}) => {
  const correctScreenImage = useAppSelector(state => state.task.explanation.explanation?.image);
  return (
    <div className={styles.emulator}>
      <div className={styles.phoneFrame}>
        <div className={styles.screen}>
          {Boolean(userAnswerType) && 
            userAnswerType === 'wrong' ? 
              <Image 
                src={`example-${userAnswerType}`}
                alt="Flutter app wrong result" 
                className={styles.result}
              />
            :
              <Image 
                src={correctScreenImage}
                alt="Flutter app success result" 
                className={styles.result}
                local={false}
              />
          }
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