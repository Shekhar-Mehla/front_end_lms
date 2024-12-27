const emailValidator = (email = "example@gmail.com") => {
  const error = [];
  // Regular expression for a valid email pattern
  const pattern = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z\.]{2,6}$/;

  // If the email doesn't match the pattern, push an error
  !pattern.test(email) && error.push("Email is invalid");

  return error;
};

const phoneValidator = (phone) => {
  const error = [];
  // Regular expression for a valid phone pattern
  const pattern = /[0-9]/;

  // If the phone doesn't match the pattern, push an error
  !pattern.test(phone) &&
    phone.length < 8 &&
    error.push("Phone number must be at least 9 characters long.");

  return error;
};
const passwordValidator = (password, conformPassword) => {
  const error = [];
  // Regular expression for a valid password pattern
  !/[0-9]/.test(password) &&
    error.push("Password must include atleast one number from 0-9");
  !/[a-z]/.test(password) &&
    error.push("Password must include atleast one small letter from a-z");
  !/[A-Z]/.test(password) &&
    error.push("Password must include atleast one capital letter from A-Z");
  !/[!@#$%^&*()_+]/.test(password) &&
    error.push(
      "Password must include atleast one special character from !@#$%^&*()_+"
    );
  password.length < 6 &&
    error.push("Password length must be atleast 6 characters long");

  if (conformPassword.length < 0) {
    password != conformPassword &&
      error.push("Confirmed password did not match");
  }
  // If the email doesn't match the pattern, push an error

  return error;
};

export const inputValidator = (email, phone, password, conformPassword) => {
  const emailError = emailValidator(email);
  const phoneError = phoneValidator(phone);
  const passwordError = passwordValidator(password, conformPassword);

  if (emailError.length > 0) {
    return {
      error: emailError,
      type: "email",
    };
  }
  if (phoneError.length > 0) {
    return {
      error: phoneError,
      type: "phone",
    };
  }
  if (passwordError.length > 0) {
    return {
      error: passwordError,
      type: "password",
    };
  }
  return {
    error: [],
    type: "",
  };
};
