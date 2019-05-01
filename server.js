const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API Running"));

//look for an env variable called PORT
//In Heroku it will look for this
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
