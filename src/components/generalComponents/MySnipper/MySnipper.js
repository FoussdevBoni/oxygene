import { CircularProgress } from '@mui/material';
import React from 'react';
import { colors } from '../../../data-center/colors';

function MySnipper(props) {
    return (
         <div class="load">
          <div class="loader" >
               <CircularProgress  sx={{color: colors.primary , fontSize: 40 , fontWeight: '900'}}/>

      </div>
      </div>
    );
}

export default MySnipper;


