const express = require("express");
const app = express();
const tasks = require("./routes/task");
require("dotenv").config();
const connectDB = require("./db/connect");

app.use(express.static("public"));

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(4000, () => {
      console.log("running..");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
