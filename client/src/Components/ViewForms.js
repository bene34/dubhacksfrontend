import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  InputLabel,
  NativeSelect,
  FormControl,
  Grid,
  InputAdornment,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Add from '@mui/icons-material/Add'
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
import SpecificForm  from './SpecificForm';


const ViewForms = () => {
  const formData = [
    { name: 'John Doe', date: 25 },
    { name: 'Jane Smith', date: 30 },
    { name: 'Bob Johnson', date: 28 },
    { name: 'John Doe', date: 25 },
    { name: 'Jane Smith', date: 30 },
    { name: 'Bob Johnson', date: 28 },
    { name: 'John Doe', date: 25 },
    { name: 'Jane Smith', date: 30 },
    { name: 'Bob Johnson', date: 28 },
    { name: 'John Doe', date: 25 },
    { name: 'Jane Smith', date: 30 },
    { name: 'Bob Johnson', date: 28 },
    { name: 'John Doe', date: 25 },
    { name: 'Jane Smith', date: 30 },
    { name: 'Bob Johnson', date: 28 }
  ];
  const [openForm, setOpenForm] = useState(null);

  const handleClick = (name) => {
    const dataWithName = formData.find((item) => item.name === name);
    setOpenForm(dataWithName);
    
  };
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    minHeight="100vh"
  >
    <Box 
     p={2}
     bgcolor="lightgrey"
     width="100%"
     display="flex"
     alignItems="center"
     justifyContent="center"
    >
      <Typography variant="h4">
        View Forms
      </Typography>
    </Box>
    <Box display="flex" justifyContent="center" width="100%">
      <List component="nav" aria-label="main mailbox folders" style={{ width: '100%', overflow: 'auto' }}>
        {formData.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => handleClick(item.name)}
            style={{
              width: '100%',
                backgroundColor: '#f2f2f2',
                border: '1px solid #e0e0e0',
                margin: 10,
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
              
            }}
          >
            Name: {item.name}, Date: {item.date}
          </ListItem>
        ))} 
      </List>
      {openForm && 
      <SpecificForm item={openForm}/>}  


    </Box>
  </Box>

    
  );
};

export default ViewForms;