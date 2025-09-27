import useFetchLesson from '../../../hooks/lessons/useFetchLesson';
import useLessonActions from '../../../hooks/lessons/useLessonActions';
import Container from '../../../components/ui/Container';
import RenderMarkdown from '../../../components/RenderMarkdown';
import { Typography } from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button'
import NotFoundData from '../../../components/NotFoundData';
import { useAppSelector } from '../../../app/store/hooks';
import useScrollToBottom from '../../../hooks/useScrollToBottom';
import styles from './index.module.css'

const LessonPage = () => {
    const lesson = useFetchLesson();
    const lessonLoading = useAppSelector(state => state.lesson.loading);
    const {goHome, goTask, doneLesson} = useLessonActions(lesson?.id);
    const {tagRef} = useScrollToBottom(doneLesson)

    if (lessonLoading) return null;

    if (!lesson) return (
        <NotFoundData 
            title='Урок не найден'
            text='Возможно, урок находится в разработке. Пожалуйста, повторите попытку позже' 
        />
    )

  return (
    <Container>
        <Typography color='main' as='h1' size='xxl' weight='bold' style={{marginBlock: '2.1875rem 1rem'}}>
            {lesson.title}
        </Typography>
        <RenderMarkdown>{lesson.content}</RenderMarkdown>
        <div className={styles.buttons} ref={tagRef}>
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