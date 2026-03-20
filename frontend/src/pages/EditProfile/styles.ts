import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  color: ${variables.black};
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  background: ${variables.gray};
  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${variables.black};
`

export const Input = styled.input`
  width: 532px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${variables.black};
  background: transparent;
  color: ${variables.blackblur};

  &:focus {
    outline: none;
    border-color: ${variables.white};
  }

  &::placeholder {
    color: ${variables.blackblur};
  }
`

export const TextArea = styled.textarea`
  width: 532px;
  min-height: 100px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${variables.black};
  background: transparent;
  color: ${variables.blackblur};
  resize: none;

  &:focus {
    outline: none;
    border-color: ${variables.white};
  }

  &::placeholder {
    color: ${variables.blackblur};
  }
`

export const FileInput = styled.input`
  color: ${variables.white};

  &::file-selector-button {
    margin-right: 12px;
    border: none;
    background: ${variables.blackblur};
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background: ${variables.black};
    }
  }
`

export const Button = styled.button`
  margin-top: 8px;
  padding: 12px;
  border-radius: 999px;
  border: none;
  background: ${variables.blackblur};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${variables.blackblur};
  }

  &:disabled {
    background: ${variables.blackblur};
    cursor: not-allowed;
  }
`
