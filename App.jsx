import React, { useState } from "react";
import "./App.css";

function App() {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const handleNoClick = () => {
    // Hide the message and increase the Yes button size without a hard cap
    setShowMessage(false);
    setYesButtonSize((prev) => {
      // Increase size, but use a more gradual approach
      const newSize = prev + 0.3;
      // Limit the maximum size to prevent overwhelming the screen
      return newSize > 3 ? 3 : newSize;
    });
  };

  const handleYesClick = () => {
    // Show the message
    setShowMessage(true);
    setYesButtonSize(1);
  };

  return (
    <div className="valentine-container">
      <h1 className="valentine-title">Will you be my Galentine?</h1>

      <div className="button-container">
        <button
          className="yes-button"
          onClick={handleYesClick}
          style={{
            transform: `scale(${yesButtonSize})`,
            // Ensure the larger button stays on top
            zIndex: yesButtonSize > 1 ? 10 : 1,
            // Adjust positioning to expand around the No button
            position: "relative",
          }}
        >
          Yes
        </button>

        <button
          className="no-button"
          onClick={handleNoClick}
          style={{
            // Ensure No button remains visible
            zIndex: 5,
          }}
        >
          No
        </button>
      </div>

      {showMessage && (
        <div className="message">Neku vere option ledhu ga ! 💖</div>
      )}
    </div>
  );
}

export default App;
