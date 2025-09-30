export const teamMembers: Member[] = [
  {
    name: 'Миллер Владимир',
    link: 'https://github.com/ttob9i3ka',
    description: 'Руководитель проекта',
    skills: ['Менеджмент', 'Стратегия']
  },
  {
    name: 'Шипилов Данила',
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
    link: 'https://github.com/vixsantielus',
    description: 'Контент-менеджер',
    skills: ['Flutter', 'Копирайтинг']
  },
  {
    name: 'Шатний Никита',
    link: 'https://github.com/KokosCmarsa',
    description: 'HR-менеджер',
    skills: ['Аналитика', 'Стратегия']
  }
]

export interface Member {
  name: string,
  link: string,
  description: string,
  skills: string[]
}