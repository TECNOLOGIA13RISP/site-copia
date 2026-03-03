import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'

interface Props {
  title: string
  subtitle: string
}

const BannerHome: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <S.Wrapper>
      <header className="masthead">
        <div className="black-overlay">
          <Container className="h-100">
            <Row className="h-100 align-items-center">
              <Col className="text-center">
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </S.Wrapper>
  )
}

export default BannerHome
