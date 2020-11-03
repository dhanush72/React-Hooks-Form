export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(values.password)
  ) {
    errors.password =
      "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.";
  }
  if (!values.confirm_password) {
    errors.confirm_password = "Confirm Password required";
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = "Password do not match";
  }
  return errors;
}
