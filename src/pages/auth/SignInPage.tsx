import AuthForm from "../../components/AuthForm"

const SignInPage = () => {
  // todo useAuth hook with on Submit func
  return (
    <AuthForm title='Войти' 
      bottomText='Еще нет аккаунта?'
      onSubmit={() => {}}
      submitText='Войти'
      bottomLink={{text: 'Зарегистрироваться', to: '/auth/signup'}}
    />
  )
}

export default SignInPage