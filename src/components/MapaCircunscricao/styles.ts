import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: #f1f5f9;
  .mapa {
    border: 0;
    width: 100%;
    height: 480px;
    pointer-events: auto;
  }
  .page-title {
    color: ${theme.colors.theme.primary};
    font-weight: ${theme.weight.extraBold};
    font-size: ${theme.sizes.xxxxlarge}px;
    margin: 40px 0 40px 0;
  }
`
export const Map = styled.div`
  border-top: 8px solid #6b89b5;
  border-bottom: 8px solid #6b89b5;
`
