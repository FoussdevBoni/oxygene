import React, { useContext, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServicesSelect from './ServicesSelect';
import LocationsSelectForm from './LocationSelectForm';
import ServicesWrite from './ServicesWrite';
import { Autocomplete, Button, TextField } from '@mui/material';
import { push, ref, set } from 'firebase/database';
import { db } from '../../../Backend/Data/config';
import MyContext from '../../../Contextes/MyContext';
import { useNavigate } from 'react-router-dom';
const time = [];

 const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 15) {
    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedTime = `${formattedHour}h:${formattedMinute}min`;
    time.push(formattedTime);
  }
}
const Horaire= ({inputDate , inputTime})=>{
const dateChange = (event)=>{
  inputDate(event.target.value)
}
const timeChange = (event)=>{
  inputTime(event.target.value)

}
const [selectedTime, setSelectedTime] = useState(null);

  return (
    <Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible"
          label="Temps estimé pour votre travail en (heure)"
          type='number'
           onChange={
            timeChange
          }
        />
    </Box>
   <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
  <Autocomplete 
    disablePortal
    id="combo-box-demo"
    options={time}
    value={selectedTime}
    onChange={(event, newValue) => {
      setSelectedTime(newValue);
       inputDate(newValue)

    }}
    renderInput={(params) => <TextField {...params} label="Choisissez une heure pour le travail" />}
  />
</Box>
    </Box>
  )
}
function ServicesSelectForm({services , user}) {
  const [location, setLocation]  = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [details , setDetails] = useState('')
  const [estimeTime , setEstimeTime]= useState(0)
  const [date , setDate] = useState('')
    const {myVariable, setMyVariable}= useContext(MyContext)
     const navigate = useNavigate()
  const handleLocationChange = (location) => {
    // Utilisez la valeur de 'location' ici dans ServicesSelectForm
    setLocation(location)
  };
    const handleServicesChange = (selected) => {
    setSelectedServices(selected)
  };
  const timeChange = (taskTime)=>{
    setEstimeTime(taskTime)
  }
    const dateChange = (date)=>{
    setDate(date)
  }
  const sendDemand = ()=>{
   const newDemande =  {
        location: location,
        selectedServices: selectedServices,
        details: details , 
        sender: user,
        hour: date,
        estimeTime: estimeTime,
        date: (new Date()).toISOString()
  }
 push(ref(db, 'demandes/'+user.userId), newDemande).then(
    (data)=>{
       set(ref(db, 'demandes/all/'+data.key), newDemande).then(
        ()=>{
          set(ref(db, 'demandes/all/'+data.key+'/dmdKey'), data.key)
           set(ref(db, 'demandes/'+user.userId+'/'+data.key+'/dmdKey'), data.key).then(()=>{
            navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/Mes-demandes")
            setMyVariable((prevState)=>({
              ...prevState,
              selected: null
            }))
           })

        }
       )
    }
  )    
    console.log(newDemande)
  }
    return (
   <div>
  
     <div className='mt-5 '>
          <ServicesSelect services={services} serviceSelect = {handleServicesChange}/><br/>
        <LocationsSelectForm location={handleLocationChange} />
             <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-flexible"
          label="Ajouter les détails (Facultatif)"
          multiline
          maxRows={4}
          onChange={
            (event)=>{
              setDetails(event.target.value)
            }
          }
        />
    </Box>
        <Horaire inputDate={dateChange} inputTime={timeChange}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem'}} color='primary'  variant='contained'
           onClick={()=>{
                  sendDemand()
                }}
          >
            Envoyer
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
                  navigate(-1)
                }}        
                 >
            Annuler
          </Button>

        </Box>
     
        </div>
   </div>
    );
}

function ServicesWriteForm({ user}) {
    const [location, setLocation]  = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [details , setDetails] = useState('')
    const {myVariable, setMyVariable}= useContext(MyContext)
    const navigate = useNavigate()
  const handleLocationChange = (location) => {
    // Utilisez la valeur de 'location' ici dans ServicesSelectForm
    setLocation(location)
  };
     const handleServicesChange = (selected) => {
    setSelectedServices(selected)
  };
 const sendDemand = ()=>{
   const newDemande =  {
        location: location,
        selectedServices: selectedServices,
        details: details , 
        sender: user,
        date: (new Date()).toISOString()
  }
  push(ref(db, 'demandes/'+user.userId), newDemande).then(
    (data)=>{
       set(ref(db, 'demandes/all/'+data.key), newDemande).then(
        ()=>{
          set(ref(db, 'demandes/all/'+data.key+'/dmdkey'), data.key)
           set(ref(db, 'demandes/'+user.userId+'/'+data.key+'/dmdkey'), data.key).then(()=>{
               navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/Mes-demandes")

            setMyVariable((prevState)=>({
              ...prevState,
              selected: null
            }))
           })


        }
       )
    }
  )
    
    console.log(newDemande)
  }
    return (
   <div>
     <div className='mt-5 '>
      <ServicesWrite servicesaveWrite={handleServicesChange
      }/>
        <LocationsSelectForm location={handleLocationChange} />
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-flexible"
          label="Ajouter les détails (Facultatif)"
          multiline
          maxRows={4}
           onChange={
            (e)=>{
             setDetails(e.target.value)
            }
          }
        />
    </Box>
    <Horaire />
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem'}} color='primary'  variant='contained'
           onClick={()=>{
                  sendDemand()
                }}
          >
            Envoyer
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
                  navigate(-1)
                }}        
                 >
            Annuler
          </Button>

        </Box>
     </div>
   </div>
    );
}

function ByChatForm({user}) {
  const [message , setMessage ]= useState('')
    const [location, setLocation]  = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const handleLocationChange = (location) => {
    // Utilisez la valeur de 'location' ici dans ServicesSelectForm
    setLocation(location)
  };
 const navigate = useNavigate()
 const sendDemand = ()=>{
   const newDemande =  {
        location: location,
        message: message ,
        sender: user,
        date: (new Date()).toISOString()
  }
  push(ref(db, 'demandes/messages/'+user.userId), newDemande)
    
    console.log(newDemande)
  }
    return (
   <div>
     <div className='mt-5 '>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-flexible"
          label="Ecrivez nous un message (Obligatoire)"
          multiline
          maxRows={4}
          onChange={
            (e)=>{
             setMessage(e.target.value)
            }
          }
        />
     
    </Box>
       <LocationsSelectForm location={handleLocationChange} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem'}} color='primary'  variant='contained'
           onClick={()=>{
                  sendDemand()
                }}
          >
            Envoyer
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
                  navigate(-1)
                }}        
                 >
            Annuler
          </Button>

        </Box>
     </div>
   </div>
    );
}


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

export default function ServicesDemandForm({services , user}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
     <div className='text-2xl font-bold'>Nouvelle demande</div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Par selection" {...a11yProps(0)} />
          <Tab label="Par saisie" {...a11yProps(1)} />
          <Tab label="Par messagerie" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ServicesSelectForm services={services} user={user}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ServicesWriteForm user={user}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ByChatForm user={user}/>
      </TabPanel>
    </Box>
  );
}
