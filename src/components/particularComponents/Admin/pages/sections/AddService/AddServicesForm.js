import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Menu, MenuItem, InputLabel, TextareaAutosize } from '@mui/material';

const AddServiceForm = () => {
  const [category, setCategory] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCategoryFocus = () => {
    setShowMenu(true);
  };

  const handleCategoryBlur = () => {
    setShowMenu(false);
  };

  const handleMenuItemClick = (value) => {
    setCategory(value);
    setShowMenu(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h5" component="h2" mb={4}>
        Ajouter un service
      </Typography>
      <Box width="50%" position="relative">
        <form>
          <Box mb={3}>
            <InputLabel htmlFor="category" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Catégorie
            </InputLabel>
            <TextField
              id="category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
              onFocus={handleCategoryFocus}
              onBlur={handleCategoryBlur}
              variant="outlined"
              fullWidth
            />
            <Menu
              anchorEl={document.getElementById('category')}
              open={showMenu}
              onClose={() => setShowMenu(false)}
              onClick={() => setShowMenu(false)}
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(cat)}>
                  {cat}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="description" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Description
            </InputLabel>
            <TextareaAutosize
              id="description"
              name="description"
              placeholder="Description du service"
              rows={4}
              minRows={4}
              style={{ width: '100%', resize: 'none' }}
            />
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="name" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Nom du service
            </InputLabel>
            <TextField id="name" name="name" placeholder="Nom du service" autoComplete="off" variant="outlined" fullWidth />
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="icon" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Icône du service
            </InputLabel>
            <TextField id="icon" name="icon" placeholder="Icône du service" autoComplete="off" variant="outlined" fullWidth />
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="image" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Image du service
            </InputLabel>
            <input type="file" id="image" name="image" onChange={handleImageUpload} style={{ display: 'none' }} />
            <label htmlFor="image">
              <Button variant="contained" component="span">
                Parcourir
              </Button>
            </label>
            {selectedImage && (
              <img src={selectedImage} alt="Selected" style={{ width: '200px', marginTop: '8px' }} />
            )}
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Ajouter
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddServiceForm;
