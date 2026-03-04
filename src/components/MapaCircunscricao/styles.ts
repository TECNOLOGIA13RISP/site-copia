import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #eceff3;
  padding: 40px 0 72px;

  .maps-row {
    row-gap: 22px;
  }

  .map-column {
    display: flex;
  }

  .map-card {
    width: 100%;
    background: #e4e8ee;
    border: 1px solid #d4dae2;
    border-radius: 8px;
    padding: 14px;
    display: flex;
    flex-direction: column;
  }

  .section-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 12px;
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
    max-width: 28%;
    height: 3px;
    background: #ddb13a;
  }

  .section-title--with-action {
    gap: 10px;
  }

  .section-title--with-action::after {
    flex: 1;
    margin-left: 12px;
    max-width: 140px;
  }

  .map-action {
    border: 1px solid #9fb0c8;
    color: #1f4776;
    border-radius: 4px;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    line-height: 1.2;
    white-space: nowrap;
    background: transparent;
  }

  .map-action:hover {
    background: #f2f5fa;
    color: #173c66;
  }

  .frame {
    border: 1px solid #cbd2dc;
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
    flex: 1;
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

  @media only screen and (max-width: 991px) {
    .section-title h2 {
      font-size: clamp(24px, 1.8vw, 32px);
    }

    .frame iframe {
      height: 340px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 20px 0 44px;

    .map-column {
      margin-bottom: 0;
    }

    .map-card {
      padding: 10px;
    }

    .section-title {
      gap: 8px;
      flex-wrap: wrap;
    }

    .section-title::after,
    .section-title--with-action::after {
      width: 80px;
      max-width: none;
      margin-left: 0;
    }

    .map-action {
      font-size: 13px;
      padding: 4px 10px;
    }

    .frame iframe {
      height: 300px;
    }
  }
`
