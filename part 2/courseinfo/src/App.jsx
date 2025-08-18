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
      <Part part={prop.parts[3].name} exercises={prop.parts[3].exercises} />
    </>
  );
};
const Total = (props) => {
  const { parts } = props;
  let intialvalue = 0;
  return (
    <>
      <p>
        <b> total of </b>
        <b>{parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
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
const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: " Redux ",
        exercises: 11,
        id: 3,
      },
    ],
  };
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
