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
        navigate('/modules')
    }
    const goTask = () => {
        if (!id) return;
        navigate(`/lesson/${id}/task`)
    }

    return {goHome, goTask, doneLesson}
}

export default useLessonActions