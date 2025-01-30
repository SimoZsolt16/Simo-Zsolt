const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection
({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database: "kozutak",
});

app.get("/", (req, res) =>
{
    res.send("Ez a 12cd szerver!");
});

app.listen(3001, "127.0.0.1", () =>
{
    console.log("Server is running...");
});