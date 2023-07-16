import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Catalog from "../components/Catalog";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Home = () =>{
  const [logged, setLogged] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    if (localStorage.getItem('access-token'))
      setLogged(true);
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ 
          backgroundColor: '#fff', 
          color: '#000' 
        }}>
          <Container>
            <Toolbar>
              <Typography variant="body" component={Link} to="/" sx={{ flexGrow: 1 }}>
                <Box
                  component="img"
                  sx={{
                    height: 67,
                    width: 192,
                    maxHeight: { xs: 67, md: 67 },
                    maxWidth: { xs: 192, md: 192 },
                  }}
                  src="./logo.png"
                />
              </Typography>
              {
                logged ? 
                <Button color="inherit" component={Link} to="/my-account" >Minha Conta</Button>
                : 
                <Button color="inherit" component={Link} to="/login" >Minha Conta</Button>
              }
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Catalog />
        </Container>
      </Box>
      <Toaster />
    </Box>
  );
}

export default Home;