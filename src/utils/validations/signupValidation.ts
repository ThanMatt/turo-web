import * as Yup from 'yup'
import {
  CONFIRM_PASSWORD_MATCH,
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_REQUIRED,
  EMAIL_VALID,
  PASSWORD_MIN,
  PASSWORD_REQUIRED,
  SPECIALIZATION_REQUIRED
} from '../errors'

export const signupValidation = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: Yup.string().min(5, PASSWORD_MIN).required(PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], CONFIRM_PASSWORD_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
  specialization: Yup.string().required(SPECIALIZATION_REQUIRED)
})
