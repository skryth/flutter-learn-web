import Footer from '../../../components/Footer'
import { Outlet } from 'react-router'
import styles from './index.module.css'
import HeaderMain from '../../../components/HeaderMain'
import Button from '../../../components/ui/Button'

const HelloLayout = () => {
  return (
    <>
      <HeaderMain>
        <div className={styles.row}>
          <Button bg='secondary' color='darkblue' to='/auth/signin'>Войти</Button>
          <Button to='/auth/signup'>Начать</Button>
        </div>
      </HeaderMain>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default HelloLayout