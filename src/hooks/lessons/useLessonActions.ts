import lessonsRoute from '../../libs/models/API/routes/lessons';
import type { Lesson } from '../../app/store/slices/lessonSlice';
import { useNavigate } from 'react-router';

const useLessonActions = (id?: Lesson['id']) => {
    const navigate = useNavigate();
    
    const doneLesson = () => {
        if (!id) return;
        lessonsRoute.setLessonIsDone(id);
    }
    const goHome = () => {
        doneLesson();
        navigate('/modules')
    }
    const goTask = () => {
        if (!id) return;
        doneLesson();
        navigate(`/lesson/${id}/task`)
    }

    return {goHome, goTask}
}

export default useLessonActions