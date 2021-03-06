import { GridContainer, NoteCard } from "./index";

export default function OtherNotes({
  filteredNotes,
  allNotes,
  setAllNotes,
  allTags,
}) {
  return (
    <div className="w-full mb-8">
      <h2 className="font-bold mt-10 text-gray-800 tracking-wider">OTHERS</h2>
      {filteredNotes.filter((noteItem) => !noteItem.isPinned).length !==
      0 ? null : (
        <p className="mr-auto my-4 font-medium">No Unpinned Notes</p>
      )}
      <GridContainer>
        {filteredNotes
          .filter((noteItem) => !noteItem.isPinned)
          .sort((a, b) => a.createdAt > b.createdAt)
          .map((noteItem) => (
            <NoteCard
              noteItem={noteItem}
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              allTags={allTags}
            />
          ))}
      </GridContainer>
    </div>
  );
}
