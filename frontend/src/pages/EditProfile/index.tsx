import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEditProfileMutation } from '../../services/api'

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
    <div>
      <h1>Editar Perfil</h1>

      <input
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="Novo username"
      />

      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nova senha"
      />

      <input
        type="file"
        onChange={(e) => setFoto(e.target.files?.[0] || null)}
      />

      <button onClick={handleSubmit}>Salvar</button>
    </div>
  )
}

export default EditProfile
