import Persons from "./Persons";
import DeleteButton from "./Deletebutton";
const Filter = ({ filter, persons, setPersons }) => {
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
                <DeleteButton
                  id={item.id}
                  persons={persons}
                  setPersons={setPersons}
                />
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {persons.map((item, index) => (
            <li key={index}>
              <Persons name={item.name} number={item.number} />{" "}
              <DeleteButton
                id={item.id}
                persons={persons}
                setPersons={setPersons}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Filter;
