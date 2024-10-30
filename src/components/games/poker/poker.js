import React, { useState } from 'react';
import Card from './card';

function Poker({ changeGameState }) {
    // Use useState to manage poker game state
    const [pokerGameState, setPokerGameState] = useState({
        score: 1,
        handSize: 2,
    });

    // Function to increment the score
    const incrementScore = () => {
        setPokerGameState(prevState => ({
            ...prevState,
            score: prevState.score + 1,
        }));
    };

    // Function to reset the score
    const resetScore = () => {
        setPokerGameState({
            score: 1,
            handSize: 2,
        });
    };

    const cardData = [
        { value: 'two', suit: 'hearts' },
        { value: 'three', suit: 'spades' },
        { value: 'four', suit: 'diamonds' },
        { value: 'five', suit: 'clubs' },
        { value: 'six', suit: 'spades' },
        { value: 'seven', suit: 'hearts' },
        { value: 'eight', suit: 'diamonds' },
        { value: 'nine', suit: 'clubs' },
        { value: 'ten', suit: 'spades' },
        { value: 'jack', suit: 'hearts' },
        { value: 'queen', suit: 'diamonds' },
        { value: 'king', suit: 'clubs' },
        { value: 'as', suit: 'spades' }
      ];

    return (
       <>
        <div className='flex gap-2'>
        {cardData.map((card, index) => (
        <Card 
          key={index}
          isPlayed="false"
          value={card.value}
          suit={card.suit}
        />
      ))}

        </div>
       </>
    );
}



export default Poker;
