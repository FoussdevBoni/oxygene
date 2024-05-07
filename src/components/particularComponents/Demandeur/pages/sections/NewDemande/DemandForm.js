import { Box, Container, Modal, Slide } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CategoriesServices from './CategoriesServices';
import MyContext from '../../../../../../Contextes/MyContext';
import Form from './Form';
import { categories } from '../../../../../../data-center/categories';

function DemandForm({user}) {
    const {myVariable , setMyVariable} =useContext(MyContext)
    const [open , setOpen] = useState(true)
    useEffect(()=>{
        setOpen(true)
        
      return ()=>{
        setOpen(false)
      }
    }, [])

   const handleClose = ()=>{
    setMyVariable((prevState)=>(
      {
        ...prevState,
        selected: null
      }
    ))
    }
    return (
        <Box>
           {
   <Slide direction="right" timeout={500} in={ myVariable.selected===null} mountOnEnter unmountOnExit >             
      <div>
                    {
                      myVariable.selected===null && (
                        <CategoriesServices categories={categories}/> 
                      )  
                    }
                </div>
            </Slide>
           }

            {
                <Modal open={ myVariable.selected!==null}
                 closeAfterTransition onClose={handleClose}>
               
                 <Slide direction="right" timeout={500} in={ myVariable.selected!==null} mountOnEnter unmountOnExit> 
                
                   <Container maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '2px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
  }} className='container'>
                    {
                      myVariable.selected!==null && (
                        <Form services={myVariable.selected.services}  user={user}/> 
                      )  
                    }
                </Container>
              </Slide> 
            </Modal>
            }


        </Box>
    );
}

export default DemandForm;