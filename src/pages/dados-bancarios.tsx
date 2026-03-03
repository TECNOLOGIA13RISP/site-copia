import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logoPixPic from '/public/images/logo_pix.webp'
import qrCodePic from '/public/images/qrcode_pix.webp'

const Index = () => {
  return (
    <>
      <Head>
        <title>Dados Bancários</title>
        <meta
          name="description"
          content="Estes são os dados bancários do 13 Registro de Imóveis."
        />
        <meta property="og:title" content="Dados Bancários" />
        <meta
          property="og:description"
          content="Estes são os dados bancários do 13 Registro de Imóveis."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Dados Bancários">
        <div className="page-dados-bancarios">
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={8} sm={8} xs={12}>
              <p className="font-weight-bold">Pedidos de Certidão Online</p>
              <p>
                Os pedidos de certidão feitos pela internet deverão ser pagos
                através do boleto bancário gerado no ato do pedido.
              </p>
              <p className="font-weight-bold">Outros Pagamentos</p>
              <p>
                Após realizar o pagamento é necessário enviar cópia do
                comprovante com a indicação do protocolo para o e-mail{' '}
                <a href="mailto:depositos@13registro.com.br">
                  depositos@13registro.com.br
                </a>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={8} sm={8} xs={12}>
              <p className="font-weight-bold">Razão Social:</p>
              <p>13 OFICIAL DE REGISTRO DE IMOVEIS DA COMARCA DA CAPITAL</p>
              <p>
                <span className="font-weight-bold">CNPJ:</span>{' '}
                64.074.606/0001-54
              </p>
              <p>
                <span className="font-weight-bold">Banco:</span> BTG Pactual
                S.A. (208)
              </p>
              <p>
                <span className="font-weight-bold">Agência:</span> 0050
              </p>
              <p>
                <span className="font-weight-bold">Conta Corrente:</span>{' '}
                1954619-1
              </p>
              <p>
                <span className="font-weight-bold">Chave PIX:</span>{' '}
                64.074.606/0001-54
              </p>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={12} className="d-none "></Col>
            <Col
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={10}
              className=" align-items-center text-center d-none"
            >
              <Image src={qrCodePic} />
              <Image src={logoPixPic} width="118" height="42" />
            </Col>
          </Row>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default Index
