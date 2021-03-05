import { GridContainer, NoteCard } from "./index";

export default function PinnedNotes({
  filteredNotes,
  allNotes,
  setAllNotes,
  allTags,
}) {
  return (
    <div className="w-full">
      <h2 className="font-bold mt-10 text-gray-800 tracking-wider">PINNED</h2>
      {filteredNotes.filter((noteItem) => noteItem.isPinned).length !==
      0 ? null : (
        <span className="mr-auto my-4 font-medium">No Pinned Notes</span>
      )}
      <GridContainer>
        {filteredNotes
          .filter((noteItem) => noteItem.isPinned)
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
