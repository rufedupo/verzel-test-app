import { Container, Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {  
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    navigate("/my-account");
  }

  return (
    <>
      <Container sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box
          component={Link}
          to="/"
          sx={{  
            display: "flex",
            flexDirection: "column"
        }}>
           <Box
              component="img"
              src="./logo.png"
            />
        </Box>
        <Box sx={{  
          display: "flex",
          flexDirection: "row",
          width: '700px',
          marginTop: '2em',
          marginBottom: '2em',
          justifyContent: "space-between",
          '@media (max-width: 980px)': {
            flexDirection: "column",
            justifyContent: "space-between",
            width: '100%'
          }
        }}>
          <Box sx={{  
            display: "flex",
            flexDirection: "column",
            width: '300px',
            '@media (max-width: 980px)': {
              width: '100%'
            }
          }}>
            <Typography component="h1" variant="h6" sx={{
              marginBottom: '1em'
            }}>
              TENHO CADASTRO
            </Typography>
            <TextField id="email" label="Email" variant="standard" sx={{paddingBottom: '1em'}} />
            <TextField id="password" label="Senha" variant="standard" />
            <Button type="submit" variant="contained" sx={{
              backgroundColor: '#b92f35',
              marginTop: '2em',
              '&:hover': {
                backgroundColor: '#000',
              }
            }}
            onClick={handleLoginSubmit}
            >CONTINUAR</Button>
          </Box>
          <Box  sx={{  
              display: "flex",
              flexDirection: "column",
              width: '300px',
              marginTop: '0px',
              '@media (max-width: 980px)': {
                marginTop: '30px',
                width: '100%'
              }
            }}>
            <Typography component="h1" variant="h6" sx={{
              marginBottom: '1em'
            }}>
              QUERO ME CADASTRAR
            </Typography>
            <TextField id="email" label="Email" variant="standard" sx={{paddingBottom: '1em'}} />
            <TextField id="name" label="Nome" variant="standard" sx={{paddingBottom: '1em'}} />
            <TextField id="password" label="Senha" variant="standard" sx={{paddingBottom: '1em'}} />
            <TextField id="password-confirm" label="Confirmação de senha" variant="standard" />
            <Button variant="contained"  sx={{
              backgroundColor: '#000',
              marginTop: '2em',
              '&:hover': {
                backgroundColor: '#b92f35',
              }
            }}>CADASTRE-SE</Button>
          </Box>
        </Box>
        <Box>
          <Button variant="text" component={Link} to="/" sx={{color: '#000'}}>Voltar ao catalógo</Button>
        </Box>
      </Container>
    </>
  );
}

export default Login;