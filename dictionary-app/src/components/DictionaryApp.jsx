import React, { useState } from "react";
import "../components/Dictionary.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function DictionaryApp() {
  const [searchText, setSearchText] = useState("");
  const [definition, setDefinition] = useState("");
  const handleSearch = () => {
    // console.log(searchText, "searchText value");
    const foundWord = dictionary.find((ele) => {
      // console.log(ele.word, "ele");

      // if (ele?.word === searchText) setDefinition(ele?.word);
      // console.log(definition, "definition");
      return ele?.word.toLowerCase() === searchText.toLowerCase();
    });
    // console.log(foundWord);

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else setDefinition("Word not found in the dictionary.");
  };

  return (
    <>
      <div className="dictionary-app">
        <h1>Dictionary App</h1>
        <div>
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <h3>Definition: </h3>
        <p>{definition}</p>
      </div>
    </>
  );
}

export default DictionaryApp;
