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

const PrintAverbacao: React.FC<Props> = ({ data }) => {
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
      {data?.trancricoes.length > 0 && (
        <p>
          Vem requerer digne-se Vossa Senhoria AVERBAR na(s) transcrição(ões)
          número(s) <strong>{data.trancricoes}</strong>, desse Registro de
          Imóveis:
        </p>
      )}
      {data.matriculas.length > 0 && (
        <p>
          Vem requerer digne-se Vossa Senhoria AVERBAR na(s) matrícula(s)
          número(s) <strong>{data.matriculas}</strong>, desse Registro de
          Imóveis:
        </p>
      )}
      <Table striped bordered responsive size="lg">
        <tbody>
          {data.otherFields?.section1 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a alteração do(s) número(s) do(s) prédio(s) objeto da(s)
                  matrícula(s) e/ou transcrição(ões) indicada(s) acima de{' '}
                  <strong>{data.section1A}</strong> para{' '}
                  <strong>{data.section1B}</strong>
                </p>
                <p className="text-table font-italic">
                  (anexar certidão de dados cadastrais expedida pela Prefeitura
                  de São Paulo);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section2 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a alteração do logradouro de <strong>{data.section2B}</strong>{' '}
                  para <strong>{data.section2B}</strong>
                </p>
                <p className="text-table font-italic">
                  (anexar certidão de dados cadastrais expedida pela Prefeitura
                  de São Paulo);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section3 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a construção de área de <strong>{data.section3A}</strong>{' '}
                  metros quadrados, do(s) prédio(s) que recebeu(ram) o(s)
                  número(s) <strong>{data.section3B}</strong>, da{' '}
                  <strong>{data.section3C}</strong>, atribuindo-se para efeitos
                  fiscais o valor de R$ <strong>{data.section3D}</strong> ({' '}
                  <strong>XXXX</strong> )
                </p>
                <p className="text-table font-italic">
                  (anexar alvará de conclusão de construção (“Habite-se”)
                  expedido pela Prefeitura de São Paulo e Certidão Negativa do
                  Instituto Nacional da Seguridade Social - INSS com finalidade
                  para averbação de construção);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section4 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a demolição do(s) prédio(s) número(s){' '}
                  <strong>{data.section4A}</strong>, da{' '}
                  <strong>{data.section4B}</strong>
                </p>
                <p className="text-table font-italic">
                  (anexar alvará de demolição de construção expedido pela
                  Prefeitura de São Paulo e Certidão Negativa do Instituto
                  Nacional da Seguridade Social - INSS com finalidade para
                  averbação de demolição);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section5 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a reforma do(s) prédio(s) número(s){' '}
                  <strong>{data.section5A}</strong>, da{' '}
                  <strong>{data.section5B}</strong>, que teve acréscimo de área{' '}
                  <strong>{data.section5C}</strong> metros quadrados e totaliza
                  a área construída de <strong>{data.section5D}</strong> metros
                  quadrados, atribuindo-se para efeitos fiscais o valor de R${' '}
                  <strong>{data.section5E}</strong> (<strong>XXXX</strong>)
                </p>
                <p className="text-table font-italic">
                  (anexar alvará de conclusão de construção (“Habite-se”)
                  expedido pela Prefeitura de São Paulo e Certidão Negativa do
                  Instituto Nacional da Seguridade Social - INSS com finalidade
                  para averbação de construção)
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section6 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  a alteração do estado civil de{' '}
                  <strong>{data.section6A}</strong>
                  para <strong>{data.section6B}</strong>
                </p>
                <p className="text-table font-italic">
                  (anexar certidão atualizada de casamento, e, se possível RG e
                  CPF de ambos cônjuges);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section7 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  o cancelamento do usufruto registrado na(s) mencionada(s)
                  matrícula(s) sob o(s) número(s)
                  <strong>{data.section7A}</strong> e/ou inscrito(s) sob o(s)
                  número(s)
                  <strong>{data.section7B}</strong>, no livro 4 (Decreto nº
                  4.857/1939), em virtude do falecimento do(a)(s)
                  usufrutuário(a)(s)
                </p>
                <p className="text-table font-italic">
                  (anexar rtidão(ões) de óbito(s) do(a)(s) usufrutuário(a)(s));
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section8 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  o cancelamento da(s) hipoteca(s) registrada(s) na(s)
                  mencionada(s) matrícula(s) sob o(s) número(s){' '}
                  <strong>{data.section8A}</strong>
                  e/ou inscrita(s) sob o(s) número(s){' '}
                  <strong>{data.section8B}</strong>, no livro 2 (Decreto nº
                  4.857/1939), em razão da autorização concedida pelo(a)
                  credor(a)
                </p>
                <p className="text-table font-italic">
                  (anexar o instrumento de quitação correspondente - art. 251,
                  da Lei Federal nº 6.015/1973);
                </p>
              </td>
            </tr>
          )}
          {data.otherFields?.section9 && (
            <tr>
              <td width="60" className="text-center">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </td>
              <td>
                <p className="text-table">
                  outras hipóteses previstas no inciso II do art. 167 da Lei
                  Federal nº 6.015/1973 ou legislação especial:
                </p>
                <p className="text-table">{data.section9A}</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <p>Em anexo, seguem os seguintes documentos:</p>
      <p>
        <strong>{data.otherFields?.obsGeneral}</strong>
      </p>
      <p>
        Em caso de recusa de qualquer das averbações requeridas, ficam
        autorizadas aquelas consideradas possíveis.
      </p>
      <LayoutPrintFooter
        personType="PJ"
        day={data.dia}
        month={data.mes}
        year={data.ano}
        obs="OBSERVAÇÃO: Os documentos anexados na forma de cópia(s) reprográfica(s) deverá(ão) estar autenticado(s) e o(s) correspondente(s) original(ais) poderá(ão) ser solicitado(s)."
      />
    </S.WrapperPrint>
  )
}

export default PrintAverbacao
