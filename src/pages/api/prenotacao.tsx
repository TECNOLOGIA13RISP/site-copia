import { getAppCookies, verifyToken } from 'lib/auth'
import { sql_query } from 'lib/database'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method
  } = req

  const token = getAppCookies(req)
  const validateToken = verifyToken(token)

  if (!validateToken)
    res.status(200).json({ success: false, msg: 'NOT_AUTHORIZED' })

  if (method === 'POST') {
    try {
      const results = await sql_query(
        `SELECT TOP(1) A.Protocolo,
          A.Apresentante,
          A.Email,
          A.SYS_Estado,
          A.Status,
          A.Data_Prazo,
          A.DepositoApto,
          A.Complemento,
          A.NotaDevolutiva,
          B.Texto,
          B.Observacoes
          FROM VW_ViewPrenotados_Site A WITH (NOLOCK)
          LEFT JOIN TabPrenotadosExigencias B ON A.Protocolo = B.IdPrenotado
          WHERE Protocolo = '${id}'
        `
      )
      return res.json(results.recordsets[0][0] ? results.recordsets[0][0] : {})
    } catch (e) {
      console.log(e)
      res.status(500).json({
        success: false,
        msg: 'NOT_AUTHORIZED',
        error: (e as Error).message
      })
    }
  }
}

export default handler
// export default withSentry(handler)
