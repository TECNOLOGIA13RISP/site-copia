import styled from 'styled-components'

export const Wrapper = styled.div`
  .hero-section {
    position: relative;
    min-height: 580px;
    display: flex;
    align-items: center;
    padding: 54px 0;
    background-image: linear-gradient(
        120deg,
        rgba(22, 52, 95, 0.96) 18%,
        rgba(26, 33, 65, 0.94) 64%,
        rgba(0, 99, 169, 0.88) 100%
      ),
      url('/images/banner_home.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .hero-copy {
    color: #fff;
    padding: 36px 22px 36px 0;
    max-width: 760px;
  }

  .hero-copy h1 {
    color: var(--rib-gold);
    font-size: clamp(40px, 4vw, 72px);
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .hero-copy .subtitle {
    font-size: clamp(20px, 1.8vw, 32px);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 24px;
    max-width: 880px;
  }

  .hero-copy h2 {
    font-size: clamp(20px, 1.5vw, 28px);
    font-weight: 600;
    margin-bottom: 14px;
    color: #f4f8ff;
  }

  .hero-copy ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: clamp(18px, 1.25vw, 24px);
    line-height: 1.35;
    font-weight: 400;
  }

  .hero-copy li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
  }

  .hero-copy li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 12px;
    height: 2px;
    border-radius: 2px;
    background: #f6f8fd;
  }

  .hero-media {
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
  }

  .hero-media img {
    width: 100% !important;
    height: auto !important;
    max-width: 760px;
    filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.3));
  }

  @media only screen and (max-width: 1199px) {
    .hero-section {
      min-height: 0;
      padding: 44px 0 54px;
    }

    .hero-copy {
      padding-right: 0;
      max-width: 100%;
    }

    .hero-media {
      justify-content: center;
      margin-top: 24px;
      padding-left: 0;
    }

    .hero-media img {
      max-width: 560px;
    }
  }

  @media only screen and (max-width: 767px) {
    .hero-section {
      min-height: 540px;
      padding: 36px 0 40px;
    }

    .hero-copy {
      text-align: left;
      padding: 8px 0;
    }

    .hero-copy .subtitle {
      margin-bottom: 20px;
    }

    .hero-copy li {
      padding-left: 34px;
    }

    .hero-media {
      margin-top: 18px;
    }
  }
`
