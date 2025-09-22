import { useAppSelector } from '../../store/hooks'
import { Outlet } from 'react-router'
import Footer from '../../../components/Footer'
import HeaderMain from '../../../components/HeaderMain'
import UserAvatar from '../../../components/UserAvatar'
import ConditionalLoader from '../../../components/ui/Loading/ConditionalLoading'

const MainLayout = () => {
  const loading = useAppSelector(state => state.modules.loading);

  return (
    <>
      <HeaderMain>
        <UserAvatar />
      </HeaderMain>
      <main>
        <ConditionalLoader isLoading={loading}>
          <Outlet />
        </ConditionalLoader>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout