import { Outlet } from 'react-router'
import Footer from '../../../components/Footer'
import HeaderMain from '../../../components/HeaderMain'
import { Typography } from '../../../components/ui/Typography'
import { Icon } from '../../../components/ui/Icon'

const MainLayout = () => {
  return (
    <>
        <HeaderMain>
            <Typography as='span' weight='bold' size='sm' color='darkblue' uppercase>
                Danila
            </Typography>
            <Icon name='avatar' size={40}/>
        </HeaderMain>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout