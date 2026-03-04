import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'

export default function MapaCircunscricao() {
  return (
    <S.Wrapper>
      <Container fluid className="maps-container">
        <Row className="maps-row">
          <Col xl={6} lg={6} md={6} sm={12} className="map-column">
            <div className="map-card">
              <div className="section-title">
                <h2>Localização</h2>
              </div>
              <div className="frame">
                <iframe
                  title="Mapa de localização"
                  src="https://www.google.com/maps?q=Av.%20Sao%20Gabriel,%20201%20-%20Itaim%20Bibi,%20Sao%20Paulo%20-%20SP,%2001435-001&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Col>

          <Col xl={6} lg={6} md={6} sm={12} className="map-column">
            <div className="map-card">
              <div className="section-title section-title--with-action">
                <h2>Área de Competência</h2>
                <a
                  className="map-action"
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1CUoaD35Gj_bMAJlGyQM7_j5apfIM0qg&ll=-23.56664501313741%2C-46.66889205112169&z=14"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba mais
                </a>
              </div>
              <div className="frame">
                <iframe
                  title="Mapa de área de competência"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1CUoaD35Gj_bMAJlGyQM7_j5apfIM0qg&ll=-23.598676516082897%2C-46.66848672448381&z=13"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}
