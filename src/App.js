import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
  },
  game: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    fontWeight: 'bold',
  },
  winnerMessage: {
    position: 'absolute',
    top: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
  },
  boardRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
  },
  square: {
    backgroundColor: '#fff',
    border: '2px solid #333',
    padding: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  x: {
    color: '#f25f5c',
  },
  o: {
    color: '#247ba0',
  },
};

const Square = ({ value, onClick }) => {
  return (
    <button
      style={{
        ...styles.square,
        ...(value === 'X' ? styles.x : value === 'O' ? styles.o : {}),
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Board = ({ squares, onClick }) => {
  return (
    <div style={styles.boardRow}>
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(nextSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const handleNewGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div style={styles.body}>
      <div style={styles.game}>
        {winner && (
          <div style={styles.winnerMessage}>
            🎉 Congratulations! {winner} Wins! 🎉
          </div>
        )}
        <div style={styles.status}>{status}</div>
        <Board squares={squares} onClick={handleClick} />
        <button style={styles.button} onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
