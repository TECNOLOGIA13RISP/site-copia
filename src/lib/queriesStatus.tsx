import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Button } from 'react-bootstrap'
import { CertidaoProps, PrenotacaoProps } from './interface'

export function renderCurrentPrenotacaoStatus(
  prenotacaoData: PrenotacaoProps,
  status: number
) {
  const monthChange = Number(
    prenotacaoData?.Data_Prazo?.toString()?.split('T')[0].split('-')[1]
  )

  function changeMonth(value: number): string {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    return months[value]
  }
  switch (status) {
    case 0:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo:{' '}
            <strong>{prenotacaoData?.Protocolo}</strong>.
          </p>
          <p>
            <strong>Não localizado!</strong>
          </p>
        </>
      )
    case 1:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo:{' '}
            <strong>{prenotacaoData?.Protocolo}</strong>.
          </p>
          <p>
            O título está <strong>EM EXAME</strong>.
          </p>
          <p>
            Prazo para resposta registro até{' '}
            {prenotacaoData?.Data_Prazo &&
              format(
                new Date(prenotacaoData?.Data_Prazo),
                "dd' de' MMMM' de' yyyy.",
                {
                  locale: ptBr
                }
              )}
          </p>
        </>
      )
    case 2:
      return (
        <>
          {Number(prenotacaoData?.Complemento) === 0 && (
            <>
              <p>
                Prenotação de título sob o protocolo:{' '}
                <strong>{prenotacaoData?.Protocolo}</strong>.
              </p>
              <p>
                O título foi examinado e considerado{' '}
                <strong>APTO PARA REGISTRO</strong>.
              </p>
            </>
          )}
          {Number(prenotacaoData?.Complemento) > 0 && (
            <>
              <p>
                Prenotação de título sob o protocolo:{' '}
                <strong>{prenotacaoData?.Protocolo}</strong>.
              </p>
              <p>
                O título foi examinado e considerado{' '}
                <strong>APTO PARA REGISTRO</strong>.
              </p>
              <p>
                Atenção: para efetivar o registro é necessário efetuar pagamento
                complementar no valor de R$ {prenotacaoData?.Complemento}.
              </p>
              <p>
                O pagamento pode ser feito através de depósito no banco{' '}
                <strong>Santander</strong>, agência: <strong>3630</strong>,
                conta:
                <strong>13007130-5</strong>, CNPJ:{' '}
                <strong>45.572.393/0001-46</strong>, ou ainda na recepção do
                cartório.
              </p>
              <p>
                Caso opte pelo depósito bancário, é necessário enviar cópia do
                comprovante com a indicação do número do protocolo para o fax:
                (11) 3074-2666 ou para o e-mail depositos@13registro.com.br.
              </p>
            </>
          )}
        </>
      )
    case 3:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo:{' '}
            <strong>{prenotacaoData?.Protocolo}</strong>.
          </p>
          <p>
            O título deste protocolo é objeto de procedimento administrativo de
            dúvida perante a Egrégia 1ª Vara de Registros Públicos de São Paulo,
            Praça João Mendes, 22º andar.
          </p>
        </>
      )
    case 4:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo:{' '}
            <strong>{prenotacaoData?.Protocolo}</strong>.
          </p>
          <p>
            O título foi examinado e considerado <strong>IRREGULAR</strong>. A
            via original da nota devolutiva e o correspondente título
            encontram-se à disposição em cartório.
          </p>
          <p>
            Se desejar, agende previamente sua visita através do telefone{' '}
            <strong>(11) 3218-0090</strong> de segunda a sexta-feira, das 09:00
            às 16:00 horas. No dia agendado, lembre-se de trazer a{' '}
            <strong>via original do protocolo</strong>.
          </p>
          {/* TODO: BOTAO ENVIAR NOTA DEVOLUTIVA */}
          {prenotacaoData?.Texto !== null && prenotacaoData?.Email !== null && (
            <>
              <p>Existe nota devolutiva: </p>
              <Button>Enviar Nota Devolutiva por E-mail</Button>
            </>
          )}
        </>
      )
    case 5:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo:{' '}
            <strong>{prenotacaoData?.Protocolo}</strong>.
          </p>
          <p>
            O título foi <strong>REGISTRADO</strong>.
          </p>
          <p>
            Retirada prevista para:{' '}
            {prenotacaoData?.Data_Prazo?.toString()
              ?.split('T')[0]
              .split('-')[2] +
              ' de ' +
              changeMonth(monthChange - 1)}
            {' de ' +
              prenotacaoData?.Data_Prazo?.toString()
                ?.split('T')[0]
                .split('-')[0]}
          </p>
        </>
      )
    case 6:
      return (
        <>
          {prenotacaoData?.SYS_Estado !== 'Vencido' && (
            <>
              <p>
                Prenotação de título sob o protocolo:{' '}
                <strong>{prenotacaoData?.Protocolo}</strong>.
              </p>
              <p>
                Estado atual do título prenotado:{' '}
                <strong>{prenotacaoData?.SYS_Estado}</strong>.
              </p>
            </>
          )}
          {prenotacaoData?.SYS_Estado === 'Vencido' && (
            <>
              <p>
                Prenotação de título sob o protocolo:{' '}
                <strong>{prenotacaoData?.Protocolo}</strong>.
              </p>
              <p>
                A prenotação foi <strong>CANCELADA POR DECURSO DE PRAZO</strong>
                .
              </p>
            </>
          )}
        </>
      )
    case 7:
      return (
        <>
          <p>
            Prenotação de título sob o protocolo: {prenotacaoData?.Protocolo}.
          </p>
          <p>
            Estado atual do título prenotado:{' '}
            <strong>DEVOLVIDO ELETRONICAMENTE</strong>
          </p>
        </>
      )
    default:
      break
  }
}

