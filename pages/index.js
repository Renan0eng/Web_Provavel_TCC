import * as React from 'react';

import { useRouter } from 'next/router';

import Grid from "../Components/DataGrid";

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
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import Link from 'next/link';

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

  const router = useRouter();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(1)

  const [dataGrid, setDataGrid] = React.useState({
    columns: [
      { field: 'id', headerName: 'ID', description: 'ID de Comtrole', width: 50 },
      { field: 'nome', headerName: 'Nome', description: 'Nome do Comtrole', width: 150, editable: true },
      { field: 'descricao', headerName: 'Descrição', description: 'Descrição do Comtrole', width: 150, editable: true },
      { field: 'tipo', headerName: 'Tipo', description: 'Tipo do Comtrole', width: 150, editable: true },
      { field: 'valor', headerName: 'Valor', description: 'Valor do Comtrole', width: 50, editable: true },
    ],
    rows: [
      { id: 0, nome: 'Camara Fria', descricao: 'Sala fria de estocagen de peliciveis', tipo: 'Estoque', valor: '-45' },
    ]
  });

  const newItem = {
    id: id,
    nome: '',
    descricao: '',
    tipo: '',
    valor: ''
  };

  function addItem(array, item) {

    let copyRows = Object.assign([], dataGrid.rows);

    copyRows.push(item ? item : newItem);

    console.log(copyRows);

    let copyDataGrid = Object.assign({}, dataGrid);

    copyDataGrid.rows = copyRows;

    setDataGrid(copyDataGrid);

    setId(id + 1);

    console.log(dataGrid);
  }

  const gridWidth = dataGrid.columns.reduce((acc, column) => acc + column.width, 50);



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
        <List >
          <ListItem key={"Dashboard"} disablePadding sx={{ display: 'block', mardin: 5 }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => {
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dash Board"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"text"} disablePadding sx={{ display: 'block', mardin: 5 }}>
            <Link href="http://localhost:3000/blog">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <BookIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Blog"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{
        p: 3,
        mt: 7,
        display: 'flex',
        flexDirection: 'column',
        width: "100%"
      }}>

        <Box sx={{ height: 100, width: '100%' }}>
          <Typography variant="h6" noWrap align='center' component="div">
            Grupos de comtrole
          </Typography>
        </Box>
        <Box sx={{ width: '100%', flexWrap: "wrap", display: "flex", justifyContent: 'space-around' }}>
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}

          <Box>
            <Typography variant="h6" noWrap align='center' component="div">
              MUSSUM
              IPSUM
            </Typography>
            <Typography p={"4%"}>
              Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Diuretics paradis num copo é motivis de denguis.Casamentiss faiz malandris se pirulitá.

              Per aumento de cachacis, eu reclamis.In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Manduma pindureta quium dia nois paga.

              Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Paisis, filhis, espiritis santis.Suco de cevadiss deixa as pessoas mais interessantis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

              Interagi no mé, cursus quis, vehicula ac nisi.Quem manda na minha terra sou euzis!Pra lá , depois divoltis porris, paradis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

              Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de cevadiss deixa as pessoas mais interessantis.Aenean aliquam molestie leo, vitae iaculis nisl.Copo furadis é disculpa de bebadis, arcu quam euismod magna.

              Mé faiz elementum girarzis, nisi eros vermeio.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Diuretics paradis num copo é motivis de denguis.Pra lá , depois divoltis porris, paradis.In elementis mé pra quem é amistosis quis leo.

              Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Leite de capivaris, leite de mula manquis sem cabeça.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.

              Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Detraxit consequat et quo num tendi nada.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

              Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss deixa as pessoas mais interessantis.Quem num gosta di mim que vai caçá sua turmis!
            </Typography>

          </Box>

          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
          {false ? null : <Grid dataGrid={dataGrid} gridWidth={gridWidth} />}
        </Box>

      </Box >
    </Box >
  );
}
