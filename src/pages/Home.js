import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Catalog from "../components/Catalog";

const Home = () =>{
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
              <Button color="inherit" component={Link} to="/login" >Minha Conta</Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Catalog />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;