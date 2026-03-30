import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
  foto: string | null
  comments_count: number
  is_liked: boolean
}

const Profile = () => {
  const { username } = useParams()

  const [profileUser, setProfileUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<PostType[]>([])
  const [isFollowing, setIsFollowing] = useState(false)
  const [loading, setLoading] = useState(true)

  const loggedUserId = localStorage.getItem('user_id')
  const loggedUsername = localStorage.getItem('username')

  const isOwnProfile = profileUser
    ? String(profileUser.id) === String(loggedUserId) ||
      profileUser.username === loggedUsername
    : false

  useEffect(() => {
    if (!username) return

    setLoading(true)
    const token = localStorage.getItem('token')

    fetch(`https://cebolo.pythonanywhere.com/api/users/${username}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
      .then((res) => res.json())
      .then((data) => {
        setProfileUser(data)
        setIsFollowing(data.is_following)
      })
      .catch((error) => {
        console.error('Erro ao carregar perfil:', error)
        setProfileUser(null)
      })

    fetch(`https://cebolo.pythonanywhere.com/api/users/${username}/posts/`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
      .then((res) => res.json())
      .then((data) => {
        const userPosts = data.results || data
        setPosts(userPosts)
      })
      .catch((error) => {
        console.error('Erro ao carregar posts:', error)
        setPosts([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [username])

  const handleFollow = async () => {
    const token = localStorage.getItem('token')
    if (!token || !profileUser) return

    try {
      const res = await fetch(
        'https://cebolo.pythonanywhere.com/api/social/follow/toggle/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            user_id: profileUser.id
          })
        }
      )

      const data = await res.json()
      setIsFollowing(data.following)

      setProfileUser((prev) =>
        prev
          ? {
              ...prev,
              followers: data.following
                ? prev.followers + 1
                : prev.followers - 1
            }
          : null
      )
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <h3>Carregando perfil...</h3>
  if (!profileUser) return <h3>Usuário não encontrado</h3>

  return (
    <S.Container>
      <S.Left>
        <LeftSidebar />
      </S.Left>

      <S.Center>
        <Bio
          id={String(profileUser.id)}
          username={profileUser.username}
          foto={profileUser.foto}
          bio={profileUser.bio}
          followers={profileUser.followers}
          following={profileUser.following}
          isOwnProfile={isOwnProfile}
          isFollowing={isFollowing}
          onFollow={handleFollow}
        />

        {posts.length > 0 ? (
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
          ))
        ) : (
          <p>Este usuário ainda não tem posts.</p>
        )}
      </S.Center>

      <S.Right>
        <RightSidebar />
      </S.Right>
    </S.Container>
  )
}

export default Profile
