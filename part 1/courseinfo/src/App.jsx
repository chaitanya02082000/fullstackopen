const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (prop) => {
  return (
    <>
      {console.log(prop)}
      <Part part={prop.parts[0].name} exercises={prop.parts[0].exercises} />
      <Part part={prop.parts[1].name} exercises={prop.parts[1].exercises} />
      <Part part={prop.parts[2].name} exercises={prop.parts[2].exercises} />
    </>
  );
};
const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      {console.log(props)}
      <p>
        {props.part}
        {props.exercises}
      </p>
    </>
  );
};
const App = () => {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
