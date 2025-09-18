import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'

const HeaderHello = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Icon name='logo' size={34}/>
        <Typography as='h1' color='main' size='md' weight='bold' uppercase>
          Flutter Learn
        </Typography>
      </div>
    </header>
  )
}

export default HeaderHello