import express from "express";
import "dotenv/config";
import connectionToMongoDb from "./dbAccess/mongoDBConnection";
import { connectionToPostgres } from "./dbAccess/postgresConnection";
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connectionToMongoDb()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  connectionToPostgres()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
});
