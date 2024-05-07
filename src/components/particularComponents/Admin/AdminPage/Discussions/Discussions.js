import React from 'react';
import Chat from '../../../../../generalComponents/Chat/Chat';
import { Box } from '@mui/material';

function Discussions({user}) {
    return (
        <Box >
            <Chat user={user}/>
        </Box>
    );
}

export default Discussions;