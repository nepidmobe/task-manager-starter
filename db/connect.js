const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nepidtube:nepid123@cluster0.3xfnw.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.exports = connectDB;
