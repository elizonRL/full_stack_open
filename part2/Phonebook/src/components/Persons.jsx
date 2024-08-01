const Persons = ({ personsData, onDelete}) => {
  console.log("ersonsData", personsData);
  return (
    <>
      {personsData.map((person) => {
        return (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
            <button onClick={() => onDelete(person.id)} >Delete</button>
          </div>
        );
      })}
    </>
  );
};
export default Persons;
