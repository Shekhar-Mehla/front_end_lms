import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";
import { toast } from "react-toastify";

const apihelper = async ({ method, url, data, showToast }) => {
  try {
    const headers = {};
    const pendingresult = axios({
      method,
      url,
      data,
      headers,
    });
    if (showToast) {
      toast.promise(pendingresult, { pending: "please wait..." });
    }
    const result = await pendingresult;
    const { status, message } = result.data;

    toast[status](message);
    return result.data;
  } catch (error) {
    const message = error.response.data.message;
    toast.error(message);
  }
};

export const resgisterUser = async (form) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/register",
    data: form,
    showToast: true,
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
    url: baseUrl + "/auth/login",
    data: form,
    showToast: true,
  };
  return await apihelper(obj);
};
