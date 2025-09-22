import { Icon } from '../ui/Icon'
import styles from './index.module.css'
import { Link } from 'react-router'
import { Typography } from '../ui/Typography'
import useModalSearch from '../../hooks/useModalSearch'
interface ModalSearchContentProps {
    inputRef: React.RefObject<HTMLInputElement | null>,
    value: string
}
const ModalSearchContent: React.FC<ModalSearchContentProps> = ({
    inputRef,
    value
}) => {
    const {findMatches, closeModal, matches, isSearchModule} = useModalSearch({inputRef, value})
    
  return (
    <>
        <button onClick={findMatches}>
            <Icon name='search' size={22} />
        </button>
        {isSearchModule && 
            <div className={styles.modal} onMouseLeave={closeModal}>
                {matches.length > 0 ? matches.map(m => 
                    <Link to={`/${m.type}/${m.id}`} className={styles.link} key={m.id}>
                        <Typography size='sm' weight='bold' uppercase color='input'>
                            {m.title}
                        </Typography>
                    </Link>
                ) 
                : 'Нет совпадений'
                }
            </div>
        }
    </>
  )
}

export default ModalSearchContent