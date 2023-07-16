import { Box, Button, FormControl, FormGroup, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useEffect, useState } from "react";
import { CreateCar, DeleteCar, GetAllCars, GetCarById, UpdateCar } from "../services/car.services";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
};

const CarListAdmin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [carListData, setCarListData] = useState({
    carList: [],
    totalPages: 1
  });
  const [openModal, setOpenModal] = useState(false);
  const [nameNewCar, setNameNewCar] = useState('');
  const [brandNewCar, setBrandNewCar] = useState('');
  const [modelNewCar, setModelNewCar] = useState('');
  const [colorNewCar, setColorNewCar] = useState('');
  const [ageNewCar, setAgeNewCar] = useState('');
  const [kmNewCar, setKmNewCar] = useState('');
  const [priceNewCar, setPriceNewCar] = useState('');
  const [photoNewCar, setPhotoNewCar] = useState('');

  const [openEditModal, setOpenEditModal] = useState(false);
  const [idEditCar, setIdEditCar] = useState('');
  const [nameEditCar, setNameEditCar] = useState('');
  const [brandEditCar, setBrandEditCar] = useState('');
  const [modelEditCar, setModelEditCar] = useState('');
  const [colorEditCar, setColorEditCar] = useState('');
  const [ageEditCar, setAgeEditCar] = useState('');
  const [kmEditCar, setKmEditCar] = useState('');
  const [priceEditCar, setPriceEditCar] = useState('');
  const [photoEditCar, setPhotoEditCar] = useState('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenEditModal = async (e, id) => { 
    e.preventDefault();
    await GetCarById(id).then((data) => {
      setIdEditCar(id);
      setNameEditCar(data.name);
      setBrandEditCar(data.brand);
      setModelEditCar(data.model);
      setColorEditCar(data.color);
      setAgeEditCar(data.age);
      setKmEditCar(data.km);
      setPriceEditCar(data.price);
      setOpenEditModal(true);
    })
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  };

  const fetchData = async (page) => {
    await GetAllCars(page).then((data) =>
      setCarListData({
        carList: data.carList,
        totalPages: data.totalPages
      }))
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  const handleBackButton = (e) => {
    e.preventDefault();
    fetchData(currentPage-1);
    setCurrentPage(currentPage-1);
  }

  const handleNextButton = (e) => {
    e.preventDefault();
    fetchData(currentPage+1);
    setCurrentPage(currentPage+1);
  }

  const handleBackwardButton = (e) => {
    e.preventDefault();
    fetchData(0);
    setCurrentPage(0);
  }

  const handleForwardButton = (e) => {
    e.preventDefault();
    fetchData(carListData.totalPages-1);
    setCurrentPage(carListData.totalPages-1);
  }

  const handleCreateCar = async (e) => {
    e.preventDefault();
    await CreateCar({
      name: nameNewCar,
      brand: brandNewCar,
      model: modelNewCar,
      color: colorNewCar,
      age: ageNewCar,
      km: kmNewCar,
      price: priceNewCar
    }).then((data) => {
      setCurrentPage(0);
      fetchData();
      setNameNewCar('');
      setBrandNewCar('');
      setModelNewCar('');
      setColorNewCar('');
      setAgeNewCar('');
      setKmNewCar('');
      setPriceNewCar('');
      handleCloseModal();
    })
  }

  const handleEditCar = async (e) => {
    e.preventDefault();
    await UpdateCar({
      id: idEditCar,
      name: nameEditCar,
      brand: brandEditCar,
      model: modelEditCar,
      color: colorEditCar,
      age: ageEditCar,
      km: kmEditCar,
      price: priceEditCar
    }).then((data) => {
      setCurrentPage(0);
      fetchData();
      setIdEditCar('');
      setNameEditCar('');
      setBrandEditCar('');
      setModelEditCar('');
      setColorEditCar('');
      setAgeEditCar('');
      setKmEditCar('');
      setPriceEditCar('');
      handleCloseEditModal();
    })
  }

  const handleDeleteCar = async (e, guid) => {
    e.preventDefault();
    await DeleteCar(guid).then((data) => {
      setCurrentPage(0);
      fetchData();
    })
  }

  return (
    <>
      <Box>
        <h1>Lista de veículos</h1>
        <Button onClick={e => {
          e.preventDefault();
          handleOpenModal();
        }} sx={{
          backgroundColor: '#b92f35',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#000'
          }
        }}>Adicionar veículo</Button>
        <TableContainer component={Paper} sx={{
          marginRight: '1em',
          marginTop: '1em'
        }}>
          <Table aria-label="simple table">
            <TableHead sx={{
              backgroundColor: '#b92f35'
            }}>
              <TableRow>
                <TableCell align="center" sx={{
                  color: '#fff'
                }}>Foto</TableCell>
                <TableCell sx={{
                  color: '#fff'
                }}>Nome</TableCell>
                <TableCell sx={{
                  color: '#fff'
                }}>Marca</TableCell>
                <TableCell sx={{
                  color: '#fff'
                }}>Modelo</TableCell>
                <TableCell sx={{
                  color: '#fff'
                }}>Cor</TableCell>
                <TableCell align="right" sx={{
                  color: '#fff'
                }}>Ano</TableCell>
                <TableCell align="right" sx={{
                  color: '#fff'
                }}>Km</TableCell>
                <TableCell align="right" sx={{
                  color: '#fff'
                }}>Preço (R$)</TableCell>
                <TableCell align="center" sx={{
                  color: '#fff'
                }}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{
              backgroundColor: '#fbf4f5'
            }}>
              {carListData.carList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">
                    <IconButton>
                      <PhotoIcon/>
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.km}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={e => handleOpenEditModal(e, row.id)}>
                      <EditIcon/>
                    </IconButton>
                    <IconButton onClick={e => handleDeleteCar(e, row.id)}>
                      <DeleteIcon/>
                    </IconButton> 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {carListData.carList.length === 0 ? <Typography variant="h4" sx={{
          margin: '2em',
          textAlign: 'center'
        }}>Nenhum carro cadastrado</Typography> : ""}
        <Box sx={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'center',
          margin: '1em'
        }}>
          {currentPage !== 0 ? <IconButton size="small" sx={{
            marginRight: '1em',
            backgroundColor: '#fff',
            color: '#000'
          }} onClick={e => handleBackwardButton(e)}><KeyboardDoubleArrowLeftIcon/></IconButton> : ""}
          {currentPage !== 0 ? <IconButton size="small" sx={{
            marginRight: '1em',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#b92f35',
            }
          }} onClick={e => handleBackButton(e)}><KeyboardArrowLeftIcon/></IconButton> : ""}
          <Typography>{currentPage+1} de {carListData.totalPages}</Typography>
          {currentPage !== carListData.totalPages-1 ? <IconButton size="small" sx={{
            marginLeft: '1em',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#b92f35',
            }
          }} onClick={e => handleNextButton(e)}><KeyboardArrowRightIcon/></IconButton> : ""}
          {currentPage !== carListData.totalPages-1 ? <IconButton size="small" sx={{
            marginLeft: '1em',
            backgroundColor: '#fff',
            maxWidth: '1em',
            color: '#000'
          }} onClick={e => handleForwardButton(e)}><KeyboardDoubleArrowRightIcon/></IconButton> : ""}
        </Box>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <h2>
            Adicionar veículo
          </h2>
          <FormControl sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box component="img"
                sx={{
                  height: 300,
                  width: 300,
                  marginRight: '2em'
                }}
                src="https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wa7IqZCJVOlsWgp1IaO4jUmlSJ6PPE_WUOyw418b-GedW0OxNs6ckxSB10EWhfPYHcDCfEmFZ6G_DbwuhZHB7UPAapEA=w1920-h820"/>
            <FormGroup sx={{
              marginRight: '1em',
              width: '200px'
            }}>
              <TextField 
                label="Nome"
                variant="outlined"
                value={nameNewCar}
                onChange={e => setNameNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Marca"
                variant="outlined"
                value={brandNewCar}
                onChange={e => setBrandNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Modelo"
                variant="outlined"
                value={modelNewCar}
                onChange={e => setModelNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Cor"
                variant="outlined"
                value={colorNewCar}
                onChange={e => setColorNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
            </FormGroup>
            <FormGroup sx={{
              width: '200px'
            }}>
              <TextField 
                label="Ano"
                variant="outlined"
                type="number"
                value={ageNewCar}
                onChange={e => setAgeNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Km"
                variant="outlined"
                type="number"
                value={kmNewCar}
                onChange={e => setKmNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Preço"
                variant="outlined"
                type="number"
                value={priceNewCar}
                onChange={e => setPriceNewCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <Button size="large" sx={{
                backgroundColor: '#b92f35',
                color: '#fff',
                height: '55px',
                '&:hover': {
                  backgroundColor: '#000',
                  color: '#fff'
                }
              }} onClick={e => handleCreateCar(e)}>Adicionar</Button>
            </FormGroup>
          </FormControl>
        </Box>
      </Modal>
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <h2>
            Editar veículo
          </h2>
          <FormControl sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box component="img"
                sx={{
                  height: 300,
                  width: 300,
                  marginRight: '2em'
                }}
                src="https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wa7IqZCJVOlsWgp1IaO4jUmlSJ6PPE_WUOyw418b-GedW0OxNs6ckxSB10EWhfPYHcDCfEmFZ6G_DbwuhZHB7UPAapEA=w1920-h820"/>
            <FormGroup sx={{
              marginRight: '1em',
              width: '200px'
            }}>
              <TextField 
                label="Nome"
                variant="outlined"
                value={nameEditCar}
                onChange={e => setNameEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Marca"
                variant="outlined"
                value={brandEditCar}
                onChange={e => setBrandEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Modelo"
                variant="outlined"
                value={modelEditCar}
                onChange={e => setModelEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Cor"
                variant="outlined"
                value={colorEditCar}
                onChange={e => setColorEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
            </FormGroup>
            <FormGroup sx={{
              width: '200px'
            }}>
              <TextField 
                label="Ano"
                variant="outlined"
                type="number"
                value={ageEditCar}
                onChange={e => setAgeEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Km"
                variant="outlined"
                type="number"
                value={kmEditCar}
                onChange={e => setKmEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Preço"
                variant="outlined"
                type="number"
                value={priceEditCar}
                onChange={e => setPriceEditCar(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <Button size="large" sx={{
                backgroundColor: '#b92f35',
                color: '#fff',
                height: '55px',
                '&:hover': {
                  backgroundColor: '#000',
                  color: '#fff'
                }
              }} onClick={e => handleEditCar(e)}>Salvar</Button>
            </FormGroup>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
};

export default CarListAdmin;