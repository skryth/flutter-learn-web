import { Link } from 'react-router'
import Button from '../../components/ui/Button'
import { Typography } from '../../components/ui/Typography'
import styles from './index.module.css'

const AuthPage = () => {
  return (
    <section className={styles.content}>
        <form action="" className={styles.form}>
            <Typography as='h2' size='xxl' weight='bold'>Войти</Typography>
            <div>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Логин'/>
                    <input type="password" placeholder='Пароль'/>
                </div>
                <Button onClick={() => {}}>Войти</Button>
            </div>
        </form>
        <div className={styles.row}>
            <Typography size='sm' weight='medium' color='light' uppercase>
                Еще нет аккаунта?
            </Typography>
            <Link to='/auth/signup'>
                <Typography size='sm' weight='medium' color='main' uppercase>
                    Зарегистрироваться
                </Typography>
            </Link>
        </div>
    </section>
  )
}

export default AuthPage