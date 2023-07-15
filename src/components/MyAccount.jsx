import { Box, Button, FormControl, TextField } from "@mui/material";

const MyAccount = () => (
  <Box>
    <h1>Minha conta</h1>
    <Box sx={{  
        display: "flex",
        flexDirection: "row",
        m: 1
    }}>
      <FormControl>
        <TextField 
          variant="outlined"
          value="Ruan Felipe Duarte Pontes" 
          sx={{
            marginTop: '1em',
            width: '100%'
          }}
        />
        <TextField 
          variant="outlined"
          value="rufedupo@gmail.com" 
          sx={{
            marginTop: '1em',
            width: '100%'
          }}
        />
        <Button sx={{
            marginTop: '1em',
            width: '100%'
          }}>Alterar senha</Button>
      </FormControl>
    </Box>
  </Box>
)

export default MyAccount;