import useShareProgress from '../../../hooks/progress/useShareProgress'
import { Typography } from '../../../components/ui/Typography'
import Container from '../../../components/ui/Container'
import InputWithButton from '../../../components/InputWithButton'
import ListModules from '../../../components/ListModules'
import ModalSearchContent from '../../../components/ModalSearchContent'
import Button from '../../../components/ui/Button'
import styles from './index.module.css'

const MainPage = () => {
  const shareProgress = useShareProgress();

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
        <div className={styles.progress}>
          <Button onClick={shareProgress}>Поделиться прогрессом</Button>
        </div>
      </div>
    </Container>
  )
}

export default MainPage