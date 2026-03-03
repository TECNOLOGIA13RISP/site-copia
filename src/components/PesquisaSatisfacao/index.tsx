import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'
import bannerPesquisaPic from '/public/images/banner_pesquisa.webp'

export default function PesquisaSatisfacao() {
  return (
    <S.Wrapper>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6} xs={10} className="d-block d-sm-none">
            <Image src={bannerPesquisaPic} className="img-fluid" />
          </Col>
          <Col className="pesquisa-satisfacao" sm={6} xs={10}>
            <h2>Como foi sua experiência conosco?</h2>
            <p>
              Contribua para a melhoria dos nossos serviços, clique no botão
              abaixo e participe da nossa pesquisa de satisfação!
            </p>
            <Link href="/pesquisa-de-satisfacao">
              <Button variant="primary">Pesquisa de Satisfação</Button>
            </Link>
          </Col>
          <Col sm={6} xs={10} className="d-none d-sm-block">
            <Image src={bannerPesquisaPic} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}
