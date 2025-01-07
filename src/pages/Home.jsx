import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import Sidebar from '../components/Sidebar'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const Home = () => {

    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com"
    }

    const taskCounts = {
        all: 10,
        completed: 5,
        todo: 5
    }

    const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    const handleAddTask = () => {
      if (task.trim()) {
        dispatch(addTodo({ content: task }));
        setTask('');
        setOpen(false);
      }
    };
  return (
    <div className="flex flex-col md:flex-row min-w-screen min-h-screen bg-cover bg-center relative">
        <Sidebar user={user} taskCounts={taskCounts} />
        <div className='w-full p-12 flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-3xl md:text-5xl font-bold mb-2'>TaskMate</h1>
            <span>Your friendly companion for productivity</span>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            color="primary"
            className="!h-10 !md:h-12 !text-sm !p-4 md:!p-6"
            startIcon={
              <span className="material-symbols-outlined">add_circle</span>
            }
          >
            Add New Task
          </Button>
        </div>
        <div className="grid gap-4 mt-8">
          {todos.map(todo => (
            <div key={todo.id} className={`p-4 border rounded ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
              <span>{todo.content}</span>
            </div>
          ))}
        </div>    
        </div>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Task"
              fullWidth
              value={task}
              onChange={e => setTask(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddTask}>Add</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default Home
