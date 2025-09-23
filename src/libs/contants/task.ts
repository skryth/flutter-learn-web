import type { TaskType } from "../../app/store/slices/taskSlice"

export const taskTitle = (type: TaskType) => {
    if (type === 'string_cmp') {
        return 'Заполни пропуск'
    } else {
        return 'Выбери правильный ответ'
    }
}