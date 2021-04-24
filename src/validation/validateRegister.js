const Validator = require("validator");
const isEmpty = require("is-empty");

export default function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.full_name = !isEmpty(data.full_name) ? data.full_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.pass1 = !isEmpty(data.pass1) ? data.pass1 : "";
  data.pass2 = !isEmpty(data.pass2) ? data.pass2 : "";

  // Name checks
  if (Validator.isEmpty(data.full_name)) {
    errors.full_name = "Full Name field is required";
  }
  if (!Validator.isLength(data.full_name, { min: 3, max: 40 })) {
    errors.full_name = "Your name should be between 3 and 40 characters!";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.pass1)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.pass2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.pass1, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.pass1, data.pass2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
