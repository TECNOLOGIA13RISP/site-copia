import LayoutPrintFooter from 'components/Layout/Print/Footer'
import LayoutPrintHeader from 'components/Layout/Print/Header'
import React from 'react'
import * as S from '../stylesPrint'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const PrintExameCalculo: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <S.WrapperPrint>
      <LayoutPrintHeader
        title="ILUSTRÍSSIMO SENHOR 13º OFICIAL REGISTRADOR IMOBILIÁRIO DE SÃO PAULO"
        personType={data.otherFields.personType}
      />
      {data.otherFields.personType === 'PF' && (
        <p>
          <strong>{data.nome}</strong>, <strong>{data.nacionalidade}</strong>,{' '}
          <strong>{data.estadoCivil}</strong>, <strong>{data.profissao}</strong>
          , portador(a) da cédula de identidade RG <strong>{data.rg}</strong>,
          orgão expedidor <strong>{data.orgaoExpedidor}</strong>, inscrito(a) no
          CPF/MF sob o nº <strong>{data.cpf}</strong>, residente e
          domiciliado(a) na {data.endereco}, {data.numero}, {data.bairro} -{' '}
          {data.complemento} - {data.cidade} - {data.estado}, telefone{' '}
          <strong>{data.telefone}</strong>. ,<strong>{data.email}</strong>.
        </p>
      )}
      {data.otherFields.personType === 'PJ' && (
        <p>
          {data.razaoSocial}, com sede na {data.endereco}, {data.numero},{' '}
          {data.bairro} - {data.complemento} - {data.cidade} - {data.estado},
          telefone {data.telefone}, inscrito(a) no CNPJ/MF sob o nº {data.cnpj},
        </p>
      )}
      <p>Vem requerer digne-se Vossa Senhoria recepcionar o título:</p>
      <p>
        <strong>{data.otherFields?.obsGeneral}</strong>
      </p>
      <p>
        para <strong>EXAME E CÁLCULO</strong> dos correspondentes emolumentos,
        nos temos do parágrafo único do art. 12 da Lei Federal nº 6.015/1973(1)
        , ciente de que{' '}
        <strong>
          NÃO IMPORTARÁ NOS EFEITOS DE PRIORIDADE PREVISTA NO ART. 186(2) DA
          REFERIDA LEI.
        </strong>
        (3)
      </p>
      <LayoutPrintFooter
        personType="PJ"
        day={data.dia}
        month={data.mes}
        year={data.ano}
        obs=""
      />
      <p>
        <strong>Lei Federal nº 6.015/1973:</strong>
      </p>

      <p>Art. 12. (....)</p>

      <p>
        (1)Parágrafo único. Independem de apontamento no Protocolo os títulos
        apresentados apenas para exame e cálculo dos respectivos emolumentos.
      </p>

      <p>
        (2)Art. 186 - O número de ordem determinará a prioridade do título e
        esta a preferência dos direitos reais, ainda que apresentados pela mesma
        pessoa mais de um título simultaneamente. (Renumerado do art. 187 com
        nova redação pela Lei nº 6.216, de 1975).
      </p>

      <p>
        Normas de Serviço da Corregedoria Geral da Justiça do Estado de São
        Paulo-NSCGJSP, Tomo II, Capitulo XX, item 16 e subitem 20.1:
      </p>

      <p>
        (3)16. No Livro de Recepção de Títulos serão lançados exclusivamente os
        títulos apresentados para exame e cálculo dos respectivos emolumentos, a
        teor do art. 12, parágrafo único, da Lei n° 6.015/73, os quais não gozam
        dos efeitos da prioridade.
      </p>

      <p>
        (3)20.1. O recibo-protocolo de títulos ingressados na serventia apenas
        para exame e cálculo deverá conter a natureza do título, o nome do
        apresentante, a data em que foi expedido, a data prevista para
        devolução, a expressa advertência de que não implica prioridade prevista
        no art. 186, da Lei n° 6.015/73, o número do protocolo ou a senha, e o
        endereço eletrônico para acompanhamento do procedimento registral pela
        internet.
      </p>
    </S.WrapperPrint>
  )
}

export default PrintExameCalculo
