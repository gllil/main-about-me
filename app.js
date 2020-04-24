const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/contact.html"))
});

app.post("/send", (req, res) => {
    console.log(req.body)
})
app.listen(3000, () => console.log("Server started..."));

