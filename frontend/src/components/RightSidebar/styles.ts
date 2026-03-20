import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  max-width: 320px;

  padding: 10px 16px;

  background: ${variables.black};
  border: 1px solid ${variables.white};
  border-radius: 999px;

  color: ${variables.gray};

  svg {
    flex-shrink: 0;
  }

  &:focus-within {
    border-color: ${variables.white};
  }
`

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;

  color: ${variables.white};
  font-size: 14px;

  width: 100%;

  &::placeholder {
    color: ${variables.blackblur};
  }
`
export const ResultsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  max-width: 320px;
  color: ${variables.white}
  background: ${variables.black};
  border: 1px solid ${variables.white};
  border-radius: 12px;

  overflow: hidden;
`

export const ResultItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;

  color: ${variables.white};

  span {
    font-size: 14px;
  }
`
