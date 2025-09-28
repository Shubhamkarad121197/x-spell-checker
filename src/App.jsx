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

    // Normalize multiple spaces
    const words = inputText.trim().split(/\s+/);

    const correctedWords = words.map(word => {
      const lower = word.toLowerCase();
      return customDictionary[lower] || word;
    });

    // Compare ignoring case + trimming
    if (correctedWords.join(" ").toLowerCase() !== inputText.trim().toLowerCase()) {
      setSuggestion(correctedWords.join(" "));
    } else {
      setSuggestion("");
    }
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
