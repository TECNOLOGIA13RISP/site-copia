import styled from 'styled-components'

export const Wrapper = styled.div`
  .top-strip {
    background: var(--rib-blue);
    color: #fff;
    font-size: 13px;
    line-height: 1;
    padding: 0;
  }

  .top-strip__content {
    min-height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding-left: clamp(18px, 2vw, 42px);
    padding-right: clamp(18px, 2vw, 42px);
    flex-wrap: nowrap;
  }

  .top-strip__social,
  .top-strip__contact {
    display: flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .top-strip__contact {
    margin-left: auto;
    gap: 22px;
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
    border-bottom: 1px solid #d4dae3;
    min-height: 116px;
    padding: 0;
  }

  .main-navbar__content {
    padding-left: clamp(18px, 2.2vw, 46px);
    padding-right: clamp(18px, 2.2vw, 46px);
    align-items: center;
  }

  .navbar-brand {
    margin-right: clamp(26px, 2.6vw, 70px);
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
  }

  .brand-logo {
    width: clamp(200px, 12.8vw, 252px) !important;
    height: auto !important;
    object-fit: contain;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    color: var(--rib-navy);
    line-height: 1.08;
    white-space: nowrap;
  }

  .brand-text strong {
    font-size: clamp(21px, 1.35vw, 28px);
    font-weight: 600;
  }

  .brand-text small {
    font-size: clamp(16px, 1.05vw, 21px);
    font-weight: 500;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  .navbar-nav {
    align-items: center;
    gap: 12px;
  }

  .nav-link,
  .dropdown-toggle {
    color: #2e3a4c !important;
    font-size: clamp(17px, 0.95vw, 22px);
    font-weight: 500;
    padding: 44px 10px !important;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
  }

  .dropdown-toggle::after {
    margin-left: 6px;
    vertical-align: middle;
  }

  .nav-link:hover,
  .dropdown-toggle:hover {
    color: var(--rib-blue) !important;
  }

  .active-link {
    color: var(--rib-gold) !important;
    border-bottom-color: var(--rib-gold);
  }

  .dropdown-menu {
    border-radius: 6px;
    border: 1px solid #d4dae3;
    padding: 6px;
    margin-top: -6px;
  }

  .dropdown-item {
    color: var(--rib-blue-dark);
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 15px;
  }

  .dropdown-item:hover {
    background: #edf3f9;
  }

  @media only screen and (max-width: 1199px) {
    .brand-logo {
      width: 178px !important;
    }

    .brand-text strong {
      font-size: 20px;
    }

    .brand-text small {
      font-size: 15px;
    }

    .nav-link,
    .dropdown-toggle {
      font-size: 16px;
      padding: 34px 8px !important;
    }
  }

  @media only screen and (max-width: 991px) {
    .top-strip {
      display: none;
    }

    .main-navbar {
      min-height: 84px;
      padding: 6px 0;
    }

    .navbar-brand {
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .brand-logo {
      width: 152px !important;
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
