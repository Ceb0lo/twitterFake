import styled from 'styled-components'
import variables from '../../styles/variables'

export const Post = styled.div`
  width: 598px;
  padding: 16px;
  border: 1px solid ${variables.white};
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  font-size: 15px;
`
export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfilePicture = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`
export const Username = styled.h1`
  font-weight: 400;
`

export const Text = styled.h2`
  margin-top: 2px;
  font-size: 15px;
  line-height: 20px;
`
