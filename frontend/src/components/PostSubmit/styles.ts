import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Post = styled.div`
  width: 600px;
  padding: 16px;
  border: 1px solid ${variables.white};
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  font-size: 15px;
`
export const PostContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const Text = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  font-size: 20px;
  background: transparent;

  textarea::placeholder {
    color: ${variables.white};
  }
`
export const PostButton = styled.button`
  background: ${variables.white};
  border: none;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: bold;
  color: ${variables.black};
  cursor: pointer;
`
export const PostFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`
