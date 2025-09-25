import useFetchLesson from '../../../hooks/lessons/useFetchLesson';
import useModuleByLessonId from '../../../hooks/lessons/useModuleByLessonId';
import useLessonActions from '../../../hooks/lessons/useLessonActions';
import Container from '../../../components/ui/Container';
import RenderMarkdown from '../../../components/RenderMarkdown';
import { Typography } from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button'
import styles from './index.module.css'

const LessonPage = () => {
    const lesson = useFetchLesson();
    const module = useModuleByLessonId(lesson?.id)
    const {goHome, goTask} = useLessonActions(lesson?.id!);

    if (!lesson) {
        return (
            <Container>
                <Typography as='h1' weight='bold' size='xxl' style={{marginBlock: '2.1875rem 0.3125rem'}}>
                    Урок не найден
                </Typography>
                <Typography size='md' style={{marginBottom: '2rem'}}>
                    Возможно, урок находится в разработке. Пожалуйста, повторите попытку позже
                </Typography>
            </Container>
        )
    }

  return (
    <Container>
        <Typography color='main' as='h1' size='xxl' weight='bold' style={{marginBlock: '2.1875rem 1rem'}}>
            {module?.title}
        </Typography>
        <Typography as='h2' size='xl' weight='bold' style={{marginBottom: '1rem'}}>{lesson?.title}</Typography>
        <RenderMarkdown>{lesson?.content as string}</RenderMarkdown>
        <div className={styles.buttons}>
            <Button onClick={goHome} bg='secondary' color='darkblue' paddingX='sm'>
                На главную
            </Button>
            <Button onClick={goTask} paddingX='sm'>
                К Заданию
            </Button>
        </div>
    </Container>
  )
}

export default LessonPage