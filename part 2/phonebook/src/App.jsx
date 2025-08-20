import number from "./services/numbers";
import Notification from "./components/notification";
import "./index.css";
import Filter from "./components/Search";
import AddPeople from "./components/Numberlist";
const { getData, updateData, createData } = number;
import { useEffect, useState } from "react";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState("");
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
    const getNextId = () => {
      const maxId = persons.reduce((max, person) => {
        const idInNumber = parseInt(person.id);
        return idInNumber > max ? idInNumber : max;
      }, 0);
      return maxId + 1;
    };
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (!existingPerson) {
      createData(newObj).then((x) => {
        setPersons(persons.concat(x));
        setNewNumber("");
        setNewName("");
        setMessage("succcesful");
        setTimeout(() => setMessage(""), 1000);
      });
    } else {
      const change = confirm(
        `${newName} is already in the phonebook, Do you want to change the number`,
      );
      if (change === true) {
        const id = existingPerson.id;
        updateData(id, newObj).then((x) => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? x : person,
            ),
          );
          setNewNumber("");
          setNewName("");
          setMessage("succcesful");
        });
      }
    }
  };

  useEffect(() => {
    getData().then((x) => setPersons(x));
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      Filter show with a{" "}
      {
        <>
          <input value={filter} onChange={onChangeFilter}></input>
          <Notification message={message} />
          <AddPeople
            handleAdd={handleAdd}
            newName={newName}
            onChangeName={onChangeName}
            newNumber={newNumber}
            onChangeNumber={onChangeNumber}
          />
          <h2>Numbers</h2>
          <Filter
            setPersons={setPersons}
            persons={persons}
            filter={filter}
          ></Filter>
        </>
      }
    </div>
  );
};
export default App;
