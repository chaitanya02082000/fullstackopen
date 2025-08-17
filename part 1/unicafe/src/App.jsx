import { useState } from "react";

const Button = ({ onButtonClick, children }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

const StatisticLine = ({ text, score, percent }) => {
  return (
    <p>
      {text} {score}
      {percent}
    </p>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const totalScore = good + neutral + bad;
  const average =
    totalScore === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalScore;
  const positive = totalScore === 0 ? 0 : (good / totalScore) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {totalScore === 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <>
          <StatisticLine text="Good" score={good} />
          <StatisticLine text="Neutral" score={neutral} />
          <StatisticLine text="Bad" score={bad} />
          <StatisticLine text="Total" score={totalScore} />
          <StatisticLine text="Average" score={average} />
          <StatisticLine text="Positive" score={positive} percent="%" />
        </>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handle button clicks
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onButtonClick={handleGoodClick}>good</Button>
      <Button onButtonClick={handleNeutralClick}>neutral</Button>
      <Button onButtonClick={handleBadClick}>bad</Button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        buttonClicked={good + neutral + bad}
      />
    </div>
  );
};

export default App;
