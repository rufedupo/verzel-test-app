import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyAccount = () => (
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
          value="Ruan Felipe Duarte Pontes" 
          disabled
          fullWidth
          sx={{
            mb: 3
          }}
        />
        <TextField 
          label="Email"
          variant="outlined"
          value="rufedupo@gmail.com" 
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
              label="Senha atual"
              variant="outlined"
              value="" 
              fullWidth
              sx={{
                mb: 3
              }}
            />
            <TextField 
              label="Nova senha"
              variant="outlined"
              value="" 
              fullWidth
              sx={{
                mb: 3
              }}
            />
            <TextField 
              label="Confirmação de nova senha"
              variant="outlined"
              value="" 
              fullWidth
              sx={{
                mb: 3
              }}
            />
            <Button fullWidth sx={{
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

export default MyAccount;