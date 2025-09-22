import { NavLink, useParams } from 'react-router'
import Container from '../ui/Container'
import styles from './index.module.css'
import { Typography } from '../ui/Typography'
import UserAvatar from '../UserAvatar'

const HeaderLesson = () => {
    const {lesson_id} = useParams();
  return (
    <header className={styles.header}>
        <Container>
            <div className={styles.row}>
                <div className={styles.left}>
                    <nav className={styles.nav}>
                        <NavLink to={`/lesson/${lesson_id}`} end className={({isActive}) => `
                            ${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            <Typography size='sm' weight='bold' color='placeholder' uppercase>
                                Материал
                            </Typography>
                        </NavLink>
                        <NavLink to={`/lesson/${lesson_id}/task/1`} className={({isActive}) => `
                            ${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            <Typography size='sm' weight='bold' color='placeholder' uppercase>
                                Задание
                            </Typography>
                        </NavLink>
                    </nav>
                </div>
                <div className={styles.right}>
                    <UserAvatar />
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeaderLesson