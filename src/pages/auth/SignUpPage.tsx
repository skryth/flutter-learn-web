import AuthForm from '../../components/AuthForm'

const SignUpPage = () => {
  return (
    <AuthForm title='Зарегистрироваться' 
      bottomText='Уже есть аккаунт?'
      onSubmit={() => {}}
      submitText='Создать Аккаунт'
      bottomLink={{text: 'Войти', to: '/auth/signin'}}
    />
  )
}

export default SignUpPage