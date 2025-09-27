import { API } from ".."
import type { Lesson } from "../../../../app/store/slices/lessonSlice";

const lessonsRoute = {
    getLesson: (id: string) => {
        return API.get<Lesson>(`/lessons/${id}`);
    },
    setLessonIsDone: (id: string) => {
        API.post(`/lessons/${id}/done`);
    },
    getNextLesson: (id: string) => {
        return API.get<Lesson>(`/lessons/${id}/next`);
    }
}
export default lessonsRoute;