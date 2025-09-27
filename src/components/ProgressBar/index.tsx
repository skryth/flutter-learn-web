import styles from './index.module.css'
interface ProgressBarProps {
    current: number,
    max: number
}
const ProgressBar: React.FC<ProgressBarProps> = ({
    current, 
    max
}) => {
  const percentage = (current / max) * 100;
  return (
    <div className={styles.container} title={`${Math.round(percentage)}% завершено`}>
        <div className={`${styles.progress} ${current === max ? styles.complete : ''}`} style={{
            width: `${percentage}%`
        }}></div>
    </div>
  )
}

export default ProgressBar