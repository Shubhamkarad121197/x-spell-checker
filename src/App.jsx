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

    const words = inputText.split(" ");

    // Normalize case (case-insensitive)
    const correctedWords = words.map(word => {
      const lower = word.toLowerCase();
      return customDictionary[lower] || word;
    });

    // Only show suggestion if something actually changed
    if (correctedWords.join(" ") !== inputText) {
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
        <span>Did you mean: {suggestion}?</span>
      )}
    </div>
  )
}

export default App
