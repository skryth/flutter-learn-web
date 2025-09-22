import type { TaskType } from "./example";

export const taskTitle = (type: TaskType) => {
    if (type === 'string_cmp') {
        return 'Заполни пропуск'
    } else {
        return 'Выбери правильный ответ'
    }
}