import { useMemo } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import ModuleCard from '../ModuleCard'
import ModuleCardInDevelopment from '../ModuleCard/ModuleCardInDevelopment';
import styles from './index.module.css'

const ListModules = () => {
    const modules = useAppSelector(state => state.modules.list);
    const sortedModules = useMemo(() => 
        [...modules].sort((a, b) => a.order_index - b.order_index)
    , [modules]);
    
  return (
    <div className={styles.list}>
        {sortedModules.map(module => {
            if (module.lessons.length > 0) {
                return (
                <ModuleCard 
                    key={module.id}
                    id={module.id}
                    title={module.title}
                    order_index={module.order_index}
                    lessons={module.lessons}
                />
                )
            } else {
                return (
                    <ModuleCardInDevelopment
                        key={module.id}
                        title={module.title}
                        order_index={module.order_index} 
                    />
                )
            }           
        })}
    </div>
  )
}

export default ListModules