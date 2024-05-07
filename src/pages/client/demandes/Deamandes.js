import { Box } from '@mui/material';
import React from 'react';
import Demandes from '../../../components/particularComponents/Demandeur/pages/sections/Demandes/Demandes';

function DemandesPage({user}) {
    return (
        <Box>
            <Demandes user={user}/>
        </Box>
    );
}

export default DemandesPage;