import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dataGrid = {
    columns: [
      { field: 'id', headerName: 'ID', description: 'ID de Comtrole', width: 50 },
      { field: 'nome', headerName: 'Nome', description: 'Nome do Comtrole', width: 150 },
      { field: 'descricao', headerName: 'Descrição', description: 'Descrição do Comtrole', width: 150 },
      { field: 'tipo', headerName: 'Tipo', description: 'Tipo do Comtrole', width: 150 },
      { field: 'valor', headerName: 'Valor', description: 'Valor do Comtrole', width: 150 },
    ],
    rows: [
      { id: 1, nome: 'Nome 1', descricao: 'Descrição 1', tipo: 'Tipo 1', valor: 'Valor 1' },
      { id: 2, nome: 'Nome 2', descricao: 'Descrição 2', tipo: 'Tipo 2', valor: 'Valor 2' },
      { id: 3, nome: 'Nome 3', descricao: 'Descrição 3', tipo: 'Tipo 3', valor: 'Valor 3' },
      { id: 4, nome: 'Nome 4', descricao: 'Descrição 4', tipo: 'Tipo 4', valor: 'Valor 4' },
      { id: 5, nome: 'Nome 5', descricao: 'Descrição 5', tipo: 'Tipo 5', valor: 'Valor 5' },
      { id: 6, nome: 'Nome 6', descricao: 'Descrição 6', tipo: 'Tipo 6', valor: 'Valor 6' },
      { id: 7, nome: 'Nome 7', descricao: 'Descrição 7', tipo: 'Tipo 7', valor: 'Valor 7' },
      { id: 8, nome: 'Nome 8', descricao: 'Descrição 8', tipo: 'Tipo 8', valor: 'Valor 8' },
      { id: 9, nome: 'Nome 9', descricao: 'Descrição 9', tipo: 'Tipo 9', valor: 'Valor 9' },
      { id: 10, nome: 'Nome 10', descricao: 'Descrição 10', tipo: 'Tipo 10', valor: 'Valor 10' },
      { id: 11, nome: 'Nome 11', descricao: 'Descrição 11', tipo: 'Tipo 11', valor: 'Valor 11' },
      { id: 12, nome: 'Nome 12', descricao: 'Descrição 12', tipo: 'Tipo 12', valor: 'Valor 12' },
      { id: 13, nome: 'Nome 13', descricao: 'Descrição 13', tipo: 'Tipo 13', valor: 'Valor 13' },
      { id: 14, nome: 'Nome 14', descricao: 'Descrição 14', tipo: 'Tipo 14', valor: 'Valor 14' },
      { id: 15, nome: 'Nome 15', descricao: 'Descrição 15', tipo: 'Tipo 15', valor: 'Valor 15' },
    ]
  };

  const gridWidth = dataGrid.columns.reduce((acc, column) => acc + column.width, 10);




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Controle
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Menu lateral
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', mardin: 5 }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{
        p: 3,
        mt: 7,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}>

        <Box sx={{ height: 100, width: '100%' }}>
          <Typography variant="h6" noWrap align='center' component="div">
            Grupos de comtrole
          </Typography>
        </Box>

        <Box sx={{ height: 400, width: "100%", alignSelf: "center", display: "flex", justifyContent: "space-evenly" }}>

          <Box sx={{ height: 400, width: "100%", maxWidth: gridWidth, alignSelf: "center" }}>
            <DataGrid
              sx={{ backgroundColor: "#ccc", borderColor: "#ccc", borderWidth: 5, borderStyle: "solid" }}
              {...dataGrid}
              onCellDoubleClick={
                (params, event) => {
                  console.log('cell clicked:',
                    "ID:", params.row.id,
                    "Age:", params.row.age,
                    "First name:", params.row.firstName,
                    "Full name:", params.row.fullName,
                    "Last name:", params.row.lastName
                  );
                }
              }
            />
          </Box>
        </Box>
      </Box >
    </Box >
  );
}
