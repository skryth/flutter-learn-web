import AuthForm from "../../components/AuthForm"
import useAuth from "../../hooks/useAuth"

const SignInPage = () => {
  // todo useAuth hook with on Submit func
  const {signIn} = useAuth();
  return (
    <AuthForm title='Войти' 
      bottomText='Еще нет аккаунта?'
      onSubmit={signIn}
      submitText='Войти'
      bottomLink={{text: 'Зарегистрироваться', to: '/auth/signup'}}
    />
  )
}

export default SignInPage