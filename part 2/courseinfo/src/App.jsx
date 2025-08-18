const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (prop) => {
  let { parts } = prop;
  return (
    <>
      {console.log(prop)}
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
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
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total parts={course[0].parts} />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total parts={course[1].parts} />
    </>
  );
};
const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
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
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
