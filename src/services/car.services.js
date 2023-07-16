import axios from "axios";

const client = axios.create({
  baseURL: "https://localhost:7071/car/" 
});

export const CarGetAll = async (page) => {
  return await client.get('all?page='+page)
                        .then(res => res.data);
}