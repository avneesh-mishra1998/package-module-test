import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Derived_class from "./classes/DerivedClass";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const der_class = new Derived_class()


app.get("/", (req: Request, res: Response) => {
  let result = der_class.name("AAAA")
  
  res.send(result);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});