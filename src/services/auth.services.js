import axios from "axios";
import { toast } from "react-hot-toast";

const client = axios.create({
  baseURL: "https://localhost:7071/auth/" 
});

export const AuthLogin = async (email, password) => {
  const tLoad = toast.loading("Loading...");

  await client.post('login', {
    email,
    password,
  })
  .then((res) => {
    toast.dismiss(tLoad);
    if (res.status === 200)
    {
      localStorage.setItem("user-id", res.data.userId);
      localStorage.setItem("access-token", res.data.token);
      localStorage.setItem("expire-token", res.data.expireToken);
    }
    return res.data;
  })
  .catch((error) => {
    toast.dismiss(tLoad);
    toast.error(error.response.data);
  });
}

export const AuthRegister = async (name, email, password) => {
  const tLoad = toast.loading("Loading...");

  await client.post('register', {
    name,
    email,
    password,
  })
  .then((res) => {
    toast.dismiss(tLoad);
    AuthLogin(email, password);
    return res.data;
  })
  .catch((error) => {
    toast.dismiss(tLoad);
    toast.error(error.response.data);
  });
}