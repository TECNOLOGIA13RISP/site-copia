/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { faArrowLeft, faPrint, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form as Unform } from '@unform/web'
import Input from 'components/Form/Input'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import Head from 'next/head'
import PrintAquisicaoSfh from 'print/PrintAquisicaoSfh'
import React, { useRef, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Switch from 'react-switch'
import getValidationErrors from 'utils/getValidationErros'
import * as Yup from 'yup'

interface PropsAddress {
  logradouro: string
  bairro: string
  cidade: string
  uf: string
}

interface PropsFormError {
  path: string
  message: string
}
const PrimeiraAquisicaoSfh = () => {
  const formRef = useRef<FormHandles>(null)
  const [person, setPerson] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState()
  const [printView, setPrintView] = useState(false)

  const [section1, setSection1] = useState(false)

  const [section1A, setSection1A] = useState(false)
  const [section1B, setSection1B] = useState(false)

  const handleSubmit: SubmitHandler = async (
    data
    /**
    {
     reset
    }*/
  ) => {
    try {
      setLoading(true)
      const schema1 = Yup.object().shape({
        dia: Yup.string().required('Campo obrigatório'),
        mes: Yup.string().required('Campo obrigatório'),
        ano: Yup.string().required('Campo obrigatório'),

        nome: Yup.string().required('Campo obrigatório'),
        nacionalidade: Yup.string().required('Campo obrigatório'),
        profissao: Yup.string().required('Campo obrigatório'),
        estadoCivil: Yup.string().required('Campo obrigatório'),
        cpf: Yup.string().required('Campo obrigatório'),
        rg: Yup.string().required('Campo obrigatório'),
        orgaoEmissor: Yup.string().required('Campo obrigatório')
      })

      const schema2 = Yup.object().shape({
        dia: Yup.string().required('Campo obrigatório'),
        mes: Yup.string().required('Campo obrigatório'),
        ano: Yup.string().required('Campo obrigatório'),

        nome: Yup.string().required('Campo obrigatório'),
        nacionalidade: Yup.string().required('Campo obrigatório'),
        profissao: Yup.string().required('Campo obrigatório'),
        estadoCivil: Yup.string().required('Campo obrigatório'),
        cpf: Yup.string().required('Campo obrigatório'),
        rg: Yup.string().required('Campo obrigatório'),
        orgaoEmissor: Yup.string().required('Campo obrigatório'),

        nome2: Yup.string().required('Campo obrigatório'),
        nacionalidade2: Yup.string().required('Campo obrigatório'),
        profissao2: Yup.string().required('Campo obrigatório'),
        estadoCivil2: Yup.string().required('Campo obrigatório'),
        cpf2: Yup.string().required('Campo obrigatório'),
        rg2: Yup.string().required('Campo obrigatório'),
        orgaoEmissor2: Yup.string().required('Campo obrigatório')
      })

      if (person === 1) {
        await schema1.validate(data, { abortEarly: false })
      }
      if (person === 2) {
        await schema2.validate(data, { abortEarly: false })
      }

      const schemaSection1 = Yup.object().shape({
        section1A: Yup.string().required('Campo obrigatório'),
        section1B: Yup.string().required('Campo obrigatório')
      })

      if (section1) await schemaSection1.validate(data, { abortEarly: false })

      const otherFields = {
        section1,
        personType: person
      }
      const allData = { otherFields, ...data }
      setFormData(allData)
      setPrintView(true)
      // reset()
      setLoading(false)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Requerimentos - Primeira Aquisição SFH</title>
        <meta
          name="description"
          content="Utilize nosso modelo de requerimento para primeira aquisição SFH e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta
          property="og:title"
          content="Requerimentos - Primeira Aquisição SFH"
        />
        <meta
          property="og:description"
          content="Utilize nosso modelo de requerimento para primeira aquisição SFH e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Requerimentos - Primeira Aquisição SFH">
        {printView && (
          <>
            <Row className="justify-content-center no-print mb-3">
              <Col xl={3} lg={3} md={4} sm={4} xs={6}>
                <Button
                  variant={'outline-info'}
                  className="mr-2"
                  block
                  onClick={() => setPrintView(false)}
                >
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Voltar
                </Button>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xs={6}>
                <Button
                  variant={'info'}
                  className="ml-2"
                  block
                  onClick={() => window.print()}
                >
                  <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> Imprimir
                </Button>
              </Col>
            </Row>
            <hr />
          </>
        )}
        {printView && <PrintAquisicaoSfh data={formData} />}
        <Unform
          ref={formRef}
          onSubmit={handleSubmit}
          className={printView ? 'd-none' : 'd-block'}
        >
          <Row className="justify-content-center mb-3">
            <Col xl={3} lg={3} md={4} sm={4} xs={6}>
              <Button
                variant={person === 1 ? 'info' : 'outline-info'}
                className="mr-2"
                block
                onClick={() => setPerson(1)}
              >
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 1 Comprador
              </Button>
            </Col>
            <Col xl={3} lg={3} md={4} sm={4} xs={6}>
              <Button
                variant={person === 2 ? 'info' : 'outline-info'}
                className="ml-2"
                block
                onClick={() => setPerson(2)}
              >
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{' '}
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 2 Compradores
              </Button>
            </Col>
          </Row>
          <Card className={`pb-4 mb-4 mt-4`}>
            <Card.Header>Dados pessoais - Comprador 1</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Input
                    label="Nome Completo"
                    name="nome"
                    type="text"
                    placeholder="Nome Completo"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="Nacionalidade"
                    name="nacionalidade"
                    type="text"
                    placeholder="Nacionalidade"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="Estado Civil"
                    name="estadoCivil"
                    type="text"
                    placeholder="Estado Civil"
                    sizeInput="sm"
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Input
                    label="Profissão"
                    name="profissao"
                    type="text"
                    placeholder="Profissão"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="RG"
                    name="rg"
                    type="text"
                    placeholder="RG"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={12}>
                  <Input
                    label="Orgão Emissor"
                    name="orgaoEmissor"
                    type="text"
                    placeholder="Orgão Emissor"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="CPF"
                    name="cpf"
                    type="text"
                    placeholder="CPF"
                    sizeInput="sm"
                    mask="maskCPF"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card
            className={`pb-4 mb-4 mt-4 ${person === 2 ? 'd-block' : 'd-none'}`}
          >
            <Card.Header>Dados pessoais - Comprador 2</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Input
                    label="Nome Completo"
                    name="nome2"
                    type="text"
                    placeholder="Nome Completo"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="Nacionalidade"
                    name="nacionalidade2"
                    type="text"
                    placeholder="Nacionalidade"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="Estado Civil"
                    name="estadoCivil2"
                    type="text"
                    placeholder="Estado Civil"
                    sizeInput="sm"
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Input
                    label="Profissão"
                    name="profissao2"
                    type="text"
                    placeholder="Profissão"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="RG"
                    name="rg2"
                    type="text"
                    placeholder="RG"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={12}>
                  <Input
                    label="Orgão Emissor"
                    name="orgaoEmissor2"
                    type="text"
                    placeholder="Orgão Emissor"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={12}>
                  <Input
                    label="CPF"
                    name="cpf2"
                    type="text"
                    placeholder="CPF"
                    sizeInput="sm"
                    mask="maskCPF"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="pb-4 mb-4">
            <Card.Header>
              Declaramos, para os devidos fins e sob pena da lei, que:
            </Card.Header>
            <Card.Body>
              <Row>
                <Col
                  xl={1}
                  lg={1}
                  md={1}
                  sm={1}
                  xs={12}
                  className="text-center"
                >
                  <Switch
                    onChange={() => setSection1(!section1)}
                    checked={section1}
                    id="switch-1"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      A compra do imóvel{' '}
                      <strong>{(section1A && section1A) || 'XXX'}</strong> sob o
                      nº <strong>{(section1B && section1B) || 'XXX'}</strong>,
                      nesse Registro de Imóveis, trata-se de nossa primeira
                      aquisição imobiliária, para fins residenciais, financiada
                      pelo Sistema Financeiro da Habitação - SFH, porquanto
                      fazemos jus à redução de 50% dos emolumentos e das custas,
                      nos termos do disposto no art. 290 da Lei Federal nº
                      6.015/1973.
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Tipo (Matriculado / Transcrito):"
                          name="section1A"
                          type="text"
                          placeholder="Ex.: Matriculado ou Transcrito"
                          sizeInput="sm"
                          onChange={(e: any): void =>
                            setSection1A(e.target.value)
                          }
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Número:"
                          name="section1B"
                          type="text"
                          placeholder="Ex.: 123s"
                          sizeInput="sm"
                          onChange={(e: any): void =>
                            setSection1B(e.target.value)
                          }
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col
                  xl={1}
                  lg={1}
                  md={1}
                  sm={1}
                  xs={12}
                  className="text-center"
                >
                  <Switch
                    onChange={() => setSection1(!section1)}
                    checked={!section1}
                    id="switch-2"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      Não se trata de primeira aquisição imobiliária, para fins
                      residenciais, financiada pelo Sistema Financeiro da
                      Habitação - SFH; declaração esta para atender o disposto
                      no referido art. 290 da Lei 6.015/1973.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row className="justify-content-center">
            <Col xl={1} lg={1} md={1} sm={1} xs={12} className="pr-0">
              <Input
                label="Dia"
                name="dia"
                type="text"
                placeholder="Ex: 123, 421 e 575"
                sizeInput="sm"
                defaultValue={format(new Date(), 'dd', {
                  locale: ptBr
                })}
              />
            </Col>
            <Col xl={3} lg={3} md={3} sm={3} xs={12} className="pr-0">
              <Row>
                <Col xs={1} className="mt-5 pt-1 text-left">
                  de
                </Col>
                <Col>
                  <Input
                    label="Mês"
                    name="mes"
                    type="text"
                    placeholder="Ex: 123, 421 e 575"
                    sizeInput="sm"
                    value={format(new Date(), 'MMMM', {
                      locale: ptBr
                    })}
                  />
                </Col>
              </Row>
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={12}>
              <Row>
                <Col xs={1} className="mt-5 pt-1">
                  de
                </Col>
                <Col>
                  <Input
                    label="Ano"
                    name="ano"
                    type="text"
                    placeholder="Ex: 123, 421 e 575"
                    sizeInput="sm"
                    className="d-inline"
                    value={format(new Date(), 'yyy', {
                      locale: ptBr
                    })}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-center" xl={3} lg={3} md={3} sm={3} xs={12}>
              <Button
                block
                size={'lg'}
                className="mt-4"
                variant="primary"
                type="submit"
                disabled={loading}
              >
                Visualizar
              </Button>
            </Col>
          </Row>
        </Unform>
      </LayoutSubpage>

      <LayoutFooter />
    </>
  )
}
export default PrimeiraAquisicaoSfh
