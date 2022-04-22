const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nepidtube:nepid123@cluster0.3xfnw.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoose conn..."))
  .catch((err) => {
    console.log(err);
  });
