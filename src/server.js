import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import conectDB from './config/conectDB';
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))

viewEngine(app);
initWebRoutes(app);

conectDB();

let port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log("Beckend Nodejs is running on the port: " + port)
})
