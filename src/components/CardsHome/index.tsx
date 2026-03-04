import {
  faCalculator,
  faCertificate,
  faClock,
  faFileAlt,
  faIdCard,
  faListUl,
  faQuestionCircle,
  faScroll
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import servicesImagePic from '/public/images/card_esquerda.webp'
import * as S from './styles'

type ServiceCard = {
  icon: typeof faScroll
  title: string
  href: string
  external?: boolean
}

const serviceCards: ServiceCard[] = [
  {
    icon: faScroll,
    title: 'Solicitar certidão',
    href: 'https://registradores.onr.org.br/CertidaoDigital/frmPedidosCertidao.aspx?from=menu&digital=1',
    external: true
  },
  {
    icon: faClock,
    title: 'Tabela de Custas',
    href: '/tabela-de-custas'
  },
  {
    icon: faFileAlt,
    title: 'Requerimentos',
    href: '/requerimentos/registro'
  },
  {
    icon: faQuestionCircle,
    title: 'Dúvidas frequentes',
    href: '/lgpd-perguntas-frequentes'
  },
  {
    icon: faIdCard,
    title: 'Consultar prenotações',
    href: 'https://ridigital.org.br/servicos/actitulo/frmAcompanhamentoTitulo.aspx#Acompanhamento',
    external: true
  },
  {
    icon: faCertificate,
    title: 'Consultar certidões',
    href: 'https://registradores.onr.org.br/CertidaoDigital/frmAcompanhamentoPedido.aspx',
    external: true
  },
  {
    icon: faCalculator,
    title: 'Consultar exame e cálculo',
    href: '/requerimentos/exame-e-calculo'
  },
  {
    icon: faListUl,
    title: 'Consultar Meus Protocolos',
    href: 'https://ridigital.org.br/servicos/actitulo/frmAcompanhamentoTitulo.aspx#Acompanhamento',
    external: true
  }
]

export default function CardsHome() {
  return (
    <S.Wrapper id="servicos">
      <Container>
        <Row>
          <Col xl={3} lg={4} md={12} className="services-highlight">
            <h2>Serviços Online</h2>
            <div className="title-line" />
            <Image
              src={servicesImagePic}
              alt="Acesso aos serviços online do cartório"
            />
          </Col>
          <Col xl={9} lg={8} md={12}>
            <Row>
              {serviceCards.map((card) => (
                <Col xl={3} lg={6} md={6} sm={6} xs={12} key={card.title}>
                  {card.external ? (
                    <a
                      className="service-card"
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={card.icon} />
                      <span>{card.title}</span>
                    </a>
                  ) : (
                    <Link href={card.href}>
                      <a className="service-card">
                        <FontAwesomeIcon icon={card.icon} />
                        <span>{card.title}</span>
                      </a>
                    </Link>
                  )}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}
