import * as S from './styles'

const Login = () => {
  return (
    <S.Container>
      <S.Title>Entrar no Twitter Fake</S.Title>
      <S.InputGroup>
        <S.Label>Email</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>Senha</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.Button>Avançar</S.Button>
      <S.Dividend>Ou</S.Dividend>
      <S.ButtonCreate to={'/create-account'}>Criar sua conta</S.ButtonCreate>
    </S.Container>
  )
}

export default Login
