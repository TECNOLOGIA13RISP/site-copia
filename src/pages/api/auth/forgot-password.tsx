// import { withSentry } from '@sentry/nextjs'
import jwt from 'jsonwebtoken'
import { sql_query } from 'lib/database'
import { sendMailDefault } from 'lib/sendmail'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório')
      })
      await schema.validate(req.body, { abortEarly: false })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { errors } = error
      return res.json({ success: false, errors })
    }

    try {
      const { email } = req.body

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
          msg: 'E-mail não localizado em nossa base.'
        })
      }

      const results = await sql_query(
        `
        SELECT TOP (1) IdCadastro, Nome, Email, AutorizaEnvio
        FROM TabCadastroSite
        WHERE Email = '${email}'`
      )

      const token: string = jwt.sign(
        results.recordset[0],
        process.env.JWT_SECRET || 'aca78c4f-c969-4245-a760-bd10cfee3901',
        {
          expiresIn: 15000 // expires in 5min
        }
      )
      const link = `${process.env.SITE_URL}/recuperar-senha?tokenSecure=${token}`
      const data = await sendMailDefault(
        email.toString(),
        process.env.EMAIL_TEMPLATE_RECOVER_PASSWORD_ID || '',
        {
          email,
          link
        }
      )

      return res.json(data)
    } catch (e) {
      return res
        .status(500)
        .json({ success: false, error: (e as Error).message })
    }
  }
}

export default handler
// export default withSentry(handler)
