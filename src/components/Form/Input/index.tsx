/* eslint-disable @typescript-eslint/no-unused-vars */
import { useField } from '@unform/core'
import React, { useCallback, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import {
  maskCNPJ,
  maskCPF,
  maskCurrencyBRL,
  maskDateBRL,
  maskMobile,
  maskPhone,
  maskPostalCode,
  maskRG
} from 'utils/masks'
import Text from '../../Text'

type Props = {
  label?: string
  placeholder?: string
  name: string
  type?: string
  disabled?: boolean
  sizeInput?: string
  mask?: string
}
const Input = <PROPS extends Props>({
  name,
  type = 'text',
  label = '',
  placeholder = 'Preencha esse campo',
  disabled = false,
  sizeInput = 'lg',
  mask,
  ...rest
}: PROPS): JSX.Element => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case 'maskPostalCode':
          maskPostalCode(e)
          break
        case 'maskDateBRL':
          maskDateBRL(e)
          break
        case 'maskCurrencyBRL':
          maskCurrencyBRL(e)
          break
        case 'maskCPF':
          maskCPF(e)
          break
        case 'maskRG':
          maskRG(e)
          break
        case 'maskCNPJ':
          maskCNPJ(e)
          break
        case 'maskMobile':
          maskMobile(e)
          break
        case 'maskPhone':
          maskPhone(e)
          break
        default:
          break
      }
    },
    [mask]
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <div>
      <Text
        label={label}
        color="dark"
        size="small"
        weight={500}
        className="pb-1 pt-3"
      />
      <Form.Control
        ref={inputRef}
        type={type}
        defaultValue={defaultValue}
        placeholder={''} // placeholder
        disabled={disabled}
        size={'lg'}
        className={error ? 'error-requerimento' : ''}
        onKeyUp={handleKeyUp}
        {...rest}
      />
      {error && (
        <Text
          label={error}
          color="danger"
          size="xsmall"
          weight={300}
          className="pb-2"
        />
      )}
    </div>
  )
}

export default Input
