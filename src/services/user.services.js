import axios from "axios";

const client = axios.create({
  baseURL: "https://localhost:7071/user/" 
});

export const UserGetInfo = async () => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  return await client.get('get-info', config)
                  .then(res => {
                    return {
                      status: res.status,
                      data: res.data
                    }
                  })
                  .catch(error => {
                    return {
                      status: error.response.status,
                      data: error.response.data
                    }
                  });
}

export const UserUpdatePassword = async (newPassword) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  return await client.put('update-password/'+newPassword, '', config)
                  .then(res => { 
                    return {
                      status: res.status,
                      data: res.data
                    }
                  })
                  .catch(error => {
                    return {
                      status: error.response.status,
                      data: error.response.data
                    }
                  })
}