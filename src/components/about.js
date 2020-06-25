import React from "react";
import john from "./John-Conway.jpg";
import "../App.css";

const About = () => (
  <article
    style={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "left",
      marginTop: "3em",
      justifyContent: "center",
      marginBottom: "2em",
      borderTop: "2px solid #fbeaff",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#ff6f91", marginBottom: "2em" }}>
      About this algorithm
    </h2>
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "2em" }}>
        <img src={john} alt="John-Conway" />
      </div>
      <p>
        Conway’s game of life is a zero player game which means its evolution
        throughout the game is determined by its initial input and no further
        interaction is required. It was invented by Cambridge mathematician,
        John Horton Conway. The game became very popular when it was mentioned
        in an article published by Scientific American in 1970.
      </p>
    </section>
    <section>
      <p>
        The algorithm which this game is based on is is Turing complete which
        means that it is a system able to recognise or decide other data
        manipulation sets.{" "}
      </p>
      <p>
        Fundamentally, the Game of Life is a grid featuring a collection of
        cells which can live, die or multiply depending on the initial
        conditions. These cells form various patterns throughout the course of
        the game.
      </p>
      <p>
        Any number of different possible configurations can be used as the
        initial input, but one thing to note is that after a time, there might
        be nothing left on the board, or as in some cases, the configurations
        live forever.{" "}
      </p>
      <p>
        There is no algorithmic way of telling which one of these will happen.
        If there is a configuration on the board and you follow it for a
        thousand moves and it doesn’t die off, it could die off on the thousand
        and first move, or the billionth. Profound, no?
      </p>
      <p>
        This implementation of the algorithm was created using React and Redux,
        with arrays in an object as the data structure. It was designed so that
        the cells that are off the edge of the grid wrap around to the far side.
        Another possible implementation is to have every cell at the end of the
        grid to be in the ‘dead’ state. Obviously various implementations will
        have different effects on the lifecycle of the cells in the grid.
      </p>
      <p style={{ color: "#f9f871" }}>
        Fun fact: The game was conceived on a go board, not a computer.
      </p>
      <p>
        You can read more about how this implementation was designed{" "}
        <a href="https://dev.to/master_elodin/implementing-conway-s-game-of-life-42fd">
          here
        </a>
        .{" "}
      </p>
      <p>
        Also, if you need more presets for the game, Alan Hensel did a great job
        of compiling an extensive glossary. You can find that{" "}
        <a href="http://www.radicaleye.com/lifepage/picgloss/picgloss.html">
          here
        </a>
        .
      </p>
    </section>
  </article>
);

export default About;
