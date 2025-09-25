import { useEffect } from 'react'
import { useAppDispatch } from '../../app/store/hooks'
import { setProgress, setProgressLoading } from '../../app/store/slices/progressSlice';
import progressRoute from '../../libs/models/API/routes/progress';
import useCatchError from '../useCatchError';
import { useMinimumDelay } from '../useMinimumDelay';

const useFetchProgress = () => {
    const dispatch = useAppDispatch();
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay(); 
    

  useEffect(()=> {
    const fetchProgress = async () => {
        try {
            dispatch(setProgressLoading(true))
            const progress = await withMinimumDelay(
                progressRoute.getProgress()
            );
            dispatch(setProgress(progress))
        } catch (error) {
            catchError(error)
        } finally {
            dispatch(setProgressLoading(false))
        }
    }
    fetchProgress();
  }, [])
}

export default useFetchProgress