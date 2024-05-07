import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { residences } from '../../../data-center/locations';

export default function LocationsSelectForm({location}) {
  const [country, setCountry] = React.useState('');
  const [dep, setDep] = React.useState('');
  const [city, setCity] = React.useState('');
  const [arr, setArr] = React.useState('');
  const [deps , setDeps] = React.useState(residences[0])
  const [cities , setCities] = React.useState(residences[0].communes)
  const [arrs , setArrs] = React.useState(residences[0].communes[0].arr)

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
   const selectDep = (event) => {
    setDep(event.target.value);
    location({
      dep: event.target.value,
      city: '',
      arr: ''
    })
    residences.map(
      // eslint-disable-next-line array-callback-return
      (dep) => {
        if (dep.depar===event.target.value) {
            setCities(dep.communes)
        }
      }
    )
  };

  const selectCity = (event) => {
  setCity(event.target.value);
    location({
      dep: dep,
      city: event.target.value,
      arr: ''
    })
    cities.map(
      (city)=>{

        if (city.comm===event.target.value) {
            setArrs(city.arr)
        }
      }
    )  
    
  };
    const selectArr = (event) => {
        setArr(event.target.value);
          location({
      dep: dep,
      city: city,
      arr: event.target.value
    })
     };




  return (
    
     <div className= {' w-full'}
     >
      <FormControl required sx={{ m: 1, width: '100%'}}>
        <InputLabel id="demo-simple-select-readonly-label">Votre pays</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={country}
          label="Votre pays"
          onChange={handleChange}
        >
          <MenuItem value={10}>Bénin</MenuItem>
        </Select>
      </FormControl>
      <FormControl required sx={{ m: 1, width: '100%'}}>
        <InputLabel id="demo-simple-select-required-label">Votre département ou région</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={dep}
          label="Votre département ou région"
          onChange={selectDep}
        >
          {
            residences.map(
              (dep)=>{
                return(
                  <MenuItem value={dep.depar}>
                    {dep.depar}
                  </MenuItem>

                )
              }
            )
          }
          
        </Select>
      </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} >
        <InputLabel id="demo-simple-select-error-label">Votre commune ou ville</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={city}
          label="Votre commune ou ville"
          onChange={selectCity}
        >
        
     {
            cities.map(
              (city)=>{
                return(
                  <MenuItem value={city.comm}>
                    {city.comm}
                  </MenuItem>

                )
              }
            )
          }
                  
        </Select>
      </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} >
        <InputLabel id="demo-simple-select-error-label">Votre arrondissement</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={arr}
          label="Votre arrondissement"
          onChange={selectArr}
        >
         {
            arrs.map(
              (arr)=>{
                return(
                  <MenuItem value={arr}>
                    {arr}
                  </MenuItem>

                )
              }
            )
          }
          
        </Select>
      </FormControl>
    </div>
    
  );
}