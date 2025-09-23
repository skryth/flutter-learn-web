import { useMemo } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import ModuleCard from '../ModuleCard'
import styles from './index.module.css'
import ModuleCardInDevelopment from '../ModuleCard/ModuleCardInDevelopment';

const ListModules = () => {
    const modules = useAppSelector(state => state.modules.list);
    const sortedModules = useMemo(() => 
        [...modules].sort((a, b) => a.order_index - b.order_index)
    , [modules]);

  return (
    <div className={styles.list}>
        {sortedModules.map(module => 
            <>{module.lessons.length > 0 ?
                <ModuleCard 
                    key={module.id}
                    id={module.id}
                    title={module.title}
                    order_index={module.order_index}
                    lessons={module.lessons}
                />
            :
                <ModuleCardInDevelopment
                    key={module.id}
                    title={module.title}
                    order_index={module.order_index} 
                />
            }</>
        )}
    </div>
  )
}

export default ListModules