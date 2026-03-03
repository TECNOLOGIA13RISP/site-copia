import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/AuthContext'
import NoticeModal from 'components/NoticeModal'
import * as S from './styles'
import logoPic from '/public/images/logo_oficial.webp'

export default function LayoutNavbar() {
  const { logout } = useContext(AuthContext)
  const { ['13risp.user.Nome']: Nome } = parseCookies()

  const [isActive] = React.useState<boolean>(!!Nome)
  const [name] = React.useState<string>(Nome)

  const firstName = (text: string) => {
    const item = text.split(' ')
    return item[0].charAt(0).toUpperCase() + item[0].slice(1).toLowerCase()
  }

  return (
    <S.Wrapper className="no-print">
      <NoticeModal />
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Image
                  alt="Logotipo"
                  src={logoPic}
                  className="d-inline-block"
                />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-right">
              <Nav.Link href="/dados-bancarios">Dados Bancários</Nav.Link>
              <Nav.Link
                href="https://registradores.onr.org.br/CertidaoDigital/frmPedidosCertidao.aspx?from=menu&digital=1"
                target="_blank"
              >
                Certidão Online
              </Nav.Link>
              <Nav.Link
                href="https://forms.gle/gbRMU4xPz5v3xABx9"
                target="_blank"
              >
                Trabalhe Conosco
              </Nav.Link>
              <NavDropdown id="nav-dropdown-dark-example" title="Requerimentos">
                <NavDropdown.Item href={`/requerimentos/averbacao`}>
                  Averbação
                </NavDropdown.Item>
                <NavDropdown.Item href={`/requerimentos/exame-e-calculo`}>
                  Exame e Cálculo
                </NavDropdown.Item>
                <NavDropdown.Item href={`/requerimentos/registro`}>
                  Registro
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`/requerimentos/primeira-aquisicao-sfh`}
                >
                  Primeira Aquisição SFH
                </NavDropdown.Item>
              </NavDropdown>
              {isActive && (
                <Navbar.Text style={{ position: 'relative', top: -6 }}>
                  Olá {name ? firstName(name) : ''}
                  <a href="#" onClick={() => logout()}>
                    <Button variant="outline-primary" className="ml-3">
                      Sair
                    </Button>
                  </a>
                </Navbar.Text>
              )}
              {!isActive && (
                <Navbar.Text style={{ position: 'relative', top: -6 }}>
                  <Link href="/cadastre-se">
                    <a>
                      <Button variant="outline-primary" className="ml-3">
                        Cadastre-se
                      </Button>
                    </a>
                  </Link>{' '}
                  <Link href="/login">
                    <a>
                      <Button variant="primary" className="ml-3">
                        Entrar
                      </Button>
                    </a>
                  </Link>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Wrapper>
  )
}
