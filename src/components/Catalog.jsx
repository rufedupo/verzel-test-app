import { Box, Typography, IconButton, TextField, InputAdornment } from "@mui/material";
import CarCard from "./CarCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useEffect, useState } from "react";
import { CarSearch } from "../services/car.services";
import SearchIcon from '@mui/icons-material/Search';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [carListData, setCarListData] = useState({
    carList: [],
    totalPages: 1
  });

  const fetchData = async (page) => {
    await CarSearch(page, searchText).then((data) => {
      setCarListData({
        carList: data.carList,
        totalPages: data.totalPages
      })
    })
  }
  
  useEffect(() => {
    fetchData(0);
  }, [])

  const handleBackButton = () => {
    fetchData(currentPage-1);
    setCurrentPage(currentPage-1);
  }

  const handleNextButton = () => {
    fetchData(currentPage+1);
    setCurrentPage(currentPage+1);
  }

  const handleBackwardButton = () => {
    fetchData(0);
    setCurrentPage(0);
  }

  const handleForwardButton = () => {
    fetchData(carListData.totalPages-1);
    setCurrentPage(carListData.totalPages-1);
  }

  const handleSearchCar = () => {
    setCurrentPage(0);
    fetchData(0);
  }
  
  return (
    <Box>
      <TextField 
        variant="outlined"
        value={searchText}
        onChange={(e) => {
          setCurrentPage(0);
          setSearchText(e.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            handleSearchCar();
            ev.preventDefault();
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment 
              position="end">
              <IconButton onClick={handleSearchCar}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        placeholder="Pesquise o veículo" 
        sx={{
          marginTop: '1em',
          width: '100%'
        }}
      />
      <Box sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(4, 1fr)',
        '@media (max-width: 1100px)': {
          gridTemplateColumns: 'repeat(3, 1fr)'
        },
        '@media (max-width: 900px)': {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        '@media (max-width: 600px)': {
          gridTemplateColumns: 'repeat(1, 1fr)'
        }
      }}>
        {carListData.carList.length !== 0 ? carListData.carList.map((car) => (
          <CarCard key={car.id} name={car.name} brand={car.brand} model={car.model} age={car.age} color={car.color} km={car.km} photoUrl={car.photoUrl} value={car.price} />
        )) : ""}
      </Box>
      {carListData.carList.length === 0 ? <Typography variant="h4" sx={{
        margin: '2em',
        textAlign: 'center'
      }}>Nenhum carro foi encontrado</Typography> : ""}
      <Box sx={{
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center',
        margin: '1em'
      }}>
        {currentPage !== 0 ? 
        <IconButton size="small" sx={{
          marginRight: '1em',
          backgroundColor: '#fff',
          color: '#000'
        }} onClick={handleBackwardButton}><KeyboardDoubleArrowLeftIcon/></IconButton> : ""}
        {currentPage !== 0 ? 
        <IconButton size="small" sx={{
          marginRight: '1em',
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#b92f35',
          }
        }} onClick={handleBackButton}><KeyboardArrowLeftIcon/></IconButton> : ""}
        <Typography>{currentPage+1} de {carListData.totalPages}</Typography>
        {currentPage !== carListData.totalPages-1 ? 
        <IconButton size="small" sx={{
          marginLeft: '1em',
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#b92f35',
          }
        }} onClick={handleNextButton}><KeyboardArrowRightIcon/></IconButton> : ""}
        {currentPage !== carListData.totalPages-1 ? 
        <IconButton size="small" sx={{
          marginLeft: '1em',
          backgroundColor: '#fff',
          maxWidth: '1em',
          color: '#000'
        }} onClick={handleForwardButton}><KeyboardDoubleArrowRightIcon/></IconButton> : ""}
      </Box>
    </Box>
  )
}

export default Catalog;