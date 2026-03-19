import { useState } from 'react'
import { BiLike, BiComment } from 'react-icons/bi'

import * as S from './styles'

type Props = {
  id: number
  user: string
  foto: string | null
  text: string
  likes_count: number
  comments_count: number
  is_liked: boolean
}

type Comment = {
  id: number
  user: string
  text: string
  created_at: string
}

const Post = ({
  id,
  user,
  text,
  foto,
  likes_count,
  comments_count,
  is_liked
}: Props) => {
  const CommentIcon = BiComment as React.ElementType
  const LikeIcon = BiLike as React.ElementType

  const [commentsList, setCommentsList] = useState<Comment[]>([])
  const [likeCount, setLikeCount] = useState(likes_count)
  const [liked, setLiked] = useState(is_liked)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [commentsCount, setCommentsCount] = useState(comments_count)

  const toggleComments = () => {
    if (!showComments && commentsList.length === 0) {
      loadComments()
    }
    setShowComments((prev) => !prev)
  }

  const handleLike = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('Usuário não autenticado')
      return
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/api/likes/toggle/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post_id: id
        })
      })

      const data = await response.json()

      if (data.liked) {
        setLikeCount((prev) => prev + 1)
        setLiked(true)
      } else {
        setLikeCount((prev) => prev - 1)
        setLiked(false)
      }
    } catch (error) {
      console.error('Erro ao dar like:', error)
    }
  }

  const handleComment = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('Usuário não autenticado')
      return
    }

    setCommentsCount((prev) => prev + 1)

    if (!newComment.trim()) return

    try {
      const res = await fetch('http://127.0.0.1:8000/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post: id,
          text: newComment
        })
      })

      const data: Comment = await res.json()

      setCommentsList((prev) => [data, ...prev])
      setNewComment('')
    } catch (err) {
      console.error(err)
    }
  }

  const loadComments = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/comments/?post_id=${id}`
      )
      const data: Comment[] = await res.json()
      setCommentsList(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <S.Post key={id}>
      <S.ProfilePicture src={foto || 'https://i.pravatar.cc/150'} />

      <S.PostContent>
        <S.PostHeader>
          <S.Username>{user}</S.Username>
        </S.PostHeader>

        <S.Text>{text}</S.Text>

        <S.PostFooter>
          <span onClick={toggleComments} style={{ cursor: 'pointer' }}>
            <CommentIcon size={18} /> {commentsCount}
          </span>

          <span onClick={handleLike} style={{ cursor: 'pointer' }}>
            <LikeIcon size={18} color={liked ? 'red' : undefined} />
            {likeCount}
          </span>
        </S.PostFooter>
        {showComments && (
          <div>
            <S.CommentsContent>
              <S.TextComments
                type="text"
                placeholder="Escreva um comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleComment()
                }}
              />
              <S.PostButton onClick={handleComment}>Comentar</S.PostButton>
            </S.CommentsContent>
            {commentsList.map((comment) => (
              <div key={comment.id}>
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </S.PostContent>
    </S.Post>
  )
}

export default Post
