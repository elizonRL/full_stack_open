const Total = ({ total }) => {
  console.log("Total ==>", total);
  const totalOfExercises = total.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0); 
  
  console.log("Total with reuce ==>", totalOfExercises);

  return (
    <div>
      <p>
        Number of exercises:{" "}
        {totalOfExercises}
      </p>
    </div>
  );
};
export default Total;
