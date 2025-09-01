const { default: mongoose } = require("mongoose");

const url = process.env.MONGODB_URI;
mongoose.set("strict", "false");

console.log("CONNECTING TO DB");
mongoose
  .connect(url)
  .then((result) => {
    console.log("Conneceted");
  })
  .catch((error) => {
    console.log(`errror`, error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  number: {
    type: String,
    required: true,
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
