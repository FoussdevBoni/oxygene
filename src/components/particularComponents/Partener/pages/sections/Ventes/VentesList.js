import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import MyContext from '../../../../../../Contextes/MyContext';

function createData(cmdId, date, product, client, price ,  quantity , amount) {
  return {cmdId, date, product, client, price , quantity , amount};
}
const rows = [
  createData('VT001', '14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('VT002','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('VT003','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('VT004','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('VT005','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
];

export default function VentesList({user , showDetails, selectCommand}) {
const {myVariable , setMyVariable} = React.useContext(MyContext)


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1010 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'bold'}}>Ventes</TableCell>
             <TableCell  style={{fontWeight:'bold'}} align="right">Date</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Produit</TableCell>

            <TableCell align="right"  style={{fontWeight:'bold'}}>Client</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Prix</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Quantité</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cmdId}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.client}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                <Button variant='contained' color='primary'
                sx={{textTransform:'none'}}
                onClick={
                   ()=>{
                      setMyVariable(prevState => ({
                     ...prevState,
                     selected: row 
                  }))
                   }
                }
                >
                    Détails
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}