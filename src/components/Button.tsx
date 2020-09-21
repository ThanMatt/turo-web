import React from 'react'
import { Button as CHButton, ButtonProps as CHButtonProps } from '@chakra-ui/core'

type ButtonProps = {
  label?: string
}

const Button: React.FC<ButtonProps & CHButtonProps> = ({ label, ...buttonProps }) => (
  <CHButton {...buttonProps}>{label}</CHButton>
)

export default Button
