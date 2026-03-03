import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'
export default function MapaCircunscricao() {
  return (
    <S.Wrapper>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h2 className="page-title">Localização e Circunscrição</h2>
          </Col>
        </Row>
      </Container>
      <S.Map className="text-center">
        <iframe
          className="mapa"
          src="https://www.google.com/maps/d/u/0/embed?mid=1CUoaD35Gj_bMAJlGyQM7_j5apfIM0qg&ll=-23.598676516082897%2C-46.66848672448381&z=13"
          width="640"
          height="480"
          allowFullScreen
          loading="lazy"
        />
      </S.Map>
    </S.Wrapper>
  )
}
