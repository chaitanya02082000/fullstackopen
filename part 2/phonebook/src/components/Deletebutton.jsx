import numbers from "../services/numbers";
const { deletedata } = numbers;

const DeleteButton = ({ id, persons, setPersons }) => {
  const handledeletedata = () => {
    const confirmation = confirm(
      `Do you really want to delete the ${persons[0].name}?`,
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
