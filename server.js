const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//init Middleware - you used to have to install Body_parser, but is now included in Express
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//look for an env variable called PORT
//In Heroku it will look for this
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
