import Part from "./part";

const Content = ({part}) => {
  console.log("Conten==>",part);
  return (
    <div>
      {part.parts.map((part) => (
        <Part key={part.id} contentPart={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};
export default Content;
