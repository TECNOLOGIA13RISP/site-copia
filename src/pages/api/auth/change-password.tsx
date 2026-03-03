// import { withSentry } from '@sentry/nextjs'
import { decodeToken } from 'lib/auth'
import { sql_query } from 'lib/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  if (method === 'POST') {
    try {
      const schema = Yup.object().shape({
        token: Yup.string().required('O e-mail é obrigatório'),
        password: Yup.string().required('O senha é obrigatório')
      })
      await schema.validate(req.body, { abortEarly: false })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { errors } = error
      return res.json({ success: false, errors })
    }

    try {
      const { token, password } = req.body

      const validateToken = decodeToken(token)

      if (!validateToken?.payload) {
        return res.json({ success: false, msg: 'Token inválido!' })
      }

      const email = validateToken?.payload.Email

      const countEmail = await sql_query(
        `
        SELECT count(*)
        FROM TabCadastroSite
        WHERE Email = '${email}'
        `
      )

      if (countEmail.recordset && countEmail.recordset[0][''] === 0) {
        return res.json({
          success: false,
          msg: 'E-mail não foi encontrado!'
        })
      }

      const dataUpdate = await sql_query(
        `
        UPDATE TabCadastroSite
        SET Senha = '${password}'
        WHERE Email = '${email}'
        `
      )

      return res.json({
        success: true,
        data: dataUpdate,
        msg: 'Senha atualizada com sucesso!'
      })
    } catch (e) {
      return e
    }
  }
}

export default handler
