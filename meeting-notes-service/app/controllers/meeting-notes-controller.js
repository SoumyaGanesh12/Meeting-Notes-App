import * as meetingNotesService from './../services/meeting-notes-service.js';
import { setResponse, setError } from './response-handler.js';

// Fetch all meeting notes
export const fetch = async (request, response) => {
    try{
        const params = {...request.query};
        const meetingnotes = await meetingNotesService.fetch(params);
        setResponse(meetingnotes, response);
    } catch (error) {
        setError(error, response);
    }
}

// Create meeting note
export const create = async (request, response) => {
    try{
        const note = {...request.body};
        const meetingnote = await meetingNotesService.create(note);
        setResponse(meetingnote, response);
    } catch (error) {
        setError(error, response);
    }
}

// Fetch meeting note by Id
export const fetchById = async (request, response) => {
    try{
        const meetingnote = await meetingNotesService.fetchById(request.params.id);
        if (!meetingnote) {
            return response.status(404).json({ message: 'Meeting note not found' });
        }

        setResponse(meetingnote, response);
    } catch (error) {
        setError(error, response);
    }
}

// Delete meeting note by Id
export const removeById = async (request, response) => {
    try{
        const meetingnote = await meetingNotesService.removeById(request.params.id);
        if (!meetingnote) {
            return response.status(404).json({ message: 'Meeting note not found' });
        }

        setResponse(meetingnote, response);
    } catch (error) {
        setError(error, response);
    }
}

// Update meeting note by Id
export const updateById = async (request, response) => {
    try{
        const meetingnote = await meetingNotesService.updateById(request.params.id, request.body);
        if (!meetingnote) {
            return response.status(404).json({ message: 'Meeting note not found' });
        }

        setResponse(meetingnote, response);
    } catch (error) {
        setError(error, response);
    }
}

// Fetch the meeting notes by keywords
export const fetchByKeywords = async(request, response)=>{
    try {
        const meetingnotes = await meetingNotesService.fetchByKeywords(request.query);
        setResponse(meetingnotes, response);
    } catch (error) {
        setError(error, response);
    }
 
}
