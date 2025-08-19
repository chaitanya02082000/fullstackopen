import Persons from "./Persons";
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
export default Filter;
