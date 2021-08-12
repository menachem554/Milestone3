/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Configure routes
routes.main(app);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});