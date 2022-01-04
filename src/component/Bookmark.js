import Card from '@mui/material/Card';
import axios from 'axios'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import FormDialog from './BookmarkFormDialog';

function Bookmark(props) {

    return (
        props.bookmarks.map((bookmark) =>
        <Grid item>
        <Card sx={{ maxWidth: 545 }}>
          <CardMedia
            component="img"
            height="240"
            image={bookmark.image}
            alt={bookmark.title}
          />
          <CardContent>        
            <Typography gutterBottom variant="h5" component="div">
            {bookmark.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {bookmark.description}
            </Typography>
          </CardContent>
          <CardActions>
          <Link
          variant="body2"
          href={bookmark.url}
        >
          {bookmark.bookmark_name} / 
          {bookmark._id}
        </Link>
          </CardActions>
        <FormDialog bookmark={bookmark} selectPath={props.selectPath} folders={props.folders} selectedFolder={props.selectedFolder}/>
        </Card>
        </Grid>
         )
      )
  }

export default Bookmark