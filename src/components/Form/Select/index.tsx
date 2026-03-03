import { useField } from '@unform/core'
import Text from 'components/Text'
import React, { useEffect, useRef } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'

interface Props extends SelectProps<OptionTypeBase> {
  label: string
  placeholder?: string
  name: string
  disabled?: boolean
  isRequerimento?: boolean
}

const Select: React.FC<Props> = ({
  name,
  label,
  placeholder = 'Escolha um registro',
  isRequerimento = false,
  disabled = false,
  ...rest
}) => {
  const selectRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <div>
      {label === '' && (
        <Text
          label={label}
          color="dark"
          size="small"
          weight={500}
          className="pb-1 pt-3"
        />
      )}
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        disabled={disabled}
        placeholder={placeholder}
        className={isRequerimento && error ? 'error-requerimento' : ''}
        {...rest}
      />
      {error && !isRequerimento && (
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
export default Select
