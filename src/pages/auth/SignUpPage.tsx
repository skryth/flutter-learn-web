import AuthForm from '../../components/AuthForm'
import useAuth from '../../hooks/useAuth'

const SignUpPage = () => {
  const {signUp} = useAuth();

  return (
    <AuthForm title='Зарегистрироваться' 
      bottomText='Уже есть аккаунт?'
      onSubmit={signUp}
      submitText='Создать Аккаунт'
      bottomLink={{text: 'Войти', to: '/auth/signin'}}
    />
  )
}

export default SignUpPage