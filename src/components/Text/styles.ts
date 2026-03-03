import styled, { css } from 'styled-components'

interface Props {
  size: number
  weight: number
  color: string
}

export const TextSample = styled.text<Props>`
  ${({ size, weight, color }) => {
    return css`
      display: block;
      color: ${color};
      font-weight: ${weight};
      font-size: ${size}px;
    `
  }}
`
