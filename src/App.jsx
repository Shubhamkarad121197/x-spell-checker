import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  useEffect(() => {
    if (!inputText.trim()) {
      setSuggestion("");
      return;
    }

    const words = inputText.trim().split(/\s+/);

    for (let word of words) {
      const lower = word.toLowerCase();
      if (customDictionary[lower]) {
        // Only suggest the corrected word (first match only)
        setSuggestion(customDictionary[lower]);
        return;
      }
    }

    setSuggestion(""); // no misspelling found
  }, [inputText]);

  return (
    <div className="spell-check-container">
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        cols="30"
        rows="10"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />

      {suggestion && (
        <span className="suggestion-text">Did you mean: {suggestion}?</span>
      )}
    </div>
  )
}

export default App
