import styled from 'styled-components'

export const Wrapper = styled.div`
  .navbar {
    background-color: #ffffff;
    border-bottom: 8px solid #6b89b5;
  }
  .nav-link {
    padding-left: 20px;
    padding-right: 20px;
  }
  a {
    &:visited,
    &:hover,
    &:active {
      font-weight: 500;
    }
  }

  @media only screen and (max-device-width: 480px) {
    img {
      height: 60px;
    }
    .navbar-nav {
      text-align: center !important;
      .btn-primary {
        width: 100px;
      }
    }
  }
`
