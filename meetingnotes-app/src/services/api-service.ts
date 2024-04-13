import { Note } from "../models/Note";

const BASE_URL = "http://localhost:3000/meetingnotes";

export const fetchMeetingNotes = async (): Promise<Note[]> => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return (await response.json()) as Note[];
  } catch (error) {
    console.error("Could not fetch meeting notes:", error);
    throw error;
  }
};

//Function to call server api for creating note
export const createNote = async (note: Note): Promise<Note> => {
  // Remove '_id' field if present, for new note creation
  const { _id, ...noteWithoutId } = note;
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteWithoutId), // Use note object without '_id'
    });
    if (!response.ok) throw new Error("Failed to create note");
    return (await response.json()) as Note;
  } catch (error) {
    console.error("Failed to save note:", error);
    throw error;
  }
};

//Function to call server api for updating note
export const updateNote = async (note: Note): Promise<Note> => {
  if (!note._id) {
    throw new Error("No '_id' provided for note update.");
  }

  const url = `${BASE_URL}/${note._id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) throw new Error("Failed to update note");
    return (await response.json()) as Note;
  } catch (error) {
    console.error("Failed to save note:", error);
    throw error;
  }
};

//Function to call server api for deleting note
export const deleteNote = async (noteId: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${noteId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete note");
};

export const filterMeetingNotes = async (keyword: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/filter?keywords=${keyword}`, {
    method: "GET",
  });
  if (!response.ok) throw new Error("Error fetching notes");
  // console.log(response.json());
  return response.json();
};
