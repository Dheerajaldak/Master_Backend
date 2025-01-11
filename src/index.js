import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express"; // Import express to create an app instance

dotenv.config();

const app = express(); // Initialize your Express app

connectDB()
  .then(() => {
    // Once MongoDB is connected, start the server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    // If MongoDB connection fails
    console.log("MONGO db Connection failed!!!", err);
  });
