import React from 'react'
import { Button as CHButton, ButtonProps as CHButtonProps } from '@chakra-ui/core'

type ButtonProps = {
  children: React.ReactChild[] | React.ReactChild
}

export const Button: React.FC<ButtonProps & CHButtonProps> = ({
  children,
  ...buttonProps
}) => <CHButton {...buttonProps}>{children}</CHButton>
