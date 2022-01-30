import axios from 'axios'
import { useEffect, useState } from 'react';
import AddFolder from './component/AddFolder';
import AddBookmark from './component/AddBookmark';
import Folder from './component/Folder';
import Search from './component/Search';
import Bookmark from './component/Bookmark';
import FileUpload from './component/FileUpload';
import Grid from '@mui/material/Grid';


import './App.css';

function App() {
  const [bookmark, setBookmark] = useState([])
  const [folder, setFolder] = useState([])
  const [selectedFolder, setSelectedFolder] = useState([])
  
  const getBookmark = (path) => {
    setSelectedFolder(path)
    const params = {path:path}
    axios.get('http://localhost:5000/api/bookmark',{params})
    .then(res => {
      setBookmark(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const searchBookmark = (params) => {
    axios.get('http://localhost:5000/api/bookmark/search',{params})
    .then(res => {
      setBookmark(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const getFolder = () => {
    axios.get('http://localhost:5000/api/folder')
    .then(res => {
      setFolder(res.data)
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  const addFolder = (path) => {
    const _folder = folder
    _folder.push(path)
    console.log(_folder)
    setFolder(_folder)
  }


  const selectPath = (path) => {
    console.log(path)
    getBookmark(path)
  }

  const updateQuery = (query) => {
    console.log(query)
    searchBookmark({query:query})
  }

  useEffect(() =>{
    getBookmark({})
  }, [])

  useEffect(() =>{
    setSelectedFolder()
  }, [])


  useEffect(() =>{
    getFolder()
  }, [])

  return (
    <div className="App">
    <Grid container>
      <Grid sm={3}>
        <AddFolder folders={folder} addFolder={addFolder} selectPath={selectPath}/>
        <AddBookmark folders={folder} selectPath={selectPath}/>
        <Folder folders={folder} selectPath={selectPath}/>
        <FileUpload getBookmark={getBookmark} getFolder={getFolder} />
      </Grid>
      <Grid lg={9} sm={9} spacing={10}>
        <h3>{selectedFolder}</h3>
        <Search updateQuery={updateQuery}/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Bookmark bookmarks={bookmark} folders={folder} selectPath={selectPath} selectedFolder={selectedFolder}/>
          </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
