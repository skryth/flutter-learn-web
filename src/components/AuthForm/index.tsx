import { Link } from 'react-router'
import Button from '../ui/Button'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
interface AuthData {
  login: string;
  password: string;
}
interface AuthFormProps {
    title: string,
    submitText: string,
    bottomText: string,
    bottomLink: {
        text: string;
        to: string;
    };
    onSubmit: (data: AuthData) => void // todo
}
const AuthForm: React.FC<AuthFormProps> = ({
    title,
    submitText,
    bottomText,
    bottomLink,
    onSubmit
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const authData: AuthData = {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        }
        onSubmit(authData)
    }

  return (
    <section className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Typography as='h2' size='xxl' weight='bold'>{title}</Typography>
            <div>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Логин' name='login' required/>
                    <input type="password" placeholder='Пароль' name='password' required/>
                </div>
                <Button onClick={() => {}}>{submitText}</Button>
            </div>
        </form>
        <div className={styles.row}>
            <Typography size='sm' weight='medium' color='light' uppercase>
                {bottomText}
            </Typography>
            <Link to={bottomLink.to}>
                <Typography size='sm' weight='medium' color='main' uppercase>
                    {bottomLink.text}
                </Typography>
            </Link>
        </div>
    </section>
  )
}

export default AuthForm