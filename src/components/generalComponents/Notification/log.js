import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database'; // Assurez-vous d'importer les bibliothèques nécessaires pour communiquer avec votre base de données Firebase
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { db } from '../../../Backend/Data/config';
import { logo } from '../../../data-center/data';

function NotifToast({ user }) {
  const [open, setOpen] = useState(false); // Définir initiallement open à false
  const [notification, setNotification] = useState(null); // État pour stocker la dernière notification

  useEffect(() => {
    const dataRef = ref(db, 'notifications/' + user.userId);
    onValue(dataRef, (snapshot) => {
      const notificationsData = snapshot.val();
      if (notificationsData) {
        // Récupérer la dernière notification
        const notifications = Object.values(notificationsData);
        const latestNotification = notifications[notifications.length - 1];
        setNotification(latestNotification);
        setOpen(true); // Mettre à jour open à true lorsqu'il y a une nouvelle notification
      }
    });
  }, [user.userId]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {notification && (
        <Snackbar
          open={open}
          autoHideDuration={10000}
          onClose={handleClose}
          message={
            <div className="notification-toast" data-toast>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
                sx={{ marginRight: '8px' }}
              >
                <CloseIcon />
              </IconButton>
              <div className="toast-banner">
                <img src={logo} alt={notification.title} width="80" height="70" />
              </div>
              <div className="toast-detail">
                <p className="toast-message">{notification.text}</p>
                <p className="toast-title">{notification.title}</p>
                <p className="toast-meta">
                  <time dateTime={notification.timestamp}>{notification.timestamp}</time> ago
                </p>
              </div>
            </div>
          }
        />
      )}
    </>
  );
}

export default NotifToast;
