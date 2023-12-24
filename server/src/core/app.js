const dotenv = require("dotenv");
const express = require("express");
const routes = require("../routes/index");

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use("/api", routes);

app.use("*", (req, res, next) => {
	res.send("uhadi");
});

app.use((error, req, res, next));

module.exports = { app, PORT };
