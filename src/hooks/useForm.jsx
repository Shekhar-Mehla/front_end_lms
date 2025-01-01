import { useState, useEffect } from "react";

import { inputValidator } from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({ e, setForm, form }) => {
  console.log(e);
  const { value, name } = e.target;

  setForm({ ...form, [name]: value });

  return;
};

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  const [validationError, setValidationError] = useState([]);
  console.log(form);
  useEffect(() => {
    const error = inputValidator(
      form.email,
      form.phone,
      form.password,
      form.confirmPassword
    );

    setValidationError(error);
  }, [form.password, form.email, form.phone, form.confirmPassword]);

  return {
    form,
    validationError,

    setForm,
    handleOnChange: (e) => handleOnChange({ e, setForm, form }),
  };
};

export default useForm;
