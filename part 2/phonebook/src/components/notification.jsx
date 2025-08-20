const Notification = ({ message }) => {
  const messageStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (!message) {
    return null;
  }

  return (
    <div>
      <h1 style={messageStyle}>{message}</h1>
    </div>
  );
};
export default Notification;
