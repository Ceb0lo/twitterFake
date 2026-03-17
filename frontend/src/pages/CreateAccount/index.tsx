import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../services/api'

import * as S from './styles'

const CreateAccount = () => {
  const navigate = useNavigate()

  const [register] = useRegisterMutation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    try {
      setError('')

      if (password !== confirmPassword) {
        setError('As senhas não coincidem')
        return
      }

      await register({
        username: name,
        email: email,
        password: password
      }).unwrap()

      navigate('/')
    } catch (err) {
      setError('Erro ao criar conta')
    }
  }

  return (
    <S.Container>
      <S.Title>Criar sua conta</S.Title>

      <S.InputGroup>
        <S.Label>Nome</S.Label>
        <S.Input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <S.Label>Email</S.Label>
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

      <S.InputGroup>
        <S.Label>Confirmar senha</S.Label>
        <S.Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </S.InputGroup>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <S.Button onClick={handleRegister}>
        Avançar
      </S.Button>
    </S.Container>
  )
}

export default CreateAccount
