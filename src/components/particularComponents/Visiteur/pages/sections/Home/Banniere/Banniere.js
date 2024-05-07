import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { banniere_content } from '../../../../../../../data-center/data';
import { useNavigate } from 'react-router-dom';
function Banniere(props) {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Carousel
        sx={{
          '& .carousel .slider-container': {
            display: 'flex',
          },
          '& .carousel .slider-item': {
            flex: '0 0 100%',
            maxWidth: '100%',
            padding: '0 20px',
            textAlign: 'center',
          },
          '& .carousel .banner-img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
          '& .carousel .banner-content': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
          },
          '& .carousel .banner-title': {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
          },
          '& .carousel .banner-text': {
            fontSize: '1.5rem',
            marginBottom: '20px',
          },
          '& .carousel .banner-btn': {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
            backgroundColor: 'white',
            padding: '10px 40px',
            borderRadius: '20px',
            color: '#000',
            textDecoration: 'none',
          },
        }}
        animation="slide"
        timeout={500}
        indicators={false}
        navButtonsAlwaysVisible={true}
      >
        {banniere_content.map((element, index) => (
          <div key={index} className="slider-item">
            <img
              src={element.image}
              alt="women's latest fashion sale"
              className="banner-img"
            />
            <div className="banner-content">
            
              <buttun variant="contained" color="primary" className="banner-btn"
               onClick={()=>{navigate('/connexion/client')}}
              >
                Demander
              </buttun>
            </div>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default Banniere;
