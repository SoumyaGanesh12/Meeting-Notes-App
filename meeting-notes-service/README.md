[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UCQYxFhy)

# MeetingNotes API

This API provides endpoints to manage meeting notes, allowing developers to perform CRUD operations (Create, Read, Update, Delete) on meeting notes stored in a MongoDB database. The API is built using **Node.js**, **Express.js**, and **Mongoose**, following RESTful principles.

## User Requirements

1. As a developer, I should be able to fetch all existing meeting notes using the MeetingNotes Resource.
2. As a developer, I should be able to filter all existing MeetingNotes using keywords in the title or content or in the action items, and MeetingNote between a create date range.
3. As a developer, I should be able to add a MeetingNote using the MeetingNotes Resource.
4. As a developer, I should be able to update a MeetingNote including the action items using the MeetingNotes Resource.
5. As a developer, I should be able to delete a MeetingNote using the MeetingNotes Resource.

## Technical Requirements

- The API is built using **Node.js** and **Express.js**.
- **MongoDB** is used as the persistence layer for storing meeting notes.
- **Mongoose** is used as an Object Data Modeling (ODM) library for MongoDB.
- Each MeetingNote object has the following properties:
  - id: Unique identifier for the meeting note.
  - title: Title of the meeting note.
  - content: Content or description of the meeting.
  - action items: List of action items derived from the meeting.
  - createdDate: Date when the meeting note was created.

## Endpoints

### Fetch all MeetingNotes

- **GET /meetingnotes**
  - Returns a list of all existing meeting notes.

### Filter MeetingNotes

- **GET /meetingnotes?query=keyword&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD**
  - Returns a list of meeting notes filtered by keyword in the title or content, and within the specified date range.

### Add MeetingNote

- **POST /meetingnotes**
  - Creates a new meeting note.
  - Request body should contain JSON data with properties: title, content, action items, and createdDate.

### Update MeetingNote

- **PUT /meetingnotes/:id**
  - Updates an existing meeting note specified by its id.
  - Request body should contain JSON data with properties: title, content, action items.

### Delete MeetingNote

- **DELETE /meetingnotes/:id**
  - Deletes the meeting note specified by its id.

## Getting Started

1. Clone this repository.
2. Install Node.js and MongoDB on your system if not already installed.
3. Install project dependencies using `npm install`.
4. Ensure MongoDB is running on your system.
5. Run the server using `npm start`.
6. Use any API testing tool like Postman to interact with the endpoints.

## Tools Used

- Node.js
- Express.js
- MongoDB
- Mongoose

Experience seamless meeting note management powered by the efficiency of Node.js and the simplicity of RESTful APIs.

📝 Happy note-taking!

