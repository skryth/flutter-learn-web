import { useMemo } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import ModuleCard from '../ModuleCard'
import styles from './index.module.css'

const ListModules = () => {
    const modules = useAppSelector(state => state.modules.list);
    const sortedModules = useMemo(() => 
        [...modules].sort((a, b) => a.order_index - b.order_index)
    , [modules]);

  return (
    <div className={styles.list}>
        {sortedModules.map(module => 
            <ModuleCard 
                key={module.order_index}
                id={module.id}
                title={module.title}
                order_index={module.order_index}
                lessons={module.lessons}
            />
        )}
    </div>
  )
}

export default ListModules