// import { withSentry } from '@sentry/nextjs'
import { decodeToken } from 'lib/auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body: { token }
  } = req

  if (method === 'POST') {
    try {
      const schema = Yup.object().shape({
        token: Yup.string().required('O TOKEN é obrigatório')
      })
      await schema.validate(req.body, { abortEarly: false })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { errors } = error
      return res.json({ success: false, errors })
    }
    const validateToken = decodeToken(token)

    if (validateToken?.payload) {
      return res.json({
        success: true,
        email: validateToken.payload.Email
      })
    }
    return res.json({ success: false, msg: 'Token inválido!' })
  }
}

export default handler
