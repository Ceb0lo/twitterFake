import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEditProfileMutation } from '../../services/api'

import * as S from './styles'

const EditProfile = () => {
  const navigate = useNavigate()

  const [newUsername, setNewUsername] = useState('')
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState('')
  const [foto, setFoto] = useState<File | null>(null)

  const [editProfile] = useEditProfileMutation()

  const handleSubmit = async () => {
    const username = localStorage.getItem('username')

    if (!username) return

    const formData = new FormData()

    if (newUsername) formData.append('username', newUsername)
    if (bio) formData.append('bio', bio)
    if (password) formData.append('password', password)
    if (foto) formData.append('foto', foto)

    await editProfile({
      username,
      data: formData
    })

    navigate(`/profile/${newUsername || username}`)
  }

  return (
    <S.Container>
      <S.Title>Editar Perfil</S.Title>
      <S.Form>
        <S.Input
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Novo username"
        />

        <S.TextArea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />

        <S.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova senha"
        />

        <S.FileInput
          type="file"
          onChange={(e) => setFoto(e.target.files?.[0] || null)}
        />

        <S.Button onClick={handleSubmit}>Salvar</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default EditProfile
