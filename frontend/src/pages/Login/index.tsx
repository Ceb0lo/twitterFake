import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../services/api'
import { loginSuccess } from '../../store/authSlice'

import * as S from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const handleLogin = async () => {
    try {
      setError('')

      const response = await login({
        username: email,
        password
      }).unwrap()

      const token = response.access

      localStorage.setItem('token', token)
      localStorage.setItem('username', response.data?.email || response.username || email)

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
