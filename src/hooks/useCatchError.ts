import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import ApiError from '../libs/models/API/ApiError';
type ApiRouteType = 'account' | 'lessons' | 'tasks' | 'modules'
const useCatchError = () => {
    const navigate = useNavigate();

    const catchError = (error: unknown, type?: ApiRouteType) => {
        if (error instanceof ApiError) {
            switch (error.status) {
                case 401:
                    if (type === 'account') {
                        toast.error("Неверный логин или пароль");
                    } else {
                        toast.error("Войдите в систему");
                        navigate("/auth/signin");
                    }
                    break;
                case 404:
                    toast.error(
                        type === 'account' ? 'Пользователь с таким логином не найден' :
                        type === 'lessons' ? 'Урок не найден' : 'Задача не найдена'
                    );
                    break;
                case 409:
                    toast.error("Этот логин уже занят. Попробуйте другой");
                    break;
                case 500:
                    toast.error("На сервере произошла ошибка. Попробуйте позже");
                    break;

                default:
                    toast.error("Что-то пошло не так. Попробуйте снова");
            }
        } else {
            toast.error("Что-то пошло не так. Попробуйте снова");
        }
    };

  return catchError;
};

export default useCatchError