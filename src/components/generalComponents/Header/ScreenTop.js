import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Mon profile',  'Se deconnecter'];

function ScreenTop({title}) {

  const navigate = useNavigate()

  return (
    <AppBar  sx={{  position: 'fixed', top: 0, left: 0, right: 0 , backgroundColor: 'black' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters style={{backgroundColor: 'black' , color: 'white'}}>
          <Box >
            <IconButton onClick={()=>{
                navigate(-1)
            }}>
                <ChevronLeft sx={{color: 'white' , fontSize: 35 , fontWeight:'900'}}/>
            </IconButton>
          </Box>
           <Box flexGrow={0.5}>
              <Typography textAlign={'center'} fontWeight={'900'} fontSize={20}>
            {title}
           </Typography>
           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ScreenTop;
