import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  padding: 24px 16px;
`

export const BioHeder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BioPicture = styled.img`
  height: 133px;
  width: 133px;
  border-radius: 50%;
  object-fit: cover;
`

export const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;

  background: ${variables.black};
  color: ${variables.white};

  border: none;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background: ${variables.gray};
  }
`

export const BioContent = styled.div`
  margin-top: 16px;
`

export const Username = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 8px;
`

export const BioFooter = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialNetwork = styled.h2`
  font-size: 16px;
  font-weight: 300;

  span {
    font-weight: 600;
    margin-right: 4px;
  }
`
export const Bio = styled.p`
  margin-top: 8px;
  font-size: 18px;
`
