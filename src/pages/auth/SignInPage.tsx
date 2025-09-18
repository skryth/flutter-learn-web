import AuthForm from "../../components/AuthForm"

const SignInPage = () => {
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