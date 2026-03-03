// import { withSentry } from '@sentry/nextjs'
import { sendMailDefault } from 'lib/sendmail'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body: {
      nome = 'N.D.',
      email = 'N.D.',
      telefone = 'N.D.',
      mensagem = 'N.D.'
    }
  } = req
  if (method === 'POST') {
    try {
      const data = await sendMailDefault(
        process.env.EMAIL_TEMPLATE_CONTACT_TO_EMAIL || '',
        process.env.EMAIL_TEMPLATE_CONTACT_ID || '',
        {
          nome,
          email,
          telefone,
          mensagem
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
