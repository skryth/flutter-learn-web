import lessonsRoute from '../../libs/models/API/routes/lessons';
import type { Lesson } from '../../app/store/slices/lessonSlice';
import { useNavigate } from 'react-router';

const useLessonActions = (id: Lesson['id']) => {
    const navigate = useNavigate();

    const doneLesson = () => {
        lessonsRoute.setLessonIsDone(id);
    }
    const goHome = () => {
        doneLesson();
        navigate('/modules')
    }
    const goTask = () => {
        doneLesson();
        navigate(`/lesson/${id}/task`)
    }

    return {goHome, goTask}
}

export default useLessonActions