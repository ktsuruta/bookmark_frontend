import axios from 'axios'
import { useEffect, useState } from 'react';
import Folder from './component/Folder';
import Search from './component/Search';
import Bookmark from './component/Bookmark';
import FileUpload from './component/FileUpload';
import Grid from '@mui/material/Grid';


import './App.css';

function App() {
  const [bookmark, setBookmark] = useState([])
  const [folder, setFolder] = useState([])
 
  const getBookmark = (params) => {
    axios.get('http://127.0.0.1:5000/api/bookmark',{params})
    .then(res => {
      setBookmark(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const searchBookmark = (params) => {
    axios.get('http://127.0.0.1:5000/api/bookmark/search',{params})
    .then(res => {
      setBookmark(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const getFolder = () => {
    axios.get('http://127.0.0.1:5000/api/folder')
    .then(res => {
      setFolder(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const selectPath = (path) => {
    console.log(path)
    getBookmark({path:path})
  }

  const updateQuery = (query) => {
    console.log(query)
    searchBookmark({query:query})
  }

  useEffect(() =>{
    getBookmark({})
  }, [])

  useEffect(() =>{
    getFolder()
  }, [])

  return (
    <div className="App">
    <Grid container>
      <Grid sm={3}>
        <Search updateQuery={updateQuery}/>
        <Folder folders={folder} selectPath={selectPath}/>
        <FileUpload getBookmark={getBookmark} getFolder={getFolder} />
      </Grid>
      <Grid lg={9} sm={9} spacing={10}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Bookmark bookmarks={bookmark}/>
          </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
