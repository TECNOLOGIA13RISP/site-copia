import React, { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'
type Props = {
  title?: string
  column?: number
  children?: ReactNode
}

const LayoutSubpage: React.FC<Props> = ({ title, column = 12, children }) => {
  return (
    <S.Wrapper>
      <header className="masthead-subpage no-print">
        <div className="black-overlay">
          <Container>
            <Row className="align-items-center">
              <Col className="text-center">
                <h1>{title}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <Container>
        <Row className="justify-content-center">
          <Col sm={column} xs={11} className="subpage">
            {children}
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}

export { LayoutSubpage }
