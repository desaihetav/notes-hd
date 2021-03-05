import { useState } from "react";
import { ColorSelectorBar, TagSelector } from "./index";
import trash from "../assets/trash.svg";
import bookmark from "../assets/bookmark.svg";
import bookmark_border from "../assets/bookmark_border.svg";

export default function NoteCard({ noteItem, allNotes, setAllNotes, allTags }) {
  const [noteTitle, setNoteTitle] = useState(noteItem.title);
  const [noteContent, setNoteContent] = useState(noteItem.content);
  const noteItemID = noteItem.id;
  let isSaveBtnEnabled = false;

  const toggleNotePin = (e) => {
    let allNotesUpdated = allNotes.map((note) => {
      if (note.id === noteItem.id) {
        return { ...note, isPinned: !note.isPinned };
      } else {
        return note;
      }
    });
    setAllNotes(allNotesUpdated);
    localStorage.setItem("allNotes", JSON.stringify(allNotesUpdated));
  };

  const updateNote = () => {
    let allNotesUpdated = allNotes.map((note) => {
      console.log(note.id);
      if (note.id === noteItem.id) {
        console.log({ ...note, title: noteTitle, content: noteContent });
        return { ...note, title: noteTitle, content: noteContent };
      } else {
        return note;
      }
    });
    setAllNotes(allNotesUpdated);
    localStorage.setItem("allNotes", JSON.stringify(allNotesUpdated));
  };

  const deleteNote = () => {
    let allNotesUpdated = allNotes.filter((note) => note.id !== noteItem.id);
    setAllNotes(allNotesUpdated);
    localStorage.setItem("allNotes", JSON.stringify(allNotesUpdated));
  };

  if (noteItem.title !== noteTitle || noteItem.content !== noteContent) {
    console.log({
      [noteItem.title]: noteItem.title,
      noteTitle,
      [noteItem.content]: noteItem.content,
      noteContent,
    });
    isSaveBtnEnabled = true;
  }

  return (
    <div
      className={`flex group text-gray-800 flex-col w-full p-4 hover:shadow-mdfull focus-within:shadow-mdfull rounded-xl ${noteItem.color}`}
    >
      <div className="flex justify-between items-center">
        <div
          contentEditable="true"
          role="textbox"
          onInput={(e) => {
            setNoteTitle(e.target.innerText.replace(/\n/g, ""));
          }}
          className={`text-base w-full font-bold focus:outline-none`}
        >
          {noteItem.title}
        </div>
        <div class="flex">
          <img
            onClick={toggleNotePin}
            className={`p-2 cursor-pointer rounded-full hover:bg-blue-50`}
            src={noteItem.isPinned ? bookmark : bookmark_border}
          />
        </div>
      </div>
      <div
        contentEditable="true"
        role="textbox"
        onInput={(e) => {
          setNoteContent(e.target.innerText.replace(/\n/g, ""));
        }}
        className={`text-sm font-medium my-2 focus:outline-none`}
      >
        {noteItem.content}
      </div>
      <div className="group-hover:opacity-100 opacity-100 flex flex-col items-start mt-auto pt-4">
        <ColorSelectorBar
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          noteItemID={noteItem.id}
        />
        <div className="flex items-center justify-end w-full mt-2">
          <img
            onClick={deleteNote}
            className={`mr-auto p-2 -ml-2 cursor-pointer rounded-full hover:bg-blue-50`}
            src={trash}
          />
          <TagSelector
            allTags={allTags}
            noteItemID={noteItem.id}
            allNotes={allNotes}
            setAllNotes={setAllNotes}
            currentTag={noteItem.tag}
          />
          <button
            disabled={!isSaveBtnEnabled}
            onClick={updateNote}
            className="ml-2 p-2 w-20 hover:bg-blue-50 hover:text-blue-600 rounded-md font-bold text-sm text-blue-500 disabled:bg-transparent disabled:text-gray-300 disabled:cursor-not-allowed duration-300"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
