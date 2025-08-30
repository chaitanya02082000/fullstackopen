const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://chaitanya:${password}@cluster0.ag2pybp.mongodb.net/persons?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String, // keep it String, numbers like "040-123456" won't work as Number
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  // show all persons
  Person.find({}).then((result) => {
    result.forEach((p) => {
      console.log(`${p.name} ${p.number}`);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  // add new person
  const person = new Person({
    name: name,
    number: number,
  });

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
} else {
  console.log("Usage:");
  console.log("  node mongo.js <password>");
  console.log("  node mongo.js <password> <name> <number>");
  mongoose.connection.close();
}
