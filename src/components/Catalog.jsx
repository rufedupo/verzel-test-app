import { Box, Typography, IconButton } from "@mui/material";
import CarCard from "./CarCard";
import SearchCar from "./SearchCar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const carListData = {
  currentPage: 2,
  totalPages: 356,
  carList: [
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Hyundai",
      model: "HB20",
      age: "2015",
      color: "Prata",
      km: "180000",
      photoUrl: "https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Hyundai",
      model: "HB20",
      age: "2015",
      color: "Prata",
      km: "180000",
      photoUrl: "https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Hyundai",
      model: "HB20",
      age: "2015",
      color: "Prata",
      km: "180000",
      photoUrl: "https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Hyundai",
      model: "HB20",
      age: "2015",
      color: "Prata",
      km: "180000",
      photoUrl: "https://www.autodashboard.com.br/wp-content/uploads/2013/02/1-G.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    },
    {
      name: "Hyundai Hb20 COMFORT",
      brand: "Chevrolet",
      model: "Celta",
      age: "2012",
      color: "Cinza escuro",
      km: "180000",
      photoUrl: "https://s2-autoesporte.glbimg.com/IYSuJ9WtejYJttUUgbuYv0ygT08=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/D/dAnnjJR4attGD3dcdUzg/2013-04-15-1.jpg",
      value: "49900"
    }
  ]
}

const Catalog = () => (
  <Box>
    <SearchCar />
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
        <CarCard name={car.name} brand={car.brand} model={car.model} age={car.age} color={car.color} km={car.km} photoUrl={car.photoUrl} value={car.value} />
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
      {carListData.currentPage !== 1 ? <IconButton size="small" sx={{
        marginRight: '1em',
        backgroundColor: '#fff',
        color: '#000'
      }}><KeyboardDoubleArrowLeftIcon/></IconButton> : ""}
      {carListData.currentPage !== 1 ? <IconButton size="small" sx={{
        marginRight: '1em',
        backgroundColor: '#000',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#b92f35',
        }
      }}><KeyboardArrowLeftIcon/></IconButton> : ""}
      <Typography>{carListData.currentPage} de {carListData.totalPages}</Typography>
      {carListData.currentPage !== carListData.totalPages ? <IconButton size="small" sx={{
        marginLeft: '1em',
        backgroundColor: '#000',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#b92f35',
        }
      }}><KeyboardArrowRightIcon/></IconButton> : ""}
      {carListData.currentPage !== carListData.totalPages ? <IconButton size="small" sx={{
        marginLeft: '1em',
        backgroundColor: '#fff',
        maxWidth: '1em',
        color: '#000'
      }}><KeyboardDoubleArrowRightIcon/></IconButton> : ""}
    </Box>
  </Box>
)

export default Catalog;