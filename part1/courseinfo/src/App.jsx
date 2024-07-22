import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  /* commit name  FSO part1 Full exercises from 1.1 to 1.5 */
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total total={course} />
    </div>
  );
};

export default App;
