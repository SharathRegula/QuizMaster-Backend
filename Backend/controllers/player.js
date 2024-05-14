const Match = require("../db/models/match");
const Team = require("../db/models/team");

async function handlePlayerdata(req,res){
    
        const Matchdata = await Match.find({});
        const Teamdata = await Team.find({});
        const playersdata = playerinfo(Teamdata, Matchdata);
        console.log("Route is running");
        return res.json(playersdata);
      
}
function PlayerDataCal(player, Matchdata) {
    var playerdata = {
      Playername: "NA",
      Role: "NA",
      Totalruns: 0,
      Boundaries: 0,
      Sixes: 0,
      Overbowled: 0,
      Wickets: 0,
      MaidenOvers: 0,
      Catches: 0,
      Stumping: 0,
      Runouts: 0,
    };
    playerdata.Playername = player;
    for (var i = 0; i < Matchdata.length; i++) {
      if (Matchdata[i].batter == player) {
        playerdata.Totalruns =
          playerdata.Totalruns + parseInt(Matchdata[i].batsman_run);
        if (Matchdata[i].batsman_run == 4) {
          playerdata.Boundaries = playerdata.Boundaries + 1;
        }
        if (Matchdata[i].batsman_run == 6) {
          playerdata.Sixes = playerdata.Sixes + 1;
        }
      }
      if (Matchdata[i].bowler == player) {
        if (
          (Matchdata[i].isWicketDelivery = 1 && Matchdata[i].kind != "runout")
        ) {
          playerdata.Wickets = playerdata.Wickets + 1;
        }
        //MaidenOver
        if (Matchdata[i].ballnumber == 1 && Matchdata[i + 7].ballnumber == 1) {
          var OverRuns = 0;
          for (var j = 0; j < 6; j++) {
            OverRuns = OverRuns + Matchdata[i + j].total_run;
          }
          if (OverRuns == 0) playerdata.MaidenOvers = playerdata.MaidenOvers + 1;
        }
      }
      if (Matchdata[i].fielders_involved == player) {
        if (Matchdata[i].kind == "caught")
          playerdata.Catches = playerdata.Catches + 1;
        if (Matchdata[i].kind == "stumping")
          playerdata.Stumping = playerdata.Stumping + 1;
        if (Matchdata[i].kind == "runout")
          playerdata.Runouts = playerdata.Runouts + 1;
      }
    }
    return playerdata;
  }
  function playerinfo(Teamdata, Matchdata) {
    const playersdata = [];
    playersdata.push(PlayerDataCal(Teamdata[0].player1, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player2, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player3, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player4, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player5, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player6, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player7, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player8, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player9, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player10, Matchdata));
    playersdata.push(PlayerDataCal(Teamdata[0].player11, Matchdata));
    return playersdata;
  }

module.exports={
    handlePlayerdata
}