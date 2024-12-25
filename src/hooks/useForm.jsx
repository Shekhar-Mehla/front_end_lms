import React, { useEffect, useState } from "react";
const initial_state = {};
import emailvalidator from "../Utility/validators/emailvalidator.js";

// handle on change
const handleOnChange = ({ e, setForm, form }) => {
  const { value, name } = e.target;

  return setForm({ ...form, [name]: value });
};

const useForm = () => {
  const [form, setForm] = useState({});
  const [emailError, setEmailError] = useState([]);

  useEffect(() => {
    const validemail = emailvalidator(form.email);
    setEmailError(validemail);
  }, [form.email]);

  return {
    emailError,
    form,
    initial_state,
    setForm,
    handleOnChange: (e) => {
      handleOnChange({ e, setForm, form });
    },
  };
};

export default useForm;
