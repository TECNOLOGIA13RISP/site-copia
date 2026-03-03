import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Input from 'components/Form/Input'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { api } from 'services/api'
import getValidationErrors from 'utils/getValidationErros'
import * as Yup from 'yup'
import loadingPic from '/public/images/loading_default.gif'
interface FormRecover {
  password: string
  passwordConfirm: string
}

const RecuperarSenha = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const [validateToken, setValidateToken] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [messageSuccess, setMessageSuccess] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function checkToken() {
      const { tokenSecure } = router.query

      if (tokenSecure) {
        try {
          const reqResponse = await api
            .post(`/auth/validate-token-recover`, {
              token: tokenSecure || 'NotFound'
            })
            .then((r) => r.data)
            .catch((err) => {
              return { success: false, msg: err.msg }
            })
          if (reqResponse.success === false) {
            router.push('/login')
          } else {
            setValidateToken(true)
          }
        } catch (error) {
          alert('Ocorreu um erro ao buscar os items')
          setValidateToken(false)
        }
      } else {
        setValidateToken(false)
      }
    }
    checkToken()
  }, [router])

  const handleSubmit: SubmitHandler<FormRecover> = async (data, { reset }) => {
    try {
      setLoading(true)
      const schema = Yup.object().shape({
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

      const { tokenSecure } = router.query

      const reqResponse = await api
        .post(`/auth/change-password`, {
          password: data.password,
          token: tokenSecure
        })
        .then((r) => r.data)
        .catch((err) => {
          return { success: false, msg: err.msg }
        })
      if (reqResponse.success === false) {
        setMessageError(reqResponse.msg)
      } else {
        setMessageSuccess(reqResponse.msg)
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
        <title>Recuperar Senha</title>
        <meta name="description" content="Breve descrição" />
        <meta property="og:title" content="Recuperar Senha" />
        <meta property="og:description" content="Breve descrição" />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Recuperar Senha" column={5}>
        <div className="page-login pl-2 pl-2 pt-5 pb-5">
          {validateToken && (
            <Form ref={formRef} onSubmit={handleSubmit}>
              {messageSuccess !== '' && (
                <Alert variant="success" className="mt-2">
                  {messageSuccess}
                </Alert>
              )}
              {messageSuccess === '' && (
                <>
                  <h2>Alterar sua senha</h2>
                  <p>
                    Por segurança, você deve criar uma senha com no mínimo{' '}
                    <strong>6 caracteres</strong>. Utilize letras e números ou
                    caracteres especiais.
                  </p>
                  {messageError !== '' && (
                    <Alert variant="danger" className="mt-2">
                      {messageError}
                    </Alert>
                  )}
                  <Input
                    name="password"
                    type="password"
                    label="Nova senha"
                    placeholder="Informe sua senha"
                  />
                  <Input
                    name="passwordConfirmation"
                    type="password"
                    label="Confirme sua Nova Senha"
                    placeholder="Confirme sua senha"
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    block
                    className="pl-0 pr-0 ml-0 mr-0 mt-4"
                    type="submit"
                    disabled={loading}
                  >
                    Alterar senha
                  </Button>
                </>
              )}
            </Form>
          )}
          {!validateToken && (
            <div className="text-center">
              <Image src={loadingPic} />
              <p>Aguarde validação do token e ou token inexistente!</p>
            </div>
          )}
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default RecuperarSenha
