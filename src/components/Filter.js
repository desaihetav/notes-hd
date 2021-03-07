import { useState } from "react";
export default function Filter({
  allTags,
  setAllTags,
  currentFilter,
  setCurrentFilter,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const toggleDropdown = () => setIsDropdownOpen((val) => !val);
  const updateFilter = (filter) => {
    setCurrentFilter(filter);
    toggleDropdown();
  };

  const removeFilter = (filter) => {
    let allTagsUpdated = allTags.filter((tag) => tag !== filter);
    setAllTags(allTagsUpdated);
  };

  const addNewTag = () => {
    if (!allTags.find((tag) => tag === newTag)) {
      let allTagsUpdated = [...allTags, newTag];
      setAllTags(allTagsUpdated);
    }
    setNewTag("");
  };

  const allFilters = ["All Notes", "No Tag", ...allTags];
  return (
    <div class="relative inline-block text-left w-max">
      <div>
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {currentFilter}
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
        class={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {allFilters.map((filter) => (
            <div key={filter} className="flex hover:bg-blue-50">
              <button
                class="block text-left px-4 w-full py-2 text-sm text-gray-700  hover:text-gray-900"
                role="menuitem"
                onClick={() => updateFilter(filter)}
              >
                {filter}
              </button>
              <button
                className="px-2 m-2 rounded-full hover:bg-blue-100 bg-blue-50"
                onClick={() => removeFilter(filter)}
              >
                x
              </button>
            </div>
          ))}
          <div className="px-2 my-2">
            <input
              className="p-2 text-sm focus:outline-none w-full bg-gray-100 rounded-md"
              placeholder="Add new tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? addNewTag() : null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
