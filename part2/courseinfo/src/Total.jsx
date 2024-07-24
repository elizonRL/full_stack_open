const Total = (props) => {
  console.log("Total ==>", props);

  return (
    <div>
      <p>
        Number of exercises:{" "}

        {props.total.parts[0].exercises +
          props.total.parts[1].exercises +
          props.total.parts[2].exercises}
      </p>
    </div>
  );
};
export default Total;
