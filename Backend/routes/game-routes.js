const express = require ("express");
const Game = require ("../model/gameInfo");
const GamesController = require("../contollers/Games-Controller")
const router = express.Router();

router.get("/", GamesController.getAllGames);
router.post("/", GamesController.addGame);
router.get("/:id", GamesController.getById);
router.put("/:id", GamesController.updateGame);
router.delete("/:id", GamesController.deleteGame);


module.exports = router;
