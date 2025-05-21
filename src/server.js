import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import conectDB from "./config/conectDB";
require("dotenv").config();

let app = express();
const cors = require("cors");
/*app.use(cors({
  origin: 'http://localhost:8081', // hoặc '*' nếu đang phát triển
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // nếu bạn dùng cookies hoặc session
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT_NATIVE);


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/

const allowedOrigins = ["http://localhost:8081", "http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

viewEngine(app);
initWebRoutes(app);

conectDB();

let port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("Beckend Nodejs is running on the port: " + port);
});
