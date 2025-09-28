import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  useEffect(() => {
    if (!inputText.trim()) {
      setSuggestions("");
      return;
    }

    const words = inputText.split(" ");
    const newSuggestions = words.map(word => customDictionary[word] || word);
    setSuggestions(newSuggestions.join(" "));
  }, [inputText]);

  return (
    <>
      <div className="spell-check-container">
        <h2>Spell Check and Auto-Correction</h2>
        <textarea
          cols="30"
          rows="10"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <br />
        {suggestions && inputText !== suggestions && (
          <span>✨ Did you mean: <b>{suggestions}</b></span>
        )}
      </div>
    </>
  )
}

export default App
