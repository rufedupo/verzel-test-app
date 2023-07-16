import axios from "axios";
import { toast } from "react-hot-toast";

const client = axios.create({
  baseURL: "https://localhost:7071/car/" 
});

export const CarSearch = (page, searchText) => {
  const tLoad = toast.loading("Loading...");
  return client.post('search', {
                          searchText,
                          page
                        })
                        .then(res => res.data)
                        .finally(toast.dismiss(tLoad));
}

export const GetAllCars = async (page) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.get('get-all?page='+page, config)
                        .then(res => res.data);
}

export const DeleteCar = async (carId) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.delete('delete?id='+carId, config)
                        .then(res => res.data);
}