
import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';

export default function FileUpload(props) {
  const [uploadFile, setUploadFile] = React.useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("file", uploadFile);

    axios
      .post("http://127.0.0.1:5000/upload/bookmarks", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res) => {
        console.log("successfully uploaded")
        props.getBookmark({})
        props.getFolder()
        })
      .catch((error) => {
        console.log("failed")
        // error response
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
        <br />
        <Button variant="contained" color="primary" type="submit">
            Upload
        </Button>
      </form>
    </div>
  );
}