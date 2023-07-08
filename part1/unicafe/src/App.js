import { useState } from "react";

//Title component
const Title = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

//Result row
const ResultRow = ({ result, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{result[text]}</td>
    </tr>
  );
};

//Summarize results
const summarizeScores = (scores) => {
  const { good, neutral, bad } = scores;

  const absoluteSum = good + neutral + bad;
  const averageScore = ((good - bad) / absoluteSum).toFixed(1);
  const positiveScores = ((good / absoluteSum) * 100).toFixed(1);
  if (absoluteSum === 0) {
    return scores;
  }
  return {
    ...scores,
    all: absoluteSum,
    average: averageScore,
    positive: `${positiveScores} %`,
  };
};

//Results table
const FeedbackTable = ({ scores }) => {
  const summaryData = summarizeScores(scores);
  if (summaryData["all"] === undefined) {
    return <p>No feedback given yet!</p>;
  }
  return (
    <table>
      {Object.keys(summaryData).map((key) => {
        return <ResultRow key={key} text={key} result={summaryData} />;
      })}
    </table>
  );
};

//Button component
const FeedbackButton = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const scores = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  //Function for the UseStates
  const updateValue = (value, setValue) => () => {
    setValue(value + 1);
  };
  return (
    <div>
      <Title text={"Give Feedback"} />
      <FeedbackButton text={"Good"} clickHandler={updateValue(good, setGood)} />
      <FeedbackButton
        text={"Neutral"}
        clickHandler={updateValue(neutral, setNeutral)}
      />
      <FeedbackButton text={"Bad"} clickHandler={updateValue(bad, setBad)} />
      <Title text={"Statistics"} />
      <FeedbackTable scores={scores} />
    </div>
  );
};

export default App;
