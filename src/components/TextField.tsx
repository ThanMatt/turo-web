import React, { LegacyRef } from 'react'
import { FormHelperText, FormLabel, Input, InputProps } from '@chakra-ui/core'
import { FieldError } from 'react-hook-form'

type TextFieldProps = {
  label?: string
  error?: FieldError
  inputRef?: LegacyRef<HTMLInputElement>
  helperText?: string
}

const TextField: React.FC<TextFieldProps & InputProps> = ({
  label,
  error,
  inputRef,
  name,
  helperText,
  ...textFieldProps
}) => {
  return (
    <FormLabel htmlFor={name}>
      <Input name={name} placeholder='Basic usage' isInvalid={Boolean(error?.message)} {...textFieldProps} />
      {error?.message && <FormHelperText {...textFieldProps}>{error?.message}</FormHelperText>}
    </FormLabel>
  )
}

export default TextField
