import React from 'react'
import { FormControl as CHFormControl } from '@chakra-ui/core'

type FormControlProps = {
  children: React.ReactChild[] | React.ReactChild
}

const FormControl: React.FC<FormControlProps> = ({ children }) => {
  return <CHFormControl>{children}</CHFormControl>
}

export default FormControl
