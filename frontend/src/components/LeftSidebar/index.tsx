import { CgProfile } from 'react-icons/cg'
import { RxExit } from 'react-icons/rx'
import { FaTwitter } from 'react-icons/fa'

import { Icon } from './styles'

const LeftSidebar = () => {
  const ProfileIcon = CgProfile as React.ElementType
  const ExitIcon = RxExit as React.ElementType
  const TwitterIncon = FaTwitter as React.ElementType

  return (
    <>
      <ul>
        <li>
          <Icon>
            <TwitterIncon />
          </Icon>
        </li>
        <li>
          <Icon>
            <ProfileIcon /> Perfil
          </Icon>
        </li>
        <li>
          <Icon>
            <ExitIcon /> Sair
          </Icon>
        </li>
      </ul>
    </>
  )
}

export default LeftSidebar
