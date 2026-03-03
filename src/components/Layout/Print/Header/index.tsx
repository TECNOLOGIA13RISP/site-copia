import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import logoPic from '/public/images/logo_oficial.webp'

interface Props {
  title: string
  personType?: string
}

const LayoutPrintHeader: React.FC<Props> = ({ title, personType = '' }) => {
  return (
    <S.Wrapper>
      <div className="text-center">
        <Image src={logoPic} />
        <h3>{personType === 'PJ' ? 'PESSOA JURÍDICA' : 'PESSOA FÍSICA'}</h3>
        <h1>{title}</h1>
      </div>
    </S.Wrapper>
  )
}

export default LayoutPrintHeader
