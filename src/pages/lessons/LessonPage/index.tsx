import { useParams } from 'react-router'
import Button from '../../../components/ui/Button'
import styles from './index.module.css'
import { Typography } from '../../../components/ui/Typography';
import Container from '../../../components/ui/Container';
import { useEffect, useState } from 'react';
import RenderMarkdown from '../../../components/RenderMarkdown';
import useExampleFetch from '../../../hooks/useExampleFetch';

const LessonPage = () => {
    const {lesson_id} = useParams();
    const [lesson, setLesson] = useState<string | null>(null);
    useExampleFetch(true)
    useEffect(() => {
        const fetchLesson = async () => {
            const res = await fetch('/exampleLesson.md');
            const les = await res.text();
            setLesson(les)
        }
        fetchLesson()
    }, [])

  return (
    <Container>
        <Typography color='main' as='h1' size='xxl' weight='bold' style={{marginBlock: '2.1875rem 1rem'}}>
            Введение в Flutter
        </Typography>
        <Typography as='h2' size='xl' weight='bold' style={{marginBottom: '1rem'}}>Что такое Flutter</Typography>
        <RenderMarkdown>{lesson as string}</RenderMarkdown>
        <div className={styles.buttons}>
            <Button to='/modules' bg='secondary' color='darkblue' paddingX='sm'>
                На главную
            </Button>
            <Button to={`/lesson/${lesson_id}/task/1`} paddingX='sm'>
                К Заданию
            </Button>
        </div>
    </Container>
  )
}

export default LessonPage