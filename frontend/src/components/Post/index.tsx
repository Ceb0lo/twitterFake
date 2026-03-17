import { BiLike, BiComment } from 'react-icons/bi'

import * as S from './styles'

type Props = {
  id: number
  user: string
  text: string
  created_at: string
}

const Post = ({ id, user, text, created_at }: Props) => {
  const CommentIcon = BiComment as React.ElementType
  const LikeIcon = BiLike as React.ElementType
  return (
    <>
      <S.Post key={id}>
        <S.ProfilePicture />
        <S.PostContent>
          <S.PostHeader>
            <S.Username>{user}</S.Username>
          </S.PostHeader>
          <S.Text>{text}</S.Text>
          <S.PostFooter>
            <span>
              <CommentIcon size={18} /> xx
            </span>
            <span>
              <LikeIcon size={18} /> {created_at}
            </span>
          </S.PostFooter>
        </S.PostContent>
      </S.Post>
    </>
  )
}

export default Post
