require('dotenv').config({ path: '../.env' });
const cod = require('./cod');
const Discord = require('discord.js');

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => console.log('Bot is online!'));

client.on('messageCreate', async (message) => {
  if (message.author.username == 'sup_abs') {
    cod.codLogin();
    let response = await cod.getLifetimeStats(message.content);
    console.log(JSON.stringify(response.level, 2));
    message.reply(
      `bruh your KD is ${parseFloat(
        JSON.stringify(response.lifetime.all.properties.kdRatio)
      ).toFixed(2)}`
    );
    // message.reply('you broke it');
  }
});
