import styled, { createGlobalStyle } from 'styled-components'
import theme from 'styles/theme'

export const GlobalStyles = createGlobalStyle`
  .notice-modal__dialog {
    width: calc(100% - 32px);
    max-width: 1000px;
    margin: 0 auto;
  }

  .notice-modal__body {
    padding: 12px;
  }

  .notice-modal__image {
    display: block;
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
  }

  .notice-modal__content {
    margin-top: 12px;
    text-align: center;
  }

  .notice-modal__text {
    margin-bottom: 6px;
    font-weight: ${theme.weight.bold};
  }

  .notice-modal__message {
    margin: 0 0 12px;
    line-height: 1.6;
  }

  .notice-modal__message:last-child {
    margin-bottom: 0;
  }

  .notice-modal__title {
    margin: 0 0 16px;
    font-size: 1.35rem;
    font-weight: ${theme.weight.bold};
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .notice-modal__underline {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .notice-modal__link {
    color: ${theme.colors.theme.primaryDark};
    font-weight: ${theme.weight.bold};
    text-decoration: underline;
  }
`

export const Wrapper = styled.div`
  background-color: ${theme.colors.theme.light};
`
