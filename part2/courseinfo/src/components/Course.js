const Course = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
      <div>
        {course.parts.map((part) => {
          return (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          );
        })}
      </div>
      <h4>Total of {course.parts.reduce((sum, part) => {
          return (sum += part.exercises);
        }, 0) } exercises
      </h4>
    </div>
  );
};

export default Course;
