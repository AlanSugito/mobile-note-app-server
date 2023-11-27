import express from "express";
import cors from "cors";
import { handleError } from "../middlewares/index.js";
import { userRouter, noteRouter } from "../routers/index.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/users", userRouter);
server.use("/notes", noteRouter);

server.use(handleError);

export default server;
