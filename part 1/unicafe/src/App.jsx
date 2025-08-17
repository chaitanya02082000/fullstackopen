import { useState } from "react";
const BUTTON = ({ setState, value, children }) => {
  const handleClick = () => {
    const newValue = value + 1;
    setState(newValue);
  };

  return <button onClick={handleClick}>{children}</button>;
};
const Display = ({ text, score }) => {
  return (
    <p>
      {text} {score}
    </p>
  );
};
const Statistics = ({ good, bad, neutral }) => {
  const totalScore = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / totalScore;
  const positive = (good / totalScore) * 100;
  return (
    <p>
      <h2>Statistics</h2>
      <Display text="Good" score={good} />
      <Display text="Neutral" score={neutral} />
      <Display text="Bad" score={bad} />
      <Display text="totalScore" score={totalScore} />
      {!average ? (
        <Display text="average" score={0} />
      ) : (
        <Display text="average" score={average} />
      )}
      {!positive ? (
        <Display text="positive" score={0} />
      ) : (
        <Display text="positive" score={positive} />
      )}
    </p>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>Give Feedback</h1>
      <BUTTON setState={setGood} value={good}>
        good
      </BUTTON>
      <BUTTON setState={setNeutral} value={neutral}>
        neutral
      </BUTTON>
      <BUTTON setState={setBad} value={bad}>
        bad
      </BUTTON>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
