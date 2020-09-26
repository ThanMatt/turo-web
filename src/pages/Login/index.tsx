import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { loginValidation } from '../../utils/validations'

import { Box, Flex } from '@chakra-ui/core'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<Inputs>({
    resolver: yupResolver(loginValidation)
  })

  const submitForm = (values: Inputs) => {
    console.log(values)
  }

  return (
    <Flex align='center' justify='space-between'>
      <Flex w='70%' h='200%' borderWidth={1} align='center' justify='center'>
        <Box>
          <p>Howdy</p>
        </Box>
      </Flex>
      <Flex w='30%' py={200}>
        <Box
          as='form'
          onSubmit={handleSubmit(submitForm)}
          borderWidth={1}
          w='100%'
          p={20}
        >
          <TextField
            register={register}
            name='email'
            label='Email Address'
            placeholder=''
            error={errors?.email}
            isFullWidth
          />
          <TextField
            register={register}
            name='password'
            type='password'
            label='Password'
            placeholder=''
            error={errors?.password}
            isFullWidth
          />
          <Button type='submit' variantColor='green' variant='solid'>
            {' '}
            Submit
          </Button>
          <Link to='/signup' label='Sign up' />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Login
