import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  //variables
  let average = (good - bad) / (good + neutral + bad);
  let total = good + neutral + bad;
  let positive = (good / (good + neutral + bad)) * 100;
  const showStaistics = () => {
    if (total === 0) {
      return (
        <>
          <p>No feedback given</p>
        </>
      );
    }
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="Total" value={total} />
            <StatisticsLine text="Average" value={average} />
            <StatisticsLine text="Positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  };
  console.log(props);
  return (
    <>
      <h2>Statistics</h2>
      {showStaistics()}
    </>
  );
};

const StatisticsLine = (props) => {
  return (
    <>
      {props.text === "Positive" ? (
        <tr>
          <th>{props.text}</th> <td>{props.value} %</td>
        </tr>
      ) : (
        <tr>
          <th>{props.text}</th> <td>{props.value}</td>
        </tr>
      )}
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const App = () => {
  //States
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Functions handels
  const handelGood = () => setGood(good + 1);
  const handelNeutral = () => setNeutral(neutral + 1);
  const handelBad = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handelGood} text="Good" />
      <Button onClick={handelNeutral} text="Neutral" />
      <Button onClick={handelBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
