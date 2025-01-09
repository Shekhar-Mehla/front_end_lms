import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";

const apihelper = async ({ method, url, data, headers,showToast }) => {
  const result = await axios({
    method,
    url,
    data,
    headers,
  });
  return result;
};

export const resgisterUser = async (form) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/register",
    data: form,
    headers: {
      Authorization: "Bearer your-token-here",
      "Custom-Header": "value",
    },
  };
  return await apihelper(obj);
};
export const logInUser = async (form) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/register",
    data: form,
    headers: {
      Authorization: "Bearer your-token-here",
      "Custom-Header": "value",
    },
  };
  return await apihelper(obj);
};
