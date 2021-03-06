import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationerrors: Errors = {};

  err.inner.forEach((error) => {
    validationerrors[error.path] = error.message;
  });

  return validationerrors;
}
