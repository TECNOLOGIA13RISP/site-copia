import styled from 'styled-components'

export const Wrapper = styled.div`
  .top-strip {
    background: #0f4f94;
    color: #fff;
    font-size: 12px;
    line-height: 1;
    padding: 0;
  }

  .top-strip__content {
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding-left: clamp(14px, 1.8vw, 34px);
    padding-right: clamp(14px, 1.8vw, 34px);
    flex-wrap: nowrap;
  }

  .top-strip__social,
  .top-strip__contact {
    display: flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
  }

  .top-strip__contact {
    margin-left: auto;
    gap: 18px;
  }

  .top-strip a,
  .top-strip span {
    color: #fff;
    text-decoration: none;
  }

  .top-strip a:hover {
    color: #e8f1ff;
  }

  .top-strip svg {
    margin-right: 5px;
  }

  .main-navbar {
    background-color: #fff;
    border-bottom: 1px solid #d7dce4;
    min-height: 94px;
    padding: 0;
  }

  .main-navbar__content {
    padding-left: clamp(16px, 1.8vw, 34px);
    padding-right: clamp(16px, 1.8vw, 34px);
    align-items: center;
  }

  .navbar-brand {
    margin-right: clamp(20px, 2.4vw, 58px);
    padding-top: 0;
    padding-bottom: 0;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
  }

  .brand-logo {
    width: 168px !important;
    height: auto !important;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    color: #1c2d52;
    line-height: 1.08;
    white-space: nowrap;
  }

  .brand-text strong {
    font-size: 19px;
    font-weight: 800;
  }

  .brand-text small {
    font-size: 14px;
    font-weight: 700;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  .navbar-nav {
    align-items: center;
    gap: 8px;
  }

  .nav-link,
  .dropdown-toggle {
    color: #2f3a4f !important;
    font-size: 17px;
    font-weight: 500;
    padding: 34px 10px !important;
    white-space: nowrap;
  }

  .dropdown-toggle::after {
    margin-left: 6px;
    vertical-align: middle;
  }

  .nav-link:hover,
  .dropdown-toggle:hover {
    color: #18528f !important;
  }

  .active-link {
    color: #d9ab2d !important;
    border-bottom: 2px solid #d9ab2d;
  }

  .dropdown-menu {
    border-radius: 6px;
    border: 1px solid #d7dce4;
    padding: 6px;
    margin-top: -4px;
  }

  .dropdown-item {
    color: #24355f;
    border-radius: 4px;
    padding: 8px 10px;
  }

  .dropdown-item:hover {
    background: #edf2f8;
  }

  @media only screen and (max-width: 1199px) {
    .brand-logo {
      width: 150px !important;
    }

    .brand-text strong {
      font-size: 17px;
    }

    .brand-text small {
      font-size: 13px;
    }

    .nav-link,
    .dropdown-toggle {
      font-size: 16px;
      padding: 24px 8px !important;
    }
  }

  @media only screen and (max-width: 991px) {
    .top-strip {
      display: none;
    }

    .main-navbar {
      min-height: 74px;
      padding: 6px 0;
    }

    .brand-logo {
      width: 136px !important;
    }

    .brand-text strong {
      font-size: 16px;
    }

    .brand-text small {
      font-size: 12px;
    }

    .navbar-collapse {
      padding-top: 8px;
    }

    .navbar-nav {
      align-items: flex-start;
      gap: 0;
    }

    .nav-link,
    .dropdown-toggle {
      padding: 12px 0 !important;
      border-bottom: 1px solid #edf2f8;
    }

    .active-link {
      border-bottom: 1px solid #d9ab2d;
    }
  }
`
