import { Box } from '@mui/material';
import React from 'react';
import CompaniesList from './BestCompaniesList';

function BestCompanies({title , user , condition}) {
    return (
        <Box>
            <CompaniesList title={title} user={user} condition={condition}/>
        </Box>
    );
}

export default BestCompanies;