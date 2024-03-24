import NoteCard from "./components/note-card";

export default function page() {
  const items = Array.from({length: 8}, (_, index) => index);

  return (
    <div className="gap-3 flex flex-wrap">
      {items.map((x) => (
        <NoteCard key={x} />
      ))}
    </div>
  );
}
