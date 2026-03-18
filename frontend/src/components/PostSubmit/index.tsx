import { useRef, useState } from 'react'

import * as S from './styles'

interface PostSubmitProps {
  onPostCreated: (post: any) => void
}

const PostSubmit = ({ onPostCreated }: PostSubmitProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [text, setText] = useState('')

  const handleInput = () => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')

    if (!text.trim()) return

    try {
      const response = await fetch('http://127.0.0.1:8000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          text
        })
      })

      const data = await response.json()

      onPostCreated(data)

      setText('')

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    } catch (error) {
      console.error('Erro ao criar post:', error)
    }
  }

  return (
    <S.Post>
      <S.ProfilePicture />

      <S.PostContent>
        <S.Text
          ref={textareaRef}
          placeholder="O que está acontecendo?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onInput={handleInput}
        />

        <S.PostFooter>
          <S.PostButton onClick={handleSubmit}>Postar</S.PostButton>
        </S.PostFooter>
      </S.PostContent>
    </S.Post>
  )
}

export default PostSubmit
