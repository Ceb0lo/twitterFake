import { useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { RxExit } from 'react-icons/rx'
import { FaTwitter } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import * as S from './styles'

const LeftSidebar = () => {
  const navigate = useNavigate()

  const loggedUsername = localStorage.getItem('username') || ''

  const ProfileIcon = CgProfile as React.ElementType
  const ExitIcon = RxExit as React.ElementType
  const TwitterIncon = FaTwitter as React.ElementType
  const HomeIncon = GoHome as React.ElementType

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('username')
    localStorage.removeItem('refresh_token')

    navigate('/')
  }
  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (loggedUsername) {
      navigate(`/profile/${loggedUsername}`)
    } else {
      navigate('/')
    }
  }

  return (
    <S.Container>
      <ul>
        <li>
          <S.Logo to="/home">
            <TwitterIncon size={40} />
          </S.Logo>
        </li>

        <li>
          <S.Icon to="/home">
            <HomeIncon /> Home
          </S.Icon>
        </li>

        <li>
            <S.Icon
              to={`/profile/${loggedUsername}`}
              title={`Ir para @${loggedUsername}`}
            >
            <ProfileIcon /> Perfil
          </S.Icon>
        </li>

        <li>
          <S.Exit as="button" onClick={handleLogout}>
            <ExitIcon /> Sair
          </S.Exit>
        </li>
      </ul>

      {loggedUsername && (
        <S.UserInfo>
          <span>Logado como @{loggedUsername}</span>
        </S.UserInfo>
      )}
    </S.Container>
  )
}

export default LeftSidebar
