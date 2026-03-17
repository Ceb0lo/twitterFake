import * as S from './styles'

type Props = {
  id: string
  username: string
  foto: string | null
  bio: string | null
  followers: number
  following: number
}

const Bio = ({ id, username, foto, followers, following }: Props) => {
  return (
    <S.Container key={id}>
      <S.BioHeder>
        <S.BioPicture src={foto || 'https://i.pravatar.cc/150'} />
        <S.Icon>Editar Perfil</S.Icon>
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
      </S.BioContent>
    </S.Container>
  )
}

export default Bio
