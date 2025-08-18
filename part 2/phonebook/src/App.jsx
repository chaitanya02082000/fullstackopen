import { useState } from "react";
const Entry = ({ number, name }) => {
  return (
    <>
      <p>
        {" "}
        {name}
        {number}
      </p>
    </>
  );
};
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState([]);
  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    const newObj = [
      {
        name: newName,
        number: newNumber,
      },
    ];
    const checkDuplicate = (person) =>
      person.name.toLowerCase() === newName.toLowerCase();

    const duplicate = persons.some(checkDuplicate);

    if (duplicate === false) {
      setPersons(persons.concat(newObj));
      setNewNumber("");

      setNewName("");
    } else {
      alert(`${newName} is already in the phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={onChangeName} />
          Numbers: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item, key) => (
        <Entry key={key} name={item.name} number={item.number}></Entry>
      ))}
    </div>
  );
};

export default App;
