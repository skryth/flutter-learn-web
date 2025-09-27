import { useEffect } from 'react'
import { useParams } from 'react-router';
import { setLesson, setLessonLoading } from '../../app/store/slices/lessonSlice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import useCatchError from '../useCatchError';
import lessonsRoute from '../../libs/models/API/routes/lessons';
import { useMinimumDelay } from '../useMinimumDelay';

const useFetchLesson = () => {
    const {lesson_id} = useParams();
    const dispatch = useAppDispatch();
    const lesson = useAppSelector(state => state.lesson.lesson);
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay(); 

  useEffect(() => {
    const fetchLesson = async () => {
        try {
            if (lesson_id === lesson?.id) return;
            dispatch(setLessonLoading(true))
            const lessonResponse = await withMinimumDelay(
                lessonsRoute.getLesson(lesson_id!)
            );
            dispatch(setLesson(lessonResponse))
        } catch (error) {
            catchError(error)
        } finally {
            dispatch(setLessonLoading(false))
        }
    }   
    fetchLesson();
  }, [lesson_id]);

  return lesson;
}

export default useFetchLesson