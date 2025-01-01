const emailValidator = (email = "seeeee11@gmaml.com") => {
  const error = [];

  // Regular expression for a valid email pattern
  const pattern = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z\.]{2,6}$/;

  // If the email doesn't match the pattern, push an error
  !pattern.test(email) && error.push("Email is invalid");

  return error;
};

const phoneValidator = (phone = "4567654444") => {
  const error = [];
  // Regular expression for a valid phone pattern

  // If the phone doesn't match the pattern, push an error
  /[-!@#$%^&*()_=]/.test(phone) && !/^[+0-9]{9,12}$/;
  phone.length < 9 &&
    error.push(
      "Phone number must be at least 9 characters long and specail character is not allowed except +."
    );

  return error;
};
const passwordValidator = (password = "", conformPassword = "") => {
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

  if (conformPassword.length > 0) {
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

  if (emailError && email != "") {
    return emailValidator(email);
  }

  if (phoneError && phone != "") {
    return phoneValidator(phone);
  }
  if (passwordError && password != "") {
    return passwordValidator(password, conformPassword);
  }
  return [];
};
