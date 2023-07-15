import { Box, Button, FormControl, FormGroup, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
};

function createData(name, brand, model, color, photoUrl, age, km, value) {
  return { name, brand, model, color, photoUrl, age, km, value };
}

const rows = [
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
  createData('Hyundai Hb20 COMFORT', 'Hyundai', 'HB20',  'Prata', 'https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg', 2015, 180000,45000),
];

const currentPage = 2;
const totalPages = 234;

const CarListAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box>
        <h1>Lista de veículos</h1>
        <Button onClick={handleOpenModal} sx={{
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
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
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <EditIcon/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon/>
                    </IconButton> 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'center',
          margin: '1em'
        }}>
          {currentPage !== 1 ? <IconButton size="small" sx={{
            marginRight: '1em',
            backgroundColor: '#fff',
            color: '#000'
          }}><KeyboardDoubleArrowLeftIcon/></IconButton> : ""}
          {currentPage !== 1 ? <IconButton size="small" sx={{
            marginRight: '1em',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#b92f35',
            }
          }}><KeyboardArrowLeftIcon/></IconButton> : ""}
          <Typography>{currentPage} de {totalPages}</Typography>
          {currentPage !== totalPages ? <IconButton size="small" sx={{
            marginLeft: '1em',
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#b92f35',
            }
          }}><KeyboardArrowRightIcon/></IconButton> : ""}
          {currentPage !== totalPages ? <IconButton size="small" sx={{
            marginLeft: '1em',
            backgroundColor: '#fff',
            maxWidth: '1em',
            color: '#000'
          }}><KeyboardDoubleArrowRightIcon/></IconButton> : ""}
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
              marginRight: '1em'
            }}>
              <TextField 
                label="Nome"
                variant="outlined"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Marca"
                variant="outlined"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Modelo"
                variant="outlined"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Cor"
                variant="outlined"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
            </FormGroup>
            <FormGroup>
              <TextField 
                label="Ano"
                variant="outlined"
                type="number"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Km"
                variant="outlined"
                type="number"
                value="" 
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <TextField 
                label="Preço"
                variant="outlined"
                type="number"
                value="" 
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
              }}>Adicionar</Button>
            </FormGroup>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
};

export default CarListAdmin;