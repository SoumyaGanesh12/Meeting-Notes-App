import express from "express";
import * as meetingNotesController from './../controllers/meeting-notes-controller.js';

const router = express.Router();

router.route('/')
    .get(meetingNotesController.fetch)
    .post(meetingNotesController.create)
;

router.route('/filter')
    .get(meetingNotesController.fetchByKeywords)
;

router.route('/:id')
    .get(meetingNotesController.fetchById)
    .patch(meetingNotesController.updateById)
    .delete(meetingNotesController.removeById)
// ;


export default router;