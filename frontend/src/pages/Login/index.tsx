import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../services/api'
import { loginSuccess } from '../../store/authSlice'

import * as S from './styles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const handleLogin = async () => {
    try {
      setError('')

      const response = await login({
        username,
        password
      }).unwrap()

      const token = response.token

      localStorage.setItem('token', token)
      localStorage.setItem('username', response.username)

      navigate('/home')
    } catch (err) {
      setError('User ou senha inválidos')
    }
  }

  return (
    <S.Container>
      <S.Title>Entrar no Twitter Fake</S.Title>

      <S.InputGroup>
        <S.Label>User</S.Label>
        <S.Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <S.Label>Senha</S.Label>
        <S.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.InputGroup>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <S.Button onClick={handleLogin}>
        Avançar
      </S.Button>

      <S.Dividend>Ou</S.Dividend>

      <S.ButtonCreate to="/create-account">
        Criar sua conta
      </S.ButtonCreate>
    </S.Container>
  )
}

export default Login
