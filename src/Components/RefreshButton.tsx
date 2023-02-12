import React from 'react';
import "./RefreshButton.css"
function RefreshButton() {
  function handleRefreshClick() {
    window.location.reload();
  }

  return (
    <button onClick={handleRefreshClick} className={`button`}>
      New Game
    </button>
  );
}

export default RefreshButton;