import number from "./services/numbers";
import Filter from "./components/Search";
import AddPeople from "./components/Numberlist";
const { getData, updateData, createData } = number;
import { useEffect, useState } from "react";
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
    const newObj = {
      name: newName,
      number: newNumber,
    };

    const checkDuplicate = (person) =>
      person.name.toLowerCase() === newName.toLowerCase();

    const duplicate = persons.some(checkDuplicate);

    if (duplicate === false) {
      createData(newObj).then((x) => {
        setPersons(persons.concat(x));
        setNewNumber("");
        setNewName("");
      });
    } else {
      alert(`${newName} is already in the phonebook`);
    }
  };

  useEffect(() => {
    getData().then((x) => setPersons(x));
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      Filter show with a{" "}
      {
        <>
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
        </>
      }
    </div>
  );
};
export default App;
