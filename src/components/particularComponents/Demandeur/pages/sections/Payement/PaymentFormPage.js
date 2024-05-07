import { Box } from '@mui/material';
import React from 'react';

import MyModal from '../../../../../generalComponents/MyModal/MyModal';
import PaymentForm from './PayForm';

function PaymentFormPage({user}) {
    return (
        <Box>

         <Box>
            <MyModal children={<PaymentForm user={user}/>} title={'Effectuer le payement'} /> 
        </Box>
        </Box>
    );
}

export default PaymentFormPage;