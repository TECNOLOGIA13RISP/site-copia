/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faArrowLeft,
  faBuilding,
  faPrint,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form as Unform } from '@unform/web'
import Input from 'components/Form/Input'
import Textarea from 'components/Form/Textarea'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import Head from 'next/head'
import PrintExameCalculo from 'print/PrintExameCalculo'
import React, { useRef, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
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
const ExameCalculo = () => {
  const formRef = useRef<FormHandles>(null)
  const [person, setPerson] = useState('PF')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState()
  const [printView, setPrintView] = useState(false)

  const [obsGeneral, setObsGeneral] = useState('')

  const [addressTmp, setAddressTmp] = useState<PropsAddress>()

  const searchCEP = async (cep) => {
    if (cep.length !== 9) {
      return
    } else {
      fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setAddressTmp({
            uf: data.uf,
            cidade: data.localidade,
            bairro: data.bairro,
            logradouro: data.logradouro
          })
          return
        })
    }
  }

  const handleSubmit: SubmitHandler = async (
    data
    /**
    {
     reset
    }*/
  ) => {
    try {
      setLoading(true)
      const schemaPF = Yup.object().shape({
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

        telefone: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório'),

        cep: Yup.string().required('Campo obrigatório'),
        endereco: Yup.string().required('Campo obrigatório'),
        numero: Yup.string().required('Campo obrigatório'),
        complemento: Yup.string().required('Campo obrigatório'),
        bairro: Yup.string().required('Campo obrigatório'),
        cidade: Yup.string().required('Campo obrigatório'),
        estado: Yup.string().required('Campo obrigatório')
      })

      const schemaPJ = Yup.object().shape({
        dia: Yup.string().required('Campo obrigatório'),
        mes: Yup.string().required('Campo obrigatório'),
        ano: Yup.string().required('Campo obrigatório'),

        razaoSocial: Yup.string().required('Campo obrigatório'),
        cnpj: Yup.string().required('Campo obrigatório'),

        telefone: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório'),

        cep: Yup.string().required('Campo obrigatório'),
        endereco: Yup.string().required('Campo obrigatório'),
        numero: Yup.string().required('Campo obrigatório'),
        complemento: Yup.string().required('Campo obrigatório'),
        bairro: Yup.string().required('Campo obrigatório'),
        cidade: Yup.string().required('Campo obrigatório'),
        estado: Yup.string().required('Campo obrigatório')
      })

      if (person === 'PF') {
        await schemaPF.validate(data, { abortEarly: false })
      }
      if (person === 'PJ') {
        await schemaPJ.validate(data, { abortEarly: false })
      }

      const otherFields = {
        personType: person,
        obsGeneral
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
        <title>Requerimentos - Exame e Cálculo</title>
        <meta
          name="description"
          content="Utilize nosso modelo de requerimento para exame e cálculo e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta property="og:title" content="Requerimentos - Exame e Cálculo" />
        <meta
          property="og:description"
          content="Utilize nosso modelo de requerimento para exame e cálculo e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Requerimentos - Exame e Cálculo">
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
        {printView && <PrintExameCalculo data={formData} />}
        <Unform
          ref={formRef}
          onSubmit={handleSubmit}
          className={printView ? 'd-none' : 'd-block'}
        >
          <Row className="justify-content-center">
            <Col xl={3} lg={3} md={4} sm={4} xs={6}>
              <Button
                variant={person === 'PF' ? 'info' : 'outline-info'}
                className="mr-2"
                block
                onClick={() => setPerson('PF')}
              >
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Pessoa Física
              </Button>
            </Col>
            <Col xl={3} lg={3} md={4} sm={4} xs={6}>
              <Button
                variant={person === 'PJ' ? 'info' : 'outline-info'}
                className="ml-2"
                block
                onClick={() => setPerson('PJ')}
              >
                <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Pessoa
                Jurídica
              </Button>
            </Col>
          </Row>
          <Card
            className={`pb-4 mb-4 mt-4 ${
              person === 'PJ' ? 'd-block' : 'd-none'
            }`}
          >
            <Card.Header>Dados - Pessoa Jurídica</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={12}>
                  <Input
                    label="Razão Social"
                    name="razaoSocial"
                    type="text"
                    placeholder="Razão Social"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Input
                    label="CNPJ"
                    name="cnpj"
                    type="text"
                    placeholder="CNPJ"
                    sizeInput="sm"
                    mask="maskCNPJ"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card
            className={`pb-4 mb-4 mt-4 ${
              person === 'PF' ? 'd-block' : 'd-none'
            }`}
          >
            <Card.Header>Dados - Pessoa Física</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Input
                    label="Nome Completo"
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
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
                    mask="maskRG"
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
                    mask={'maskCPF'}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="pb-4 mb-4">
            <Card.Header>Informações para Contato</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Input
                    label="Telefone"
                    name="telefone"
                    type="text"
                    placeholder="Telefone"
                    sizeInput="sm"
                    mask={'maskMobile'}
                  />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Input
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    sizeInput="sm"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="pb-4 mb-4">
            <Card.Header>Endereço</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                  <Input
                    label="CEP"
                    name="cep"
                    type="text"
                    placeholder="CEP"
                    sizeInput="sm"
                    onChange={(e: any) => searchCEP(e.target.value)}
                    mask={'maskPostalCode'}
                  />
                </Col>
                <Col xl={7} lg={7} md={7} sm={8} xs={12}>
                  <Input
                    label="Endereço"
                    name="endereco"
                    type="text"
                    placeholder="Endereço"
                    sizeInput="sm"
                    disabled
                    value={addressTmp ? addressTmp?.logradouro : ''}
                  />
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={12}>
                  <Input
                    label="Número"
                    name="numero"
                    type="text"
                    placeholder="Número"
                    sizeInput="sm"
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                  <Input
                    label="Bairro"
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
                    sizeInput="sm"
                    disabled
                    value={addressTmp ? addressTmp?.bairro : ''}
                  />
                </Col>
                <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                  <Input
                    label="Complemento"
                    name="complemento"
                    type="text"
                    placeholder="Complemento"
                    sizeInput="sm"
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Input
                    label="Cidade"
                    name="cidade"
                    type="text"
                    placeholder="Cidade"
                    sizeInput="sm"
                    disabled
                    value={addressTmp ? addressTmp?.cidade : ''}
                  />
                </Col>
                <Col xl={2} lg={2} md={2} sm={12} xs={12}>
                  <Input
                    label="Estado"
                    name="estado"
                    type="text"
                    placeholder="SP"
                    sizeInput="sm"
                    disabled
                    value={addressTmp ? addressTmp?.uf : ''}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="pb-4 mb-4">
            <Card.Header>Solicitação</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={6}>
                  <div className="page-lgpd">
                    <p>
                      Vem requerer digne-se Vossa Senhoria recepcionar o título:
                    </p>
                  </div>
                  <Textarea
                    label=""
                    name="obs"
                    type="text"
                    placeholder=""
                    sizeInput="sm"
                    value={obsGeneral}
                    onChange={(e: any) => setObsGeneral(e.target.value)}
                  ></Textarea>
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
export default ExameCalculo
