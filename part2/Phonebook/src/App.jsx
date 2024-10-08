import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonesServices from "./Services/phonesServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [err, setErr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );
  const deletePerson = (id) => {
    const confirm = window.confirm("are you shore");
    if (confirm) {
      phonesServices.deletePerson(id).then((response) => {
        console.log(response, "has beem delet");
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const Person = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (Person) {
      const confrimEdit = window.confirm(
        `${newName} is already added to phonebook, Replace old number with a new one?`
      );
      if (!confrimEdit) return;
      const editPerson = { ...Person, number: phoneNumber };
      console.log(editPerson.id);
      phonesServices
        .editPerson(editPerson.id, editPerson)
        .then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== Person.id ? person : response
            )
          );
          setNewName("");
          setPhoneNumber("");
        })
        .catch((error) => {
          setErr(error.response.data.error);
          setTimeout(() => {
            setErr("");
          }, 3000);
        });
      return;
    }
    const personObject = {
      name: newName,
      number: phoneNumber,
    };
    phonesServices
      .addPersons(personObject)
      .then((response) => {
        setPersons(persons.concat(response));
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setErr(error.response.data.error);
        setTimeout(() => {
          setErr("");
        }, 3000);
      });

    setNewName("");
    setPhoneNumber("");
  };
  console.log("Persons ->", persons);
  useEffect(() => {
    phonesServices.getAll().then((initialPhone) => {
      setPersons(initialPhone);
    });
  }, []);
  const machesFilter = () => {
    if (newFilter === "") {
      return <Persons personsData={persons} onDelete={deletePerson} />;
    } else {
      if (!filteredPersons.length) return <p>No matches found</p>;
      return filteredPersons.map((person) => (
        <>
          <p key={person.id}>
            {person.name} {person.number}
          </p>
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </>
      ));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {err && <p className="err">{err}</p>}
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
      {machesFilter()}
    </div>
  );
};

export default App;
