import Footer from '../../../components/Footer'
import { Outlet } from 'react-router'
import styles from './index.module.css'
import HeaderMain from '../../../components/HeaderMain'
import Button from '../../../components/ui/Button'

const HelloLayout = () => {
  return (
    <>
      <HeaderMain>
        <Button bg='secondary' color='darkblue' to='/auth/signin'>Войти</Button>
        <Button to='/auth/signup'>Начать</Button>
      </HeaderMain>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default HelloLayout