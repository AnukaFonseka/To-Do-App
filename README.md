# TaskMate

TaskMate is a task management application designed to boost productivity by organizing and tracking daily tasks. This app features a user-friendly interface with a sidebar, task list, and calendar. It allows users to add, edit, complete, and delete tasks.

## Features

Task Management: Create, edit, mark as complete, and delete tasks.

Sidebar Summary: View a quick summary of tasks categorized as "To-do," "Completed," and "All Tasks."

Calendar Integration: Integrated calendar to view tasks by date.

User Information: Display user profile with initials, name, and email.

Responsive Design: Optimized for both desktop and mobile views.

## Technologies Used

### Frontend:

React.js for building user interfaces.

Material-UI (MUI) for styled components.

### State Management:

Redux for managing the global state of tasks.

Date and Time Handling:

@mui/x-date-pickers for calendar functionality.

dayjs for date formatting.

### UI Enhancements:

Custom styling using Tailwind CSS.

Icons from Material Symbols.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/taskmate.git
cd taskmate
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The app will run on http://localhost:3000.

## File Structure

/src: Contains the main source code.

components: Reusable UI components.

Sidebar.jsx: Displays user info, task summary, and calendar.

NewTodoDialog.jsx: Dialog for adding and editing tasks.

features/todos: Redux slice for managing task-related actions.

todoSlice.js: Contains actions for adding, editing, deleting, and toggling tasks.

assets: Contains images used in the app.

App.js: Main entry point.

Home.jsx: Core layout for displaying the task list and adding new tasks.

## Usage

Adding a Task: Click the "Add New Task" button, fill in the details, and save.

Editing a Task: Click the edit icon next to a task, modify the details, and save.

Completing a Task: Click the checkbox to mark a task as completed.

Deleting a Task: Click the delete icon next to a task to remove it.

## Key Functionalities Explained

### Handling Checkbox Events

The checkbox toggles task completion status without triggering the parent div's click event:

<input
  type="checkbox"
  checked={todo.completed}
  onClick={(event) => {
    event.stopPropagation();
    handleCheckTask(todo.id);
  }}
  className="w-4 h-4"
/>

event.stopPropagation() prevents event bubbling to the parent div.

### Task Summary

The sidebar displays dynamic task counts:

<li>
  <span>To-do :</span>
  <span>{taskCounts.todo}</span>
</li>

## Future Enhancements

User authentication and profile management.

Task filtering by priority and due date.

Notifications and reminders for upcoming tasks.

## License

This project is open-source and available under the MIT License.
