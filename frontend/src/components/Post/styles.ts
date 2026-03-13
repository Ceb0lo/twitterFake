import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Post = styled.div`
  width: 600px;
  padding: 16px;
  border: 1px solid ${variables.white};
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  font-size: 16px;
`
export const PostContent = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const ProfilePicture = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`
export const Username = styled.h1`
  font-weight: 400;
`
export const Text = styled.p`
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
`
export const PostFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  span {
    margin-left: 8px;
  }
`
