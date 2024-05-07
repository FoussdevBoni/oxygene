import { Box } from '@mui/material';
import React from 'react';
import Discussions from '../../../components/particularComponents/Demandeur/pages/sections/Discussions/Discussions';

function ChatPage({user}) {
    return (
        <Box>
            <Discussions user={user}/>
        </Box>
    );
}

export default ChatPage;