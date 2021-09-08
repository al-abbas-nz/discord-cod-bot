require('dotenv').config({ path: '../.env' });

const API = require('call-of-duty-api')({ platform: 'battle' });

async function codLogin() {
  try {
    await API.loginWithSSO(process.env.COD_ACT_SSO);
  } catch (Error) {
    console.error(Error);
  }
}

async function getLifetimeStats(username) {
  try {
    let data = await API.MWmp(username, 'battle');
    return data;
  } catch (Error) {
    console.error(Error);
  }
}

async function getRecentMatchDetails() {
  try {
    const data = await API.MWcombatmp('votelucky#1331', 'battle');
    console.log(data.matches[0]);
    const recentMatch = data.matches[0];
    const { player } = recentMatch;
    const statement = `${player.username} got a ${recentMatch.result} on ${
      recentMatch.map
    } with a ${parseFloat(recentMatch.playerStats.kdRatio).toFixed(2)} KD (${
      recentMatch.playerStats.kills
    } frags to ${
      recentMatch.playerStats.deaths
    } deaths). They absolutely smacc'd ${player.mostKilled}. `;
    console.log(statement);
    return statement.toString();
  } catch (Error) {
    console.error(Error);
  }
}

// async function run() {
//   await codLogin();
//   await getRecentMatchDetails();
// }

// run();

module.exports = {
  getRecentMatchDetails,
  getLifetimeStats,
  codLogin,
};
