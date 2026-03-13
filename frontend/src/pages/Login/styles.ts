import { styled } from 'styled-components'

import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  color: ${variables.white};
  font-family: Arial, Helvetica, sans-serif;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 32px;
`
export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
`
export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 14px;
  background: ${variables.black};
  padding: 0 4px;
  color: ${variables.white};
`
export const Input = styled.input`
  width: 466px;
  padding: 16px;
  background: ${variables.black};
  border: 1px solid ${variables.blackblur};
  border-radius: 6px;
  color: white;
  font-size: 16px;
  margin-bottom: 24px;

  &:focus {
    outline: none;
    border-color: ${variables.white};
  }
`
const BaseButton = `
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border-radius: 999px;
  border: none;

  background: ${variables.white};
  color: ${variables.black};

  font-weight: 700;
  font-size: 16px;

  cursor: pointer;
`
export const Button = styled.button`
  ${BaseButton}
  width: 100%;
  margin-top: 16px;
`
export const ButtonCreate = styled(Link)`
  ${BaseButton}

  width: 466px;
  margin: 24px auto;
  text-decoration: none;
`
export const Dividend = styled.h2`
  text-align: center;
  margin: 24px 0;
`
