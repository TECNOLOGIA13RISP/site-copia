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
import PrintAverbacao from 'print/PrintAverbacao'
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
const RequerimentosAverbacao = () => {
  const formRef = useRef<FormHandles>(null)
  const [person, setPerson] = useState('PF')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState()
  const [printView, setPrintView] = useState(false)

  const [isTranscricao, setIsTranscricao] = useState(false)

  const [section1, setSection1] = useState(false)
  const [section2, setSection2] = useState(false)
  const [section3, setSection3] = useState(false)
  const [section4, setSection4] = useState(false)
  const [section5, setSection5] = useState(false)
  const [section6, setSection6] = useState(false)
  const [section7, setSection7] = useState(false)
  const [section8, setSection8] = useState(false)
  const [section9, setSection9] = useState(false)

  const [section1A, setSection1A] = useState(false)
  const [section1B, setSection1B] = useState(false)

  const [section2A, setSection2A] = useState(false)
  const [section2B, setSection2B] = useState(false)

  const [section3A, setSection3A] = useState(false)
  const [section3B, setSection3B] = useState(false)
  const [section3C, setSection3C] = useState(false)
  const [section3D, setSection3D] = useState(false)

  const [section4A, setSection4A] = useState(false)
  const [section4B, setSection4B] = useState(false)

  const [section5A, setSection5A] = useState(false)
  const [section5B, setSection5B] = useState(false)
  const [section5C, setSection5C] = useState(false)
  const [section5D, setSection5D] = useState(false)
  const [section5E, setSection5E] = useState(false)

  const [section6A, setSection6A] = useState(false)
  const [section6B, setSection6B] = useState(false)

  const [section7A, setSection7A] = useState(false)
  const [section7B, setSection7B] = useState(false)

  const [section8A, setSection8A] = useState(false)
  const [section8B, setSection8B] = useState(false)

  const [obsGeneral, setObsGeneral] = useState('')
  const [messageErrorObs, setMessageErrorObs] = useState('')

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
      setMessageErrorObs('')

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

      const schemaTranscricao = Yup.object().shape({
        trancricoes: Yup.string().required('Campo obrigatório')
      })
      const schemaMatriculas = Yup.object().shape({
        matriculas: Yup.string().required('Campo obrigatório')
      })

      if (person === 'PF') {
        await schemaPF.validate(data, { abortEarly: false })
      }
      if (person === 'PJ') {
        await schemaPJ.validate(data, { abortEarly: false })
      }

      if (isTranscricao) {
        await schemaTranscricao.validate(data, { abortEarly: false })
      }

      if (!isTranscricao) {
        await schemaMatriculas.validate(data, { abortEarly: false })
      }

      const schemaSection1 = Yup.object().shape({
        section1A: Yup.string().required('Campo obrigatório'),
        section1B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection2 = Yup.object().shape({
        section2A: Yup.string().required('Campo obrigatório'),
        section2B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection3 = Yup.object().shape({
        section3A: Yup.string().required('Campo obrigatório'),
        section3B: Yup.string().required('Campo obrigatório'),
        section3C: Yup.string().required('Campo obrigatório'),
        section3D: Yup.string().required('Campo obrigatório')
      })

      const schemaSection4 = Yup.object().shape({
        section4A: Yup.string().required('Campo obrigatório'),
        section4B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection5 = Yup.object().shape({
        section5A: Yup.string().required('Campo obrigatório'),
        section5B: Yup.string().required('Campo obrigatório'),
        section5C: Yup.string().required('Campo obrigatório'),
        section5D: Yup.string().required('Campo obrigatório'),
        section5E: Yup.string().required('Campo obrigatório')
      })

      const schemaSection6 = Yup.object().shape({
        section6A: Yup.string().required('Campo obrigatório'),
        section6B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection7 = Yup.object().shape({
        section7A: Yup.string().required('Campo obrigatório'),
        section7B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection8 = Yup.object().shape({
        section8A: Yup.string().required('Campo obrigatório'),
        section8B: Yup.string().required('Campo obrigatório')
      })

      const schemaSection9 = Yup.object().shape({
        section9A: Yup.string().required('Campo obrigatório')
      })

      if (section1) await schemaSection1.validate(data, { abortEarly: false })
      if (section2) await schemaSection2.validate(data, { abortEarly: false })
      if (section3) await schemaSection3.validate(data, { abortEarly: false })
      if (section4) await schemaSection4.validate(data, { abortEarly: false })
      if (section5) await schemaSection5.validate(data, { abortEarly: false })
      if (section6) await schemaSection6.validate(data, { abortEarly: false })
      if (section7) await schemaSection7.validate(data, { abortEarly: false })
      if (section8) await schemaSection8.validate(data, { abortEarly: false })
      if (section9) await schemaSection9.validate(data, { abortEarly: false })

      if (person === 'PF' && data?.obs.length === 0) {
        setLoading(false)
        return setMessageErrorObs('Campo obrigatório')
      }

      const otherFields = {
        section1,
        section2,
        section3,
        section4,
        section5,
        section6,
        section7,
        section8,
        section9,
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
        <title>Requerimentos - Averbação</title>
        <meta
          name="description"
          content="Utilize nosso modelo de requerimento para averbação e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta property="og:title" content="Requerimentos - Averbação" />
        <meta
          property="og:description"
          content="Utilize nosso modelo de requerimento para averbação e agilize seu atendimento no 13 Registro de Imóveis."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Requerimentos - Averbação">
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
        {printView && <PrintAverbacao data={formData} />}
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
                    mask={'maskCNPJ'}
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
                    mask={'maskPostalCode'}
                    onChange={(e: any) => searchCEP(e.target.value)}
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
          <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
              <Card className="pb-4 mb-4">
                <Card.Header>
                  <Row>
                    <Col>Matrículas</Col>
                    <Col className="text-right">
                      <Switch
                        onChange={() => {
                          setIsTranscricao(!isTranscricao)
                          !isTranscricao
                            ? formRef?.current?.setFieldValue(
                                'matriculas',
                                null
                              )
                            : formRef?.current?.setFieldValue(
                                'trancricoes',
                                null
                              )
                        }}
                        checked={!isTranscricao}
                        id="switch-2"
                      />
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                      <div className="page-lgpd">
                        <p>
                          vem requerer digne-se Vossa Senhoria mandar AVERBAR
                          na(s) matrícula(s) número(s)
                        </p>
                      </div>
                      <Input
                        name="matriculas"
                        type="text"
                        placeholder="Ex.: 123, 124 e 546"
                        sizeInput="sm"
                        disabled={isTranscricao}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
              <Card className="pb-4 mb-4">
                <Card.Header>
                  <Row>
                    <Col>Transcrições</Col>
                    <Col className="text-right">
                      <Switch
                        onChange={() => {
                          setIsTranscricao(!isTranscricao)
                          isTranscricao
                            ? formRef?.current?.setFieldValue(
                                'trancricoes',
                                null
                              )
                            : formRef?.current?.setFieldValue(
                                'matriculas',
                                null
                              )
                        }}
                        checked={isTranscricao}
                        id="switch-2"
                      />
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                      <div className="page-lgpd">
                        <p>
                          vem requerer digne-se Vossa Senhoria mandar AVERBAR
                          na(s) transcrição(ões) número(s)
                        </p>
                      </div>
                      <Input
                        name="trancricoes"
                        type="text"
                        placeholder="Ex.: 123, 124 e 546"
                        sizeInput="sm"
                        disabled={!isTranscricao}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="pb-4 mb-4">
            <Card.Header>Averbar</Card.Header>
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
                      a alteração do(s) número(s) do(s) prédio(s) objeto da(s)
                      matrícula(s) e/ou transcrição(ões) indicada(s) acima de{' '}
                      <strong>{(section1A && section1A) || 'XXX'}</strong> para{' '}
                      <strong>{(section1B && section1B) || 'XXX'}</strong>
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="De:"
                          name="section1A"
                          type="text"
                          placeholder="Ex.: 123, 124 e 546"
                          sizeInput="sm"
                          onChange={(e: any): void =>
                            setSection1A(e.target.value)
                          }
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Para:"
                          name="section1B"
                          type="text"
                          placeholder="Ex.: 123, 124 e 546"
                          sizeInput="sm"
                          onChange={(e: any): void =>
                            setSection1B(e.target.value)
                          }
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar certidão de dados cadastrais expedida pela
                      Prefeitura de São Paulo);
                    </p>
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
                    onChange={() => setSection2(!section2)}
                    checked={section2}
                    id="switch-2"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      a alteração do logradouro de de{' '}
                      <strong>{(section2A && section2A) || 'XXX'}</strong> para{' '}
                      <strong>{(section2B && section2B) || 'XXX'}</strong>
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="De:"
                          name="section2A"
                          type="text"
                          placeholder="Avenida São João"
                          onChange={(e: any): void =>
                            setSection2A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Para:"
                          name="section2B"
                          type="text"
                          onChange={(e: any): void =>
                            setSection2B(e.target.value)
                          }
                          placeholder="Rua São João"
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar certidão de dados cadastrais expedida pela
                      Prefeitura de São Paulo);
                    </p>
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
                    onChange={() => setSection3(!section3)}
                    checked={section3}
                    id="switch-3"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      a construção de área de{' '}
                      <strong>{(section3A && section3A) || 'XXX'}</strong>{' '}
                      metros quadrados, metros quadrados, do(s) prédio(s) que
                      recebeu(ram) o(s) número(s){' '}
                      <strong>{(section3B && section3B) || 'XXX'}</strong>, da{' '}
                      <strong>{(section3C && section3C) || 'XXX'}</strong>,
                      atribuindo-se para efeitos fiscais o valor de R${' '}
                      <strong>{(section3D && section3D) || 'XXX'}</strong> (
                      <strong>XXX</strong> reais)
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Metros quadradados"
                          name="section3A"
                          type="text"
                          placeholder="Ex: 240"
                          onChange={(e: any): void =>
                            setSection3A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Números:"
                          name="section3B"
                          type="text"
                          placeholder="Ex: 415 e 416"
                          onChange={(e: any): void =>
                            setSection3B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          label="Logradouro"
                          name="section3C"
                          type="text"
                          placeholder="Avenida Brigadeiro"
                          onChange={(e: any): void =>
                            setSection3C(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Valor Fiscal:"
                          name="section3D"
                          type="text"
                          placeholder=""
                          onChange={(e: any): void =>
                            setSection3D(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      anexar alvará de conclusão de construção (“Habite-se”)
                      expedido pela Prefeitura de São Paulo e Certidão Negativa
                      do Instituto Nacional da Seguridade Social - INSS com
                      finalidade para averbação de construção);
                    </p>
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
                    onChange={() => setSection4(!section4)}
                    checked={section4}
                    id="switch-4"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      a demolição do(s) prédio(s) número(s) , da{' '}
                      <strong>{(section4A && section4A) || 'XXX'}</strong>, do
                      Endereço:{' '}
                      <strong>{(section4B && section4B) || 'XXX'}</strong>
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Números:"
                          name="section4A"
                          type="text"
                          placeholder="Avenida São João"
                          onChange={(e: any): void =>
                            setSection4A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Endereço"
                          name="section4B"
                          type="text"
                          placeholder="Rua São João"
                          onChange={(e: any): void =>
                            setSection4B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar alvará de demolição de construção expedido pela
                      Prefeitura de São Paulo e Certidão Negativa do Instituto
                      Nacional da Seguridade Social - INSS com finalidade para
                      averbação de demolição);
                    </p>
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
                    onChange={() => setSection5(!section5)}
                    checked={section5}
                    id="switch-5"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      a reforma do(s) prédio(s) número(s){' '}
                      <strong>{(section5A && section5A) || 'XXX'}</strong>, da{' '}
                      <strong>{(section5B && section5B) || 'XXX'}</strong>, que
                      teve acréscimo de área construída de{' '}
                      <strong>{(section5C && section5C) || 'XXX'}</strong>{' '}
                      metros quadrados e totaliza a área construída de{' '}
                      <strong>{(section5D && section5D) || 'XXX'}</strong>{' '}
                      metros quadrados, atribuindo-se para efeitos fiscais o
                      valor de R${' '}
                      <strong>{(section5E && section5E) || 'XXX'}</strong> (XXX)
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Números"
                          name="section5A"
                          type="text"
                          placeholder="Ex: 123, 421 e 575"
                          onChange={(e: any): void =>
                            setSection5A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Endereço"
                          name="section5B"
                          type="text"
                          placeholder="Rua São João"
                          onChange={(e: any): void =>
                            setSection5B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          label="Acréscimo área construída"
                          name="section5C"
                          type="text"
                          placeholder="Ex: 42"
                          onChange={(e: any): void =>
                            setSection5C(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Total área construída"
                          name="section5D"
                          type="text"
                          placeholder="65"
                          onChange={(e: any): void =>
                            setSection5D(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Valor fiscal"
                          name="section5E"
                          type="text"
                          placeholder="895000"
                          onChange={(e: any): void =>
                            setSection5E(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar alvará de conclusão de construção (Habite-se)e
                      xpedido pela Prefeitura de São Paulo e Certidão Negativa
                      do Instituto Nacional da Seguridade Social - INSS com
                      finalidade para averbação de construção)
                    </p>
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
                    onChange={() => setSection6(!section6)}
                    checked={section6}
                    id="switch-6"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      a alteração do estado civil de{' '}
                      <strong>{(section6A && section6A) || 'XXX'}</strong>, para{' '}
                      <strong>{(section6B && section6B) || 'XXX'}</strong>
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="De:"
                          name="section6A"
                          type="text"
                          placeholder="Solteiro"
                          onChange={(e: any): void =>
                            setSection6A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Para"
                          name="section6B"
                          type="text"
                          placeholder="Casado"
                          onChange={(e: any): void =>
                            setSection6B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    {person === 'PJ' && (
                      <p className="mt-2">
                        * anexar certidão atualizada de casamento;
                      </p>
                    )}

                    {person === 'PF' && (
                      <p className="mt-2">
                        * anexar certidão atualizada de casamento, e, se
                        possível RG e CPF de ambos cônjuges;
                      </p>
                    )}
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
                    onChange={() => setSection7(!section7)}
                    checked={section7}
                    id="switch-7"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      o cancelamento do usufruto registrado na(s) mencionada(s)
                      matrícula(s) sob o(s) número(s){' '}
                      <strong>{(section7A && section7A) || 'XXX'}</strong>
                      e/ou inscrito(s) sob o(s) número(s){' '}
                      <strong>{(section7B && section7B) || 'XXX'}</strong>, no
                      livro 4 (Decreto nº 4.857/1939), em virtude do falecimento
                      do(a)(s) usufrutuário(a)(s)
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Números"
                          name="section7A"
                          type="text"
                          placeholder="Ex: 123, 421 e 575"
                          onChange={(e: any): void =>
                            setSection7A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Números"
                          name="section7B"
                          type="text"
                          placeholder="Ex: 123, 421 e 575"
                          onChange={(e: any): void =>
                            setSection7B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar certidão(ões) de óbito(s) do(a)(s)
                      usufrutuário(a)(s));
                    </p>
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
                    onChange={() => setSection8(!section8)}
                    checked={section8}
                    id="switch-8"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mb-0 pb-0">
                      o cancelamento da(s) hipoteca(s) registrada(s) na(s)
                      mencionada(s) matrícula(s) sob o(s) número(s){' '}
                      <strong>{(section8A && section8A) || 'XXX'}</strong>
                      e/ou inscrita(s) sob o(s) número(s){' '}
                      <strong>{(section8B && section8B) || 'XXX'}</strong>, no
                      livro 2 (Decreto nº 4.857/1939), em razão da autorização
                      concedida pelo(a) credor(a)
                    </p>
                    <Row>
                      <Col>
                        <Input
                          label="Números"
                          name="section8A"
                          type="text"
                          placeholder="Ex: 123, 421 e 575"
                          onChange={(e: any): void =>
                            setSection8A(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                      <Col>
                        <Input
                          label="Números"
                          name="section8B"
                          type="text"
                          placeholder="Ex: 123, 421 e 575"
                          onChange={(e: any): void =>
                            setSection8B(e.target.value)
                          }
                          sizeInput="sm"
                        />
                      </Col>
                    </Row>
                    <p className="mt-2">
                      (anexar o instrumento de quitação correspondente - art.
                      251, da Lei Federal nº 6.015/1973);
                    </p>
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
                    onChange={() => setSection9(!section9)}
                    checked={section9}
                    id="switch-9"
                  />
                </Col>
                <Col xl={11} lg={11} md={11} sm={11} xs={12}>
                  <div className="page-lgpd">
                    <p className="mt-2">
                      outras hipóteses previstas no art. 167 da Lei Federal nº
                      6.015/1973 ou legislação especial:
                    </p>
                    <Input
                      name="section9A"
                      type="text"
                      placeholder="Ex: 123, 421 e 575"
                      sizeInput="sm"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="pb-4 mb-4">
            <Card.Header>Outras informações</Card.Header>
            <Card.Body>
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={6}>
                  <div className="page-lgpd">
                    <p>Em anexo, seguem os seguintes documentos:</p>
                  </div>
                  <Textarea
                    name="obs"
                    type="text"
                    placeholder=""
                    sizeInput="sm"
                    value={obsGeneral}
                    onChange={(e: any) => setObsGeneral(e.target.value)}
                  ></Textarea>
                  {messageErrorObs.length > 0 && <code>Campo obrigatório</code>}
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
export default RequerimentosAverbacao
