export const LoginValidation = (email, password) => {
  const errors = {};
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  if (!validEmailRegex.test(email)) errors.email = "Email is not valid!";
  if (password.length < 8)
    errors.password = "Password must be 8 characters long!";

  return errors;
};

export const SignupValidation = (name, email, password) => {
  const errors = {};
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  if (name.length < 5) errors.fullName = "Full Name must be 5 characters long!";
  if (!validEmailRegex.test(email)) errors.email = "Email is not valid!";
  if (password.length < 8)
    errors.password = "Password must be 8 characters long!";

  return errors;
};
