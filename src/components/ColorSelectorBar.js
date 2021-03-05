export default function ColorSelectorBar({
  allNotes,
  setAllNotes,
  setColor,
  noteItemID,
}) {
  const colors = ["pink-100", "purple-100", "green-100", "yellow-100", "white"];

  const updateColor = (colorItem) => {
    if (noteItemID) {
      let allNotesUpdated = allNotes.map((note) => {
        if (note.id === noteItemID) {
          return { ...note, color: colorItem };
        } else {
          return note;
        }
      });
      setAllNotes(allNotesUpdated);
      localStorage.setItem("allNotes", JSON.stringify(allNotesUpdated));
    } else {
      setColor(colorItem);
    }
  };

  return (
    <div className="flex">
      {colors.map((colorItem) => (
        <div
          className={`w-6 h-6 rounded-full cursor-pointer mr-2 border border-gray-300 bg-${colorItem}`}
          onClick={() => updateColor(colorItem)}
        ></div>
      ))}
    </div>
  );
}
