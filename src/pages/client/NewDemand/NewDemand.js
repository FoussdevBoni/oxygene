import { Box } from '@mui/material';
import React from 'react';
import DemandForm from '../../../components/particularComponents/Demandeur/pages/sections/NewDemande/DemandForm';

function NewDemand({user}) {
    return (
        <Box>
            <DemandForm user={user}/>
        </Box>
    );
}

export default NewDemand;