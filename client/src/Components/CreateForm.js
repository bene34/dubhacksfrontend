import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  InputLabel,
  NativeSelect,
  FormControl,
  Grid,
  InputAdornment,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Add from "@mui/icons-material/Add";
import CompleteHeader from "./Header/CompleteHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://dh-backend-fr-fd4331759334.herokuapp.com";

const CreateForm = () => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      navigate("/");
    }
  }, [open]);

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleQuestionTitle = (event) => {
    setQuestionTitle(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleQuestion = () => {
    const object = { question: questionTitle, questionCategory: category };
    //  console.log(object)
    setQuestion([...question, object]);
    setQuestionTitle("");
    setCategory("");
    console.log(question);
    //  console.log(question);
  };

  const handleSubmit = async (event) => {
    // handleQuestion();
    event.preventDefault();
    var userStr = localStorage.getItem("user");
    var user = JSON.parse(userStr);

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const mysqlDate = `${year}-${month}-${day}`;

    console.log(mysqlDate); // This will print today's date in MySQL date format

    const res = await axios.post(API + "/form", {
      title: title,
      curr_date: mysqlDate,
      form_description: description,
      employer_id: user.employer_id,
      questions: question,
    });
    alert("form sent!")
    // use email API to send to all employees
    
    navigate('/');
  };

  return (
    <CompleteHeader>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="formtitle"
              label="Form Title"
              type="text"
              fullWidth
              value={title}
              onChange={handleTitle}
            />
            <TextField
              autoFocus
              margin="dense"
              id="formtitle"
              label="Form Description"
              type="text"
              fullWidth
              value={description}
              onChange={handleDescription}
            />
            <TextField
              autoFocus
              margin="dense"
              id="formtitle"
              label="Question"
              type="text"
              fullWidth
              value={questionTitle}
              onChange={handleQuestionTitle}
            />
            <Select
              autoFocus
              margin="dense"
              labelId="Category"
              id="category"
              value={category}
              onChange={handleCategory}
              fullWidth
            >
              <MenuItem value="wlb">Work-Life Balance</MenuItem>
              <MenuItem value="transparency">Transparency</MenuItem>
              <MenuItem value="culture">Culture</MenuItem>
              <MenuItem value="overall">Overall</MenuItem>
            </Select>

            <DialogActions>
              <Button onClick={handleQuestion}>
                <Add />
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </CompleteHeader>
  );
};

export default CreateForm;
