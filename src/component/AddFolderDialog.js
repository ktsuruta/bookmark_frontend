import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


let newFolder = ""

export default function FormDialogAddFolder(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const updateNewFolder= (event) => {
    newFolder = event.target.value
    console.log(newFolder)
  }


  const AddFolder = (event) => {
    console.log(newFolder)
    props.addFolder(newFolder)
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="bookmark_name"
            name="bookmark_name"
            defaultValue=''
            label="Bookmark Name"
            type="email"
            fullWidth
            onChange={event => updateNewFolder(event)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={AddFolder}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}