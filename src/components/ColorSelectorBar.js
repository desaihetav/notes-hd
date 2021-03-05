export default function ColorSelectorBar({
  allNotes,
  setAllNotes,
  setColor,
  noteItemID,
}) {
  const colors = [
    "bg-pink-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-white",
  ];

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
          className={`w-6 h-6 rounded-full cursor-pointer mr-2 border border-gray-300 ${colorItem}`}
          onClick={() => updateColor(colorItem)}
        ></div>
      ))}
    </div>
  );
}