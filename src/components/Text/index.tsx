import React from 'react'
import theme from '../../styles/theme'
import * as S from './styles'
interface Props {
  size?: string
  weight?: 300 | 500 | 700 | 800 | number
  label: string
  color?: string
  className?: string
}
const Text: React.FC<Props> = ({
  size = 'light',
  weight = 300,
  label,
  color = 'dark',
  className,
  ...rest
}) => {
  return (
    <S.TextSample
      {...rest}
      className={className}
      size={theme.sizes[size as keyof typeof theme.sizes]}
      weight={weight}
      color={theme.colors.theme[color as keyof typeof theme.colors.theme]}
    >
      {label}
    </S.TextSample>
  )
}

export default Text
