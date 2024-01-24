const express = require("express");
const note = require("./api/notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const cors = require("cors");

const port = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello this side");
});

app.get("/api/notes", (req, res) => {
  res.send(note);
});

app.get("/api/notes/:id", (req, res) => {
  const notes = note.find((n) => n.id === parseInt(req.params.id));
  res.send(notes);
  console.log(notes);
});

app.listen(port, () => {
  console.log("On port", port);
});
