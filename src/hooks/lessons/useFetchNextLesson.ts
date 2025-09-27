import { useNavigate, useParams } from 'react-router'
import { useAppDispatch } from '../../app/store/hooks'
import { useMinimumDelay } from '../useMinimumDelay'
import useCatchError from '../useCatchError'
import lessonsRoute from '../../libs/models/API/routes/lessons'
import { setLesson } from '../../app/store/slices/lessonSlice'
import toast from 'react-hot-toast'
import scrollToUpPage from '../../libs/helpers/scrollToUpPage'

const useFetchNextLesson = () => {
    const {lesson_id} = useParams()
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay(1000);

  const fetchNextLesson = async () => {
    try {
        toast.loading('Пожалуйста, подождите')
        const lesson = await withMinimumDelay(
            lessonsRoute.getNextLesson(lesson_id!)
        );
        dispatch(setLesson(lesson));   
        scrollToUpPage();
        navigate(`/lesson/${lesson.id}`);     
    } catch (error) {
        catchError(error, 'lessons');
        navigate('/modules')
    } finally {
        toast.dismissAll()
    }
  }

  return fetchNextLesson;
}

export default useFetchNextLesson