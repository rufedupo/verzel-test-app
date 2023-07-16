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

export const GetCarById = async (id) => {
  const tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.get('get-by-id?id='+id, config)
                        .then(res => res.data)
                        .finally(toast.dismiss(tLoad));
}

export const GetAllCars = async (page) => {
  const tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.get('get-all?page='+page, config)
                        .then(res => res.data)
                        .finally(toast.dismiss(tLoad));
}

export const CreateCar = async (car) => {
  const tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.post('create',
                           car,
                           config)
                           .then((res) => {
                             toast.success("Veículo criado com sucesso!");
                             return res.data;
                           })
                           .finally(toast.dismiss(tLoad));
}

export const UpdateCar = async (car) => {
  const tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.put('edit',
                           car,
                           config)
                           .then((res) => {
                             toast.success("Veículo editado com sucesso!");
                             return res.data;
                           })
                           .finally(toast.dismiss(tLoad));
}

export const DeleteCar = async (carId) => {
  const tLoad = toast.loading("Loading...");
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.delete('delete?id='+carId, config)
                        .then((res) => {
                          toast.success("Veículo deletado com sucesso!");
                          return res.data;
                        })
                        .finally(toast.dismiss(tLoad));
}