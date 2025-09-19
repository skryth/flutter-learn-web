import { useState } from 'react'
import { useAppSelector } from '../../app/store/hooks'
import { Typography } from '../ui/Typography'
import { Icon } from '../ui/Icon'
import ButtonWithIcon from '../ButtonWithIcon'
import styles from './index.module.css'
import useAuth from '../../hooks/useAuth'

const UserAvatar = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const login = useAppSelector(state => state.user.login);
    const {signOut} = useAuth();
  return (
    <div className={styles.container}>
        <button className={styles.avatar} onClick={() => setIsShowModal(c => !c)}>
            <Typography as='span' weight='bold' size='sm' color='darkblue' uppercase>
                {login}
            </Typography>
            <Icon name='avatar' size={40}/>
        </button>
        {isShowModal && <div className={styles.modal} onMouseLeave={() => setIsShowModal(c => false)}>
            <ButtonWithIcon 
                bg='secondary' 
                color='input' 
                iconName='logout' 
                iconSize={16}
                align='left'
                onClick={signOut}
            >
                Выход
            </ButtonWithIcon>
        </div>
        }
    </div>
  )
}

export default UserAvatar