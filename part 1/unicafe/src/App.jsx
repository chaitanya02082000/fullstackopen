import { useState } from "react";

const Button = ({ onButtonClick, children }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

const StatisticLine = ({ text, score, percent }) => {
  return (
    <>
      {text} {score}
      {percent}
    </>
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
        <table>
          <tbody>
            <tr>
              <td>
                <StatisticLine text="good" />
              </td>

              <td>
                <StatisticLine score={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="neutral" />
              </td>

              <td>
                <StatisticLine score={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="bad" />
              </td>

              <td>
                <StatisticLine score={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="all" />
              </td>

              <td>
                <StatisticLine score={totalScore} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="average" />
              </td>

              <td>
                <StatisticLine score={average} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="positive" />
              </td>

              <td>
                <StatisticLine score={positive} percent="%" />
              </td>
            </tr>
          </tbody>
        </table>
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
