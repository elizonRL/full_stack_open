import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );
  const machesFilter = () => {
    if (newFilter === "") {
      return persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ));
    } else {
      if(filteredPersons.length === 0) return <p>No matches found</p>
      return filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ));
    }
  };
  console.log(filteredPersons);
  const hanelSubmit = (event) => {
    event.preventDefault();
    const Person = persons.find((person) => person.name === newName);
    if (Person) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    console.log(Person);
    const personObject = {
      name: newName,
      phoneNumber: phoneNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setPhoneNumber("");
  };
  console.log(persons);

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        filter shown with
        <input
          value={newFilter}
          onChange={(event) => setNewFilter(event.target.value)}
        />
      </div>

      <h2>Add new</h2>
      <form onSubmit={hanelSubmit}>
        <div>
          name:
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          Number:
          <input
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <div>Debug {newName}</div>
      <h2>Numbers</h2>

      {machesFilter()}
    </div>
  );
};

export default App;
