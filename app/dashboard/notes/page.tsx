import NoteCard from "./components/note-card";
import {getNotes} from "./queries";

export default async function page() {
  const notes = await getNotes();

  if (notes.length === 0) {
    return (
      <div className="text-2xl font-bold w-full text-center mt-20 items-center">No notes found</div>
    );
  }

  return (
    <div className="gap-3 flex flex-wrap">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          description={note.description || ""}
          tags={note.tags || ""}
          title={note.title || ""}
          userId={note.userId}
        />
      ))}
    </div>
  );
}
