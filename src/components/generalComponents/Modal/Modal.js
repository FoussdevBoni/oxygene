import React, { useState } from 'react';
import { Button, Slide } from '@mui/material';

function Modal() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Toggle Transition
      </Button>
      <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
        <div style={{ background: 'lightblue', height: '100px', marginTop: '20px' }}>
          {/* Contenu de la transition */}
          <h2>Contenu de la transition</h2>
          <p>Ceci est un exemple de transition.</p>
        </div>
      </Slide>
    </div>
  );
}

export default Modal;
