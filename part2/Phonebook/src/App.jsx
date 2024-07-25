import  axios  from 'axios';
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
  const [persons, setPersons] = useState([]);
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
      if (!filteredPersons.length) return <p>No matches found</p>;
      return filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ));
    }
  };
  console.log(filteredPersons);
  const handelSubmit = (event) => {
    event.preventDefault();
    const Person = persons.find((person) => person.name === newName);
    if (Person) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: phoneNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setPhoneNumber("");
  };
  console.log(persons);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log("Response Data-->",response.data);
    });
    
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with:
        <Filter setSearch={setNewFilter} Search={newFilter} />
      </div>
      <h2>Add new</h2>
      <PersonForm
        name={newName}
        setName={setNewName}
        number={phoneNumber}
        setNumber={setPhoneNumber}
        onSubmit={handelSubmit}
      />
      <h2>Numbers</h2>
      <Persons personsData={machesFilter}/>
    </div>
  );
};

export default App;
