import { useState } from "react";

const Button = ({ onButtonClick, children }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

const Display = ({ text, score }) => {
  return (
    <p>
      {text} {score}
    </p>
  );
};

const Statistics = ({ good, bad, neutral, buttonClicked }) => {
  const totalScore = good + neutral + bad;
  const average =
    totalScore === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalScore;
  const positive = totalScore === 0 ? 0 : (good / totalScore) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {totalScore === 0 ? ( // Changed from buttonClicked to totalScore
        <p>No Feedback Given</p>
      ) : (
        <>
          <Display text="Good" score={good} />
          <Display text="Neutral" score={neutral} />
          <Display text="Bad" score={bad} />
          <Display text="Total" score={totalScore} />
          <Display text="Average" score={average.toFixed(1)} />
          <Display text="Positive" score={`${positive.toFixed(1)}%`} />
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
