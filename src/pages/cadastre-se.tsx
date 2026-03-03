/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Input from 'components/Form/Input'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import Link from 'next/link'
import { default as router, default as Router } from 'next/router'
import { validate } from 'node-cpf'
import { destroyCookie, parseCookies } from 'nookies'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import Switch from 'react-switch'
import { api } from 'services/api'
import getValidationErrors from 'utils/getValidationErros'
import * as Yup from 'yup'
import { AuthContext } from '../contexts/AuthContext'

interface FormRegister {
  name: string
  cpf: string
  phone: string
  email: string
  password: string
  passwordConfirm: string
}

const Index = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const { register } = useContext(AuthContext)
  const [messageError, setMessageError] = useState('')
  const [messageErrorBottom, setMessageErrorBottom] = useState('')
  const [messageSuccess, setMessageSuccess] = useState('')

  const { ['13risp.user.Nome']: Nome } = parseCookies()

  const [isActive] = React.useState<boolean>(!!Nome)
  const [accepted, setAccepted] = React.useState<boolean>(false)
  useEffect(() => {
    if (isActive) {
      destroyCookie(null, '13risp.token')
      destroyCookie(null, '13risp.user.AutorizaEnvio')
      destroyCookie(null, '13risp.user.Nome')
      destroyCookie(null, '13risp.user.Email')
      destroyCookie(null, '13risp.user.IdCadastro')
      api.defaults.headers['Authorization'] = ``
      Router.push('/')
    }
  }, [isActive])

  const handleSubmit: SubmitHandler<FormRegister> = async (data, { reset }) => {
    try {
      setMessageError('')
      setLoading(true)
      console.log('danilot', data)
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(100, 'Máximo 100 caracteres')
          .required('O nome é obrigatório'),
        phone: Yup.string().required('O celular é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .max(100, 'Máximo 100 caracteres')
          .required('O nome é obrigatório'),
        password: Yup.string()
          .min(6, 'Deve conter 6 caracteres')
          .max(10, 'Máximo 10 caracteres')
          .required('A senha é obrigatória'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'As senhas devem ser iguais'
        )
      })

      await schema.validate(data, { abortEarly: false })

      if (data.phone.length !== 15) {
        setLoading(false)
        return setMessageError('O celular é obrigatório')
      }

      if (!validate(data.cpf)) {
        setLoading(false)
        return setMessageError('Número do CPF Inválido')
      }
      if (!accepted) {
        setLoading(false)
        return setMessageErrorBottom(
          'É obrigatório o aceite dos Termos de Uso e Política de Privacidade para cadastro em nossa plataforma'
        )
      }

      const formData = {
        type: 'PF',
        name: data.name,
        email: data.email,
        cpf: data.cpf.replace(/\D/g, ''),
        ddd: data.phone.replace(/\D/g, '').substring(0, 2),
        phone: data.phone.replace(/\D/g, '').substring(2, 11),
        password: data.password
      }

      const responseLogin: any = await register(formData)

      if (responseLogin.success === true) {
        setMessageSuccess('Cadastro realizado com sucesso!')
      } else if (responseLogin.success === false) {
        setMessageError(responseLogin.msg || 'Falha ao realizar o cadastro')
      }
      reset()
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
        <title>Cadastre-se</title>
        <meta
          name="description"
          content="Realize seu cadastro no 13 Registro de Imóveis para aproveitar todos os recursos do site."
        />
        <meta property="og:title" content="Cadastre-se" />
        <meta
          property="og:description"
          content="Realize seu cadastro no 13 Registro de Imóveis para aproveitar todos os recursos do site."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Cadastre-se" column={7}>
        <div className="page-login pl-2 pl-2 pt-5 pb-5">
          <Form ref={formRef} onSubmit={handleSubmit}>
            {messageSuccess === '' && (
              <p>Por favor, preencha os dados com atenção</p>
            )}
            {messageError !== '' && (
              <Alert variant="danger" className="mt-2">
                {messageError}
              </Alert>
            )}

            {messageSuccess !== '' && (
              <Alert variant="success" className="mt-2">
                {messageSuccess}
              </Alert>
            )}
            {messageSuccess === '' && (
              <>
                <Input
                  name="name"
                  type="text"
                  label="Nome Completo"
                  placeholder="Informe seu nome"
                />
                <Row>
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Input
                      name="email"
                      type="email"
                      label="E-mail"
                      placeholder="Informe seu e-mail"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Input
                      name="phone"
                      type="text"
                      label="Celular"
                      placeholder=""
                      mask={'maskMobile'}
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Input
                      name="cpf"
                      type="text"
                      label="CPF"
                      placeholder=""
                      mask={'maskCPF'}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Input
                      name="password"
                      type="password"
                      label="Senha"
                      placeholder="Informe sua senha"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Input
                      name="passwordConfirmation"
                      type="password"
                      label="Confirmar Senha"
                      placeholder="Confirme sua senha"
                    />
                  </Col>
                </Row>
                {messageErrorBottom !== '' && (
                  <Row>
                    <Col>
                      <Alert variant="danger" className="mt-4">
                        {messageErrorBottom}
                      </Alert>
                    </Col>
                  </Row>
                )}
                <Row className="mt-4">
                  <Col xs={2} className="my-auto">
                    <Switch
                      onChange={() => setAccepted(!accepted)}
                      checked={accepted}
                      id="switch-cadastre-se"
                    />
                  </Col>
                  <Col className="my-auto">
                    <p>
                      Declaro que li e concordo com os{' '}
                      <Link href="/termos-de-uso">
                        <a>Termos de Uso</a>
                      </Link>{' '}
                      e a{' '}
                      <Link href="/politica-de-privacidade">
                        <a>Política de Privacidade</a>
                      </Link>{' '}
                      deste site.
                    </p>
                    {messageErrorBottom !== '' && (
                      <small>
                        <code>Campo obrigatório</code>
                      </small>
                    )}
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  className="pl-0 pr-0 ml-0 mr-0 mt-4 mb-4"
                  type="submit"
                  disabled={loading}
                >
                  Cadastrar
                </Button>
                <Link href="/login">
                  <a>Lembrei, já tenho cadastro</a>
                </Link>
              </>
            )}
            {messageSuccess !== '' && (
              <Button
                variant="primary"
                size="lg"
                block
                className="pl-0 pr-0 ml-0 mr-0 mt-4 mb-4"
                type="submit"
                disabled={loading}
                onClick={() => router.push('./login')}
              >
                Entrar
              </Button>
            )}
          </Form>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default Index
