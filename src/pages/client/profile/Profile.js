import { Box } from '@mui/material';
import React from 'react';
import ProfilePage from '../../../components/particularComponents/Demandeur/pages/sections/Profile/Profile';


function Profile({user}) {
    return (
        <Box>
            <ProfilePage user={user}/>
        </Box>
    );
}

export default Profile;