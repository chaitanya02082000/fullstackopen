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
  const handleAdd = async (event) => {
    event.preventDefault();
    const newObj = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (!existingPerson) {
      try {
        const addedPerson = await createData(newObj);
        setPersons((prevPersons) => [...prevPersons, addedPerson]);
        setNewNumber("");
        setNewName("");
        setMessage("Successfully added!");
        setTimeout(() => setMessage(""), 3000);
      } catch (error) {
        setMessage(`Error: ${error.response?.data?.error} "}`);
        setTimeout(() => setMessage(""), 3000);
      }
    } else {
      const change = window.confirm(
        `${newName} is already in the phonebook. Do you want to update the number?`,
      );

      if (change) {
        try {
          const updatedPerson = await updateData(existingPerson.id, newObj);
          setPersons((prevPersons) =>
            prevPersons.map((person) =>
              person.id === existingPerson.id ? updatedPerson : person,
            ),
          );
          setNewNumber("");
          setNewName("");
          setMessage("Successfully updated!");
          setTimeout(() => setMessage(""), 3000);
        } catch (error) {
          console.error("Update failed:", error);
          setMessage(
            `Error: ${error.response?.data?.error || "Failed to update contact"}`,
          );
          setTimeout(() => setMessage(""), 3000);
        }
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
