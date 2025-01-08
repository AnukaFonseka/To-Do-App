import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodoStatus } from '../features/todos/todoSlice';
import { Button, IconButton } from '@mui/material';
import Sidebar from '../components/Sidebar'
import NewTodoDialog from '../components/NewTodoDialog';
import bg from '../assets/images/b2.jpg';
import nodata from "../assets/images/nodata.svg";

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
    <div 
      className="flex flex-col md:flex-row bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <Sidebar user={user} />

        <div className='w-full p-12 flex flex-col items-center relative z-10 min-w-screen min-h-screen'>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className='flex flex-col md:flex-row items-center text-center md:text-left justify-between w-full mb-10 z-30'>
            <div className='hidden md:flex flex-col mb-5 md:mb-0'>
              <h1 className='text-white text-3xl md:text-5xl font-bold mb-2'>TaskMate</h1>
              <span className='text-white'>Your friendly companion for productivity</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 w-full z-30">
            {todos.map((todo) => (
                <div key={todo.id} className={`p-4 border rounded cursor-pointer hover:scale-101 transition-all duration-100 
                  ${todo.completed ? 'bg-green-200' : 'bg-white'}`}
                  onClick={(event) => {
                    handleCheckTask(todo.id)
                  }}
                >
                  <div className="flex justify-between items-center">
                      <input 
                        id="default-checkbox"
                        type="checkbox" 
                        checked={todo.completed} 
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCheckTask(todo.id)
                        }} 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 mr-4 cursor-pointer outline-none"
                      />
                      <span className="text-sm">{new Date(todo.date).toLocaleDateString()} | {new Date(todo.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <h3 
                      className={`${todo.completed? "line-through text-gray-500": "text-gray-800"} md:text-xl font-medium md:font-semibold my-3`}>
                        {todo.content}
                    </h3>

                    <div className='flex space-x-2 md:space-x-4 w-full items-center justify-end'>
                      <IconButton 
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenEditDialog(todo)
                        }} 
                        color="primary">
                          <span className="material-symbols-outlined">edit</span>
                      </IconButton>
                      <IconButton 
                        onClick={(event) => {
                          event.stopPropagation();
                          handleDeleteTask(todo.id)
                        }} 
                        color="secondary">
                        <span className="material-symbols-outlined text-red-500">delete</span>
                      </IconButton>
                    </div>
                </div>
              ))}
          </div>   

          {todos?.length === 0 && (
            <div className="md:absolute md:inset-0 flex flex-col items-center justify-center z-20">
              <img
                src={nodata}
                alt="No Data"
                className="w-36 h-36 md:w-80 md:h-80"
              />
              <p className="text-white mt-8 text-xl md:text-2xl font-semibold">
                No tasks available
              </p>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Add a new task to get started!
              </p>
            </div>
          )}

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
