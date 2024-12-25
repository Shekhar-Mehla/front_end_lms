const emailvalidator = (email = "example@gmail.com") => {
  const error = [];
  // Regular expression for a valid email pattern
  const pattern = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  // If the email doesn't match the pattern, push an error
  !pattern.test(email) && error.push("Email is invalid");
  !email.length > 8 && error.push("Email is invalid");

  return error;
};

export default emailvalidator;
