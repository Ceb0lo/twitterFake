import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import variables from '../../styles/variables'

export const Icon = styled(Link)`
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
  text-decoration: none;

  &:hover {
    background: ${variables.gray};
  }
`
export const Logo = styled.div`
  padding-left: 16px;
`
