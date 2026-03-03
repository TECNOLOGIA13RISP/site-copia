import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroDevicesPic from '/public/images/card_esquerda.webp'
import * as S from './styles'

interface Props {
  title: string
  subtitle: string
}

const BannerHome: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <S.Wrapper>
      <header className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={12} className="hero-copy">
              <h1>{title}</h1>
              <p className="subtitle">{subtitle}</p>
              <h2>Utilize nossos serviços on-line:</h2>
              <ul>
                <li>
                  Consultas sobre prenotações, certidões e exame e cálculo
                </li>
                <li>Agendamentos e requerimentos</li>
                <li>Outros serviços</li>
              </ul>
            </Col>
            <Col xl={5} lg={5} md={12} className="hero-media">
              <Image
                src={heroDevicesPic}
                alt="Acesso aos serviços digitais do cartório"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </S.Wrapper>
  )
}

export default BannerHome
