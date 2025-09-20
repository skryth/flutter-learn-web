import { Outlet } from 'react-router'
import CircleButtonBack from '../../../components/CircleButtonBack'
import Footer from '../../../components/Footer'
import HeaderLesson from '../../../components/HeaderLesson'

const LessonLayout = () => {
  return (
    <>
        <CircleButtonBack />
        <HeaderLesson />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default LessonLayout