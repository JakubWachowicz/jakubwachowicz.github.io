import React from 'react';

// Define the Menu component
function Menu({ changeGameState }) {
    return (
        <>
            <span className='text-3xl md:text-4xl font-bold mb-4'>Poker Game</span>
            <span className='mb-5'>Show me what you can!</span>
            <button className='bg-red-600 text-white p-5 ' onClick={() => changeGameState("game")}>Play Game</button>
        </>
    );
}
export default Menu;
