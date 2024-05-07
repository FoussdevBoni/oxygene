import React, { useContext, useState, useEffect } from 'react';
import { Modal, Paper, Slide, Box, Typography, List, ListItemButton, ListItemText, IconButton, Fab, ListItemAvatar, ListItem, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { AddComment, ArrowBack } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Contextes/MyContext';
import { timeFormat } from '../../../Backend/Actions/Get/timeStamp';
import { companyDefaulLogo } from '../../../data-center/data';
import ScrollableModal from '../ScrollableMadal/ScrollableModal';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    outline: 'none',
    padding: theme.spacing(2),
  },
  usersList: {
    maxHeight: '100%',
    overflowY: 'auto',
    marginTop: 0,
  },
  header: {
    position: 'absolute',
    top: theme.spacing(0),
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    zIndex: 2,
  },
  sendButton: {
    marginLeft: theme.spacing(1),
    padding: 16,
  },
}));
function stripHtmlTags(text) {
  return text.replace(/<[^>]*>?/gm, '');
}

function ChatCard({ e, user }) {
  const { myVariable, setMyVariable } = useContext(MyContext);

  const handleClick = () => {
    const chatSelected = e.receiver.userId === user.userId ? e.sender : e.receiver;
    setMyVariable((prevState) => ({ ...prevState, chatSelected }));
  };

  const isReceiver = e.receiver.userId === user.userId;
 
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncatedText = text.slice(0, maxLength);
    return truncatedText.slice(0, truncatedText.lastIndexOf(' ')) + '...';
  };
  return (
    <ListItem style={{ cursor: 'pointer', width: '85%' }} onClick={handleClick}>
      <ListItemAvatar>
        <Avatar src={isReceiver ? e.sender.profile || companyDefaulLogo : e.receiver.profile || companyDefaulLogo} alt="Avatar" />
      </ListItemAvatar>
  <ListItemText
        primary={
          isReceiver
            ? `${e.sender.firstName} ${e.sender.lastName}`
            : e.receiver.name !== undefined
            ? e.receiver.name
            : e.receiver.companyName !== undefined
            ? e.receiver.companyName
            : `${e.receiver.firstName} ${e.receiver.lastName}`
        }
        secondary={
          <React.Fragment>
            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
               {truncateText(e.messageText, 20)}
            </Typography>
             {"     "+timeFormat(e.date)}
          </React.Fragment>
        }
      />

  
    </ListItem>
  );
}

const ChatList = ({ data, user }) => {
  const { myVariable, setMyVariable } = useContext(MyContext);

  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate(`/accounts/clients/${user.userId}/${user.lastName}/Mes-demandes`);
    setMyVariable((prevState) => ({
      ...prevState,
      activeMenuIndex: 0,
    }));
  };

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal} disableEnforceFocus disableAutoFocus>
      <Slide direction="right" in={open} mountOnEnter unmountOnExit>
        <Paper className={classes.modalContent + ' ' + 'container'}>
          <div className={classes.header + ' ' + ' bg-gray-200'}>
            <IconButton onClick={handleClose}>
              <ArrowBack />
            </IconButton>
            <Typography variant="div" component="div" fontWeight="bold" marginLeft={2}>
              Mes discussions
            </Typography>
          </div>
          <Box className={classes.usersList}>
            <Box sx={{ position: 'fixed', top: '90%', right: '10%', zIndex: 3 }}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => {
                  navigate(`/accounts/clients/${user.userId}/${user.lastName}/Nouvelle-Discussion`);
                }}
              >
                <AddComment />
              </Fab>
            </Box>
            <List style={{ width: '85%' }}>
              <ListItem style={{ width: '85%' }}>
                <ListItemButton>
                  <ListItemText primary="" />
                </ListItemButton>
              </ListItem>
              {data.map((item) => (
                <ChatCard key={item.id} e={item} user={user} />
              ))}
            </List>
          </Box>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default ChatList;
