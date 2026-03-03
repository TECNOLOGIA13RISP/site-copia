import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as S from './styles'

interface Props {
  personType?: string | number
  day: string
  month: string
  year: string
  obs?: string
}

const LayoutPrintFooter: React.FC<Props> = ({
  personType = 'PF',
  day,
  month,
  year,
  obs
}) => {
  return (
    <S.Wrapper>
      <p className="text-center">
        São Paulo, <strong>{day}</strong> de <strong>{month}</strong> de{' '}
        <strong>{year}</strong>
      </p>
      {['PF', '1'].includes(personType.toString()) && (
        <p className="text-center block-sign">
          (Assinatura do(a) Requerente com firma reconhecida)
        </p>
      )}
      {personType === 2 && (
        <Row>
          <Col>
            <p className="text-center block-sign2">
              (Assinatura do(a) Requerente com firma reconhecida)
            </p>
          </Col>
          <Col>
            <p className="text-center block-sign2">
              (Assinatura do(a) Requerente com firma reconhecida)
            </p>
          </Col>
        </Row>
      )}
      {['PJ'].includes(personType.toString()) && (
        <p className="text-center block-sign">
          (Assinatura do(a) Representante da Requerente com firma reconhecida)
          <br />
          (Anexar cópias autenticadas dos atos constitutivos atualizados)
        </p>
      )}
      {obs && (
        <p>
          <strong>{obs}</strong>
        </p>
      )}
      <hr />
      <div className="footer">
        <p className="text-center">
          Avenida São Gabriel nº 201 - 1º andar - Jardim Paulista - CEP
          01435-001 - São Paulo - SP
        </p>
        <p className="text-center">
          Fone (11) 3218-0090 - E-mail: 13registro@13registro.com.br
        </p>
      </div>
    </S.Wrapper>
  )
}

export default LayoutPrintFooter

