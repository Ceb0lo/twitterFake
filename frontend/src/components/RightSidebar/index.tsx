import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import { useSearchQuery } from '../../services/api'

import * as S from './styles'

const RightSidebar = () => {
  const navigate = useNavigate()
  const SearchIcon = BiSearch as React.ElementType
  const [query, setQuery] = useState('')

  const { data: results = [], isLoading } = useSearchQuery(query, {
    skip: query.length < 2
  })

  return (
    <div>
      <S.SearchContainer>
        <SearchIcon size={20} />
        <S.Input
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </S.SearchContainer>

      {isLoading && <p>Buscando...</p>}

      {results.length > 0 && (
        <S.ResultsContainer>
          {results.map((item: any) => (
           <S.ResultItem
              key={item.id}
              onClick={() => {
                if (item.type === 'user') {
                  navigate(`/profile/${item.username}`)
                } else {
                  navigate(`/profile/${item.user}`)
                }
              }}
            >
              {item.type === 'user' ? (
                <>
                  <strong>{item.username}</strong>
                  <p>{item.bio}</p>
                </>
              ) : (
                <>
                  <strong>@{item.user}</strong>
                  <p>{item.text}</p>
                </>
              )}
            </S.ResultItem>
          ))}
        </S.ResultsContainer>
      )}
    </div>
  )
}

export default RightSidebar
