import axios from "axios";
import { toast } from "react-hot-toast";

const client = axios.create({
  baseURL: "https://localhost:7071" 
});

export const UserGetInfo = async () => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  var userInfo = await client.get('/get-info', config)
                  .then(res => res.data);
  
  return userInfo;
}

export const UserUpdatePassword = async (newPassword) => {
  var tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  var userInfo = await client.put('/update-password/'+newPassword, '', config)
                  .then(res => { 
                    toast.dismiss(tLoad);
                    return res.data
                  });
  
  return userInfo;
}