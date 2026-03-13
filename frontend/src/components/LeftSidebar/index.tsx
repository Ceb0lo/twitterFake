import { CgProfile } from 'react-icons/cg'
import { RxExit } from 'react-icons/rx'
import { FaTwitter } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'

import { Icon, Logo } from './styles'

const LeftSidebar = () => {
  const ProfileIcon = CgProfile as React.ElementType
  const ExitIcon = RxExit as React.ElementType
  const TwitterIncon = FaTwitter as React.ElementType
  const HomeIncon = GoHome as React.ElementType

  return (
    <>
      <ul>
        <li>
          <Logo>
            <TwitterIncon size={40} />
          </Logo>
        </li>
        <li>
          <Icon to={`/home`}>
            <HomeIncon /> Home
          </Icon>
        </li>
        <li>
          <Icon to={`/profile`}>
            <ProfileIcon /> Perfil
          </Icon>
        </li>
        <li>
          <Icon to={`/`}>
            <ExitIcon /> Sair
          </Icon>
        </li>
      </ul>
    </>
  )
}

export default LeftSidebar
