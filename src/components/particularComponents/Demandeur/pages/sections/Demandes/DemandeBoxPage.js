import { Box } from '@mui/material';
import React from 'react';

import MyModal from '../../../../../generalComponents/MyModal/MyModal';
import DemandesBox from './DemandesBox';

function DemandesBoxPage({user, demande}) {
    return (
        <Box>

         <Box>
            <MyModal children={<DemandesBox user={user} demande={demande}/>} title={'Details de ma demande'} /> 
        </Box>
        </Box>
    );
}

export default DemandesBoxPage;