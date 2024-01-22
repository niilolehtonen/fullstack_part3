const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const args = process.argv;

const url = `mongodb+srv://niiloilehtonen:${args[2]}@cluster0.urpvrlc.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Number = mongoose.model("Number", numberSchema);

const number = new Number({
  name: args[3],
  number: args[4],
});

if (args.length === 3) {
  Number.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((number) => {
      console.log(number.name, number.number);
    });
    mongoose.connection.close();
  });
} else {
  number.save().then((result) => {
    console.log(`added ${args[3]} number ${args[4]} to phonebook`);
    mongoose.connection.close();
  });
}
