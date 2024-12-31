import express from "express";
import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for enabling CORS
app.use(cors());

//Middleware for parsing request data
app.use(express.json());

//Route for checking if the server is running
app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Server is running");
});

app.use("/api/books", booksRoute);

//Connecting to the DataBase
mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App is connected to MongoDB");
    app.listen(PORT, () => {
      console.log("App is running on port " + PORT);
      console.log("App is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
