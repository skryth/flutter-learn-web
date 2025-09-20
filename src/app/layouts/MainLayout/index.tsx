import { Outlet } from 'react-router'
import Footer from '../../../components/Footer'
import HeaderMain from '../../../components/HeaderMain'
import UserAvatar from '../../../components/UserAvatar'

const MainLayout = () => {
  return (
    <>
      <HeaderMain>
        <UserAvatar />
      </HeaderMain>
      <main>
          <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout