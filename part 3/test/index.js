const express = require("express");
const app = express();
app.use(express.json());
let notes = [
  { id: "1", content: "HTML is easy", important: true },
  { id: "2", content: "Browser can execute only JavaScript", important: false },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/api/notes/", (request, response) => {
  response.send(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(400).end();
  }
});
app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((x) => x.id !== id);
  response.status(204).end();
});
app.post("/api/notes/:id", (request, response) => {
  const note = request.body;
  const maxId = notes.length > 0 ? Max(...notes.map((x) => Number(x.id))) : 0;
  console.log(note);
  note.id = String(maxId + 1);
  notes = notes.concat(note);
  response.json(note);
});
app.listen(3001);
console.log(`Server running on port 3000`);
