import { Outlet } from 'react-router'
import CircleButtonBack from '../../../components/CircleButtonBack'
import Footer from '../../../components/Footer'
import HeaderLesson from '../../../components/HeaderLesson'
import ConditionalLoader from '../../../components/ui/Loading/ConditionalLoading'
import { useAppSelector } from '../../store/hooks'

const LessonLayout = () => {
  const lessonLoading = useAppSelector(state => state.lesson.loading);
  const modulesLoading = useAppSelector(state => state.modules.loading);
  const tasksLoading = useAppSelector(state => state.task.loading);
  
  return (
    <>
        <CircleButtonBack to='/modules' />
        <HeaderLesson />
        <main>
          <ConditionalLoader isLoading={lessonLoading || (tasksLoading || modulesLoading)}>
            <Outlet />
          </ConditionalLoader>
        </main>
        <Footer />
    </>
  )
}

export default LessonLayout