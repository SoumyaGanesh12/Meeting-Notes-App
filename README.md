# Meeting Notes Application

## Overview
This is a simple meeting notes application built using React for the frontend, Node.js with Express for the backend, and MongoDB for data persistence. The application allows users to create, view, update, and delete meeting notes. Each note consists of a title, content, a list of action items, and creation date.

## Tools Used
- React.js
- Node.js
- Express.js
- MongoDB
- Material-UI
- Vite

## Functionalities
1. **View Existing Notes**: Users can view all existing notes in a list view.
2. **Truncated Content**: Notes in the list view display the title and truncated content with a maximum of 10 words followed by "...".
3. **Expand Note**: Users can click on a note to expand its content with CSS transitions.
4. **Expanded View**: In the expanded view, users can see the entire content along with the title and a list of action items.
5. **Toggle Action Item Status**: Each action item has a checkbox to toggle between open and completed states.
6. **Edit Note**: Users can edit the content and action items in the expanded view.
7. **Add New Note**: Users can add a new note by clicking a create button, which opens an editable card with the note details.
8. **Save Note**: When adding a new note, users can enter the title, content, and action items. The created field is automatically added with the current date and time.

## Steps to Run the Application
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend:
    ```
    cd frontend
    npm install
    cd ../backend
    npm install
    ```
4. Start the backend server:
    ```
    npm start
    ```
5. Start the frontend development server:
    ```
    cd ../frontend
    npm start
    ```
6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Additional Notes
- Ensure that MongoDB is running on your system and accessible by the backend server.
- Make sure no other service is running on ports 3000 (frontend) and 5000 (backend).
- For production build, use `npm run build` in the frontend directory and deploy the built files accordingly.
- Refer to the documentation within the codebase for detailed explanations of each component and functionality.
