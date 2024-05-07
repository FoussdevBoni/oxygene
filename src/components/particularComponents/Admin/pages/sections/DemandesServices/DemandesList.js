import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import MyContext from '../../../../../../Contextes/MyContext';
import { db } from '../../../../../../Backend/Data/config';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import DemandesBox from './DemandesBox';




export default function DemandesList({ user, showDetails, selectCommand }) {
  const { myVariable, setMyVariable } = React.useContext(MyContext)

  const [dmdData, setDmdData] = React.useState([]);
  const setContentData = ()=>{
      setMyVariable(prevState => ({
                     ...prevState,
               demandeSelected: null 
     }))
  }
  React.useEffect(() => {
    const dataRef = ref(db, 'demandes/all');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dmdList = Object.entries(data).map(([id, item]) => ({ id, ...item }));

        setDmdData(dmdList);
        console.log(dmdList)
      } else {
        setDmdData([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1010 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Demande</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Date</TableCell>
        
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Client</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Statut</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dmdData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                DMD N<sup>o</sup> {index + 1}
              </TableCell>
              <TableCell align="right">{timeFormat(row.date)}</TableCell>
              <TableCell align="right">{row.sender.firstName} {row.sender.lastName}</TableCell>
              {
                row.statut ?
                <TableCell align="right">{row.statut}</TableCell>: 
                 <TableCell align="right">En attente</TableCell>
              }
              
              <TableCell align="right">
                <Button
                  variant='contained'
                  color='primary'
                  sx={{ textTransform: 'none' }}
                  onClick={() => {
                    setMyVariable(prevState => ({
                      ...prevState,
                      demandeSelected: row
                    }))
                  }}
                >
                  Détails
                </Button>
              </TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
        {
            myVariable.demandeSelected!==null ?
            <ProductDetails child={<DemandesBox demandeSelected={ myVariable.demandeSelected}/>} setContentData={setContentData}/>: null
          }
    </TableContainer>
  );
}
