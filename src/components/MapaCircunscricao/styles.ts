import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--rib-bg);
  padding: 42px 0 74px;

  .maps-container {
    max-width: 1700px;
    padding-left: clamp(16px, 2vw, 46px);
    padding-right: clamp(16px, 2vw, 46px);
  }

  .maps-row {
    row-gap: 24px;
  }

  .map-column {
    display: flex;
    flex-direction: column;
  }

  .section-head {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin-bottom: 16px;
  }

  .section-head h2 {
    position: relative;
    color: var(--rib-blue-dark);
    font-size: clamp(30px, 2.15vw, 44px);
    font-weight: 500;
    margin: 0;
    padding-bottom: 9px;
    white-space: nowrap;
  }

  .section-head h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 78px;
    height: 3px;
    background: var(--rib-gold);
  }

  .head-rule {
    flex: 1;
    border-bottom: 1px solid #c8d0da;
    margin-bottom: 1px;
  }

  .section-head--action {
    gap: 10px;
  }

  .section-head--action .head-rule {
    max-width: 190px;
  }

  .map-action {
    border: 1px solid var(--rib-gold);
    color: #b88616;
    border-radius: 6px;
    padding: 8px 24px;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    line-height: 1;
    white-space: nowrap;
    margin: 0 10px 2px;
    background: transparent;
  }

  .map-action:hover {
    background: #fff9ea;
    color: #9f7418;
  }

  .frame {
    border: 14px solid #d6dce4;
    background: #d6dce4;
    border-radius: 2px;
  }

  .frame iframe {
    border: 0;
    width: 100%;
    height: clamp(320px, 25vw, 460px);
    display: block;
  }

  @media only screen and (max-width: 1199px) {
    .frame {
      border-width: 12px;
    }

    .frame iframe {
      height: clamp(300px, 30vw, 420px);
    }
  }

  @media only screen and (max-width: 991px) {
    .section-head h2 {
      font-size: clamp(20px, 2vw, 30px);
    }

    .section-head--action .head-rule {
      max-width: none;
    }

    .map-action {
      padding: 7px 16px;
      margin: 0 6px 2px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 28px 0 48px;

    .map-column {
      margin-bottom: 0;
    }

    .section-head {
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .head-rule {
      width: 100%;
      flex: 0 0 100%;
    }

    .map-action {
      padding: 6px 14px;
      font-size: 13px;
      margin: 0;
    }

    .frame {
      border-width: 10px;
    }

    .frame iframe {
      height: 300px;
    }
  }
`
