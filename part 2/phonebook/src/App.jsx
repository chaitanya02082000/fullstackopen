import axios from "axios";
import { useEffect, useState } from "react";
const Persons = ({ number, name }) => {
  return (
    <>
      <p>
        {name} {number}
      </p>
    </>
  );
};
const Filter = ({ filter, persons }) => {
  return (
    <>
      {filter ? (
        <ul>
          {persons
            .filter((item) =>
              item.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map((item, index) => (
              <li key={index}>
                <Persons name={item.name} number={item.number} />
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {persons.map((item, index) => (
            <li key={index}>
              <Persons name={item.name} number={item.number} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
const AddPeople = ({
  handleAdd,
  newName,
  onChangeName,
  newNumber,
  onChangeNumber,
}) => {
  return (
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
  );
};
const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((data) => {
      setPersons(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      Filter show with a{" "}
      <input value={filter} onChange={onChangeFilter}></input>
      <AddPeople
        handleAdd={handleAdd}
        newName={newName}
        onChangeName={onChangeName}
        newNumber={newNumber}
        onChangeNumber={onChangeNumber}
      />
      <h2>Numbers</h2>
      <Filter persons={persons} filter={filter}></Filter>
    </div>
  );
};
export default App;
