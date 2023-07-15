import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchCar = () => (
  <TextField 
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment 
          position="end">
          <IconButton onClick={() => {}}>
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
)

export default SearchCar;