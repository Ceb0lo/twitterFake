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
  created_at: string
}

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Erro ao carregar API:', err))
  }, [])

  if (posts.length === 0) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Container>
      <S.Left>
        <LeftSidebar />
      </S.Left>

      <S.Center>
        <PostSubmit />

        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            text={post.text}
            created_at={post.created_at}
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
