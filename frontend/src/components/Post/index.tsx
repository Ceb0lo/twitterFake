import { BiLike, BiComment } from 'react-icons/bi'

import * as S from './styles'

const Post = () => {
  const CommentIcon = BiComment as React.ElementType
  const LikeIcon = BiLike as React.ElementType
  return (
    <>
      <S.Post>
        <S.ProfilePicture />
        <S.PostContent>
          <S.PostHeader>
            <S.Username>Sr.Test</S.Username>
          </S.PostHeader>
          <S.Text>
            Testando a interface da aplicação para verificar como o layout se
            comporta quando o campo de texto atinge o limite máximo permitido.
            Isso ajuda a validar quebra de linha, espaçamento entre elementos,
            comportamento do botão de envio e responsividade em diferentes
            tamanhos de tela.
          </S.Text>
          <S.PostFooter>
            <span>
              <CommentIcon size={18} /> xx
            </span>
            <span>
              <LikeIcon size={18} /> xx
            </span>
          </S.PostFooter>
        </S.PostContent>
      </S.Post>
    </>
  )
}

export default Post
