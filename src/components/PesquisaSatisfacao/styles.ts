import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.theme.light};
  padding-bottom: 20px;
  h2 {
    color: ${theme.colors.theme.primary};
    font-weight: ${theme.weight.extraBold};
    font-size: ${theme.sizes.xxxxlarge}px;
    margin-top: 140px;
  }
  p {
    font-weight: ${theme.weight.light};
    margin-bottom: 20px;
  }
  @media only screen and (max-device-width: 480px) {
    h2 {
      margin-top: 0px;
    }
  }
`
