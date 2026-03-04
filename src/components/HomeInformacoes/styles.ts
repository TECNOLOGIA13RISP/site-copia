import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--rib-bg);
  padding: 72px 0 80px;

  .importance-copy {
    padding-right: 34px;
    margin-bottom: 26px;
  }

  .importance-copy h2 {
    color: var(--rib-blue-dark);
    font-size: clamp(30px, 2vw, 44px);
    font-weight: 500;
    margin-bottom: 12px;
  }

  .title-line {
    width: 360px;
    max-width: 100%;
    height: 3px;
    background: var(--rib-gold);
    margin-bottom: 20px;
  }

  .importance-copy p {
    color: #4a4f57;
    font-size: clamp(18px, 1.05vw, 22px);
    line-height: 1.4;
    margin: 0;
    max-width: 760px;
  }

  .bulletin-box {
    background: #e7ebf0;
    border-radius: 8px;
    border: 1px solid #d5dbe4;
    overflow: hidden;
  }

  .anchor-offset {
    display: block;
    position: relative;
    top: -110px;
    visibility: hidden;
  }

  .bulletin-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    background: var(--rib-bg);
    padding: 0 14px;
  }

  .bulletin-tabs button {
    border: 1px solid #d5dbe4;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    background: var(--rib-bg);
    color: #3f4857;
    font-size: clamp(17px, 1vw, 20px);
    font-weight: 500;
    padding: 14px 12px;
  }

  .bulletin-tabs button.is-active {
    border-top: 3px solid var(--rib-gold);
    background: #edf2f7;
  }

  .bulletin-list {
    height: 500px;
    overflow: auto;
    padding: 20px 24px;
    background: #e1e6ec;
  }

  .bulletin-item {
    padding: 8px 0 14px;
    border-bottom: 1px solid #c7ccd5;
  }

  .bulletin-item:last-child {
    border-bottom: none;
  }

  .bulletin-item h3 {
    color: var(--rib-blue-dark);
    font-size: clamp(22px, 1.2vw, 28px);
    font-weight: 500;
    margin: 0 0 4px;
  }

  .bulletin-item .date {
    color: #8a909a;
    font-size: clamp(16px, 1vw, 18px);
    margin: 0 0 8px;
  }

  .bulletin-item p {
    color: #2f3643;
    font-size: clamp(15px, 0.95vw, 17px);
    margin: 0;
  }

  @media only screen and (max-width: 1199px) {
    .bulletin-list {
      height: 420px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 44px 0 46px;

    .importance-copy {
      padding-right: 15px;
      margin-bottom: 18px;
    }

    .bulletin-tabs {
      grid-template-columns: 1fr;
      gap: 6px;
      padding-top: 8px;
    }

    .bulletin-tabs button {
      border-radius: 8px;
      border-bottom: 1px solid #d2d6de;
    }

    .bulletin-tabs button.is-active {
      border-top-width: 2px;
    }

    .bulletin-list {
      height: 310px;
      padding: 16px;
    }
  }
`
