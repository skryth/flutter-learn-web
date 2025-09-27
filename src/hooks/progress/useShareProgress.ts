import shareLink from '../../libs/helpers/shareLink';
import progressRoute from '../../libs/models/API/routes/progress';
import useCatchError from '../useCatchError'
import toast from 'react-hot-toast';
import { useMinimumDelay } from '../useMinimumDelay';

const useShareProgress = () => {
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay();

  const fetchShareProgress = async () => {
    try {
        toast.loading('Пожалуйста, подождите')
        const {token} = await withMinimumDelay(
            progressRoute.getShareToken()
        );
        shareLink(`${window.location.origin}/progress/${token}`)
    } catch (error) {
        catchError(error)
    } finally {
        toast.dismissAll()
    }
  }

  return fetchShareProgress
}

export default useShareProgress