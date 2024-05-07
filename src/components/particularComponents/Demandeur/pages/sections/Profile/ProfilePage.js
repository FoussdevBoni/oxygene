import { Box } from '@mui/material';
import React from 'react';
import UpDateForm from './UpdateProfile';
import CenteredContentPage from '../../../../../generalComponents/Container/MyContainer';
import Profile from './Profile';
import MyModal from '../../../../../generalComponents/MyModal/MyModal';
import ScreenTop from '../../../../../generalComponents/Header/ScreenTop';

function ProfilePage({user}) {
    return (
        <Box>

         <Box>
            <MyModal children={<Profile user={user}/>} title={'Mon profile'} /> 
        </Box>
        </Box>
    );
}

export default ProfilePage;