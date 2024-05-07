import { Box } from '@mui/material';
import React from 'react';
import ServicesDemandForm from '../../../../../generalComponents/ServicesDemands/ServicesDemandForm';
import { services } from '../../../../../../data-center/data';

function Form({services , user}) {

    return (
        <Box>
            <ServicesDemandForm services={services} user={user}/>
        </Box>
    );
}

export default Form;