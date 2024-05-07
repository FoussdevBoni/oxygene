import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardHeader, IconButton, Grid, List, ListItem, ListItemText, Tabs, Tab, Avatar, CardContent } from '@mui/material';
import ProductList from './ProductFounds';


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

const ResultPage = ({search}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{
      
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        width:'100%',
        height:'550px'
      }}
    >
     
 

     
 
     
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Produits trouvés" {...a11yProps(0)} />
          <Tab label="Etablissements" {...a11yProps(1)} />
        </Tabs>
      </Box>
     <Box
   
     >
         <TabPanel value={value} index={0}>
        <ProductList wordKey={search}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div>
            {value}
        </div>
      </TabPanel>
     </Box>
      
    
 </Box>
  );
};




export default ResultPage;
