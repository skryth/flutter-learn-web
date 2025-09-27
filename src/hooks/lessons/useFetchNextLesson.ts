import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAppDispatch } from '../../app/store/hooks'
import { useMinimumDelay } from '../useMinimumDelay'
import useCatchError from '../useCatchError'
import lessonsRoute from '../../libs/models/API/routes/lessons'
import { setLesson } from '../../app/store/slices/lessonSlice'
import toast from 'react-hot-toast'

const useFetchNextLesson = () => {
    const {lesson_id} = useParams()
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay(1000);
    const toastRef = useRef<string>(null);

  const fetchNextLesson = async () => {
    try {
        toastRef.current = toast.loading('Пожалуйста, подождите')
        const lesson = await withMinimumDelay(
            lessonsRoute.getNextLesson(lesson_id!)
        );
        dispatch(setLesson(lesson));   
        navigate(`/lesson/${lesson.id}`)     
    } catch (error) {
        catchError(error)
    } finally {
        toastRef.current && toast.dismiss(toastRef.current)
    }
  }

  return fetchNextLesson;
}

export default useFetchNextLesson