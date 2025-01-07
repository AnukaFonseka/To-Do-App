import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const NewTodoDialog = ({ open, onClose, onSubmit, initialTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTask(initialTask.content);
      setDate(initialTask.date.split('T')[0]); // Assuming date is in ISO format.
      setTime(initialTask.date.split('T')[1]?.slice(0, 5) || ''); // Extracts the time.
    } else {
      setTask('');
      setDate('');
      setTime('');
    }
  }, [initialTask]);

  const handleSubmit = () => {
    if (task.trim() && date && time) {
      const dateTime = new Date(`${date}T${time}`).toISOString();
      onSubmit({ content: task, date: dateTime });
      setTask('');
      setDate('');
      setTime('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Task"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          margin="dense"
          label="Time"
          type="time"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{initialTask ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTodoDialog;
