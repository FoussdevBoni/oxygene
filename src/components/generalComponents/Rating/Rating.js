import { Star } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { db } from '../../../Backend/config/config';

function Rating({driver , user}) {
    const [note , setNote] = useState()
    const [star1, setStar1] = useState('')
     const [star2, setStar2] = useState('')
    const [star3, setStar3] = useState('')
    const [star4, setStar4] = useState('')
    const [star5, setStar5] = useState('')
    const [view , setView] = useState('')

    const sendView = ()=>{
        const driverRef = ref(db, 'drivers/'+driver.id+'/note')
        const myView = {
            author: user , 
            text: view , 
            rating: note
        }
      set(driverRef , myView)
    }
    return (
      <Box>
         <Box>
         <Typography  component={'h3'}>
           Donner votre avis sur le service de ce chauffeur
         </Typography>
           <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" 
          multiline
          placeholder='Rédiger ce que vouss pensez de ce chauffeur'
        variant="outlined" type='tel' value={view} onChange={(e) => setView(e.target.value)} />
          
      </Box>
       <Box>
       


       </Box>
     </Box>
           <Box>
            
             <IconButton

              onClick={
                ()=>{
               
                 setNote(
                    {
                    star1: 'rated',
                    star2: '',
                    star3:'',
                    star4:'',
                    star5:''
                  }
                 )
                   setStar1('rated')
                   setStar2('')
                   setStar3('')
                   setStar4('')
                   setStar5('')
                }
               
            }
            className={star1}
            >
               <Star className={star1}/>
               
             
            </IconButton>
            <IconButton 

            onClick={
                ()=>{
               setNote(
                  {
                    star1: 'rated',
                    star2: 'rated',
                    star3:'',
                    star4:'',
                    star5:''
                 }
               )
                  setStar1('rated')
                 setStar2('rated')
                setStar3('')
                setStar4('')
                 setStar5('')
                }
               
            }
            >
               <Star className={star2}/>

            </IconButton>
            <IconButton 

            onClick={
                ()=>{
                 setNote(
                      {
                    star1: 'rated',
                    star2: 'rated',
                    star3:'rated',
                    star4:'',
                    star5:''
                   }
                 )
                 setStar1('rated')
                 setStar2('rated')
                 setStar3('rated')
                  setStar4('')
                 setStar5('')

                }
               
            }
            >
               <Star className={star3}/>

            </IconButton>

            <IconButton 

            onClick={
                ()=>{
                 setNote(
                     {
                    star1: 'rated',
                    star2: 'rated',
                    star3:'rated',
                    star4:'rated',
                    star5:''
                 }
                 )
                 setStar1('rated')
                 setStar2('rated')
                 setStar3('rated')
                 setStar4('rated')
                 setStar5('')
                }
               
            }
            >
               <Star className={star4}/>

            </IconButton>
            <IconButton 

            onClick={
                ()=>{
                 setNote(
                     {
                    star1:'rated',
                    star2: 'rated',
                    star3:'rated',
                    star4:'rated',
                    star5:'rated'
                 }
                 )
                 setStar1('rated')
                 setStar2('rated')
                 setStar3('rated')
                 setStar4('rated')
                 setStar5('rated')

                }
               
            }
            >
              
               <Star className={star5}/>
            </IconButton>
        </Box>
         <Button   fullWidth
                sx={{ backgroundColor: '#F0853F' , color: 'white' }} 
                onClick={
                    ()=>sendView()
                }
               >
        Envoyer votre avis
      </Button>
      </Box>
    );
}

export default Rating;