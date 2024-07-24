import Header from "./Header";
import Content from "./Content";
import Total from './Total'

const Course = ({ course }) => {
  console.log("Props of course", course);
  return (
    <>
      {course.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content part={course} />
          <Total total={course} />
        </div>
      ))}
    </>
  );
};
export default Course;
