import mongoose from 'mongoose';
import MeetingNote from './../models/meeting-note.js';

/**
 * Fetch all existing meeting notes using MeetingNotes Resource
 * @param {*} params 
 * @returns 
 */
export const fetch = async(params = {}) => {
    const meetingnotes = await MeetingNote.find(params).exec();
    return meetingnotes;
}

/**
 * Creates a meeting note
 * @param {*} note 
 * @returns 
 */
export const create = async (meetingNoteData) => {
    try {
        // Automatically generate the createdDate
        meetingNoteData.createdAt = new Date().toISOString();

        // Removes the milliseconds part from date
        // meetingNoteData.createdDate = new Date().toISOString().split('.')[0];
        const newMeetingNote = new MeetingNote(meetingNoteData);
        const savedMeetingNote = await newMeetingNote.save();

        return savedMeetingNote;
    } catch (error) {
        throw new Error(`Error creating meeting note: ${error.message}`);
    }
};

/**
 * Fetch meeting note by Id
 * @param {*} params 
 * @returns 
 */
export const fetchById = async(id) => {
    const meetingnote = await MeetingNote.findById(id).exec();
    return meetingnote;
}

/**
 * Removing meeting note by Id
 * @param {*} params 
 * @returns 
 */
export const removeById = async (id) => {
    try {
        // findByIdAndDelete - finds a document by its _id and delete it
        const deletedMeetingNote = await MeetingNote.findByIdAndDelete(id).exec();
        return deletedMeetingNote;
    } catch (error) {
        throw new Error(`Error deleting meeting note: ${error.message}`);
    }
};

/**
 * Update meeting note by Id
 * @param {string} id 
 * @param {object} data
 * @returns {object}
 */
export const updateById = async(id, data) => {
    try {
        const updatedMeetingNote = await MeetingNote.findByIdAndUpdate(id, data, { new: true }).exec();
        return updatedMeetingNote;     
    } catch (error) {
        throw new Error(`Error updating meeting note: ${error.message}`);
    }
}

/**
 * Fetch meeting notes based on keywords and/or date
 * @param {*} params
 * @returns {Promise<Array>} Array of meeting notes matching the criteria
 */
export const fetchByKeywords = async(params)=>{
    // const meetingnotes= await MeetingNote.find(params).exec();
    // return meetingnotes;
    let query = {};
 
    if (params.keywords) {
        query.$or = [
            { title: { $regex: params.keywords, $options: 'i' } },
            { content: { $regex: params.keywords, $options: 'i' } },
            { 'actionItems.text': { $regex: params.keywords, $options: 'i' } }
        ];
    }
 
    if (params.startDate && params.endDate) {
        query.createdAt = { $gte: new Date(params.startDate), $lte: new Date(params.endDate) };
    }
 
    return await MeetingNote.find(query).exec();
}