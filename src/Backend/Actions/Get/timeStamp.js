  export const timeFormat=(date)=>{
    let time ; let displayTime 
    const messageTime = new Date(date);
   const now = new Date();

    // eslint-disable-next-line max-len
    const isSameDay = messageTime.getDate() === now.getDate() && messageTime.getMonth() === now.getMonth() && messageTime.getFullYear() === now.getFullYear();
     time = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     date = messageTime.toLocaleDateString();
    if (now - messageTime < 24 * 60 * 60 * 1000) {
      if (isSameDay) {
        const timeString = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        displayTime = timeString;
      } else {
        displayTime= 'Hier';
                    }
    } else {
      const dateString = messageTime.toLocaleDateString();
      displayTime= dateString;
      if (messageTime==='Invalid Date') {
        displayTime= `à l'instant`;

      }
    }

return displayTime;
  }