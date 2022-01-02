import * as React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [param, setParam] = useState([])

  useEffect(() =>{
    setParam({
    "bookmark_name": props.bookmark.bookmark_name,
    "image": props.bookmark.image,
    "url": props.bookmark.url,
    "title": props.bookmark.title,
    "description": props.bookmark.description})
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const updateParams = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    console.log(param[event.target.name])
    let _param = param
    _param[event.target.name] = event.target.value
    console.log(_param)
    setParam(_param)
  }

  const updateBookmark = (event) => {
    console.log(param)
    axios.post('http://127.0.0.1:5000/api/bookmark/' + props.bookmark._id,{param})
    .then(res => {
      console.log(res.data)
      props.selectPath(props.selectedFolder)
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
          <TextField
            autoFocus
            margin="dense"
            id="path"
            name="path"
            defaultValue={props.bookmark.path}
            label="Folder"
            type="email"
            fullWidth
            variant="standard"
            onChange={event => updateParams(event)}
          />

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
          <Button onClick={updateBookmark}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}