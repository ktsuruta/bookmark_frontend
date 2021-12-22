import TextField from '@mui/material/TextField';

function Search(props) {
    return (
        <TextField id="search" onChange={e => props.updateQuery(e.target.value)} type="search" />
        )
  }

export default Search