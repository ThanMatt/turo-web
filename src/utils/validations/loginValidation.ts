import * as Yup from 'yup'
import { EMAIL_REQUIRED, EMAIL_VALID, PASSWORD_REQUIRED } from '../errors'

export const loginValidation = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED)
})
