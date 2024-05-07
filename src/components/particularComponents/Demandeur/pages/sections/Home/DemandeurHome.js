import { Add } from '@material-ui/icons';
import { Box, Card, CardContent, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText , Slide} from '@mui/material';
import React from 'react';
import BestProducts from './BestProducts/BestProducts';
import BestCompanies from './BestCompanies/BestCompanies';
import ActionsBtn from './ActionsBtn/ActionsBtn';
import { Consultées } from './BestCompanies/BestCompaniesList';
import LoaderModal from '../../../../../generalComponents/Loader/LoaderModal';

function DemandeurHome({user}) {
   if (user!==undefined) {
     return (
    <Slide direction="right" in={true} timeout={500}>

        <Box>
            <br/><br />
            <Grid container spacing={2}>
                <Grid  item xs={12} md={6}>
                   <ActionsBtn user={user}/>
               <BestProducts user={user}/>
               </Grid>
                <Grid  item xs={12} md={6}>
                  <Card>
                    <CardContent>
                        <Consultées title={'Etablissements déja consultés'} user={user}/>
                    </CardContent>
                  </Card><br/><br/>
                    <Card>
                    <CardContent>
                        <BestCompanies title={'Etablissemnts proches de vous'} user={user} />
                    </CardContent>
                  </Card>
               </Grid>
            </Grid>
        </Box>
     </Slide>
    );
   }else{
    return <Box>
        <LoaderModal />
    </Box>
   }
}

export default DemandeurHome;