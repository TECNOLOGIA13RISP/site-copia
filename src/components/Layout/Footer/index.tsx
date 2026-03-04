import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import CookieConsent from 'react-cookie-consent'
import * as S from './styles'
import logoONR from '/public/images/logo_onr.webp'

export default function LayoutFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper className="no-print" id="contato">
      <Container>
        <Row>
          <Col className="footer-title mb-4">
            <h3>13º Registro de Imóveis de São Paulo</h3>
            <CookieConsent
              location="bottom"
              buttonText="Entendi"
              cookieName="13risp"
              style={{
                background: '#6B89BB'
              }}
              buttonStyle={{
                background: '#04316a',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: 4,
                marginRight: 30,
                position: 'relative',
                top: 10
              }}
              expires={150}
              declineButtonText="Decline (optional)"
            >
              <div className="content-footer-lgpd">
                Nosso site utiliza <span className="font-italic">cookies</span>{' '}
                para otimizar sua experiência. Ao continuar navegando, você
                concorda com nossos{' '}
                <Link href="./termos-de-uso">
                  <a>Termos de Uso</a>
                </Link>{' '}
                e nossa{' '}
                <Link href="./politica-de-privacidade">
                  <a>Política de Privacidade</a>
                </Link>
                .
              </div>
            </CookieConsent>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={11}
            className="footer-address mb-4"
          >
            <label>
              <strong>Onde Estamos</strong>
            </label>
            <p>Avenida São Gabriel, nº 201</p>
            <p>1º andar - Jardim Paulista</p>
            <p>CEP 01435-001 - São Paulo - SP</p>
            <h3>Dr. Carlos Eduardo de Almeida Martins de Andrade</h3>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={11}
            className="footer-contact mb-4"
          >
            <label>
              <strong>Atendimento</strong>
            </label>
            <p>
              <span>segunda a sexta-feira</span>
            </p>
            <p>
              <span>09:00 às 16:00 (exceto feriados)</span>
            </p>
            <p>
              <strong>WhatsApp</strong>{' '}
              <a
                href="https://wa.me/5511944611407"
                target="_blank"
                rel="noreferrer"
              >
                (11) 94461-1407
              </a>
            </p>
            <p>
              <strong>Fone</strong>{' '}
              <a href="tel:(11) 3218-0090" target="_blank" rel="noreferrer">
                (11) 3218-0090
              </a>
            </p>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={11}
            className="footer-links mb-4"
          >
            <p>Links Úteis</p>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a
                  href="http://www.arisp.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ARISP
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1CUoaD35Gj_bMAJlGyQM7_j5apfIM0qg&ll=-23.56664501313741%2C-46.66889205112169&z=14"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mapa
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.registrodeimoveis.org.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Registradores
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://mapa.onr.org.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cartórios do Brasil
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.tjsp.jus.br/Corregedoria/Comunicados/NormasExtrajudiciais"
                  target="_blank"
                  rel="noreferrer"
                >
                  Normas de Serviço
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://extrajudicial.tjsp.jus.br/abrirConsultaIndiceComunicados.do?"
                  target="_blank"
                  rel="noreferrer"
                >
                  Comunicados da Corregedoria
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/lgpd-noticias">
                  <a>Notícias</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/L6015compilada.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lei dos Registros Públicos
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={11} className="footer-links">
            <p>
              <strong>LGPD</strong> - Lei Geral de Proteção de Dados
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link href="/politica-de-privacidade">
                  <a>Política de Privacidade</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/termos-de-uso">
                  <a>Termos de Uso</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/lgpd-perguntas-frequentes">
                  <a>Perguntas Frequentes</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.registrodeimoveis.org.br/lgpd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Canal de Atendimento - LGPD
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.gov.br/anpd/pt-br"
                  target="_blank"
                  rel="noreferrer"
                >
                  ANPD
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-copyright">
        <Row>
          <Col>
            <p className="text-center">
              © {currentYear} - 13º Registro de Imóveis de São Paulo - Todos os
              direitos reservados
            </p>
            <Link href="https://registradores.onr.org.br">
              <a>
                <Image
                  alt="Logotipo"
                  src={logoONR}
                  className="footer-logo-ONR"
                />
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}
