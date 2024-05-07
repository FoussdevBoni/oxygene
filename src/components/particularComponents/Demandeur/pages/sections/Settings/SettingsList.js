import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

import { AccountCircle, Bookmark, ChatBubble, History, Info, Notifications, Settings, Warning } from "@material-ui/icons";


const SettingsCategory = ({ cat }) => {
  return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardContent sx={{ backgroundColor: 'white', borderRadius: 'lg', boxShadow: 1, p: 4 }}>
        <Grid container alignItems="center" marginBottom={2}>
          <Grid item>{cat.icon}</Grid>
          <Grid item marginLeft={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              {cat.title}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" color="text.primary">
          {cat.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SettingsList = ({ settings }) => {
  return (
    <Box sx={{ mt: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Settings />
        <Typography variant="h5" sx={{ ml: 2 }}>
          Paramètres du site
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {settings.map((setting) => (
            <Grid item key={setting.id} xs={12} sm={6}>
              <SettingsCategory cat={setting} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
