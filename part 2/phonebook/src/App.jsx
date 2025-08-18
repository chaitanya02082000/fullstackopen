import { useState } from "react";
const Entry = ({ number, name }) => {
  return (
    <>
      <p>
        {name} {number}
      </p>
    </>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");
  const [newNumber, setNewNumber] = useState([]);
  const onChangeName = (event) => {
    setNewName(event.target.value);
  };
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
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
      Filter show with a{" "}
      <input value={filter} onChange={onChangeFilter}></input>
      <form onSubmit={handleAdd}>
        <div>
          <h2>add a new: </h2>
          name: <input value={newName} onChange={onChangeName} />
          <br></br>
          Numbers: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter ? (
        <ul>
          {persons
            .filter((item) =>
              item.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map((item, index) => (
              <li key={index}>
                <Entry name={item.name} number={item.number} />
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {persons.map((item, index) => (
            <li key={index}>
              <Entry name={item.name} number={item.number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default App;
