/* eslint-disable react/prop-types */
import { useState } from "react";
import { posts } from "../constants/constants";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();

    // Filter posts based on the search term
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(term)
    );

    setSearchTerm(term);
    setSearchResults(filteredPosts);
  };

  return (
    <div className="relative ">
      <input
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="Search"
        className="w-full bg-gray-300 h-10 rounded-lg focus:outline-none text-gray-900 placeholder:text-gray-900 font-kanit px-5"
      />

      {/* Display search results only when there are matching posts */}
      {isFocused && searchTerm !== "" && searchResults.length > 0 && (
        <div className="absolute w-full bg-white rounded-xl overflow-y-auto max-h-48 mb-5 px-1">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Search Results:
          </h3>
          <ul>
            {searchResults.map((result) => (
              <>
                <Link
                  key={result.id}
                  className="text-black underline "
                  to={`/post/${result.title}/${result.id}`}
                >
                  {result.title}
                </Link>
                <hr />
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
