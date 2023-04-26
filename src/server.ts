import express, { Express } from "express";
import { Server } from "http";

const app: Express = express();
const server: Server = new Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { remoteCommandsRouter } from "./routes/remote_commands_routes";

app.use((req, res, next) => {
  console.log(`[server]: ${req.method} ${req.url}`);
  next();
});

app.use("/remote-commands", remoteCommandsRouter);

const port: number = 5000;

server.listen(port, () => {
  console.log(`[server]: Server is running on port http://localhost:${port} ⚡️`);
});
