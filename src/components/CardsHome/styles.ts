import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.theme.light};
  .card-laterais {
    top: -60px;
    img {
      max-height: 230px;
    }
  }
  .card-central {
    top: -100px;
    img {
      max-height: 230px;
      margin-bottom: 36px;
    }
  }
  .card {
    border: none;
    border-radius: 1.5rem;

    img {
      position: relative;
      top: 30px;
      padding: 0 36px 0px 36px;
    }
    &:hover {
      box-shadow: 6px 5px 27px 5px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 6px 5px 27px 5px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 6px 5px 27px 5px rgba(0, 0, 0, 0.2);
    }
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
  .card-footer {
    color: ${theme.colors.theme.white};
    text-align: center;
    background-color: ${theme.colors.theme.primary};
    border-color: transparent;
    border-radius: 0 0 21px 21px !important;
    border-top: none;
    h2 {
      font-size: ${theme.sizes.xxlarge}px;
      text-align: center;
    }
    p {
      padding: 0 35px;
      font-weight: ${theme.weight.light};
      font-size: ${theme.sizes.medium}px;
      text-align: center;
    }
  }
  @media only screen and (max-device-width: 480px) {
    .card-laterais,
    .card-central {
      top: -20px;
      margin-bottom: 40px;
    }
  }
`
