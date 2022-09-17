import React, { useEffect, useState } from "react";
import { Links } from "./Links";
import { useDebounce } from "use-debounce";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useResultContext } from "../context/StateContextProvider";

function Search() {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
    <FontAwesomeIcon icon="fas fa-times" />
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 dark:shadow-sm  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
         <span> <i class="fa fa-umbrella" aria-hidden="true"></i> </span>
         x
        </button>
      )}
      <Links />
    </div>
  );
}

export default Search;
