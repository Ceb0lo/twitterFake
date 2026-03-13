import Bio from '../../components/Bio'
import LeftSidebar from '../../components/LeftSidebar'
import Post from '../../components/Post'
import RightSidebar from '../../components/RightSidebar'

import * as S from './styles'

const Profile = () => {
  return (
    <>
      <S.Container>
        <S.Left>
          <LeftSidebar />
        </S.Left>
        <S.Center>
          <Bio />
          <Post />
        </S.Center>
        <S.Right>
          <RightSidebar />
        </S.Right>
      </S.Container>
    </>
  )
}

export default Profile
