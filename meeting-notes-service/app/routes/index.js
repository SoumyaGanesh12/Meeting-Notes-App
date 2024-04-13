import meetingNotesRouter from './meeting-notes-route.js';

const initializeRoutes = (app) => {
    app.use('/meetingnotes', meetingNotesRouter);
}

export default initializeRoutes;