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

codLogin();

module.exports = {
  getLifetimeStats,
  codLogin,
};
