import search from "../assets/search.svg";
import { Filter } from "./index";

export default function Header({
  allTags,
  setAllTags,
  currentFilter,
  setCurrentFilter,
  searchText,
  setSearchText,
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center border-b mb-8 py-4">
      <h1 className="text-2xl my-4 lg:ml-auto font-bold text-gray-800">
        Notes HD
      </h1>
      <span className="lg:block hidden w-0 h-6 mx-4 bg-gray-400"></span>
      <div
        className={`w-full max-w-3xl lg:mr-auto flex h-12 my-4 shadow-mdfull rounded-xl py-3 px-4 bg-white items-center`}
      >
        <img
          className={`p-1 mr-2 cursor-pointer rounded-full hover:bg-blue-50 opacity-50`}
          src={search}
        />
        <input
          name="search"
          placeholder="Search"
          value={searchText}
          className="w-full text-base text-gray-700 font-semibold focus:outline-none bg-transparent"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span className="w-1 h-6 mx-4 bg-gray-200"></span>
        <div className="lg:ml-auto">
          <Filter
            allTags={allTags}
            setAllTags={setAllTags}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </div>
      </div>
    </div>
  );
}
