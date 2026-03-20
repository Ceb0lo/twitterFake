import { useNavigate } from 'react-router-dom'

import * as S from './styles'

type Props = {
  id: string
  username: string
  foto: string | null
  bio: string | null
  followers: number
  following: number

  isOwnProfile: boolean
  isFollowing: boolean
  onFollow: () => void
}

const Bio = ({
  id,
  username,
  foto,
  bio,
  followers,
  following,
  isOwnProfile,
  isFollowing,
  onFollow
}: Props) => {
  const navigate = useNavigate()
  return (
    <S.Container key={id}>
      <S.BioHeder>
        <S.BioPicture src={foto || 'https://i.pravatar.cc/150'} />

        {isOwnProfile ? (
          <S.Icon onClick={() => navigate(`/edit-profile/${username}`)}>
            Editar Perfil
          </S.Icon>
        ) : (
          <S.Icon onClick={onFollow}>
            {isFollowing ? 'Seguindo' : 'Seguir'}
          </S.Icon>
        )}
      </S.BioHeder>
      <S.BioContent>
        <S.Username>{username}</S.Username>
        <S.BioFooter>
          <S.SocialNetwork>
            <span>{following}</span> Seguindo
          </S.SocialNetwork>

          <S.SocialNetwork>
            <span>{followers}</span> Seguidores
          </S.SocialNetwork>
        </S.BioFooter>
        <S.Bio>
          {bio && <p>{bio}</p>}
        </S.Bio>
      </S.BioContent>
    </S.Container>
  )
}

export default Bio
