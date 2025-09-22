import { Typography } from '../../../components/ui/Typography'
import Container from '../../../components/ui/Container'
import InputWithButton from '../../../components/InputWithButton'
import ListModules from '../../../components/ListModules'
import UserProgress from '../../../components/UserProgress'
import styles from './index.module.css'
import useExampleFetch from '../../../hooks/useExampleFetch'
import ModalSearchContent from '../../../components/ModalSearchContent'

const MainPage = () => {
  //todo fetch modules
  useExampleFetch();
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