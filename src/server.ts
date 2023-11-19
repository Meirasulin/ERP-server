import express from "express";
import "dotenv/config";
import connectionToDb from "./dbAccess/dbConnection";
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connectionToDb()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
});
