import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

const TemplateBase = (props: Props) => {
  return (
    <S.Div className="wrapper d-flex align-items-stretch">
      <Container>{props.children}</Container>
    </S.Div>
  )
}

export { TemplateBase }
