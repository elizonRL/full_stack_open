import Part from "./part";

const Content = (props) => {
  console.log("Conten==>",props);
  return (
    <div>
      <Part
        contentPart={props.part.parts[0].name}
        exercises={props.part.parts[0].exercises}
      />
      <Part
        contentPart={props.part.parts[1].name}
        exercises={props.part.parts[1].exercises}
      />
      <Part
        contentPart={props.part.parts[2].name}
        exercises={props.part.parts[2].exercises}
      />
    </div>
  );
};
export default Content;
