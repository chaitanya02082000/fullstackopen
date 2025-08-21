const express = require("express");

const app = express();
/*used for parsing the body in json when PUT request*/
app.use(express.json());
let persons = [
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
  {
    id: "5",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
const newId = () => {
  const iiid = persons.length > 0 ? Math.max(...persons.map((x) => x.id)) : 0;
  return iiid;
};

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

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const resoruce = persons.find((x) => x.id === id);
  resoruce
    ? response.json(resoruce)
    : response.status(404).send({ error: "Person not found" });
});
app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((x) => x.id !== id);
  response.status(204).end();
});
app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log(body);
  const id = newId();
  if (!body) {
    response.status(404).end();
  } else {
    const newBody = {
      id: id + 1,
      name: body.name,
      number: body.number,
    };
    persons = persons.concat(newBody);
    response.json(newBody);
  }
});
app.listen(3001);
console.log("Server at 3001");
