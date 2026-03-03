import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #eceff3;
  padding: 72px 0;

  .contact-box {
    max-width: 620px;
    margin-left: 0;
    margin-right: auto;
  }

  .contact-box h2 {
    color: #0d4f91;
    font-size: clamp(30px, 2vw, 44px);
    font-weight: 500;
    margin-bottom: 12px;
  }

  .title-line {
    width: 350px;
    max-width: 100%;
    height: 3px;
    background: #ddb13a;
    margin-bottom: 20px;
  }

  .contact-box > p {
    color: #4b4f59;
    font-size: clamp(18px, 1.05vw, 22px);
    line-height: 1.45;
    margin-bottom: 30px;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 26px;
    margin-bottom: 30px;
  }

  .contact-item > svg {
    color: #0d4f91;
    font-size: 42px;
    margin-top: 6px;
    width: 42px;
  }

  .contact-item h3 {
    color: #0d4f91;
    font-size: clamp(24px, 1.3vw, 30px);
    font-weight: 400;
    font-style: italic;
    margin: 0 0 8px;
  }

  .contact-item address,
  .contact-item a,
  .contact-item li {
    color: #303641;
    font-size: clamp(18px, 1.1vw, 22px);
    line-height: 1.35;
    margin: 0;
    font-style: normal;
  }

  .contact-item a {
    text-decoration: none;
    color: #0d4f91;
    font-weight: 500;
  }

  .contact-item ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;
  }

  .contact-item li a {
    color: #0d4f91;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .contact-item li a svg {
    font-size: 24px;
  }

  @media only screen and (max-width: 991px) {
    .contact-box {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 42px 0;

    .contact-item {
      gap: 16px;
      margin-bottom: 22px;
    }

    .contact-item > svg {
      font-size: 30px;
      width: 30px;
    }

    .contact-item li a svg {
      font-size: 19px;
    }
  }
`
