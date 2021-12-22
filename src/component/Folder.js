import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

function Folder(props) {
    return (
        props.folders.map((folder) =>
        <List><ListItem disablePadding><ListItemButton><ListItemIcon></ListItemIcon><a href='#' onClick={()=>props.selectPath(folder)}>{folder}</a></ListItemButton></ListItem></List>
         )
      )

  }

export default Folder