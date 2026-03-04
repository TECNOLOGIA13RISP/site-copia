import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoticeModal from 'components/NoticeModal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import * as S from './styles'

const brandLogo = '/images/logo_registro_brasil.svg'

export default function LayoutNavbar() {
  const router = useRouter()

  return (
    <S.Wrapper className="no-print">
      <NoticeModal />
      <div className="top-strip">
        <Container className="top-strip__content">
          <div className="top-strip__social">
            <span>Acesse nossas mídias sociais:</span>
            <a
              href="https://www.instagram.com/13registrosp/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/13registro"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/13registro/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
          </div>
          <div className="top-strip__contact">
            <span>
              <FontAwesomeIcon icon={faClock} /> Segunda a sexta, das 9 às 16
              horas
            </span>
          </div>
        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a className="brand-link">
                <Image
                  className="brand-logo"
                  alt="Logotipo Registro de Imóveis do Brasil"
                  src={brandLogo}
                  width={218}
                  height={87}
                  priority
                />
                <span className="brand-text">
                  <strong>13º Registro de Imóveis</strong>
                  <small>de São Paulo/SP</small>
                </span>
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-right">
              <Nav.Link
                href="/"
                className={router.pathname === '/' ? 'active-link' : ''}
              >
                Home
              </Nav.Link>
              <NavDropdown id="menu-informacoes" title="Informações">
                <NavDropdown.Item href="/#importancia">
                  A importância do Registro
                </NavDropdown.Item>
                <NavDropdown.Item href="/#noticias">
                  Últimas notícias
                </NavDropdown.Item>
                <NavDropdown.Item href="/#editais">Editais</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="menu-servicos" title="Serviços online">
                <NavDropdown.Item href="/#servicos">
                  Solicitar certidão
                </NavDropdown.Item>
                <NavDropdown.Item href="/#servicos">
                  Agendamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="/#servicos">
                  Consultar prenotações
                </NavDropdown.Item>
                <NavDropdown.Item href="/#servicos">
                  Consultar certidões
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#contato">Contatos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Wrapper>
  )
}
