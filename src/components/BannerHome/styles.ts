import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  .masthead {
    height: 40vh;
    min-height: 550px;
    background-image: url('/images/banner_home.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .black-overlay {
      background-color: rgba(0, 0, 0, 0.2);
      min-height: 100vh;
      padding-top: 200px;
      h1 {
        color: ${theme.colors.theme.white};
        font-weight: ${theme.weight.bold};
        text-shadow: ${theme.colors.theme.dark} 1px 1px 3px;
      }
      p {
        color: ${theme.colors.theme.white};
        font-weight: ${theme.weight.light};
        line-height: 32px;
        text-shadow: ${theme.colors.theme.dark} 1px 1px 3px;
        padding-left: 160px;
        padding-right: 160px;
        font-size: ${theme.sizes.large}px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .masthead {
      .black-overlay {
        padding-top: 120px;
        background-color: rgba(0, 0, 0, 0.4);
        h1 {
          font-size: ${theme.sizes.xxxlarge}px;
        }
        p {
          padding: 20px;
        }
      }
    }
  }
`
