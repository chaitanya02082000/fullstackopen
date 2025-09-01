// app.post("/api/persons", (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const existingPerson = persons.find((x) => x.name === body.name);
//   const id = newId();
//   if (!body) {
//     response.status(404).end();
//   } else if (!body.name || !body.number) {
//     response.status(400).json({ message: `Missing name or number` });
//   } else if (existingPerson) {
//     response.status(400).json({ message: `Already exist` });
//   } else {
//     const newBody = {
//       id: id + 1,
//       name: body.name,
//       number: body.number,
//     };
//     persons = persons.concat(newBody);
//     response.json(newBody);
//   }
// });
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

const app = express();

/*used for parsing the body in json when PUT request*/
app.use(express.json());

app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("dist"));
const newId = () => {
  const iiid =
    persons.length > 0 ? Math.max(...persons.map((x) => Number(x.id))) : 0;
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
  Person.find({}).then((result) => {
    response.json(result);
  });
});
app.get("/info", (Request, Response) => {
  Person.countDocuments({}).then((count) => {
    const dateStuff = getDateTime();
    const msgSend = `
        <div style="font-family: Arial, sans-serif;">
          <h2>Phonebook Info</h2>
          <p>Phonebook has info for ${count} people</p>
          <p>Current Date and Time (UTC): ${dateStuff}</p>
        </div>
      `;
    Response.send(msgSend);
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  // const resoruce = persons.find((x) => x.id === id);
  // resoruce
  //   ? response.json(resoruce)
  //   : response.status(404).send({ error: "Person not found" });
  Person.findById(id)
    .then((x) => {
      if (x) {
        response.json(x);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message).send({ error: error.message });

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};
app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then(() => response.status(204).end())
    .catch((error) => next(error));

  // persons = persons.filter((x) => x.id !== id);
  // response.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body) {
    response.status(404).end();
  }
  const newBody = new Person({
    name: body.name,
    number: body.number,
  });
  newBody.save().then((x) => res.json(x));
});

app.use(errorHandler);

app.put("/api/persons/:id", (request, response, next) => {
  const { id } = request.params;
  const { name, number } = request.body;

  if (!name || !number) {
    return response.status(400).json({
      error: "Missing name or number",
    });
  }

  const updatedPerson = {
    name,
    number,
  };

  Person.findByIdAndUpdate(
    id,
    updatedPerson,
    { new: true, runValidators: true, context: "query" }, // Add these options
  )
    .then((updated) => {
      if (!updated) {
        return response.status(404).json({
          error: "Person not found",
        });
      }
      response.json(updated);
    })
    .catch((error) => next(error));
});
const port = process.env.PORT || 3001;
app.listen(port);
console.log(`server runinngin at ${port}`);
