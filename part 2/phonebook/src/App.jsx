import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const onChange = (event) => {
    setNewName(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    const newObj = [
      {
        name: newName,
      },
    ];
    setPersons(persons.concat(newObj));
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={onChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item, key) => (
        <h1 key={key}>{item.name}</h1>
      ))}
    </div>
  );
};

export default App;
