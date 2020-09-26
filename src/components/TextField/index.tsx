import React from 'react'
import {
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  FormControl
} from '@chakra-ui/core'
import { FieldError, UseFormMethods } from 'react-hook-form'

interface TextFieldProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  label?: string
  error?: FieldError
}

export const TextField: React.FC<TextFieldProps & InputProps> = ({
  label,
  error,
  register,
  name,
  ...textFieldProps
}) => (
  <FormControl isInvalid={Boolean(error?.message)}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
      ref={register}
      name={name}
      isInvalid={Boolean(error?.message)}
      {...textFieldProps}
    />
    <FormErrorMessage>{error?.message}</FormErrorMessage>
  </FormControl>
)
