import { useState, useEffect } from "react"; // Hook
import './App.css';

import BrandBar from "./pages/BrandBar";
import { Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList";
import {
  fetchMeetingNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./services/api-service"; // Import the function to fetch notes
import { Note } from "./models/Note";
import { BrowserRouter as Router } from "react-router-dom";
import NoteForm from "./pages/NoteForm";

function App() {
  const [notes, setNotes] = useState<Note[]>([]); // Initialize notes state
  const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const handleOpenForm = (note: Note | null = null) => {
    setCurrentNote(note);
    setIsNoteFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsNoteFormOpen(false);
    setCurrentNote(null); // Reset current note to null
  };

  const reloadNotes = async () => {
    try {
      const fetchedNotes = await fetchMeetingNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Failed to fetch meeting notes:", error);
    }
  };
  const handleSave = async (noteData: Note) => {
    try {
      if (currentNote && "_id" in currentNote) {
        noteData._id = currentNote._id;
        await updateNote(noteData);
      } else {
        // Create new note
        await createNote(noteData);
      }
      reloadNotes(); // Refresh the notes list
      handleCloseForm();
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };

  const handleDelete = async (id: string) => {
    console.log(id);

    await deleteNote(id);
    reloadNotes(); // Refresh the notes list
  };
  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await fetchMeetingNotes(); // Fetch notes from API
        setNotes(fetchedNotes); // Set notes state
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    }
    fetchNotes(); // Call fetchNotes on component mount
  }, []);

  return (
    <Router>
      <div className="app-container">
        <BrandBar setNotes={setNotes} onAddClick={() => handleOpenForm()}/>
        <br/>
        <NoteForm
          open={isNoteFormOpen}
          note={currentNote}
          onClose={handleCloseForm}
          onSave={handleSave}
        />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <NotesList
                notes={notes}
                onEdit={handleOpenForm}
                onDelete={handleDelete}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
