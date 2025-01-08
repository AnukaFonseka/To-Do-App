# TaskMate

TaskMate is a productivity-focused task management app designed to help users stay organized by tracking tasks. It allows users to add, edit, delete, and manage tasks with deadlines, making it easier to prioritize and complete daily tasks. The app provides an intuitive interface and a built-in calendar to track deadlines.

## Features

- **User Profile**: Displays user information like name, email, and an avatar based on initials.
- **Task Management**: 
  - Add, edit, and delete tasks.
  - Mark tasks as complete with a checkbox.
  - Tasks are stored with deadlines (date and time).
  - Tasks are color-coded based on completion status (e.g., green for completed).
- **Calendar**: A calendar view that helps users visualize task deadlines.
- **Responsive Design**: Works across different screen sizes with a mobile-friendly layout.

## Technologies Used

- **Frontend**: React.js, Material-UI, Tailwind CSS
- **State Management**: Redux Toolkit
- **Date Handling**: `dayjs` for date management
  
## Installation

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm or yarn**: Node package managers. Use `npm` by default or install `yarn` as an alternative.

### Steps

1. Clone the repository:
```bash
git clone https://github.com/AnukaFonseka/To-Do-App.git
```

2. Navigate to the project directory:
```bash
cd To-Do-App
```

3. Install dependencies:
```bash
npm install
```

or if you prefer yarn
```bash
yarn install
```

4. Start the development server:

```bash
npm start
```
or
```bash
yarn start
```

Open your browser and go to http://localhost:3000 to see the application.


## Usage

Add a New Task: Click the "Add New Task" button, fill in the task details, and click "Add."
Edit an Existing Task: Click the "edit" button next to a task to modify it.
Mark a Task as Complete: Check the checkbox next to a task to mark it as completed.
Delete a Task: Click the "delete" button next to a task to remove it.
Folder Structure

```bash
Copy code
/src
  /assets        - Static files like images
  /components    - Reusable UI components (e.g., Sidebar, NewTodoDialog)
  /features      - Redux slices for task management
  /pages         - Main page (Home) and related views
  /styles        - Global styles (e.g., TailwindCSS configuration)
  /utils         - Utility functions and helpers (e.g., date formatting)
  index.js       - Main entry point for React app
  App.js         - Main app component
  ```
## Contributing
Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -am 'Add feature').
5. Push to your branch (git push origin feature-name).
6. Create a pull request.
8. License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Material-UI: For providing pre-designed React components that streamline UI development.
Redux Toolkit: For efficient state management.
Tailwind CSS: For utility-first CSS styling that enhances development speed and consistency.
Future Enhancements
Task prioritization feature
Notifications/Reminders for upcoming tasks
Dark mode support
Feel free to explore, modify, and contribute to the project!


### Key Sections:
1. **Overview** of the app and its main features.
2. **Installation Instructions** with steps for getting the app up and running.
3. **Technologies** used to build the app.
4. **Usage** instructions, including how to add, edit, and delete tasks.
5. **Folder Structure** for easy navigation through the project.
6. **Contributing Guidelines** for anyone interested in contributing.
7. **License** and acknowledgment for any third-party libraries or tools.

Adjust the repository link and any relevant project details as needed.