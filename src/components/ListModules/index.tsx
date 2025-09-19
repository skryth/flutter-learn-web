import ModuleCard from '../ModuleCard'
import styles from './index.module.css'

const ListModules = () => {
  return (
    <div className={styles.list}>
        <ModuleCard 
            title='1.Введение в Flutter' 
            lessons={{completed: 1, count: 2}}
            />
        <ModuleCard 
            title="2.Контейнеры и управление компоновкой"
            lessons={{completed: 2, count: 5}}
            />
        <ModuleCard 
            title="3.Встроенные виджеты и создание своих виджетов"
            lessons={{completed: 0, count: 4}}
        />
    </div>
  )
}

export default ListModules