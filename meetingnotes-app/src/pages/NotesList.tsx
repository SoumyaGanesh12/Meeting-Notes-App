import Note from "./Note";
import { Note as NoteType } from "../models/Note";

interface NotesListProps {
  notes: NoteType[];
  onEdit?: (note: NoteType | null) => void; // Adjust the type to accept null for new notes
  onDelete?: (_id: string) => void;
}

function NotesList({ notes, onEdit, onDelete }: NotesListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {notes.map((note, index) => (
        <div
          key={index}
          style={{ width: "calc(50% - 16px)", marginBottom: "16px" }}
        >
          <Note
            note={note}
            onEdit={onEdit ? () => onEdit(note) : undefined} // Check if onEdit is defined before calling
            onDelete={onDelete ? () => onDelete(note._id) : undefined} // Check if onDelete is defined before calling
          />
        </div>
      ))}
    </div>
  );
}

export default NotesList;
