import { Container, Box, TextField, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLogin, AuthRegister } from '../services/auth.services';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access-token"))
      navigate('/my-account');
  }, [])

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let t = toast.loading('Loading...');
    await AuthLogin(email, password).then((res) => {
      toast.dismiss(t);
      if (res.status === 200){
        if (localStorage.getItem('access-token'))
          navigate('/my-account');
      } else {
        toast.error(res.data);
      }
    })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let t = toast.loading('Loading...');
    await AuthRegister(newName, newEmail, newPassword).then((res) => {
      toast.dismiss(t);
      if (res.status === 200){
        toast.success('Cadastro realizado com sucesso');
        setNewName('');
        setNewEmail('');
        setNewPassword('');
        if (localStorage.getItem('access-token')){
          navigate('/my-account');
        }
      } else {
        toast.error(res.data);
      }
    })
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
            <TextField id="email" label="Email" variant="standard" sx={{paddingBottom: '1em'}} type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <TextField id="password" label="Senha" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <Button type="submit" variant="contained" sx={{
              backgroundColor: '#b92f35',
              marginTop: '2em',
              '&:hover': {
                backgroundColor: '#000',
              }
            }}
            onClick={e => handleLoginSubmit(e)}
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
            <TextField id="newName" label="Nome" variant="standard" sx={{paddingBottom: '1em'}} onChange={(e) => setNewName(e.target.value)} value={newName} />
            <TextField id="newEmail" label="Email" variant="standard" sx={{paddingBottom: '1em'}} type="email" onChange={(e) => setNewEmail(e.target.value)} value={newEmail} />
            <TextField id="newPassword" label="Senha" variant="standard" sx={{paddingBottom: '1em'}} type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
            <Button variant="contained" sx={{
              backgroundColor: '#000',
              marginTop: '2em',
              '&:hover': {
                backgroundColor: '#b92f35',
              }
            }}
            onClick={e => handleRegisterSubmit(e)}>CADASTRE-SE</Button>
          </Box>
        </Box>
        <Box>
          <Button variant="text" component={Link} to="/" sx={{color: '#000'}}>Voltar ao catalógo</Button>
        </Box>
      </Container>
      <Toaster />
    </>
  );
}

export default Login;