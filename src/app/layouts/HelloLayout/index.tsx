import HeaderHello from '../../../components/HeaderHello'
import Footer from '../../../components/Footer'
import { Outlet } from 'react-router'
import styles from './index.module.css'

const HelloLayout = () => {
  return (
    <>
      <HeaderHello />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default HelloLayout