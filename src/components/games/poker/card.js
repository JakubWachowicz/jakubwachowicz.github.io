import React, { useState } from 'react';
import "./poker.css";

// Card Suits and Values as Constants
const CardSuit = {
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  CLUBS: 'clubs',
  SPADES: 'spades',
};

const CardValue = {
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'J',
  QUEEN: 'Q',
  KING: 'K',
  ACE: 'A',
};

// Card Component
function Card({ suit, value }) {
  const [isPlayed, setIsPlayed] = useState(false);

  // Function to toggle isPlayed state
  const togglePlay = () => {
    setIsPlayed(prevState => !prevState);
  };

  return (
    <div className={`card ${suit} ${value} ${isPlayed} w-20 duration-300 cursor-pointer `} onClick={togglePlay}>
      <div className="card-content">
        <p className="card-value">{value}</p>
        <p className="card-suit">{suit}</p>
      </div>
      <p>{isPlayed ? "Played" : "Not Played"}</p>
    </div>
  );
}

export default Card;
