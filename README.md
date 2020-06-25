## About this project

Conway’s game of life is a zero player game which means its evolution throughout the game is determined by its initial input and no further interaction is required. It was invented by Cambridge mathematician, John Horton Conway. The game became very popular when it was mentioned in an article published by Scientific American in 1970.

The algorithm which this game is based on is is Turing complete which means that it is a system able to recognise or decide other data manipulation sets.

Fundamentally, the Game of Life is a grid featuring a collection of cells which can live, die or multiply depending on the initial conditions. These cells form various patterns throughout the course of the game.

Any number of different possible configurations can be used as the initial input, but one thing to note is that after a time, there might be nothing left on the board, or as in some cases, the configurations live forever.

There is no algorithmic way of telling which one of these will happen. If there is a configuration on the board and you follow it for a thousand moves and it doesn’t die off, it could die off on the thousand and first move, or the billionth. Profound, no?

This implementation of the algorithm was created using React and Redux, with arrays in an object as the data structure. It was designed so that the cells that are off the edge of the grid wrap around to the far side. Another possible implementation is to have every cell at the end of the grid to be in the ‘dead’ state. Obviously various implementations will have different effects on the lifecycle of the cells in the grid.

You can read more about how this project was designed here: https://dev.to/master_elodin/implementing-conway-s-game-of-life-d6c-temp-slug-8998?preview=565575d83f8a205937292b47ae205f2ae9f78876044c99f2068b79c3b37e72d6b8d8e93e90d3671def6f9872f388f181ca986e5ab7baecdec8409ce1

### Deployment

This project is deployed here: https://game-of-life.kvothe.vercel.app/

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
