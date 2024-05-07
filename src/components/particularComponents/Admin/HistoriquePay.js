import { Box } from '@mui/material';
import React from 'react';
import { ref } from 'firebase/database';
import { db } from '../../../Backend/Data/config';
import HistoPay from './HistoPay/HistoPay';

function HistoriquePay(props) {
    return (
        <Box>
            
            <HistoPay dataRef={ref(db, 'payements')}/>
        </Box>
    );
}

export default HistoriquePay;