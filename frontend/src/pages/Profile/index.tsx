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
  is_following: boolean
}

interface PostType {
  id: number
  user: string
  text: string
  likes_count: number
  comments_count: number
  is_liked: boolean
}

const Profile = () => {
  const { username } = useParams()

  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<PostType[]>([])
  const [isFollowing, setIsFollowing] = useState(false)

  const loggedUserId = Number(localStorage.getItem('user_id'))

  const isOwnProfile =
    user !== null && !isNaN(loggedUserId)
      ? loggedUserId === Number(user.id)
      : false

  useEffect(() => {
    if (user) {
      setIsFollowing(user.is_following)
    }
  }, [user])

  useEffect(() => {
    if (!username) return

    fetch(`http://127.0.0.1:8000/api/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))

    fetch(`http://127.0.0.1:8000/api/posts/?user=${username}`)
      .then((res) => res.json())
      .then((data) => {
        // 👇 protege caso venha paginado
        setPosts(data.results || data)
      })
  }, [username])

  const handleFollow = async () => {
    const token = localStorage.getItem('token')
    if (!token || !user) return

    try {
      const res = await fetch('http://127.0.0.1:8000/api/social/follow/toggle/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: user.id
        })
      })

      const data = await res.json()

      setIsFollowing(data.following)
    } catch (err) {
      console.error(err)
    }
  }

  if (!user) return <h3>Carregando perfil...</h3>

  return (
    <S.Container>
      <S.Left>
        <LeftSidebar />
      </S.Left>

      <S.Center>
        <Bio
          id={user.id}
          username={user.username}
          foto={user.foto}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
          isOwnProfile={isOwnProfile}
          isFollowing={isFollowing}
          onFollow={handleFollow}
        />

        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            text={post.text}
            likes_count={post.likes_count}
            comments_count={post.comments_count}
            is_liked={post.is_liked}
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
