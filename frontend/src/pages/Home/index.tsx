import { useEffect, useState } from 'react'

import LeftSidebar from '../../components/LeftSidebar'
import Post from '../../components/Post'
import PostSubmit from '../../components/PostSubmit'
import RightSidebar from '../../components/RightSidebar'

import * as S from './styles'

interface PostType {
  id: number
  user: string
  text: string
  foto: string | null
  likes_count: number
  comments_count: number
  is_liked: boolean
}

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  const loadPosts = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.error('Usuário não autenticado')
      return
    }

    try {
      const res = await fetch(
        'http://cebolo.pythonanywhere.com/api/posts/feed/',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const data = await res.json()
      setPosts(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const addPostToFeed = (newPost: PostType) => {
    setPosts((prev) => [newPost, ...prev])
  }

  return (
    <S.Container>
      <S.Left>
        <LeftSidebar />
      </S.Left>

      <S.Center>
        <PostSubmit onPostCreated={addPostToFeed} />

        {Array.isArray(posts) &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              user={post.user}
              text={post.text}
              likes_count={post.likes_count}
              comments_count={post.comments_count}
              is_liked={post.is_liked}
              foto={post.foto}
            />
          ))}
      </S.Center>

      <S.Right>
        <RightSidebar />
      </S.Right>
    </S.Container>
  )
}

export default Home
