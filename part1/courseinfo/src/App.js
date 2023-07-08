const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
const Part = ({ content: { name, exercises } }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};
const Total = ({ sum }) => {
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
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
      <Header title={course.name} />
      {course.parts.map((part) => (
        <Part content={part} />
      ))}
      <Total sum={1} />
    </div>
  );
};

export default App;
