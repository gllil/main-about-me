const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

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
    const nameInput = req.body.name;
    const emailInput = req.body.email;
    const msgInput = req.body.message;


    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    async function main() {
        let transporter = nodemailer.createTransport({
            host: "smtp.outlook.com",
            port: 587,
            secure: false, 
            auth: {
                user: "garyjllil@outlook.com", // generated ethereal user
                pass: "Buveyboo12!" // generated ethereal password
            }
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Nodemailer Contact" <garyjllil@outlook.com>', // sender address
            to: "garyjllil@gmail.com", // list of receivers
            subject: "Contacting you from your website", // Subject line
            text: null,
            html: output// html body
        });
    
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    }

main().catch(console.error);

res.redirect("/contact")
  
})
app.listen(3000, () => console.log("Server started..."));

