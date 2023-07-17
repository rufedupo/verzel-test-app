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
    let tLoad = toast.loading("Loading...");
    await UserGetInfo().then(res => {
      toast.dismiss(tLoad);
      if (res.status === 200) {
        setEmail(res.data.email);
        setName(res.data.name);
      } else {
        toast.error("Ocorreu um erro ao carregar as informações.");
      }
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSetPassword = async (e) => {
    e.preventDefault();
    await UserUpdatePassword(newPassword).then(res => {
      if (res.status === 200) {
        setNewPassword('');
        toast.success("Senha atualizada com sucesso!");
      } else {
        toast.error(res.data);
      }
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
              <Button onClick={e => handleSetPassword(e)} fullWidth sx={{
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