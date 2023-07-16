import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { UserGetInfo, UserUpdatePassword } from "../services/user.services";
import { toast } from "react-hot-toast";

const MyAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const fetchData = async () => {
    await UserGetInfo().then(res => {
      if (res.email)
        setEmail(res.email);
      if (res.name)
        setName(res.name);
    })
  }

  useEffect(() => {
    fetchData();
  })

  const handleSetPassword = async () => {
    await UserUpdatePassword(newPassword).then(res => {
      if (res)
        toast.success("Senha atualizada com sucesso!");
    })
  }

  return (
    <Box sx={{
      width: '100%'
    }}>
      <h1>Minha conta</h1>
      <Box sx={{  
          display: "flex",
          flexDirection: "row"
      }}>
        <FormControl sx={{
          width: '100%'
        }}>
          <TextField 
            label="Nome"
            variant="outlined"
            value={name}
            disabled
            fullWidth
            sx={{
              mb: 3
            }}
          />
          <TextField 
            label="Email"
            variant="outlined"
            value={email} 
            disabled
            fullWidth
            sx={{
              mb: 3
            }}
          />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Alterar senha</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField 
                label="Nova senha"
                variant="outlined"
                value={newPassword} 
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                fullWidth
                sx={{
                  mb: 3
                }}
              />
              <Button onClick={handleSetPassword} fullWidth sx={{
                backgroundColor: '#b92f35',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#000',
                }
              }}>Alterar</Button>
            </AccordionDetails>
          </Accordion>
        </FormControl>
      </Box>
    </Box>
  )
}
export default MyAccount;