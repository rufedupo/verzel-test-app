import axios from "axios";

const client = axios.create({
  baseURL: "https://localhost:7071/auth/" 
});

export const AuthLogin = async (email, password) => {
  return await client.post('login', {
                    email,
                    password,
                  })
                  .then((res) => {
                    if (res.status === 200)
                    {
                      localStorage.setItem("user-id", res.data.userId);
                      localStorage.setItem("access-token", res.data.token);
                      localStorage.setItem("expire-token", res.data.expireToken);
                    }
                    return {
                      status: 200,
                      data: res.data
                    };
                  })
                  .catch((error) => {
                    return {
                      status: error.response.status,
                      data: error.response.data
                    };
                  });
}

export const AuthRegister = async (name, email, password) => {
  return await client.post('register', {
                    name,
                    email,
                    password,
                  })
                  .then((res) => {
                    AuthLogin(email, password);
                    return {
                      status: 200,
                      data: res.data
                    }
                  })
                  .catch((error) => {
                    return {
                      status: error.response.status,
                      data: error.response.data
                    };
                  });
}