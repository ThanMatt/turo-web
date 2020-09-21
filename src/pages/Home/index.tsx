import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import FormControl from '../../components/FormControl'

const Home: React.FC = () => {
  return (
    <FormControl>
      <TextField label='User name' />
      <Button variantColor='green' variant='solid'>
        {' '}
        Hel
      </Button>
    </FormControl>
  )
}

export default Home
