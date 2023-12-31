import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Outlet } from "react-router-dom"
import MyAccount from '../components/MyAccount';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Account = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
 
  useEffect(() => {
    if (!localStorage.getItem("access-token")){
      navigate('/login');
    }
  }, [])

  const handleListItemClick = (event, index) => {
    event.preventDefault();
    setSelectedIndex(index);
    if (index === 0) {
      navigate('/my-account');
    } else {
      navigate('cars');
    }
  };

  const handleDrawerOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleDrawerClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user-id');
    localStorage.removeItem('access-token');
    localStorage.removeItem('expire-token');
    navigate('/');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <Box onClick={e => handleDrawerClose(e)}>
              <Box
                component="img"
                sx={{
                  height: 48,
                  width: 150
                }}
                src="https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-xnOn_SR_6r5K8bdlf79M-UDb8CXNNcnFzso-jWrBU9L9I8goNc5dw4qzPrD2sihaMuDGYhjrKkldZWDxqF2tiwua1omQ=w1920-h892"
              />
            </Box>
          <IconButton onClick={e => handleDrawerClose(e)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <IconButton
            color="#757575"
            aria-label="open drawer"
            onClick={e => handleDrawerOpen(e)}
            sx={{
              paddingLeft: 5,
              paddingRight: 1.5,
              ...(open && { display: 'none' }),
              '@media (max-width: 601px)': {
                paddingRight: 1,
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem key='my-account' disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='Meus dados' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key='my-cars' disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary='Lista de veículos' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="catalog" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              component={Link}
              to="/"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ReplyAllIcon />
              </ListItemIcon>
              <ListItemText primary='Ir para catalógo' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="logout" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={e => handleLogout(e)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Sair' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ 
        marginLeft: '2em',
        marginRight: '2em',
        width: '100%'
      }}>
        {selectedIndex === 0 ? <MyAccount/> : <Outlet/>}
      </Box>
      <Toaster />
    </Box>
  );
}

export default Account;