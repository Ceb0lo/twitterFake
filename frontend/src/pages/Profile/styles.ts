import { styled } from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr 350px;

  max-width: 1200px;
  margin: 0 auto;
`

export const Left = styled.div`
  border-right: 1px solid ${variables.blackblur};
  min-height: 100vh;
`

export const Center = styled.div`
  border-right: 1px solid ${variables.blackblur};
`

export const Right = styled.div`
  padding-top: 12px;
  padding-left: 24px;
`
