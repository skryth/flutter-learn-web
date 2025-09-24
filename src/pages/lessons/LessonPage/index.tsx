import useFetchLesson from '../../../hooks/lessons/useFetchLesson';
import Container from '../../../components/ui/Container';
import RenderMarkdown from '../../../components/RenderMarkdown';
import { Typography } from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button'
import useModuleByLessonId from '../../../hooks/lessons/useModuleByLessonId';
import styles from './index.module.css'

const LessonPage = () => {
    const lesson = useFetchLesson();
    const module = useModuleByLessonId(lesson?.id)

  return (
    <Container>
        <Typography color='main' as='h1' size='xxl' weight='bold' style={{marginBlock: '2.1875rem 1rem'}}>
            {module?.title}
        </Typography>
        <Typography as='h2' size='xl' weight='bold' style={{marginBottom: '1rem'}}>{lesson?.title}</Typography>
        <RenderMarkdown>{lesson?.content as string}</RenderMarkdown>
        <div className={styles.buttons}>
            <Button to='/modules' bg='secondary' color='darkblue' paddingX='sm'>
                На главную
            </Button>
            <Button to={`/lesson/${lesson?.id}/task/1`} paddingX='sm'>
                К Заданию
            </Button>
        </div>
    </Container>
  )
}

export default LessonPage