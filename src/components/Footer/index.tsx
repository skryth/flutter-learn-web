import { Typography } from '../ui/Typography'
import { Link } from 'react-router'
import styles from './index.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Typography color='light' weight='medium'>
            ©2025 Flutter Learn
        </Typography>
        <Typography color='light' weight='medium' as='span'>|</Typography>
        <Link to={''}>
            <Typography color='light' weight='medium'>
                О нас
            </Typography>
        </Link>
    </footer>
  )
}

export default Footer