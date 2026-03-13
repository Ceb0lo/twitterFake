import { styled } from 'styled-components'

import variables from '../../styles/variables'

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
  margin-bottom: 32px;
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
  background: black;
  padding: 0 4px;
  color: ${variables.white};
`

export const Input = styled.input`
  width: 466px;
  padding: 16px;
  background: black;
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

export const EmailOption = styled.span`
  display: block;
  color: ${variables.white};
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 32px;
  cursor: pointer;
`

export const Section = styled.div`
  margin-bottom: 40px;
`

export const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`

export const DateRow = styled.div`
  display: flex;
  gap: 12px;
`

export const Select = styled.select`
  flex: 1;
  padding: 14px;
  background: black;
  border: 1px solid ${variables.blackblur};
  border-radius: 6px;
  color: white;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${variables.white};
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 999px;
  border: none;
  background: ${variables.white};
  color: black;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`
