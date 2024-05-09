import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Box, IconButton, AppBar, Toolbar, useTheme, Button, Grid, Typography, 
  TextField, RadioGroup, FormControlLabel, Radio} from "@mui/material"
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { createSvgIcon } from '@mui/material/utils';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);
const HeaderBar= ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Send searchQuery to the parent component
    onSearch(searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [productName, setProductName] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => setSelectedOption(event.target.value);

  const handleSubmit = () => {
  console.log('Product Name:',productName);
  console.log('Selected Option:',selectedOption);
    handleClose();
  };
  return (
    <AppBar  position="static" >
<Toolbar sx={{backgroundColor:'#39befc !important'}}>
 {/* SEARCH BAR */}
 <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
       <InputBase
        sx={{ ml: 2, flex: 1}}
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <IconButton onClick={handleSearch} type="button" sx={{ p: 1 }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Box>
{/* filter */}
 {/* New Product Button*/}
 <Grid container justifyContent="flex-end" sx={{ flex: 1 }}>
          <Button variant="outlined" startIcon={<PlusIcon />} 
          sx={{ justifyContent: 'space-between' }}
          onClick={handleOpen}>
            New product
          </Button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Create a New Product
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FormControlLabel
            control={<TextField label="Product Name" variant="outlined" fullWidth value={productName} onChange={(e) => setProductName(e.target.value)} />}
            label="Product Name"
            labelPlacement="start"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
          <FormControlLabel
            control={<RadioGroup value={selectedOption} onChange={handleChange} row>
              <FormControlLabel value="option1" control={<Radio />} label="Stocked Product" />
              <FormControlLabel value="option2" control={<Radio />} label="Serialized Product" />
              <FormControlLabel value="option3" control={<Radio />} label="Non-Stocked Product" />
              <FormControlLabel value="option4" control={<Radio />} label="Service" />
            </RadioGroup>}
            label="Product Type"
            labelPlacement="start"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={handleClose} sx={{ mr: 2 }}>Close</Button>
         <Link to= "/newProductPage">
          <Button variant="contained" onClick={handleSubmit} color="primary">Save</Button>
          </Link>

        </Box>
      </Box>

      </Modal>
        </Grid>
</Toolbar>
    </AppBar>
  )
}

export default HeaderBar