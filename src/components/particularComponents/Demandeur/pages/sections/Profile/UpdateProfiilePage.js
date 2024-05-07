import { Box } from '@mui/material';
import React from 'react';
import UpDateForm from './UpdateProfile';
import CenteredContentPage from '../../../../../generalComponents/Container/MyContainer';
import MyModal from '../../../../../generalComponents/MyModal/MyModal';

function UpDateProfilePage({user}) {
    return (
        <Box>
             <Box>
            <MyModal children={<UpDateForm user={user}/>} title={'Modifier mon profile'}/> 
        </Box>
        </Box>
    );
}

export default UpDateProfilePage;