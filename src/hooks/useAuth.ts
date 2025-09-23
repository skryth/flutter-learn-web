import { useAppDispatch } from '../app/store/hooks'
import type { AuthData } from '../components/AuthForm';
import { setUserLogin } from '../app/store/slices/userSlice';
import { useNavigate } from 'react-router';
import accountRoute from '../libs/models/API/routes/account';
import toast from 'react-hot-toast';
import useCatchError from './useCatchError';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const catchError = useCatchError();

    const signIn = async (authData: AuthData) => {
        try {
            const user = await accountRoute.signIn(authData.login, authData.password);
            dispatch(setUserLogin(user.username));
            toast.success('Вы успешно вошли');
            navigate('/modules');
        } catch (e) {
            catchError(e);
        }
    }

    const signUp = async (authData: AuthData) => {
        try {
            const user = await accountRoute.signUp(authData.login, authData.password);
            dispatch(setUserLogin(user.username));
            toast.success('Вы успешно зарегистрировались');
            navigate('/modules');
        } catch (e) {
            catchError(e);
        }
    }

    const signOut = () => {
        dispatch(setUserLogin(null))
        navigate('/');
        // todo
    }

    return {signIn, signUp, signOut}
}

export default useAuth