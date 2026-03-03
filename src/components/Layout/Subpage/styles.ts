import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.theme.light};
  padding-bottom: 40px;
  @media print {
    margin-top: 40px;
    background-color: ${theme.colors.theme.white}!important;
    .subpage {
      border: none !important;
    }
  }
  .masthead-subpage {
    height: 140px;
    max-height: 140px;
    background-image: url('/images/background_subpage.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .black-overlay {
      background-color: rgba(0, 0, 0, 0.2);
      min-height: 140px;
      padding-top: 35px;
      h1 {
        color: ${theme.colors.theme.white};
        font-weight: ${theme.weight.bold};
        text-shadow: ${theme.colors.theme.dark} 1px 1px 3px;
      }
    }
  }
  .subpage {
    position: relative;
    top: -25px;
    border-radius: 15px;
    background-color: ${theme.colors.theme.white};
    border: 1px solid ${theme.colors.theme.light};
    padding: 20px 40px;
  }
  @media only screen and (max-device-width: 480px) {
    .subpage {
      padding: 20px;
    }
    .masthead-subpage {
      .black-overlay {
        padding-top: 10px;
      }
    }
  }
`
