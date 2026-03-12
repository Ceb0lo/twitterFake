import { BiSearch } from 'react-icons/bi'

import * as S from './styles'

const RightSidebar = () => {
  const SearchIncon = BiSearch as React.ElementType
  return (
    <S.SearchContainer>
      <SearchIncon size={20} />
      <S.Input placeholder="Buscar" />
    </S.SearchContainer>
  )
}

export default RightSidebar
