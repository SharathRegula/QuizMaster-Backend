const Team = require("../db/models/team");

async function handleCreateteam(req, res) {
    const body = req.body;
    const Teaminfo = await Team.create({
      teamName: "Raj1177Kings",
      user: "sharath@gmail.com",
      player1: "RD Gaikwad",
      player2: "DP Conway",
      player3: "MM Ali",
      player4: "AT Rayudu",
      player5: "MS Dhoni",
      player6: "MJ Santner",
      player7: "SV Samson",
      player8: "D Padikkal",
      player9: "R Ashwin",
      player10: "YS Chahal",
      player11: "Karun Nair",
      wk: "MS Dhoni",
      captian: "MS Dhoni",
      vicecaptian: "R Ashwin",
    });
    return res.status(200).json(Teaminfo);
  }

  module.exports={
    handleCreateteam
}