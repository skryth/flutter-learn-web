import { useAppSelector } from '../../app/store/hooks';
import type { Lesson } from '../../app/store/slices/lessonSlice';

const useModuleByLessonId = (lesson_id?: Lesson['id']) => {
  const module = useAppSelector(state => {
        if (!lesson_id) return undefined;
        return state.modules.list.find(m => 
            m.lessons.some(l => l.id === lesson_id)
        );
    });

    return module
}

export default useModuleByLessonId