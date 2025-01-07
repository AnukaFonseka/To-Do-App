import React from 'react'
import Sidebar from '../components/Sidebar'
import { Button } from "@mui/material";

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
        </div>
    </div>
  )
}

export default Home
