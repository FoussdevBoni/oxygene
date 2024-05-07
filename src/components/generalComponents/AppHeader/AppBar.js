import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Button } from '@mui/material';
import { MenuSharp, NotificationsSharp, Search } from '@material-ui/icons';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Contextes/MyContext';
let drawerWidth = 340;
  const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
     const connectedAS = localStorage.getItem('connectedAS')
const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({user}) => {
  const { myVariable, setMyVariable } = useContext(MyContext);
const navigate = useNavigate()
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
              setMyVariable(prevState => ({
                     ...prevState,
                     hiddenDrawer: true 
    }))
            setMyVariable((prevState) => ({
              ...prevState,
              open: true,
            }));
          }}
          sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none', xl: 'none', lg: 'none' } }}
        >
          <MenuSharp />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block', xl: 'block', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        ></Typography>
        <SearchBox>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Rechercher ....." inputProps={{ 'aria-label': 'search' }} />
        </SearchBox>
        <Box sx={{ flexGrow: 1 }} /> {/* Ajout d'une boîte flexible pour pousser les éléments à droite */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button>
            <NotificationsSharp style={{ color: 'white' }} />
          </Button>
         {
          user!== undefined && ( <Button onClick={
            ()=>{
             if(connectedAS==='admin'){
               navigate('/accounts/'+connectedAS+'/'+user.userId+'/profile')
             }else if(connectedAS==='client'){
               navigate('/accounts/'+connectedAS+'s/'+user.userId+"/"+user.lastName+'/profile')
             }else if(connectedAS==='partener'){
                 navigate('/accounts/'+connectedAS+'s/'+user.userId+"/"+user.companyName+'/profile')
             }
            }
          }>
           {
            user.profile!== undefined? <Avatar src={user.profile}/>:  <Avatar />
           }
          </Button>)
         }
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header