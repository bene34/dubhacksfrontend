import React from 'react';
import { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import CompleteHeader from "./Header/CompleteHeader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const SpecificForm = ({item}) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!open) {
          navigate('/viewform')
        }
      }, [open])

      const handleClose = () => {
        setOpen(false);
        navigate('/viewform');
      };


    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View</DialogTitle>
        <DialogContent>
            <BarChart width={500} height={300} data={item}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0-7]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
            </BarChart>

          
        </DialogContent>
      </Dialog>
      );
  };
  
  export default SpecificForm;