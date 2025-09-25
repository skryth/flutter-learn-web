import { Typography } from '../../../components/ui/Typography'
import Container from '../../../components/ui/Container'
import InputWithButton from '../../../components/InputWithButton'
import ListModules from '../../../components/ListModules'
import UserProgress from '../../../components/UserProgress'
import ModalSearchContent from '../../../components/ModalSearchContent'
import useFetchModules from '../../../hooks/modules/useFetchModules'
import styles from './index.module.css'
import useFetchProgress from '../../../hooks/progress/useFetchProgress'

const MainPage = () => {
  useFetchModules();
  useFetchProgress();
  
  return (
    <Container>
      <div className={styles.top}>
        <Typography as='h2' size='xxl' weight='bold'>Модули</Typography>
        <InputWithButton name='search' placeholder='Поиск' >
          {({inputRef, value}) => <ModalSearchContent inputRef={inputRef} value={value} />}
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