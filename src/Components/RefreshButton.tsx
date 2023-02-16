import React from 'react';
import "./RefreshButton.css"
const RefreshButton: React.FC = () => {
    const handleClick = () => {
        window.location.reload();
    }

    return (
        <button id="refresh-button" onClick={handleClick}>New game</button>
    )
}

export default RefreshButton;
