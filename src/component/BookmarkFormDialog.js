import * as React from 'react';
import axios from 'axios'

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import NativeSelect from '@mui/material/NativeSelect';

let params = {}

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  useEffect(() =>{
    params = {}
  }, [])


  const folderPulldown = props.folders.map((folder) =>
    <option value={folder}>{folder}</option>
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const updateParams = (event) => {
    params[event.target.name] = event.target.value
    console.log(params)
  }


  const updateBookmark = (event) => {
    console.log(params)
    axios.post('http://127.0.0.1:5000/api/bookmark/' + props.bookmark._id,{params})
    .then(res => {
      console.log(res.data)
      props.selectPath(props.selectedFolder)
      params = {}
      setOpen(false);
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const deleteBookmark = (event) => {
    axios.delete('http://127.0.0.1:5000/api/bookmark/' + props.bookmark._id)
    .then(res => {
      console.log(res.data)
      props.selectPath(props.selectedFolder)
      setOpen(false);
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.bookmark._id}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="bookmark_name"
            name="bookmark_name"
            defaultValue={props.bookmark.bookmark_name}
            label="Bookmark Name"
            type="email"
            fullWidth
            onChange={event => updateParams(event)}
            variant="standard"
          />
        <NativeSelect
            fullWidth
            autoFocus
            onChange={event => updateParams(event)}
            defaultValue={props.bookmark.path}
            inputProps={{
            name: 'path',
            id: 'path',
          }}
        >
          <option value={props.bookmark.path}>{props.bookmark.path}</option>
          {folderPulldown}
        </NativeSelect>

          <TextField
            autoFocus
            margin="dense"
            id="url"
            name="url"
            defaultValue={props.bookmark.url}
            label="URL"
            type="email"
            fullWidth
            variant="standard"
            onChange={event => updateParams(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            defaultValue={props.bookmark.title}
            label="Title"
            type="email"
            fullWidth
            variant="standard"
            onChange={event => updateParams(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            name="image"
            defaultValue={props.bookmark.image}
            label="Image"
            type="email"
            fullWidth
            variant="standard"
            onChange={event => updateParams(event)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            defaultValue={props.bookmark.description}
            label="Description"
            type="email"
            fullWidth
            variant="standard"
            onChange={event => updateParams(event)}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateBookmark}>Update</Button>
          <Button variant="outlined" onClick={deleteBookmark} startIcon={<DeleteIcon />}>
          Delete
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}