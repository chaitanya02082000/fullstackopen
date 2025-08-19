import numbers from "../services/numbers";
const { deletedata } = numbers;

const DeleteButton = ({ id, persons, setPersons }) => {
  const handledeletedata = () => {
    const nameDeleted = persons.find((x) => x.id === id);
    const confirmation = confirm(
      `Do you really want to delete the ${nameDeleted.name}?`,
      console.log(persons),
    );
    confirmation
      ? deletedata(id).then((x) =>
          setPersons(persons.filter((y) => y.id !== x.id)),
        )
      : alert("Cancelled");
  };

  return (
    <>
      <button onClick={handledeletedata}>Delete</button>;
    </>
  );
};
export default DeleteButton;
