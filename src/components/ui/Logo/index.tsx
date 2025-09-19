import { Link } from 'react-router'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import styles from './index.module.css'

const Logo = () => {
  return (
    <Link to='/' className={styles.logo}>
        <Icon name='logo' size={34} />
        <Typography as='h1' color='primary' size='md' weight='bold' uppercase>
            Flutter Learn
        </Typography>
    </Link>
  )
}

export default Logo