import { Box, Button, FormControl, FormGroup, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useEffect, useState } from "react";
import { CreateCar, DeleteCar, GetAllCars, UpdateCar } from "../services/car.services";
import { DropzoneDialog } from "mui-file-dropzone";
import { toast } from "react-hot-toast";
import { MaskCurrency, MaskNumber } from "../utils/Format";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 3,
  '@media (max-width: 600px)': {
    width: '300px',
    height: '780px'
  }
};

const CarListAdmin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [carListData, setCarListData] = useState({
    carList: [],
    totalPages: 1
  });
  const [openModal, setOpenModal] = useState(false);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [nameNewCar, setNameNewCar] = useState('');
  const [brandNewCar, setBrandNewCar] = useState('');
  const [modelNewCar, setModelNewCar] = useState('');
  const [colorNewCar, setColorNewCar] = useState('');
  const [ageNewCar, setAgeNewCar] = useState('');
  const [kmNewCar, setKmNewCar] = useState('');
  const [priceNewCar, setPriceNewCar] = useState('');
  const [photoNewCar, setPhotoNewCar] = useState('');
  const [openDropPhotoNewCar, setOpenDropPhotoNewCar] = useState(false);

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
  const [openDropPhotoEditCar, setOpenDropPhotoEditCar] = useState(false);

  const [photoViewCar, setPhotoViewCar] = useState('');
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async (page) => {
    let tLoad = toast.loading("Loading...");
    await GetAllCars(page).then((res) => {
      toast.dismiss(tLoad)
      if (res.status === 200) {
        setCarListData({
          carList: res.data.carList,
          totalPages: res.data.totalPages
        })
      } else {
        toast.error(res.data);
      }
    });
  }

  const handleOpenModal = () => setOpenModal(true);

  const handleOpenEditModal = async (e, id) => { 
    e.preventDefault();
    const tLoad = toast.loading("Loading...");
    var car = carListData.carList.find(cl => cl.id === id);
    setIdEditCar(car.id);
    setNameEditCar(car.name);
    setBrandEditCar(car.brand);
    setModelEditCar(car.model);
    setColorEditCar(car.color);
    setAgeEditCar(car.age);
    setKmEditCar(car.km);
    setPriceEditCar(car.price);
    if (car.photo !== undefined) setPhotoEditCar(car.photo);
    setOpenEditModal(true);
    toast.dismiss(tLoad);
  };

  const handleOpenPhotoModal = async (e, id) => { 
    e.preventDefault();
    const tLoad = toast.loading("Loading...");
    var car = carListData.carList.find(cl => cl.id === id);
    if (car.photo !== undefined) setPhotoViewCar(car.photo);
    setOpenPhotoModal(true);
    toast.dismiss(tLoad);
  };

  const handleCloseModal = () => {
    setOpenModal(false)
    setNameNewCar('');
    setBrandNewCar('');
    setModelNewCar('');
    setColorNewCar('');
    setAgeNewCar('');
    setKmNewCar('');
    setPriceNewCar('');
    setPhotoNewCar('');
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
    setIdEditCar('');
    setNameEditCar('');
    setBrandEditCar('');
    setModelEditCar('');
    setColorEditCar('');
    setAgeEditCar('');
    setKmEditCar('');
    setPriceEditCar('');
    setPhotoEditCar('');
  };

  const handleClosePhotoModal = () => {
    setPhotoViewCar('');
    setOpenPhotoModal(false)
  };

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
    let tLoad = toast.loading('Loading...');
    await CreateCar({
      name: nameNewCar,
      brand: brandNewCar,
      model: modelNewCar,
      color: colorNewCar,
      age: ageNewCar !== undefined ? parseInt(ageNewCar) : 0,
      km: kmNewCar !== undefined ? parseInt(kmNewCar) : 0,
      price: priceNewCar !== undefined ? priceNewCar.replace('.', '').replace(',', '.') : 0,
      photo: photoNewCar
    }).then((res) => {
      toast.dismiss(tLoad);
      if (res.status === 200) {
        setCurrentPage(0);
        fetchData();
        handleCloseModal();
        toast.success('Veículo adicionado com sucesso');
      } else {
        toast.error(res.data);
      }
    })
  }

  const handleEditCar = async (e) => {
    e.preventDefault();
    let tLoad = toast.loading('Loading...');
    await UpdateCar({
      id: idEditCar,
      name: nameEditCar,
      brand: brandEditCar,
      model: modelEditCar,
      color: colorEditCar,
      age: ageEditCar !== undefined ? parseInt(ageEditCar) : 0,
      km: kmEditCar !== undefined ? parseInt(kmEditCar) : 0,
      price: priceEditCar !== undefined ? priceEditCar.replace('.', '').replace(',', '.') : 0,
      photo: photoEditCar
    }).then((res) => {
      toast.dismiss(tLoad);
      if (res.status === 200) {
        setCurrentPage(0);
        fetchData();
        handleCloseEditModal();
        toast.success('Veículo atualizado com sucesso');
      } else {
        toast.error(res.data);
      }
    })
  }

  const handleDeleteCar = async (e, guid) => {
    e.preventDefault();
    let tLoad = toast.loading('Loading...');
    await DeleteCar(guid).then((res) => {
      toast.dismiss(tLoad);
      if (res.status === 200) {
        setCurrentPage(0);
        fetchData();
        toast.success('Veículo excluído com sucesso');
      } else {
        toast.error(res.data);
      }
    })
  }

  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
  
      // Convert the file to base64 text
      reader.readAsDataURL(file);
  
      // on reader load somthing...
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
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
                    <IconButton onClick={e => handleOpenPhotoModal(e, row.id)}>
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
            flexDirection: 'row',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              maxWidth: '100px',
              display: 'flex'
            }
          }}>
            <Box component="img"
                sx={{
                  maxHeight: 295,
                  maxWidth: 295,
                  objectFit: 'contain',
                  marginRight: '2em',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenDropPhotoNewCar(true)}
                src={photoNewCar !== '' ? photoNewCar : "https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wa7IqZCJVOlsWgp1IaO4jUmlSJ6PPE_WUOyw418b-GedW0OxNs6ckxSB10EWhfPYHcDCfEmFZ6G_DbwuhZHB7UPAapEA=w1920-h820"}/>
            
            <DropzoneDialog
              onClose={() => setOpenDropPhotoNewCar(false)}
              acceptedFiles={['image/*']}
              open={openDropPhotoNewCar}
              dropzoneText={"Arraste e solte uma imagem aqui ou clique"}
              maxFileSize={2000000}
              submitButtonText="Adicionar imagem"
              cancelButtonText="Cancelar"
              dialogTitle="Carregar imagem"
              filesLimit={1}
              onSave={(files) => {
                getBase64(files[0]).then(b64 => setPhotoNewCar(b64));
                setOpenDropPhotoNewCar(false);
              }}
            />
            <FormGroup sx={{
              marginRight: '1em',
              width: '200px'
            }}>
              <TextField 
                label="Nome"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={nameNewCar}
                onChange={e => setNameNewCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Marca"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={brandNewCar}
                onChange={e => setBrandNewCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Modelo"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={modelNewCar}
                onChange={e => setModelNewCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Cor"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={colorNewCar}
                onChange={e => setColorNewCar(e.target.value.toUpperCase())}
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
                type="text"
                value={ageNewCar}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setAgeNewCar(MaskNumber(e));
                }}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Km"
                variant="outlined"
                type="text"
                value={kmNewCar}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setKmNewCar(MaskNumber(e));
                }}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Preço"
                variant="outlined"
                type="text"
                value={priceNewCar}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setPriceNewCar(MaskCurrency(e));
                }}
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
            flexDirection: 'row',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              maxWidth: '100px',
              display: 'flex'
            }
          }}>
            <Box component="img"
                sx={{
                  maxHeight: 295,
                  maxWidth: 295,
                  objectFit: 'contain',
                  marginRight: '2em',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenDropPhotoEditCar(true)}
                src={photoEditCar !== '' ? photoEditCar : "https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wa7IqZCJVOlsWgp1IaO4jUmlSJ6PPE_WUOyw418b-GedW0OxNs6ckxSB10EWhfPYHcDCfEmFZ6G_DbwuhZHB7UPAapEA=w1920-h820"}/>
            <DropzoneDialog
              onClose={() => setOpenDropPhotoEditCar(false)}
              acceptedFiles={['image/*']}
              open={openDropPhotoEditCar}
              dropzoneText={"Arraste e solte uma imagem aqui ou clique"}
              maxFileSize={2000000}
              submitButtonText="Adicionar imagem"
              cancelButtonText="Cancelar"
              dialogTitle="Carregar imagem"
              filesLimit={1}
              onSave={(files) => {
                getBase64(files[0]).then(b64 => setPhotoEditCar(b64));
                setOpenDropPhotoEditCar(false);
              }}
            />
            <FormGroup sx={{
              marginRight: '1em',
              width: '200px'
            }}>
              <TextField 
                label="Nome"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={nameEditCar}
                onChange={e => setNameEditCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Marca"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={brandEditCar}
                onChange={e => setBrandEditCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Modelo"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={modelEditCar}
                onChange={e => setModelEditCar(e.target.value.toUpperCase())}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Cor"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={colorEditCar}
                onChange={e => setColorEditCar(e.target.value.toUpperCase())}
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
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
                value={ageEditCar}
                onChange={e => setAgeEditCar(MaskNumber(e))}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Km"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
                value={kmEditCar}
                onChange={e => setKmEditCar(MaskNumber(e))}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Preço"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
                value={priceEditCar}
                onChange={e => setPriceEditCar(MaskCurrency(e))}
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
      <Modal
        open={openPhotoModal}
        onClose={handleClosePhotoModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Box component="img"
                sx={{
                  maxWidth: '300px'
                }}
                src={photoViewCar !== '' ? photoViewCar : "https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wa7IqZCJVOlsWgp1IaO4jUmlSJ6PPE_WUOyw418b-GedW0OxNs6ckxSB10EWhfPYHcDCfEmFZ6G_DbwuhZHB7UPAapEA=w1920-h820"}/>
        </Box>
      </Modal>
    </>
  )
};

export default CarListAdmin;