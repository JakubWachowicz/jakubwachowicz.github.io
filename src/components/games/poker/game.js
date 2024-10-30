import React, { useState } from "react"
import Menu from "./menu"
import Poker from "./poker"


const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    score: {
        fontWeight: 'bold',
        color: 'blue',
    },
    buttonContainer: {
        marginTop: '10px',
    },
    button: {
        margin: '5px',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: 'white',
        transition: 'background-color 0.3s',
    },
};




function Game() {
    const [gameState, setGameState] = useState("menu")

    const changeGameState = (newState) => {
        setGameState(newState);
    };
    return (
        <div style={styles.container}>
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
                {gameState === "menu" && <Menu changeGameState={changeGameState} />}
                {gameState === "game" && <Poker changeGameState={changeGameState} />}
            </div>

        </div>
    )
}
export default Game