import React, { useEffect, useState } from "react";
const initial_state = {};
import { inputValidator } from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({ e, setForm, form }) => {
  const { value, name } = e.target;

  setForm({ ...form, [name]: value });

  return;
};
const initistate = {
  email: "emxample@gmail.com",
  phone: "349569687s",
  password: "Abce@1",
  confirmPassword: "Abce@1",
};
const useForm = () => {
  const [form, setForm] = useState(initistate);
  const [inputError, setInputError] = useState([]);

  useEffect(() => {
    const { error, type } = inputValidator(
      form.email,
      form.phone,
      form.password,
      form.confirmPassword
    );
    setInputError(error);
  }, [form.email, form.password, form.phone, form.confirmPassword]);
  console.log(inputError);
  return {
    inputError,
    form,
    initial_state,
    setForm,
    handleOnChange: (e) => {
      handleOnChange({ e, setForm, form });
    },
  };
};

export default useForm;
