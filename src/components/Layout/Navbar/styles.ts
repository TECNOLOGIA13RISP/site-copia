import styled from 'styled-components'

export const Wrapper = styled.div`
  .top-strip {
    background: #0d4f91;
    color: #fff;
    font-size: 13px;
    line-height: 1.3;
    padding: 6px 0;
  }

  .top-strip__content {
    min-height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }

  .top-strip__social,
  .top-strip__contact {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .top-strip a,
  .top-strip span {
    color: #fff;
    text-decoration: none;
  }

  .top-strip svg {
    margin-right: 6px;
  }

  .main-navbar {
    background-color: #fff;
    border-bottom: 2px solid #d6dce4;
    min-height: 90px;
    padding: 10px 0;
  }

  .main-navbar .container {
    align-items: center;
  }

  .navbar-brand {
    margin-right: 22px;
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
    width: 218px !important;
    height: auto !important;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    color: #1f2d52;
    line-height: 1.15;
    white-space: nowrap;
  }

  .brand-text strong {
    font-size: 28px;
    font-weight: 800;
  }

  .brand-text small {
    font-size: 19px;
    font-weight: 700;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  .navbar-nav {
    align-items: center;
  }

  .nav-link,
  .dropdown-toggle {
    color: #2c3553 !important;
    font-size: 17px;
    font-weight: 500;
    padding: 22px 12px !important;
    white-space: nowrap;
  }

  .nav-link:hover,
  .dropdown-toggle:hover {
    color: #0d4f91 !important;
  }

  .active-link {
    color: #e6b327 !important;
    border-bottom: 3px solid #e6b327;
  }

  .dropdown-menu {
    border-radius: 8px;
    border: 1px solid #d6dce4;
    padding: 8px;
  }

  .dropdown-item {
    color: #24355f;
    border-radius: 6px;
    padding: 8px 12px;
  }

  .dropdown-item:hover {
    background: #edf2f8;
  }

  @media only screen and (max-width: 1199px) {
    .brand-logo {
      width: 184px !important;
    }

    .brand-text strong {
      font-size: 22px;
    }

    .brand-text small {
      font-size: 16px;
    }

    .nav-link,
    .dropdown-toggle {
      font-size: 16px;
      padding: 14px 10px !important;
      border-bottom: 1px solid #eef2f6;
    }

    .active-link {
      border-bottom: 1px solid #e6b327;
    }
  }

  @media only screen and (max-width: 991px) {
    .top-strip {
      display: none;
    }

    .main-navbar {
      min-height: 72px;
      padding: 8px 0;
    }

    .brand-logo {
      width: 130px !important;
      height: auto !important;
    }

    .brand-text strong {
      font-size: 18px;
    }

    .brand-text small {
      font-size: 14px;
    }

    .navbar-collapse {
      padding-top: 8px;
    }

    .navbar-nav {
      align-items: flex-start;
    }
  }
`
