import { useRef } from 'react';
import shareLink from '../../libs/helpers/shareLink';
import progressRoute from '../../libs/models/API/routes/progress';
import useCatchError from '../useCatchError'
import toast from 'react-hot-toast';
import { useMinimumDelay } from '../useMinimumDelay';

const useShareProgress = () => {
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay();
    const toastRef = useRef<string>(null);

  const fetchShareProgress = async () => {
    try {
        toastRef.current = toast.loading('Пожалуйста, подождите')
        const {token} = await withMinimumDelay(
            progressRoute.getShareToken()
        );
        shareLink(`${window.location.origin}/progress/${token}`)
    } catch (error) {
        catchError(error)
    } finally {
        toastRef.current && toast.dismiss()
    }
  }

  return fetchShareProgress
}

export default useShareProgress