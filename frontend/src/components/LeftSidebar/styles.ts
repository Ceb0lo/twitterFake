import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import variables from '../../styles/variables'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 15px;
  }
`

export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: ${variables.white};
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 30px;
  transition: background 0.2s;

  &:hover {
    background: ${variables.gray};
  }

  svg {
    font-size: 24px;
  }
`

export const Logo = styled(Link)`
  display: block;
  margin-bottom: 20px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid ${variables.white};
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.span`
  font-size: 14px;
  color: ${variables.gray};
  margin-left: auto;
`

export const Exit = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: ${variables.white};
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 30px;
  transition: background 0.2s;
  border: none;

  &:hover {
    background: ${variables.gray};
  }

  svg {
    font-size: 24px;
  }
`
