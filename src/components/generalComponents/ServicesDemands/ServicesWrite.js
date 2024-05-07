import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { TransitionGroup } from 'react-transition-group';
import { Delete } from '@material-ui/icons';
import { TextField } from '@mui/material';

export default function ServicesWrite({ servicesaveWrite}) {
  const [inputs, setInputs] = React.useState([]);

  const handleAddInput = () => {
    setInputs((prevInputs) => [...prevInputs, '']);

  };

  const handleInputChange = (index, value) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
    servicesaveWrite(inputs)
  };

  const handleRemoveInput = (index) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs.splice(index, 1);
      return newInputs;
    });
  };

  const addInputButton = (
     <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { ml:1 , width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
       <Button variant="contained" onClick={handleAddInput} sx={{ ml: 1, width: '100%'}}>
      Ajouter un service
    </Button>
    </Box>
  );
const handleSave = () => {
  // Récupère les valeurs des inputs et les stocke dans un tableau
  const inputValues = inputs.map((input) => input.trim());

  // Fais quelque chose avec le tableau de valeurs (par exemple, l'afficher dans la console)
  console.log(inputValues);
};
 return (
  <div>
    {addInputButton}
    <Box sx={{ mt: 1, width: '100%' }}>
      <List>
        <TransitionGroup>
          {inputs.map((input, index) => (
            <Collapse key={index}>
              <ListItem
              
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete"
                    onClick={() => handleRemoveInput(index)}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText
                style={{mr:1, width:'100%'}}
                  primary={
                    <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { ml:-1 , width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
                    <TextField
                       style={{width:'100%'}}

                      type="text"
                      placeholder={'service ' + parseInt(index + 1)}
                      value={input}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
         </Box>
                  }
                />
              </ListItem>
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
    
  </div>
);

}