export function renderCurrentCertidaoStatus(
  certidaoData: CertidaoProps,
  status: string
) {
  switch (status) {
    case 'Devolvido':
      return (
        <>
          <p>
            Pedido de certidão protocolado sob o número:{' '}
            <strong>{certidaoData?.Protocolo}</strong>.
          </p>
          <p>
            {' '}
            <strong>O protocolo em questão já foi devolvido</strong>.
          </p>
        </>
      )
    case 'cancelada':
      return (
        <>
          {certidaoData?.CertidaoBaixada === 'N' &&
            certidaoData?.Deposito === 0.0 && (
              <>
                <p>
                  Pedido de certidão protocolado sob o número:{' '}
                  <strong>{certidaoData?.Protocolo}</strong>.
                </p>
                <p>
                  <strong>Cancelada por falta de pagamento</strong>.
                </p>
              </>
            )}
          {certidaoData?.CertidaoBaixada !== 'N' && (
            <>
              <p>
                Pedido de certidão protocolado sob o número:{' '}
                <strong>{certidaoData?.Protocolo}</strong>.
              </p>
              <p>
                <strong>Este protocolo foi cancelado</strong>.
              </p>
            </>
          )}
        </>
      )
    default:
      return (
        <>
          {certidaoData?.CertidaoBaixada === 'S' && (
            <>
              <p>
                Pedido de certidão protocolado sob o número:{' '}
                <strong>{certidaoData?.Protocolo}</strong>.
              </p>
              <p>
                <strong>Disponível para Retirada</strong>.
              </p>
            </>
          )}

          {certidaoData?.CertidaoBaixada === 'N' &&
            certidaoData?.Deposito === 0 &&
            certidaoData?.Custos !== 0 && (
              <>
                <p>
                  Pedido de certidão protocolado sob o número:{' '}
                  <strong>{certidaoData?.Protocolo}</strong>.
                </p>
                <p>
                  <strong>Aguardando pagamento</strong>.
                </p>
              </>
            )}

          {certidaoData?.CertidaoBaixada === 'N' &&
            certidaoData?.SaldoCertidao === 0 && (
              <>
                <p>
                  Pedido de certidão protocolado sob o número:{' '}
                  <strong>{certidaoData?.Protocolo}</strong>.
                </p>
                <p>
                  <strong>Em exame</strong>.
                </p>
              </>
            )}
        </>
      )
  }
}

