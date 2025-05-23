import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import conectDB from "./config/conectDB";
import { configurations } from "./config/configuration";
const cors = require("cors");

let app = express();

let port = configurations.port;

const allowedOrigins = ["http://localhost:8081", "http://localhost:3000"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//   }),
// );

app.use(cors({ origin: "*" }));

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

viewEngine(app);
initWebRoutes(app);

conectDB();

app.listen(port, () => {
  console.log("Beckend Nodejs is running on the port: " + port);
});
