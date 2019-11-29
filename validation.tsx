interface valuesOptions {
  name: string,
  email: string,
  password1: string,
  password2: string
}

export function validate(values: any) {
  let errors: any = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password1) {
    errors.password1 = 'Password is required';
  } else if (values.password1.length < 6) {
    errors.password1 = 'Password must be 6 or more characters';
  }
  return errors;
};
