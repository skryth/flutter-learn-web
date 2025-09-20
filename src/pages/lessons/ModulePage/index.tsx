import { Link, useParams } from 'react-router';
import Container from '../../../components/ui/Container';
import { Typography } from '../../../components/ui/Typography';
import styles from './index.module.css'
import { useAppSelector } from '../../../app/store/hooks';
import ProgressBar from '../../../components/ProgressBar';
import { Icon } from '../../../components/ui/Icon';
import CircleButtonBack from '../../../components/CircleButtonBack';

const ModulePage = () => {    
  const {id} = useParams();
  // todo or fetch
  const module = useAppSelector(state => state.modules.list.find(
    m => m.id === id
  ))
  const completed = module!.lessons.reduce((sum, c) => c.completed ? sum + 1 : sum , 0) 
  
  return (
    <Container>
      <CircleButtonBack />
      <div className={styles.card}>
        <div className={styles.info}>
          <Typography as='h3' weight='bold' size='lg'>
            {module!.order_index + 1}.{module!.title}
          </Typography>
          <Typography weight='medium' color='light'>
            {module!.description}
          </Typography>
        </div>
          <ProgressBar current={completed} max={module!.lessons.length} />
          <ul className={styles.list}>
            {
              module!.lessons.map(l => (
                <div className={styles.row}>
                  {l.completed ? <Icon name='check' size={20} /> : <div className={styles.circle}></div>}
                  <Link to={`/lesson/${l.id}`}>
                    <Typography size='lg' weight='bold'>{l.title}</Typography>
                  </Link>
                </div>
              ))
            } 
          </ul>
      </div>
    </Container>
  )
}

export default ModulePage