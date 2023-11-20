import express, { json } from "express";
import "dotenv/config";
import connectionToMongoDb from "./dbAccess/mongoDBConnection";
import { connectionToPostgres } from "./dbAccess/postgresConnection";
import cors from "./cors/cors";
import morgan from "./logger/morgan";
import router from "./router/router";

const app = express();

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(router);

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
