import { faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from 'contexts/AuthContext'
import {
  renderCurrentCertidaoStatus,
  renderCurrentPrenotacaoStatus
} from 'lib/queriesStatus'
import Image from 'next/image'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import React, { useContext, useState } from 'react'
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table
} from 'react-bootstrap'
import MaskInput from 'react-maskinput'
import { api } from 'services/api'
import theme from 'styles/theme'
import { CertidaoProps, PrenotacaoProps } from '../../lib/interface'
import * as S from './styles'
import certidaoPic from '/public/images/icon_certidao.webp'
import prenotacaoPic from '/public/images/icon_prenotacao.webp'
import logoPic from '/public/images/logo_oficial.webp'

export default function CardsHome() {
  const { ['13risp.user.Nome']: Nome } = parseCookies()
  const [isActive] = React.useState<boolean>(!!Nome)

  const [loadingServices, setLoadingServices] = useState(false)

  const [loadingAddress, setLoadingAddress] = useState(false)

  const [modalShow, setModalShow] = useState(false)

  const [serviceError, setServiceError] = useState(false)
  const [serviceErrorMsg, setServiceErrorMsg] = useState('')

  const [addressError, setAddressError] = useState(false)
  const [addressErrorMsg, setAddressErrorMsg] = useState('')

  const [prenotacaoData, setPrenotacaoData] = useState<PrenotacaoProps>({})
  const [certidaoData, setCertidaoData] = useState<CertidaoProps>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [addressData, setAddressData] = useState<any>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [serviceNumber, setServiceNumber] = useState<any>('000000')
  const [service, setService] = useState('Certidão')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [address, setAddress] = useState<any>(null)
  const [addressType, setAddressType] = useState('RUA')

  const { logout } = useContext(AuthContext)

  const logoutAuth = () => {
    Router.push('/login')
  }
  const svgCustomCard = () => (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme.colors.theme.primary}
          fillOpacity="1"
          d="M0,160L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  )

  const handleService = async () => {
    setLoadingServices(true)
    if (isNaN(serviceNumber)) {
      setServiceErrorMsg('Informe um número válido')
      setServiceError(true)
      setLoadingServices(false)
      return false
    }

    if (serviceNumber.toString().length !== 6) {
      setServiceErrorMsg('Informe um número válido')
      setServiceError(true)
      setLoadingServices(false)
      return false
    }

    const serviceCall: string =
      service === 'Certidão' ? 'certidao' : 'prenotacao'

    await api
      .post(`/${serviceCall}?id=${serviceNumber}`)
      .then((r) => {
        setLoadingServices(false)
        if (r.data?.msg === 'NOT_AUTHORIZED') {
          logoutAuth()
        } else if (r.data && Object.keys(r.data).length > 0) {
          if (service === 'Certidão') {
            setCertidaoData(r.data)
          } else {
            setPrenotacaoData(r.data)
          }
          setModalShow(true)
          setServiceError(false)
        } else {
          setServiceError(true)
          setModalShow(false)
          setServiceErrorMsg(`${service} não encontrado!`)
        }
      })
      .catch((err) => {
        if (err.msg === 'NOT_AUTHORIZED') {
          logoutAuth()
        }
      })
  }

  const handleAddress = async () => {
    if (address.toString().length === 0) {
      setAddressErrorMsg('Informe um endereço')
      setAddressError(true)
      setLoadingAddress(false)
      return false
    }

    await api
      .post(`/circunscricao?address=${address}&type=${addressType}`)
      .then((r) => {
        setLoadingAddress(false)
        setService('Endereço')
        setAddressData(r.data)
        setModalShow(true)
        setAddressError(false)
      })
      .catch((err) => {
        if (err.msg === 'NOT_AUTHORIZED') {
          logout()
        }
        setAddressErrorMsg(err.msg)
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeNumber = (e: any): void => {
    if (e.target.value.length === 6) {
      const numberProvisorio = e.target.value
      setServiceNumber(numberProvisorio.replace('.', ''))
      return
    }

    setServiceNumber('000000')
  }

  return (
    <S.Wrapper>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="card-laterais">
              <Card.Img variant="top" src="/images/card_esquerda.webp" />
              {svgCustomCard()}
              <Card.Footer>
                <h2>Consultar Protocolo</h2>
                <p>Acompanhe o andamento do serviço solicitado</p>
                <a
                  href="https://ridigital.org.br/servicos/actitulo/frmAcompanhamentoTitulo.aspx#Acompanhamento"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="info" size="lg" block className="mt-3">
                    Acessar
                  </Button>
                </a>

                {isActive && (
                  <>
                    <Form.Row>
                      <Col xs={7} className="mb-3">
                        <Form.Control
                          as="select"
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="Prenotação">Prenotação</option>
                          <option value="Certidão" selected>
                            Certidão
                          </option>
                        </Form.Control>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={9}>
                        <MaskInput
                          onChange={onChangeNumber}
                          maskChar="_"
                          mask={'000000'}
                          alwaysShowMask={false}
                        />
                      </Col>
                      <Col xs={3}>
                        <Button
                          variant="info"
                          size="lg"
                          block
                          className="pl-0 pr-0 ml-0 mr-0"
                          onClick={() => handleService()}
                          disabled={loadingServices || !Number(serviceNumber)}
                        >
                          {loadingServices && (
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                          )}
                          {!loadingServices && (
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                          )}
                        </Button>
                      </Col>
                    </Form.Row>
                  </>
                )}
              </Card.Footer>
            </Card>
            {serviceError && (
              <Alert
                variant="danger"
                className="mt-2"
                style={{ position: `relative`, top: -40 }}
              >
                {serviceErrorMsg}
              </Alert>
            )}
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="card-central">
              <Card.Img variant="top" src="/images/card_central.webp" />
              {svgCustomCard()}
              <Card.Footer>
                <h2>Tabela de Custas</h2>
                <p>
                  Tabela de custas e emolumentos relativa aos ofícios de
                  registro de imóveis em vigor a partir de 8 de Janeiro de 2026.
                </p>
                <a href="https://arisp.com.br/wp-content/uploads/2026/01/2040816OM.pdf">
                  <Button variant="info" size="lg" block className="mt-4">
                    Acessar
                  </Button>
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className="card-laterais">
              <Card.Img variant="top" src="/images/card_direita.webp" />
              {svgCustomCard()}
              <Card.Footer>
                <h2>Consultar Circunscrição</h2>
                <p>Descubra qual o cartório responsável pelo seu imóvel</p>
                <Form.Row>
                  <Col xs={5} className="mb-3">
                    <Form.Control
                      as="select"
                      onChange={(e) => setAddressType(e.target.value)}
                    >
                      <option value="RUA" selected>
                        Rua
                      </option>
                      <option value="AVENIDA">Avenida</option>
                      <option value="ALAMEDA">Alameda</option>
                      <option value="PRAÇA">Praça</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={9}>
                    <Form.Control
                      placeholder="Endereço"
                      size="lg"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Col>
                  <Col xs={3}>
                    <Button
                      variant="info"
                      size="lg"
                      block
                      className="pl-0 pr-0 ml-0 mr-0"
                      onClick={() => handleAddress()}
                      disabled={!address || loadingAddress}
                    >
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Button>
                    {addressError && (
                      <Alert
                        variant="danger"
                        className="mt-2"
                        style={{ position: `relative`, top: -40 }}
                      >
                        {addressErrorMsg}
                      </Alert>
                    )}
                  </Col>
                </Form.Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Body className="page-modal">
          <FontAwesomeIcon
            icon={faTimes}
            className="float-right cursor-pointer"
            onClick={() => setModalShow(false)}
          />
          <div className="text-center">
            <Image src={logoPic} />
            {['Prenotação', 'Certidão'].includes(service) && (
              <h2 className="mt-4 mb-4">Consultar {service}</h2>
            )}
            {['Endereço'].includes(service) && (
              <h2 className="mt-4 mb-4">Consultar Circunscrição</h2>
            )}
            <hr />
          </div>
          {['Prenotação', 'Certidão'].includes(service) && (
            <Row>
              <Col xs={8}>
                {service === 'Prenotação' &&
                  renderCurrentPrenotacaoStatus(
                    prenotacaoData || {},
                    prenotacaoData?.Status || 0
                  )}
                {service === 'Certidão' &&
                  renderCurrentCertidaoStatus(
                    certidaoData || {},
                    certidaoData?.Status || ''
                  )}
              </Col>
              <Col xs={4}>
                <Image
                  src={service === 'Prenotação' ? prenotacaoPic : certidaoPic}
                />
              </Col>
            </Row>
          )}
          {['Endereço'].includes(service) && (
            <Row>
              <Col>
                {addressData.count === 0 && (
                  <Alert variant="danger" className="mt-2">
                    <strong>ATENÇÃO:</strong> Endereço não foi encontrado!
                  </Alert>
                )}
                {addressData.count > 0 && (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Endereço / Complemento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addressData.data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.TipoEndereco}</td>
                          <td>
                            {item.Endereco}
                            <br />
                            <small>{item.Observacoes}</small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Col>
            </Row>
          )}
          <div className="text-center">
            <hr />
            <p>
              <small>
                Em caso de dúvidas ligue: (11) 3218-0090 de segunda a
                sexta-feira, das 09:00 às 16:00 horas.
              </small>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </S.Wrapper>
  )
}

