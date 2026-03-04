import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #e5e7eb;
  padding: 34px 0 66px;

  .maps-container {
    max-width: 1680px;
    padding-left: clamp(14px, 2vw, 44px);
    padding-right: clamp(14px, 2vw, 44px);
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
    margin-bottom: 14px;
  }

  .section-head h2 {
    position: relative;
    color: #1f4f83;
    font-size: clamp(24px, 1.9vw, 38px);
    font-weight: 500;
    margin: 0;
    padding-bottom: 10px;
    white-space: nowrap;
  }

  .section-head h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 74px;
    height: 3px;
    background: #d9ab2d;
  }

  .head-rule {
    flex: 1;
    border-bottom: 1px solid #c7cdd6;
    margin-bottom: 1px;
  }

  .section-head--action {
    gap: 10px;
  }

  .section-head--action .head-rule {
    max-width: 190px;
  }

  .map-action {
    border: 1px solid #deb455;
    color: #b8881d;
    border-radius: 6px;
    padding: 8px 26px;
    font-size: 14px;
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
    border: 16px solid #d4d9e0;
    background: #d4d9e0;
  }

  .frame iframe {
    border: 0;
    width: 100%;
    height: clamp(300px, 23vw, 430px);
    display: block;
  }

  @media only screen and (max-width: 1199px) {
    .frame {
      border-width: 12px;
    }

    .frame iframe {
      height: clamp(280px, 28vw, 380px);
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
    padding: 24px 0 42px;

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
      height: 290px;
    }
  }
`
