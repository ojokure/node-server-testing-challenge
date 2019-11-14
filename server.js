const express = require("express");

const Languages = require("./languages/language-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  Languages.find()
    .then(languages => {
      res.status(200).json(languages);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

server.post("/api/languages", async (req, res) => {
  try {
    const newEntry = await db
      .select("*")
      .from("cars")
      .insert(req.body)
      .where({ car_id: req.params.id });

    res.json("New entry got created with an id of " + newEntry[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

server.put("/api/languages/:id", (req, res) => {
  db.select("*")
    .then(updated => {
      res.status(200).json(updated + "car(s) information edited succesfully");
    })
    .catch(error => {
      res.status(500).json({
        messsage: error.message
      });
    });
});

server.delete("/api/languages/:id", (req, res) => {
  db.select("*")
    .then(deletedCount => {
      res.json(deletedCount + " entry got deleted!!");
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});
module.exports = server;
