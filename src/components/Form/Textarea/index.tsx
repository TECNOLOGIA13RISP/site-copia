import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import Text from '../../Text'

type Props = {
  label?: string
  placeholder?: string
  name: string
  type?: string
  disabled?: boolean
}
const Textarea = <PROPS extends Props>({
  name,
  type = 'text',
  label = '',
  placeholder = 'Preencha esse campo',
  disabled = false,
  ...rest
}: PROPS): JSX.Element => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

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
        as="textarea"
        rows={3}
        ref={inputRef}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? 'error-requerimento' : ''}
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

export default Textarea
