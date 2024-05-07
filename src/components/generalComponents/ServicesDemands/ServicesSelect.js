import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: '100%',
      overflowX: 'auto'
    },
  },
};




function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
        width: '100%',
       overflowX: 'auto'

  };
}

export default function ServicesSelect({ services, serviceSelect}) {
  const theme = useTheme();
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    serviceSelect(
       typeof value === 'string' ? value.split(',') : value
    )
  };

  return (
    <div className=''>
      <FormControl sx={{ m: 1, width: '100%' }} variant='outlined' > 
        <InputLabel id="demo-multiple-name-label">Choississez un service</InputLabel>
        <Select
          
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Choississez un service" />}
          MenuProps={MenuProps}
        >
          {services.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selected, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>


        
      </FormControl>
      
    </div>
  );
}
