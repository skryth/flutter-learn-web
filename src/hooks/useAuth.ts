import { useAppDispatch } from '../app/store/hooks'
import type { AuthData } from '../components/AuthForm';
import { setUserLogin } from '../app/store/slices/userSlice';
import { useNavigate } from 'react-router';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const signIn = (authData: AuthData) => {
        // todo: fetch setUserLoading(...)
        dispatch(setUserLogin(authData.login));
        navigate('/modules');
    }

    const signUp = (authData: AuthData) => {
        dispatch(setUserLogin(authData.login))
        navigate('/modules');
    }

    const signOut = () => {
        dispatch(setUserLogin(null))
        navigate('/');
    }

    return {signIn, signUp, signOut}
}

export default useAuth