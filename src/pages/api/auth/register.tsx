// import { withSentry } from '@sentry/nextjs'
import { sql_query } from 'lib/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O CPF é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
        cpf: Yup.string().required('O CPF é obrigatório')
      })
      await schema.validate(req.body, { abortEarly: false })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { errors } = error
      return res.json({ success: false, errors })
    }

    try {
      const { email, cpf, name, password, type, ddd, phone } = req.body

      const countEmail = await sql_query(
        `
        SELECT count(*)
        FROM TabCadastroSite
        WHERE Email = '${email}'`
      )

      if (countEmail.recordset && countEmail.recordset[0][''] > 0) {
        return res.json({
          success: false,
          msg: 'E-mail já cadastrado'
        })
      }

      const countCPF = await sql_query(
        `
        SELECT count(*)
        FROM TabCadastroSite
        WHERE Cpf = '${cpf}'`
      )

      if (countCPF.recordset && countCPF.recordset[0][''] > 0) {
        return res.json({
          success: false,
          msg: 'CPF já cadastrado'
        })
      }

      const sqlQuery = `INSERT INTO TabCadastroSite
      (Tipo, Nome, CPF, Email, Senha, Endereco, Numero, Bairro, CEP, Cidade, Estado, AutorizaEnvio, DDD, Telefone)
      VALUES('${type}', '${name}',  '${cpf}', '${email}',  '${password}', '-', '-', '-', '00000000', '-', '-', 'S',  ${ddd}, ${phone})`

      const { rowsAffected } = await sql_query(sqlQuery)

      if (rowsAffected[0] === 1) {
        return res.json({
          success: true,
          msg: 'Cadastro realizado com sucesso!'
        })
      }
      return res.json({ success: false, msg: 'Falha ao realizar o cadastro' })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      res.status(200).json({ success: false, error: e.message })
    }
  }
}

export default handler
