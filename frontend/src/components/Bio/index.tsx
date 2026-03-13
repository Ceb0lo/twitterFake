import * as S from './styles'

const Bio = () => {
  return (
    <S.Container>
      <S.BioHeder>
        <S.BioPicture src="https://via.placeholder.com/133" />
        <S.Icon>Editar Perfil</S.Icon>
      </S.BioHeder>

      <S.BioContent>
        <S.Username>@teste</S.Username>

        <S.BioFooter>
          <S.SocialNetwork>
            <span>120</span> Seguindo
          </S.SocialNetwork>

          <S.SocialNetwork>
            <span>300</span> Seguidores
          </S.SocialNetwork>
        </S.BioFooter>
      </S.BioContent>
    </S.Container>
  )
}

export default Bio
