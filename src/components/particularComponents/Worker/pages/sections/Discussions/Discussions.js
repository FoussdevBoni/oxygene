import React from 'react';
import Chat from '../../../../../generalComponents/Chat/Chat';
import { Box , Slide} from '@mui/material';

function Discussions({user}) {
    return (
<Slide direction="right" in={true} timeout={500}>

        <Box >
            <Chat user={user}/>
        </Box>
     </Slide >

    );
}

export default Discussions;