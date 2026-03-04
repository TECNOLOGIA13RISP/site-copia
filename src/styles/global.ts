import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --rib-navy: #1a2141;
    --rib-blue-dark: #16345f;
    --rib-blue: #0063a9;
    --rib-cyan: #009fe3;
    --rib-gold: #d9ab2d;
    --rib-orange: #ec6608;
    --rib-gray: #dadada;
    --rib-bg: #eef1f5;
  }

  a {
    color: #04316a;
    &:hover {
      text-decoration: none;
      color: #04316a;
    }
  }

  body {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    background: var(--rib-bg);
    color: var(--rib-navy);
  }
  @media print {
    .no-print, .no-print * {
      display: none;
    }
  }
  input {
        resize: horizontal!important;
    }

  span.contenteditable[contenteditable] {
    display: inline-block;
    text-decoration: underline;
  }
  span.contenteditable[contenteditable]:empty::before {
      content: attr(data-placeholder);
      display: inline-block;
      color:red;
  }
  span.contenteditable[contenteditable]:empty:focus::before {
      content: attr(data-focused-advice);
      color:red;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .annotate {display:inline-block; vertical-align:top; height: 22px;}
  .annotate small {position: relative; display:block; font-style:italic; top: -14px;}
  .page-lgpd, .page-termos-de-uso, .page-politica-de-privacidade {
    text-align: justify;
  }
  .page-tabela-custas,
  .page-lgpd,
  .page-dados-bancarios,
  .page-termos-de-uso,
  .page-politica-de-privacidade,
  .page-login  {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    strong {
      font-weight: 500;
      font-size: 18px;
    }
    ul > li {
      margin-left: 30px;
      margin-bottom: 20px;
    }
    td:nth-child(1) {
      font-weight: 500;
    }
    a {
      color: #6B89BB;
      font-weight: 300;
      font-size: 16px;
    }
    h2 {
      color: #6B89BB;
      font-weight: 700;
    }
  }
  .page-modal {
    font-weight: 300;
    padding: 40px;
    font-size: 18px;
    h2 {
      color: #6B89BB;
      font-weight: 600;
      font-size: 28px;
    }
    svg {
      color: #6B89BB;
    }
  }
  .page-login {
    label {
      font-size: 16px;
    }
  }

  .dropdown-menu li:hover .sub-menu {
    visibility: visible;
  }
  input {
    border-radius: 10px !important;
    border: 1px solid #e6ebe7 !important;
    display: block;
    width: 100%;
    height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    resize: horizontal!important;
  }
  .content-footer-lgpd {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
`

export default GlobalStyles
