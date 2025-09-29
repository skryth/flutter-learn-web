export const teamMembers: Member[] = [
  {
    name: 'Миллер Владимир',
    description: 'Руководитель проекта',
    skills: ['Менеджмент', 'Стратегия']
  },
  {
    name: 'dnflnx',
    link: 'https://github.com/flionx',
    description: 'Frontend-разработчик',
    skills: ['React', 'TypeScript']
  },
  {
    name: 'JerryImMouse',
    link: 'https://github.com/JerryImMouse',
    description: 'Backend-разработчик',
    skills: ['Rust', 'Axum']
  },
  {
    name: 'Адам Станислав',
    description: 'Контент-менеджер',
    skills: ['Flutter', 'Копирайтинг']
  },
  {
    name: 'Шатний Никита',
    description: 'HR-менеджер',
    skills: ['Аналитика', 'Стратегия']
  }
]

export interface Member {
  name: string,
  link?: string,
  description: string,
  skills: string[]
}