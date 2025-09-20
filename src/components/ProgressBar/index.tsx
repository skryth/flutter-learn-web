import styles from './index.module.css'
interface ProgressBarProps {
    current: number,
    max: number
}
const ProgressBar: React.FC<ProgressBarProps> = ({
    current, 
    max
}) => {
  return (
    <div className={styles.container}>
        <div className={styles.progress} style={{
            width: `${(current/ max) * 100}%`
        }}></div>
    </div>
  )
}

export default ProgressBar