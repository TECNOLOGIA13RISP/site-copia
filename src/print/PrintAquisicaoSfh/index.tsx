import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LayoutPrintFooter from 'components/Layout/Print/Footer'
import LayoutPrintHeader from 'components/Layout/Print/Header'
import React from 'react'
import { Table } from 'react-bootstrap'
import * as S from '../stylesPrint'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const PrintAquisicaoSfh: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <S.WrapperPrint>
      <LayoutPrintHeader
        title="ILUSTRÍSSIMO SENHOR 13º OFICIAL REGISTRADOR IMOBILIÁRIO DE SÃO PAULO"
        personType={data.otherFields.personType}
      />
      <p>
        Eu <strong>{data.nome}</strong>, <strong>{data.nacionalidade}</strong>,{' '}
        <strong>{data.estadoCivil}</strong>, <strong>{data.profissao}</strong>,
        portador(a) da cédula de identidade RG <strong>{data.rg}</strong>, orgão
        expedidor <strong>{data.orgaoExpedidor}</strong>, inscrito(a) no CPF/MF
        sob o nº <strong>{data.cpf}</strong>
        {data.otherFields.personType === 2 ? ',' : '.'}
        {data.otherFields.personType === 2 && (
          <>
            {' '}
            e Eu <strong>{data.nome2}</strong>,{' '}
            <strong>{data.nacionalidade2}</strong>,{' '}
            <strong>{data.estadoCivil2}</strong>,{' '}
            <strong>{data.profissao2}</strong>, portador(a) da cédula de
            identidade RG <strong>{data.rg2}</strong>, orgão expedidor{' '}
            <strong>{data.orgaoExpedidor2}</strong>, inscrito(a) no CPF/MF sob o
            nº <strong>{data.cpf2}</strong>.
          </>
        )}
      </p>
      <p>Declaramos, para os devidos fins e sob pena da lei, que:</p>
      <Table striped bordered responsive size="lg">
        <tbody>
          {data.otherFields?.section1 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  A compra do imóvel
                  <strong>{data.section1A}</strong>
                  sob o nº
                  <strong>{data.section1B}</strong>, nesse Registro de Imóveis,
                  trata-se de nossa primeira aquisição imobiliária, para fins
                  residenciais, financiada pelo Sistema Financeiro da Habitação
                  - SFH, porquanto fazemos jus à redução de 50% dos emolumentos
                  e das custas, nos termos do disposto no art. 290 da Lei
                  Federal nº 6.015/1973.
                </p>
              </td>
            </tr>
          )}
          {!data.otherFields?.section1 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  Não se trata de primeira aquisição imobiliária, para fins
                  residenciais, financiada pelo Sistema Financeiro da Habitação
                  - SFH; declaração esta para atender o disposto no referido
                  art. 290 da Lei 6.015/1973.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <p>Por ser expressão da verdade, firmamos a presente declaração (1)</p>
      <LayoutPrintFooter
        personType={data.otherFields.personType}
        day={data.dia}
        month={data.mes}
        year={data.ano}
        obs=""
      />
      <p>
        <strong>(1) CÓDIGO PENAL</strong>
      </p>
      <p>
        Art. 299 - Omitir, em documento público ou particular, declaração que
        dele devia constar, ou nele inserir ou fazer inserir declaração falsa ou
        diversa da que devia ser escrita, com o fim de prejudicar direito, criar
        obrigação ou alterar a verdade sobre fato juridicamente relevante:
      </p>
      <p>
        <strong>
          Pena - reclusão, de um a cinco anos, e multa, se o documento é
          público, e reclusão de um a três anos, e multa, de quinhentos mil réis
          a cinco contos de réis, se o documento é particular. (Vide Lei nº
          7.209, de 1984)
        </strong>
      </p>
      <p>
        <strong>
          Parágrafo único - Se o agente é funcionário público, e comete o crime
          prevalecendo-se do cargo, ou se a falsificação ou alteração é de
          assentamento de registro civil, aumenta-se a pena de sexta parte.
        </strong>
      </p>
    </S.WrapperPrint>
  )
}

export default PrintAquisicaoSfh
