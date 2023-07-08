import { useState } from "react";

//button component
const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

//Anecdote component
const Anecdote = ({ text }) => {
  return <p>{text}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(() => {
    const pointsMap = {};
    for (let i = 0; i < anecdotes.length; i++) {
      pointsMap[i] = 0;
    }
    return pointsMap;
  });

  const [selected, setSelected] = useState(0);

  const selectNext = () => {
    if (selected + 1 === anecdotes.length) {
      return setSelected(0);
    }
    return setSelected(selected + 1);
  };

  const addVote = () => {
    let updatedPoints = {};
    updatedPoints[selected] = points[selected] + 1;
    return setPoints({
      ...points,
      ...updatedPoints,
    });
  };
  const mostVotedAnecdote = () => {
    return Object.keys(points).reduce((a, b) =>
      points[a] > points[b] ? a : b
    );
  };

  const mostVotedKey = mostVotedAnecdote();
  return (
    <div>
      <h1> Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} />
      <div>
        <h4>This anecdote has {points[selected]} votes!</h4>
      </div>
      <Button text={"vote"} clickHandler={addVote} />
      <Button text={"next anecdote"} clickHandler={selectNext} />
      <h1> Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostVotedKey]} />
    </div>
  );
};

export default App;
