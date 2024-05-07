import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardHeader, IconButton, Grid, List, ListItem, ListItemText, Tabs, Tab, Avatar } from '@mui/material';
import { CardContent } from 'framework7-react';
import { MoreVert } from '@material-ui/icons';
import ProfileUpdateForm from './ProfileUpdateForm';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../Backend/Data/config';
import { push, ref as databaseRef  , onValue, set, get } from 'firebase/database';
import { companyDefaulLogo } from '../../../../../../data-center/data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProfilePage = ({user}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const userPhotoRef = ref(storage, `user_photos/${user.userId}.jpg`);
  const  handlePhotoChange = () => {
    // Ouvrir l'explorateur de fichiers pour sélectionner une image
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => {
      const file = input.files[0];

      // Télécharger la nouvelle image dans le stockage Firebase
      uploadBytes(userPhotoRef, file).then(() => {
        // Récupérer l'URL de téléchargement de la nouvelle image
        getDownloadURL(userPhotoRef).then(url => {
          // Mettre à jour l'état de l'image de l'utilisateur
           set(databaseRef(db, 'users/parteners/'+ user.userId+'/profile'  ),  url)

        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    });
    input.click();
  }
    const userData  = {
        connexion: [
            {
             title: 'Email', 
             value: user.email
            },
            {
             title: 'Mot de passe', 
             value: '***********'
            }
        ],
        person: [
             {
             title: 'Email', 
             value: user.email
            },
             {
             title: 'Etablissement', 
             value: user.companyName
            },
             {
             title: 'Téléphone', 
             value: user.phone
            },
        ],

          others: [
             {
             title: 'produits publiés', 
             value: 23
            },
            {
             title: 'produits vendus', 
             value: 65
            },
            {
             title: 'commandes en cours', 
             value: 56
            }
        ]
    }
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        width:'100%',
        height:'550px'
      }}
    >
     
 <Grid container spacing={2}>
      {/* Colonne 2 */}
      <Grid item xs={12} md={12}>
   <Card  sx={{
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',

      }}>            <CardContent 
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
           >
            <Box>
                {
                    user.profile!==undefined ? 
                    <Avatar
             width={200} 
             height={200}
             style={{borderRadius:'50%'}}
              alt="Ted talk"
              src= {user.profile}
            />: <Avatar
             width={200} 
             height={200}
             style={{borderRadius:'50%'}}
              alt="Ted talk"
              src= {companyDefaulLogo}
            />
                }
                

            <Typography variant='h5'>
                {user.companyName}
            </Typography>
            </Box>
             <Box>
                 <Button variant='contained' color='primary'
                 style={{textTransform:'none'}}
                 onClick={
                    ()=>{
                        handlePhotoChange()
                    }
                 }
                 >
               Ajouter un logo 
            </Button>
             </Box>
            </CardContent>
         </Card>
         <br/><br/>
         <Card  sx={{
        flexDirection: 'column',
        alignItems: 'center',
      
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',

      }}> 

       <CardContent>
         <Typography variant="div"
        style={{fontWeight:'bold', backgroundColor: 'blue' , color: 'white', width:'100%' , padding: '10px'}}>Statistiques </Typography>


         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 2 }}>
        {userData.others.map((data , index) => (
        <ListItem
          key={index}
          disableGutters
        >
          <ListItemText primary={
            (<Typography variant='div'
            style = {{}}
            className={`flex  ${index>0 ? '-mt-4':''}`}
            >
              <div style = {{fontWeight:'bold'}}>
                {
                data.title 
                }:
              </div>

              <div className='ml-5'>
                {
                data.value 
                }:
              </div>
            </Typography>)
          } />
        </ListItem>
      ))}
    </List>
      </CardContent>
    </Card>
      </Grid>

      {/* Colonne 3 */}
      <Grid item xs={12} md={12} >
      
           <Card  sx={{
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',

      }}>           
      <CardContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Aperçu" {...a11yProps(0)} />
          <Tab label="Mettre à jour" {...a11yProps(1)} />
          <Tab label="Sécurité " {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 2 }}>
        {userData.person.map((data , index) => (
        <ListItem
          key={index}
          disableGutters
        >
          <ListItemText primary={
            (<Typography variant='div'
            style = {{}}
            className={`flex  ${index>0 ? '-mt-4':''}`}
            >
              <div style = {{fontWeight:'bold'}}>
                {
                data.title 
                }:
              </div>

              <div className='ml-5'>
                {
                data.value 
                }:
              </div>
            </Typography>)
          } />
        </ListItem>
      ))}
    </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileUpdateForm user={user}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
         <div>
            {value}
        </div>
      </TabPanel>
      </CardContent>
       </Card>
      </Grid>
    </Grid> 
 </Box>
  );
};




export default ProfilePage;
