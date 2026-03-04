import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--rib-bg);
  padding: 90px 0 72px;

  .services-highlight {
    padding-right: 24px;
    margin-bottom: 28px;
  }

  .services-highlight h2 {
    color: var(--rib-blue-dark);
    font-size: clamp(28px, 2vw, 42px);
    font-weight: 500;
    margin-bottom: 12px;
  }

  .services-highlight .title-line {
    width: 190px;
    height: 3px;
    background: var(--rib-gold);
    margin-bottom: 26px;
  }

  .services-highlight img {
    width: 100% !important;
    height: auto !important;
    max-width: 380px;
    border-radius: 8px;
  }

  .service-card {
    min-height: 182px;
    border: 1px solid #d4dae3;
    border-radius: 14px;
    background: #f8fafd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    padding: 26px 14px;
    color: var(--rib-blue);
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .service-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(15, 47, 90, 0.16);
    color: var(--rib-blue-dark);
  }

  .service-card svg {
    font-size: 44px;
    margin-bottom: 18px;
  }

  .service-card span {
    font-size: clamp(18px, 1.1vw, 24px);
    font-weight: 500;
    line-height: 1.2;
  }

  @media only screen and (max-width: 1199px) {
    .services-highlight {
      margin-bottom: 34px;
    }

    .services-highlight img {
      max-width: 300px;
    }

    .service-card {
      min-height: 182px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 52px 0 32px;

    .services-highlight {
      padding-right: 12px;
      margin-bottom: 22px;
    }

    .services-highlight img {
      max-width: 240px;
    }

    .service-card {
      min-height: 146px;
      margin-bottom: 14px;
    }

    .service-card svg {
      font-size: 40px;
      margin-bottom: 14px;
    }
  }
`
