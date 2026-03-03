import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #eceff3;
  padding: 40px 0 72px;

  .map-column {
    margin-bottom: 24px;
  }

  .section-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 16px;
  }

  .section-title h2 {
    color: #0d4f91;
    font-size: clamp(28px, 1.7vw, 40px);
    font-weight: 500;
    margin: 0;
  }

  .section-title::after {
    content: '';
    width: 140px;
    max-width: 30%;
    height: 3px;
    background: #ddb13a;
    transform: translateY(3px);
  }

  .section-title--with-action {
    justify-content: space-between;
  }

  .section-title--with-action::after {
    margin-right: auto;
    margin-left: 10px;
  }

  .section-title a {
    border: 1px solid #7aa5cf;
    color: #7aa5cf;
    border-radius: 6px;
    padding: 9px 18px;
    font-size: clamp(16px, 0.9vw, 20px);
    font-weight: 500;
    text-decoration: none;
  }

  .frame {
    border: 16px solid #d8dde4;
    background: #d8dde4;
  }

  .frame iframe {
    border: 0;
    width: 100%;
    height: 430px;
  }

  @media only screen and (max-width: 1199px) {
    .frame iframe {
      height: 380px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 18px 0 42px;

    .frame {
      border-width: 10px;
    }

    .frame iframe {
      height: 300px;
    }

    .section-title {
      gap: 8px;
      align-items: flex-end;
      flex-wrap: wrap;
    }

    .section-title::after,
    .section-title--with-action::after {
      width: 84px;
      margin: 0;
    }

    .section-title a {
      padding: 7px 12px;
    }
  }
`
