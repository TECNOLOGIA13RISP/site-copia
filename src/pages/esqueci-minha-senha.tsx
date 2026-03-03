import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Input from 'components/Form/Input'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { api } from 'services/api'
import getValidationErrors from 'utils/getValidationErros'
import * as Yup from 'yup'
interface FormLogin {
  email: string
  password: string
}

const EsqueciMinhaSenha = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [messageSuccess, setMessageSuccess] = useState('')

  const handleSubmit: SubmitHandler<FormLogin> = async (data, { reset }) => {
    try {
      setLoading(true)
      setMessageError('')
      setMessageSuccess('')
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório')
      })
      await schema.validate(data, { abortEarly: false })

      const reqResponse = await api
        .post(`/auth/forgot-password`, { email: data.email })
        .then((r) => r.data)
        .catch((err) => {
          return { success: false, msg: err.msg }
        })

      reset()
      setLoading(false)

      setMessageSuccess(
        'Solicitação de recuperação de senha realizada com sucesso. Favor verificar seu e-mail.'
      )

      if (reqResponse.sendgrid.success === false) {
        setMessageError(reqResponse.sendgrid.msg)
      }
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
        <title>Esqueci Minha Senha</title>
        <meta
          name="description"
          content="Utilize esta página caso queira redefinir sua senha."
        />
        <meta property="og:title" content="Esqueci Minha Senha" />
        <meta
          property="og:description"
          content="Utilize esta página caso queira redefinir sua senha."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Esqueci minha senha" column={5}>
        <div className="page-login pl-2 pl-2 pt-5 pb-5">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Recuperar senha</h2>
            <p>Por favor, digite seu e-mail de cadastro abaixo:</p>
            {messageError !== '' && (
              <Alert variant="danger" className="mt-2">
                {messageError}
              </Alert>
            )}
            {messageSuccess !== '' && (
              <Alert variant="primary" className="mt-2">
                {messageSuccess}
              </Alert>
            )}
            <Input
              name="email"
              type="email"
              label="E-mail"
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
              Recuperar Senha
            </Button>
            <p className="mt-4">
              <Link href="/login">
                <a>Voltar?</a>
              </Link>
            </p>
          </Form>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default EsqueciMinhaSenha
