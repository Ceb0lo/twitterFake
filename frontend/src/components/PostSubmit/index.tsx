import { useRef } from 'react'

import * as S from './styles'

const PostSubmit = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleInput = () => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  return (
    <S.Post>
      <S.ProfilePicture />

      <S.PostContent>
        <S.Text
          ref={textareaRef}
          placeholder="O que está acontecendo?"
          onInput={handleInput}
        />

        <S.PostFooter>
          <S.PostButton>Postar</S.PostButton>
        </S.PostFooter>
      </S.PostContent>
    </S.Post>
  )
}

export default PostSubmit
