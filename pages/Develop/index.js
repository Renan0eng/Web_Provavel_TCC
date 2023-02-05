import React from "react";

import Router from "next/router";

import Nav from "../../Components/Nav"
import Blog from "../../Components/blog"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "../../Components/DataGrid"
import { Button } from "@mui/material";

export default function Home() {

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
  const gridWidth = dataGrid.columns.reduce((acc, column) => acc + column.width, 50);


  function renderDash() {
    return (
      <Box sx={{pl: 8 }}>
        <Box sx={{ height: 50, width: '100%' }}>
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
      </Box>
    );
  }

  function navegate (url) {

    console.log(url)
    // url ? Router.push(url): null
  }


  return (
    <div>
      <Nav  />
      {renderDash()}
    </div>
  );
}
