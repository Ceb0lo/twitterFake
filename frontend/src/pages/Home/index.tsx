import LeftSidebar from '../../components/LeftSidebar'
import Post from '../../components/Post'
import PostSubmit from '../../components/PostSubmit'
import RightSidebar from '../../components/RightSidebar'

import * as S from './styles'

const Home = () => {
  return (
    <>
      <S.Container>
        <S.Left>
          <LeftSidebar />
        </S.Left>
        <S.Center>
          <PostSubmit />
          <Post />
        </S.Center>
        <S.Right>
          <RightSidebar />
        </S.Right>
      </S.Container>
    </>
  )
}

export default Home
