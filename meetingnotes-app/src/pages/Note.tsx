
import React from 'react';
import { Card, CardContent, Typography, Checkbox, FormControlLabel, Button, CardActions } from '@mui/material';
import { Note as NoteType } from '../models/Note';
 
interface NoteProps {
  note: NoteType;
  onEdit?: () => void; // Optional function to call when the edit button is clicked
  onDelete?: () => void; // Optional function to call when the delete button is clicked
}
 
const Note: React.FC<NoteProps> = ({ note, onEdit, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', color: 'green' }}>
      <CardContent>
        <Typography variant="h5" component="div">{note.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{note.content}</Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">Created: {new Date(note.createdAt).toLocaleString()}</Typography>
        {note.actionItems.map((item, index) => (
          <FormControlLabel key={index} control={<Checkbox
            checked={item.completed}
            sx={{
              color: 'green', // Change the checkbox color to green
              '&.Mui-checked': {
                color: 'green', // Change the checkbox color to green when checked
              },
            }}
          />} label={item.text} sx={{ margin: 0.5 }} />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEdit} className="button">Edit</Button>
        <Button size="small" onClick={onDelete} className="button">Delete</Button>
      </CardActions>
    </Card>
  );
};
 
export default Note;
 