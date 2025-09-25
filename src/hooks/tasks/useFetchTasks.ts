import { useEffect } from 'react'
import tasksRoute from '../../libs/models/API/routes/tasks'
import { useParams } from 'react-router';
import { useAppDispatch } from '../../app/store/hooks';
import { setTask, setTaskLoading } from '../../app/store/slices/taskSlice';
import useCatchError from '../useCatchError';
import { useMinimumDelay } from '../useMinimumDelay';

const useFetchTasks = () => {
  const {lesson_id} = useParams();
  const dispatch = useAppDispatch();
  const catchError = useCatchError();
  const withMinimumDelay = useMinimumDelay(); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        dispatch(setTaskLoading(true));
        const tasks = await withMinimumDelay(
          tasksRoute.getTask(lesson_id!)
        );
        if (tasks.length === 0) {
          dispatch(setTask(null));
        } else {
          dispatch(setTask(tasks[0]));
        }
      } catch (error) {
        catchError(error);
        dispatch(setTask(null));
      } finally {
        dispatch(setTaskLoading(false));
      }
    }
    fetchTasks();
  }, [lesson_id])
}

export default useFetchTasks