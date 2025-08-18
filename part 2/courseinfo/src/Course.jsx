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
export default Course;
