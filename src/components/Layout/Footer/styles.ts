import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  .footer-title {
    color: ${theme.colors.theme.primary};
    font-weight: ${theme.weight.regular};
    font-size: ${theme.sizes.medium}px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 60px;
    margin-top: 60px;
  }
  .footer-address {
    color: #212529;
    font-weight: ${theme.weight.light};
    font-size: ${theme.sizes.small}px;
    label {
      color: ${theme.colors.theme.primary};
      font-size: ${theme.sizes.small}px;
      font-weight: ${theme.weight.regular};
    }
    h3 {
      color: ${theme.colors.theme.primary};
      font-size: ${theme.sizes.small}px;
      font-weight: ${theme.weight.regular};
    }
    a {
      font-weight: ${theme.weight.light};
      color: #212529;
      text-decoration: none;
      &:visited,
      &:hover,
      &:active {
        color: ${theme.colors.theme.secondary};
        text-decoration: underline;
      }
    }
  }
  .footer-contact {
    font-weight: ${theme.weight.light};
    font-size: ${theme.sizes.small}px;
    strong {
      font-weight: ${theme.weight.regular};
    }
    label {
      color: ${theme.colors.theme.primary};
      font-size: ${theme.sizes.small}px;
      font-weight: ${theme.weight.regular};
    }
    p {
      color: ${theme.colors.theme.primary};
      font-size: ${theme.sizes.small}px;
      font-weight: ${theme.weight.regular};
      span {
        color: #212529;
        font-weight: ${theme.weight.light};
      }
      a {
        font-weight: ${theme.weight.light};
        color: #212529;
        text-decoration: none;
        &:visited,
        &:hover,
        &:active {
          color: ${theme.colors.theme.secondary};
          text-decoration: none;
        }
      }
      a:first-child {
        font-weight: ${theme.weight.bold};
        text-decoration: none;
      }
    }
  }
  .footer-links {
    color: #212529;
    font-size: ${theme.sizes.small}px;
    p {
      color: ${theme.colors.theme.primary};
      font-weight: ${theme.weight.regular};
    }
    a {
      color: ${theme.colors.theme.primary};
      text-decoration: none;
      &:visited,
      &:hover,
      &:active {
        color: ${theme.colors.theme.primary};
        text-decoration: none;
        font-weight: ${theme.weight.regular};
      }
    }
  }
  .footer-copyright {
    background-color: ${theme.colors.theme.primary};
    color: #ffffff;
    margin: 0;
    margin-top: 30px;
    p {
      font-weight: ${theme.weight.light};
      margin: 0px;
      padding: 20px;
      text-align: center;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`
