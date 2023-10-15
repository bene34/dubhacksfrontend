import {React, useState,} from 'react';
import CompleteHeader from './Header/CompleteHeader';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const Invite = () => {
    const [emailText, setEmailText] = useState('');
    const [nameText, setNameText] = useState('');

    const submit = () => {
        if(!emailText.includes('@') || emailText.length < 5 || nameText.length < 6) {
            enqueueSnackbar('please format your input properly', { variant: "error" });
        }
        else {
            //Call API here
            //on success call the success toast
            enqueueSnackbar('Employee invitied', { variant: "success" });
        }
    }

  return (
    <CompleteHeader>
      <div>
        <SnackbarProvider />
        <Typography variant = "h4">Let's grow your team, invite a new employee!</Typography>
        <Typography variant="subtitle1">Email Adress: </Typography>
        <TextField
        label="Work email"
        placeholder="Work email"
        variant="outlined"
        onChange = {(e) => setEmailText(e.target.value)}
        />
        <Typography variant="subtitle1">Name: </Typography>
        <TextField
        label="Full name"
        placeholder="Full name"
        variant="outlined"
        onChange = {(e) => setNameText(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button variant="contained" style={{backgroundColor: "#E66E15"}} onClick = {submit}>Submit</Button>
      </div>
    </CompleteHeader>
  );
};

export default Invite;