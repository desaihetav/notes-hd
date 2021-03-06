import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { ColorSelectorBar, TagSelector } from "./index";
import { useSetLocalStorage } from "../hooks";
import bookmark from "../assets/bookmark.svg";
import bookmark_border from "../assets/bookmark_border.svg";

export default function NewNote({ allNotes, setAllNotes, allTags }) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isCurrentPinned, setIsCurrentPinned] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [currentColor, setCurrentColor] = useState("bg-white");
  const [currentTag, setCurrentTag] = useState("No Tag");
  useSetLocalStorage("allNotes", allNotes);

  const clearCurrent = () => {
    setIsInputActive(false);
    setIsCurrentPinned(false);
    setCurrentTitle("");
    setCurrentContent("");
    setCurrentColor("bg-white");
    setCurrentTag("No Tag");
  };

  const addNote = () => {
    if (currentTitle || currentContent) {
      let allNotesUpdated = [
        ...allNotes,
        {
          id: v4(),
          title: currentTitle || "Untitled",
          content: currentContent,
          color: currentColor,
          tag: currentTag,
          isPinned: isCurrentPinned,
          createdAt: new Date(),
        },
      ];
      setAllNotes(allNotesUpdated);
      clearCurrent();
    } else {
      alert("You cannot add empty note!");
    }
  };

  const getCurrentContent = () => {
    if (currentContent === "") {
      return "";
    }
  };

  return (
    <div
      className={`w-full max-w-lg shadow-mdfull rounded-xl py-3 px-6 ${currentColor}`}
      onFocus={() => setIsInputActive(true)}
    >
      {isInputActive ? (
        <div className="flex items-center">
          <input
            name="title"
            placeholder="Title"
            value={currentTitle}
            className="w-full my-1 text-base font-semibold focus:outline-none bg-transparent"
            onChange={(e) => setCurrentTitle(e.target.value)}
            onFocus={() => setIsInputActive(true)}
          />
          <img
            onClick={() =>
              setIsCurrentPinned((isCurrentPinned) => !isCurrentPinned)
            }
            className={`p-2 cursor-pointer rounded-full hover:bg-blue-50`}
            src={isCurrentPinned ? bookmark : bookmark_border}
          />
        </div>
      ) : null}
      <div
        contentEditable="true"
        role="textbox"
        onInput={(e) => setCurrentContent(e.target.innerText)}
        className="w-full my-1 text-sm focus:outline-none placeholder-black resize-none content-textarea overflow-auto"
      >
        {getCurrentContent()}
      </div>
      {isInputActive && (
        <div className="flex flex-col sm:flex-row mt-4 w-full sm:items-center justify-between text-sm text-gray-700">
          <ColorSelectorBar setColor={setCurrentColor} />
          <div className="flex my-2 items-center justify-end">
            <TagSelector
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
              allTags={allTags}
            />
            <div className="w-max">
              <button
                className="ml-4 py-2 w-20 hover:bg-blue-50 hover:text-blue-600 rounded-md font-bold text-sm text-blue-500 duration-300"
                onClick={clearCurrent}
              >
                CLEAR
              </button>
              <button
                className="ml-4 py-2 w-20 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-bold text-sm duration-300"
                onClick={addNote}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
