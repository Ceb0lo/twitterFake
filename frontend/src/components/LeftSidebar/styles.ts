import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 28px;
  font-weight: 500;
  background: ${variables.black};
  color: ${variables.white};
  border: none;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background: ${variables.gray};
  }
`
