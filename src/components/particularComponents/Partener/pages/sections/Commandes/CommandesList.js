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
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import CommandesBox from './CommandesBox';

function createData(cmdId, date, product, client, price ,  quantity , amount) {
  return {cmdId, date, product, client, price , quantity , amount};
}
const rows = [
  createData('CM001', '14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('CM002','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('CM003','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('CM004','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
  createData('CM005','14-02-2024', 'Pull-Over', 'BONI Fousséni', 3650 , 4 , 3650*4),
];

export default function CommandesList({user , showDetails, selectCommand}) {
const {myVariable , setMyVariable} = React.useContext(MyContext)

const [cmdData, setCmdData] = React.useState([]);

  React.useEffect(() => {
    const dataRef = ref(db, 'commandes/fournisseurs/' + user.userId);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cmdList = Object.entries(data).map(([id, item]) => ({ id, ...item }));
      
        setCmdData(cmdList);
        console.log(cmdList)
      } else {
        setCmdData([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user.userId]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1010 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'bold'}}>Commande</TableCell>
             <TableCell  style={{fontWeight:'bold'}} align="right">Date</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Produit</TableCell>

            <TableCell align="right"  style={{fontWeight:'bold'}}>Client</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Prix</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Quantité</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cmdData.map((row , index) => (
            <TableRow
              key={row.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                CMD N<sup>o</sup> {index+1}
              </TableCell>
              <TableCell align="right">{timeFormat(row.date)}</TableCell>
              <TableCell align="right">{row.product.productName}</TableCell>
              <TableCell align="right">{row.client.firstName} {row.client.lastName}</TableCell>
              <TableCell align="right">{row.product.productPrice}</TableCell>
             <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                <Button variant='contained' color='primary'
                sx={{textTransform:'none'}}
                onClick={
                   ()=>{
                      setMyVariable(prevState => ({
                     ...prevState,
                     commandeSelected: row 
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
         {
                myVariable.commandeSelected!==null && (
           <ProductDetails   user={user} child={<CommandesBox user={user} />}/> 
                      )  
            }
    </TableContainer>
  );
}