import { Link, useParams } from 'react-router';
import Container from '../../../components/ui/Container';
import { Typography } from '../../../components/ui/Typography';
import { useAppSelector } from '../../../app/store/hooks';
import ProgressBar from '../../../components/ProgressBar';
import { Icon } from '../../../components/ui/Icon';
import CircleButtonBack from '../../../components/CircleButtonBack';
import styles from './index.module.css'
import ConditionalLoader from '../../../components/ui/Loading/ConditionalLoading';
import NotFoundData from '../../../components/NotFoundData';

const ModulePage = () => {    
  const {id} = useParams();
  const modulesLoading = useAppSelector(state => state.modules.loading)
  const module = useAppSelector(state => state.modules.list.find(
    m => m.id === id
  ));
  if (modulesLoading) {
    return (
      <Container>
        <ConditionalLoader isLoading={true}>
          <div></div>
        </ConditionalLoader>
      </Container>
    );
  }

  if (!module) return (
    <NotFoundData 
      title='Модуль не найден'
      text='Возможно, модуль находится в разработке. Пожалуйста, повторите попытку позже' 
    />
  );

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
                <div className={styles.row} key={l.id}>
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