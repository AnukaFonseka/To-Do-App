import React from "react";
import { useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";


const Sidebar = ({ user }) => {

  const todos = useSelector((state) => state.todos.todos);

  const taskCounts = {
    all: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    todo: todos.filter((todo) => !todo.completed).length,
  };

  return (
    <div className="w-full md:w-1/4 bg-gradient-to-b from-[#001f3f] to-[#3b4a66] text-white md:h-screen p-8 md:pt-1 flex flex-col justify-between shadow-lg">
      {/* User Info */}
      <div className="space-y-8 flex flex-col justify-evenly h-full">
        <div className="text-center flex md:flex-col items-center justify-between text-blue-200 md:text-white">
          <div className="flex md:flex-col items-center space-x-2 md:space-x-0">
            <div className="w-10 h-10 md:w-24 md:h-24 mx-auto bg-slate-600 rounded-full flex items-center justify-center md:text-3xl md:font-bold shadow-lg">
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </div>
            <h2 className="md:mt-4 md:text-2xl flex font-semibold">
              {user.firstName}
              <span className="hidden md:block ml-2">{user.lastName}</span>
            </h2>
          </div>
          <span
            class="material-symbols-outlined block md:hidden"
            
          >
            logout
          </span>
          <p className="text-gray-400 mt-2 text-sm md:block hidden">
            {user.email}
          </p>
        </div>

        <div className="md:hidden text-center flex flex-col mb-5 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white z-10 mb-2">
            TaskMate
          </h1>
          <span className="text-white z-10">
            Your friendly companion for productivity.
          </span>
        </div>

        {/* Task Summary */}
        <div className="bg-white/10 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Task Summary</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="flex justify-between items-center">
              <span className="text-red-400">To-do :</span>
              <span className="text-red-400 font-medium">
                0{taskCounts.todo}
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-green-300">Completed :</span>
              <span className="text-green-300 font-medium">
                0{taskCounts.completed}
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-200">All Tasks :</span>
              <span className="text-gray-100 font-medium">
                0{taskCounts.all}
              </span>
            </li>
          </ul>
        </div>

        {/* Calendar */}
        <div className="bg-slate-100 rounded-lg shadow-md p-4 !w-full hidden md:block">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className="text-black" />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;