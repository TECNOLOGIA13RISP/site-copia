// import { withSentry } from '@sentry/nextjs'
import jwt from 'jsonwebtoken'
import { sql_query } from 'lib/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string().required('A senha é obrigatória')
    })

    await schema
      .validate(req.body, { abortEarly: false })
      .catch((e) => res.json(e))

    try {
      const { email, password } = req.body

      const results = await sql_query(
        `
        SELECT TOP (1) IdCadastro, Nome, Email, AutorizaEnvio
        FROM TabCadastroSite
        WHERE Email = '${email}' AND Senha = '${password}'`
      )

      if (results.rowsAffected && results.rowsAffected[0] === 0) {
        return res.json({ success: false, msg: 'E-mail ou senha inválidos' })
      }

      const token: string = jwt.sign(
        results.recordset[0],
        process.env.JWT_SECRET || 'aca78c4f-c969-4245-a760-bd10cfee3901',
        {
          expiresIn: 15000 // expires in 5min
        }
      )

      return res.json({
        success: true,
        token: token,
        user: results.recordset[0],
        msg: 'SUCESSO'
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      res.status(500).json({ success: false, error: e.message })
    }
  }
}

export default handler
// export default withSentry(handler)
