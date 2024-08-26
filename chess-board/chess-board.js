function initializeChessboard() {
    const chessboard = document.getElementById('chessboard');
    let isWhite = true;

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div');
            square.id = `square-${row}-${col}`;
            square.className = `square ${isWhite ? 'white' : 'black'}`;
            square.addEventListener('click', function() {
                if (square.style.backgroundColor === 'red') {
                    resetSquareColor(square);
                } else {
                    resetSquareColors();
                    square.style.backgroundColor = 'red';
                }
            });

            chessboard.appendChild(square);

            isWhite = !isWhite;
        }

        isWhite = !isWhite;
    }
}

function resetSquareColors() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        resetSquareColor(square);
    });
}

function resetSquareColor(square) {
    if (square.classList.contains('white')) {
        square.style.backgroundColor = '#ffffff';
    } else {
        square.style.backgroundColor = '#000000';
    }
}
