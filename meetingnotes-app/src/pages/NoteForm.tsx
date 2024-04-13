import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import {ActionItem,Note} from '../models/Note'


interface NoteFormProps {
  open: boolean;
  note?: Note | null;
  onClose: () => void;
  onSave: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ open, note, onClose, onSave }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setActionItems(note.actionItems || []);
    } else {
      setTitle('');
      setContent('');
      setActionItems([]);
    }
  }, [note]);

  const handleSave = () => {
    const currentDate = new Date();
    const newNote: Note = {
      title,
      content,
      actionItems,
      createdAt: note?.createdAt || currentDate, // Use existing created date if editing, or set to current date if new
      updatedAt: currentDate,
      _id: ''
    };
    onSave(newNote);
  };

  const handleActionItemChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedActionItems = actionItems.map((item, i) => 
      i === index ? { ...item, completed: event.target.checked } : item
    );
    setActionItems(updatedActionItems);
};

const handleActionItemTextChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedActionItems = actionItems.map((item, i) => 
      i === index ? { ...item, text: event.target.value } : item
    );
    setActionItems(updatedActionItems);
};
  const addActionItem = () => {
    setActionItems([...actionItems, { text: '', completed: false }]);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{note ? 'Edit Note' : 'New Note'}</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="title" label="Title" type="text" fullWidth variant="outlined" value={title} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTitle(e.target.value)} />
        <TextField margin="dense" id="content" label="Content" type="text" fullWidth multiline rows={4} variant="outlined" value={content} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setContent(e.target.value)} />
        {actionItems.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel
              control={<Checkbox checked={item.completed} onChange={(e) => handleActionItemChange(index, e)} />}
              label={<TextField fullWidth value={item.text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleActionItemTextChange(index, e)} />}
            />
          </FormGroup>
        ))}
        <Button onClick={addActionItem} color="primary" className="button">Add Action Item</Button>
        </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="button">Cancel</Button>
        <Button onClick={handleSave} className="button">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteForm;
