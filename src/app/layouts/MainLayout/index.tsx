import { useAppSelector } from '../../store/hooks'
import { Outlet } from 'react-router'
import Footer from '../../../components/Footer'
import HeaderMain from '../../../components/HeaderMain'
import ConditionalLoader from '../../../components/ui/Loading/ConditionalLoading'
import useFetchModules from '../../../hooks/modules/useFetchModules'
import UserAvatar from '../../../components/UserAvatar'

const MainLayout = () => {
  useFetchModules();
  const modulesLoading = useAppSelector(state => state.modules.loading);

  return (
    <>
      <HeaderMain>
        <UserAvatar />
      </HeaderMain>
      <main>
        <ConditionalLoader isLoading={modulesLoading}>
          <Outlet />
        </ConditionalLoader>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout