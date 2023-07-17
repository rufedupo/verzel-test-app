import axios from "axios";

const client = axios.create({
  baseURL: "https://localhost:7071/car/" 
});

export const CarSearch = (page, searchText) => {
  return client.post('search', {
                          searchText,
                          page
                        })
                        .then(res => {
                          return {
                            status: 200,
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

export const GetCarById = async (id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.get('get-by-id?id='+id, config)
                          .then(res => {
                            return {
                              status: 200,
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

export const GetAllCars = async (page) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  return await client.get('get-all?page='+page, config)
                        .then(res => {
                          return {
                            status: 200,
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

export const CreateCar = async (car) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }

  return await client.post('create',
                        car,
                        config)
                        .then(res => {
                          return {
                            status: 200,
                            data: res.data
                          };
                        })
                        .catch(error => {
                          return {
                            status: error.response.status,
                            data: error.response.data
                          };
                        });
}

export const UpdateCar = async (car) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.put('edit',
                           car,
                           config)
                           .then(res => {
                              return {
                                status: res.status,
                                data: res.data
                              };
                           })
                           .catch(error => {
                              return {
                                status: error.response.status,
                                data: error.response.data
                              };
                           });
}

export const DeleteCar = async (carId) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    }
  }
  return await client.delete('delete?id='+carId, config)
                        .then(res => {
                          return {
                            status: 200,
                            data: res.data
                          };
                        })
                        .catch(error => {
                          return  {
                            status: error.response.status,
                            data: error.response.data
                          };
                        });
}