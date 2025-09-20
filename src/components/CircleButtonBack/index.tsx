import { useNavigate } from 'react-router';
import { Icon } from '../ui/Icon';
import styles from './index.module.css'

const CircleButtonBack = () => {
    const navigate = useNavigate();
    const navigateBack = () => {
        const currentHistoryIndex = window.history.state?.idx || 0;
        if (currentHistoryIndex > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }
  return (
    <button onClick={navigateBack} className={styles.button}>
        <Icon name='arrow-back' size={28}/>
    </button>
  )
}

export default CircleButtonBack