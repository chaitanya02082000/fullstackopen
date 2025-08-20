const express = require("express");

const app = express();

const persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const getDateTime = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });

  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const timeWithTimeZone = date.toLocaleTimeString("en-US", timeOptions);

  return `${day} ${month} ${dayOfMonth} ${year}, ${timeWithTimeZone}`;
};

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/info", (Request, Response) => {
  const dateStuff = getDateTime();
  const msgSend = `<p>Phonebook has info for ${persons.length} people</p> 
    <p>${dateStuff}</p>`;
  Response.send(msgSend);
});
app.listen(3001);
console.log("Server at 3001");
