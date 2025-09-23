import type { Module } from '../../app/store/slices/modulesSlice'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './InDevelopment.module.css'
interface ModuleCardInDevelopmentProps {
    title: Module['title'],
    order_index: Module['order_index']
}
const ModuleCardInDevelopment: React.FC<ModuleCardInDevelopmentProps> = ({
    title,
    order_index
}) => {
  return (
    <div className={styles.card}>
        <Typography as='h3' weight='bold' size='lg'>
            {order_index + 1}.{title}
        </Typography>
        <div className={styles.row}>
            <Icon name='repair' size={18} />
            <Typography size='sm' weight='medium' uppercase>В разработке</Typography>
        </div>
        <div className={styles.soon}>
            <Typography size='sm' weight='bold' color='white' uppercase>Скоро</Typography>
        </div>
    </div>
  )
}

export default ModuleCardInDevelopment