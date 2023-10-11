const express = require("express");
const router = express.Router();
const Player = require("../models/player");

// Home page - Option to go to players
router.get("/", (req, res) => {
  res.render("welcome");
});

// Players page - Get information about the first player
router.get("/players", async (req, res) => {
  try {
    const firstPlayer = await Player.findOne({});
    if (!firstPlayer) {
      return res.send("No player found");
    }
    res.render("players", { player: firstPlayer, playerId: firstPlayer._id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Next button - Show next player details
router.get("/next", async (req, res) => {
  try {
    const currentPlayerId = req.query.playerId;

    const firstPlayer = await Player.findOne({});
    const nextPlayer = await Player.findOne({ _id: { $gt: currentPlayerId } });

    if (!nextPlayer) {
      return res.render("error");
    }

    res.render("players", { player: nextPlayer });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
