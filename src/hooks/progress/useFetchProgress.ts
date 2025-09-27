import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { setProgress, setProgressLoading } from '../../app/store/slices/progressSlice';
import progressRoute from '../../libs/models/API/routes/progress';
import useCatchError from '../useCatchError';
import { useMinimumDelay } from '../useMinimumDelay';
import { useParams } from 'react-router';

const useFetchProgress = () => {
    const {progress, loading} = useAppSelector(state => state.progress);
    const dispatch = useAppDispatch();
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay(); 
    const {token} = useParams();
    
  useEffect(()=> {
    const fetchProgress = async () => {
        try {
            dispatch(setProgressLoading(true))
            const progress = await withMinimumDelay(
                progressRoute.getProgress(token!)
            );
            dispatch(setProgress(progress))
        } catch (error) {
            catchError(error, 'progress')
        } finally {
            dispatch(setProgressLoading(false))
        }
    }
    fetchProgress();
  }, [])

  return {progress, loading}
}

export default useFetchProgress