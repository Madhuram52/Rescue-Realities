import React from 'react';

const Simulation = function () {

    return (
        <div className="simulation-container">
            <iframe
                title="Unity Game"
                className="unity-iframe" // Apply the CSS class here
                src="http://localhost:8000" // Replace with the actual URL of your Unity game
                allowFullScreen
                width="1200" // Increase the width
                height="650" // Increase the height
            ></iframe>
        </div>
    )
}

export default Simulation;
