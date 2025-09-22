import styles from './index.module.css'
import { Typography } from '../../../components/ui/Typography'
import Container from '../../../components/ui/Container'
import InputWithButton from '../../../components/InputWithButton'
import { Icon } from '../../../components/ui/Icon'
import ListModules from '../../../components/ListModules'
import UserProgress from '../../../components/UserProgress'

const MainPage = () => {
  //todo modules loading 
  
  return (
    <Container>
      <div className={styles.top}>
        <Typography as='h2' size='xxl' weight='bold'>Модули</Typography>
        <InputWithButton name='search' placeholder='Поиск'>
          <button>
            <Icon name='search' size={22} />
          </button>
        </InputWithButton>
      </div>
      <div className={styles.content}>
        <ListModules />
        <UserProgress />
      </div>
    </Container>
  )
}

export default MainPage