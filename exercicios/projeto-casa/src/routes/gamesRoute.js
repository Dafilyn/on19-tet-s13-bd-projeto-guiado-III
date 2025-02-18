const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();

router.get("/all", controller.findAllGames);

router.get("/:id", controller.findGameById);

router.post("/add", controller.addNewGame);

router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

router.get("/:name", controller.findGameByName);

router.get("/:genre", controller.findByGenre);

module.exports = router