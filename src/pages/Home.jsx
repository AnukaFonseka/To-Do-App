import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodoStatus } from '../features/todos/todoSlice';
import { Button, IconButton } from '@mui/material';
import Sidebar from '../components/Sidebar'
import NewTodoDialog from '../components/NewTodoDialog';

const Home = () => {

    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com"
    }

    const [open, setOpen] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const handleAddTask = (task) => {
      dispatch(addTodo({ ...task }));
    };

    const handleEditTask = (task) => {
      if (editTask) {
        dispatch(editTodo({ id: editTask.id, ...task }));
        setEditTask(null);
      }
    };
  
    const handleOpenEditDialog = (todo) => {
      setEditTask(todo);
      setOpen(true);
    };
  
    const handleDeleteTask = (id) => {
      dispatch(deleteTodo(id));
    };

    const handleCheckTask = (id) => {
      dispatch(toggleTodoStatus(id));
    }


  return (
    <div className="flex flex-col md:flex-row min-w-screen min-h-screen bg-cover bg-center relative">
        <Sidebar user={user} />

        <div className='w-full p-12 flex flex-col items-center relative z-10'>
          <div className='flex flex-col md:flex-row items-center text-center md:text-left justify-between w-full mb-10 z-30'>
            <div className='hidden md:flex flex-col mb-5 md:mb-0'>
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

          {/* Todo Grid */}
          <div className="grid gap-4 mt-8 w-full">
            {todos.map((todo) => (
                <div key={todo.id} className={`p-4 border rounded cursor-pointer hover:scale-101 transition-all duration-300 
                  ${todo.completed ? 'bg-green-200' : 'bg-white'}`}
                  onClick={() => handleCheckTask(todo.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className='flex items-center'>
                      <input 
                        id="default-checkbox"
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => handleCheckTask(todo.id)} 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 mr-4 cursor-pointer outline-none"
                      />
                    <div>
                      
                      <span className="text-sm">{new Date(todo.date).toLocaleDateString()} | {new Date(todo.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      <h3 className="text-lg">{todo.content}</h3>
                    </div>
                    </div>
                    
                    <div>
                      <IconButton onClick={() => handleOpenEditDialog(todo)} color="primary">
                        <span className="material-symbols-outlined">edit</span>
                      </IconButton>
                      <IconButton onClick={() => handleDeleteTask(todo.id)} color="secondary">
                        <span className="material-symbols-outlined">delete</span>
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))}
          </div>   

        </div>

        <NewTodoDialog
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={editTask ? handleEditTask : handleAddTask}
          initialTask={editTask}
        />

        
    </div>
  )
}

export default Home
