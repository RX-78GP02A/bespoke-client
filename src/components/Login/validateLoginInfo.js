export default function validateLoginInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'This email address is invalid, please try again';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
      }

      return errors;
}