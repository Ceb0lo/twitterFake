
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import Bio from '../../components/Bio'
import Post from '../../components/Post'

import * as S from './styles'

interface User {
  id: string
  username: string
  foto: string | null
  bio: string | null
  followers: number
  following: number
}

interface PostType {
  id: number
  user: string
  text: string
  created_at: string
}

const Profile = () => {
  const { username } = useParams()

  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (!username) return

    fetch(`http://127.0.0.1:8000/api/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))

    fetch(`http://127.0.0.1:8000/api/posts/?user=${username}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [username])

  if (!user) return <h3>Carregando perfil...</h3>

  return (
    <S.Container>
      <S.Left>
        <LeftSidebar />
      </S.Left>

      <S.Center>
        <Bio id={user.id} username={user.username} foto={user.foto} bio={null} followers={user.followers} following={user.following}  />

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

export default Profile
