import { useState } from "react";
import { v4 } from "uuid";
import { Header, NewNote, PinnedNotes, OtherNotes, Footer } from "./components";

function App() {
  const initialNotes = [
    {
      id: v4(),
      title: "Welcome to Keep Notes",
      content:
        "This is a sample note, please feel free to edit or delete this note and get started with creating your own notes!",
      color: "bg-white",
      tag: "No Tag",
      isPinned: true,
      createdAt: "2021-02-25T12:55:29.363Z",
    },
  ];
  const [allNotes, setAllNotes] = useState(
    JSON.parse(localStorage.getItem("allNotes")) || initialNotes
  );
  const [allTags, setAllTags] = useState(["To-Do", "Reminder"]);
  const [currentFilter, setCurrentFilter] = useState("All Notes");
  const [searchText, setSearchText] = useState("");

  const filteredNotes = allNotes.filter(
    (noteItem) =>
      (noteItem.tag === currentFilter || currentFilter === "All Notes") &&
      ((searchText !== "" && noteItem.title.match(searchText)) ||
        noteItem.content.match(searchText))
  );

  return (
    <div className="App bg-gray-100 w-screen min-h-screen flex flex-col px-4 sm:px-8 mx-auto max-w-7xl items-center">
      <Header
        allTags={allTags}
        setAllTags={setAllTags}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <NewNote
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        allTags={allTags}
      />

      <PinnedNotes
        filteredNotes={filteredNotes}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        allTags={allTags}
      />

      <OtherNotes
        filteredNotes={filteredNotes}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        allTags={allTags}
      />

      <Footer />
    </div>
  );
}

export default App;
