import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Input from 'components/Form/Input'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { api } from 'services/api'
import getValidationErrors from 'utils/getValidationErros'
import * as Yup from 'yup'
import { AuthContext } from '../contexts/AuthContext'
interface FormLogin {
  email: string
  password: string
}

const Index = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const { signIn } = useContext(AuthContext)
  const [messageError, setMessageError] = useState('')

  const { ['13risp.user.Nome']: Nome } = parseCookies()

  const [isActive] = React.useState<boolean>(!!Nome)

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

  const handleSubmit: SubmitHandler<FormLogin> = async (data, { reset }) => {
    try {
      setLoading(true)
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O nome é obrigatório'),
        password: Yup.string().required('A senha é obrigatória')
      })
      await schema.validate(data, { abortEarly: false })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responseLogin: any = await signIn(data)

      if (responseLogin.success === false) {
        setMessageError(responseLogin.msg)
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
        <title>Entrar</title>
        <meta
          name="description"
          content="Faça a autenticação em sua conta e aproveite todos os recursos do nosso site."
        />
        <meta property="og:title" content="Entrar" />
        <meta
          property="og:description"
          content="Faça a autenticação em sua conta e aproveite todos os recursos do nosso site."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Entrar" column={5}>
        <div className="page-login pl-2 pl-2 pt-5 pb-5">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Bem-vindo(a)</h2>
            <p>Por favor, digite suas credenciais para prosseguir.</p>
            {messageError !== '' && (
              <Alert variant="danger" className="mt-2">
                {messageError}
              </Alert>
            )}
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="Informe seu e-mail"
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Informe seu e-mail"
            />
            <Button
              variant="primary"
              size="lg"
              block
              className="pl-0 pr-0 ml-0 mr-0 mt-4"
              type="submit"
              disabled={loading}
            >
              Acessar
            </Button>
            <p className="mt-4">
              <Link href="/esqueci-minha-senha">
                <a>Esqueceu sua senha?</a>
              </Link>
            </p>
          </Form>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default Index
