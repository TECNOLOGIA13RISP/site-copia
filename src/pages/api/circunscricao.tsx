import { sql_query } from 'lib/database'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { address, type },
    method
  } = req

  if (method === 'POST') {
    try {
      const sql = `SELECT TOP (10) TipoEndereco, Endereco, Observacoes
      FROM TBL_Circunscricao  A WITH (NOLOCK)
      WHERE TipoEndereco = '${type}'
      AND Endereco LIKE '%${address}%' ORDER BY Endereco ASC
      `

      const results = await sql_query(sql)
      const data = results.recordsets[0][0] ? results.recordsets[0] : []

      return res.json({ success: true, data, count: data.length })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      res.status(200).json({ error: e.message })
    }
  }
}

export default handler
// export default withSentry(handler)
