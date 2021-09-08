require('dotenv').config({ path: '../.env' });
const cod = require('./cod');
const Discord = require('discord.js');

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => console.log('Bot is online!'));

client.on('messageCreate', async (message) => {
  if (message.author.username == 'luckyboy') {
    await cod.codLogin();
    let response = await cod.getRecentMatchDetails();
    message.reply(response);
    // message.reply('you broke it');
  } else {
    return;
  }
});
