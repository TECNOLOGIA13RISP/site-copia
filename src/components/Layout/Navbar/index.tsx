import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoticeModal from 'components/NoticeModal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import * as S from './styles'

const brandLogo = '/images/Logo Registro de imoveis.jpg'

export default function LayoutNavbar() {
  const router = useRouter()

  return (
    <S.Wrapper className="no-print">
      <NoticeModal />
      <div className="top-strip">
        <Container fluid className="top-strip__content">
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
              <FontAwesomeIcon icon={faPhoneAlt} /> (11) 5186-2800
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} /> Segunda a sexta, das 9 às 16
              horas
            </span>
          </div>
        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" className="main-navbar">
        <Container fluid className="main-navbar__content">
          <Navbar.Brand>
            <Link href="/">
              <a className="brand-link">
                <Image
                  className="brand-logo"
                  alt="Logotipo Registro de Imóveis do Brasil"
                  src={brandLogo}
                  width={387}
                  height={130}
                  quality={100}
                  priority
                />
                <span className="brand-text">
                  <strong>13º Registro de Imóveis</strong>
                  <small>de São Paulo - SP</small>
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
                <NavDropdown.Item href="/tabela-de-custas">
                  Tabela de Custas
                </NavDropdown.Item>
                <NavDropdown.Item href="/#servicos">
                  Consultar prenotações
                </NavDropdown.Item>
                <NavDropdown.Item href="/#servicos">
                  Consultar certidões
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="menu-requerimentos" title="Requerimentos">
                <NavDropdown.Item
                  href="https://www.ridigital.org.br/Servicos/frmRequerimentos.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  Averbação
                </NavDropdown.Item>
                <NavDropdown.Item href="/requerimentos/exame-e-calculo">
                  Exame e Cálculo
                </NavDropdown.Item>
                <NavDropdown.Item href="/requerimentos/registro">
                  Registro
                </NavDropdown.Item>
                <NavDropdown.Item href="/requerimentos/primeira-aquisicao-sfh">
                  Primeira Aquisição SFH
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
