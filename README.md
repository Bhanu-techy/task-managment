# Title

    Creative Upaay Full Stack Development

## Objective

    * Replicate the dashboard UI exactly as per Figma.

    * Create an interactive task management system with features like adding, moving, and   filtering tasks.

    * Apply Redux for state management and ensure persistence with Local Storage.
    
    * Deliver a deployable, production-ready React application.

## Tech Stack

* Framework: React.js

    => Industry-standard, component-based, easy to scale for dashboards.

* UI Libraries (choose one):

    => Material-UI (MUI): Rich component library, fast prototyping.
    => Chakra UI: Lightweight, highly customizable with responsive props.
    => Tailwind CSS: Utility-first, enables pixel-perfect replication of Figma quickly.

* State Management: Redux:

    => Centralized global state management, predictable, easy persistence.

* Persistence: Local Storage:

    => Lightweight browser-based storage, ensures tasks remain after refresh.

* Optional Libraries:

    => react-beautiful-dnd → For drag-and-drop task movement.
    => redux-persist → Simplifies Local Storage integration with Redux.


## Completion Instructions

This assignment requires you to implement a functional dashboard UI in React.js based on the provided Figma design.
The project focuses on:

    * UI replication (pixel-perfect implementation).
    * Core task management features (add, move, filter tasks).
    * Proper state management with Redux.
    * Persistence with Local Storage (tasks remain after refresh).
    * Optional advanced features like drag-and-drop.

* Figma Design Link :
https://www.figma.com/design/2joKVlIEH43PfO9pFfsX51/DASHBOARD-DESIGN-TASK---CREATIVE-UPAAY?node-id=2-163&t=5ouTwIsz8cbURx07-0

### Functionality

1. UI Implementation

    * Match Figma Design 1:1 → Pay attention to spacing, fonts, and colors.

    * Dashboard Layout:

     #Three sections (Kanban-style board):

        -> To Do
        -> In Progress
        -> Done

2. Task Management Features

    * Add Task:

        -> User can add tasks inside any column.
        -> Required fields: title, description.
        -> Other fields (e.g., category, dueDate) can be hardcoded.

3. Filtering:

    * Add a filter bar (dropdowns or input fields).

    * Possible filter criteria:

        -> Category (Work, Personal, Urgent, etc.).
        -> Priority (High, Medium, Low).
        -> Due Date (Upcoming, Overdue).

4.  State Management (Redux + Local Storage):

    * Redux Store:

      -> tasksReducer: Handles add, update, delete, move task actions.

    * Local Storage Integration:

        -> Save state on every update.
        -> Load state from Local Storage on app start.

5. Drag and Drop (Optional, Bonus):

    * Use react-beautiful-dnd to allow drag-and-drop task movement.
    * Enhances UX, feels like Trello/Jira boards.

#### Must Have

    1. UI Implementation.

    2. Task Management Features.

    3. Filtering.

    4.  State Management (Redux + Local Storage).
    

#### Nice to Have

    * Drag and Drop (Optional, Bonus)


### Submission Instructions

    1. GitHub Repository:

      * Public repo with clear commit history.
      * Proper branching if possible (main, dev).

    2. README.md (Must Include)

        * Project overview.
        * Steps to run locally (npm install, npm start).
        * Technologies used.
        * Known limitations.

    3. Video Demonstration:

        * Short screen recording (Loom/OBS/QuickTime).
        * Show all features: Add Task, Move Task, Filtering, Persistence.

    4. Deployment:

        * Use Netlify / Vercel / Render.
        * Provide live link in README.



## Resources

    * React Docs: https://react.dev/
    * Redux Docs: https://redux.js.org/
    * Tailwind Docs: https://tailwindcss.com/docs
    * Material-UI Docs: https://mui.com/
    * Chakra UI Docs: https://chakra-ui.com/
    * React Beautiful DnD: https://github.com/atlassian/react-beautiful-dnd

### Design files

    * Figma Design Link :https://www.figma.com/design/2joKVlIEH43PfO9pFfsX51/DASHBOARD-DESIGN-TASK---CREATIVE-UPAAY?node-id=2-163&t=5ouTwIsz8cbURx07-0

### Third-party packages

    * react-beautiful-dnd → For drag-and-drop task movement.
    * redux-persist → Simplifies Local Storage integration with Redux.

### BackEnd Project
    * Api Url: https://task-managment-production-3b91.up.railway.app/api/todos
    
    * github link: https://github.com/Bhanu-techy/todos-backEnd.git

### Project Link