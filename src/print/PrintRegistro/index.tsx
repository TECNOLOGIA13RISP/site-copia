import LayoutPrintFooter from 'components/Layout/Print/Footer'
import LayoutPrintHeader from 'components/Layout/Print/Header'
import React from 'react'
import * as S from '../stylesPrint'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const PrintRegistro: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <S.WrapperPrint>
      <LayoutPrintHeader
        title="ILUSTRÍSSIMO SENHOR 13º OFICIAL REGISTRADOR IMOBILIÁRIO DE SÃO PAULO"
        personType={'PF'}
      />
      <p>
        <strong>{data.nome}</strong>, <strong>{data.nacionalidade}</strong>,{' '}
        <strong>{data.estadoCivil}</strong>, <strong>{data.profissao}</strong>,
        portador(a) da cédula de identidade RG <strong>{data.rg}</strong>, orgão
        expedidor <strong>{data.orgaoExpedidor}</strong>, inscrito(a) no CPF/MF
        sob o nº <strong>{data.cpf}</strong>, residente e domiciliado(a) na{' '}
        {data.endereco}, {data.numero}, {data.bairro} - {data.complemento} -{' '}
        {data.cidade} - {data.estado}, telefone <strong>{data.telefone}</strong>
        . ,<strong>{data.email}</strong>.
      </p>

      <p>
        Vem requerer a Vossa Senhoria o
        <strong>REGISTRO DA ESCRITURA DE PACTO ANTENUPCIAL</strong> anexa, e
        declara, como primeiro domicílio conjugal o seguinte domicílio:
        (Endereço):
      </p>
      <p>
        {data.endereco2}, {data.numero2}, {data.bairro2} - {data.complemento2} -{' '}
        {data.cidade2} - {data.estado2}.
      </p>
      <LayoutPrintFooter
        personType="PF"
        day={data.dia}
        month={data.mes}
        year={data.ano}
        obs=""
      />
    </S.WrapperPrint>
  )
}

export default PrintRegistro
