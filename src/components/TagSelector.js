import { useState } from "react";
import { useSetLocalStorage } from "../hooks";

export default function TagSelector({
  allTags,
  currentTag,
  setCurrentTag,
  allNotes,
  setAllNotes,
  noteItemID,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useSetLocalStorage("allNotes", allNotes);

  const toggleDropdown = () => setIsDropdownOpen((val) => !val);

  const updateTag = (tag) => {
    if (noteItemID) {
      let allNotesUpdated = allNotes.map((note) => {
        if (note.id === noteItemID) {
          return { ...note, tag: tag };
        } else {
          return note;
        }
      });
      setAllNotes(allNotesUpdated);
      toggleDropdown();
    } else {
      setCurrentTag(tag);
      toggleDropdown();
    }
  };
  return (
    <div className="relative">
      <div>
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border-gray-300 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {currentTag}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        class={`origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {allTags.map((tag) => (
            <button
              class="block text-left px-4 w-full py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-gray-900"
              role="menuitem"
              onClick={() => updateTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
