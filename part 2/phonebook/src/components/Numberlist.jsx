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
export default AddPeople;
