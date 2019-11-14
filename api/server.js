const express = require("express");

const Languages = require("../languages/language-model");

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

module.exports = server;
