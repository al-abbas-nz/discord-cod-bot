require('dotenv').config({ path: '../.env' });

const Discord = require('discord.js');

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => console.log('Bot is online!'));
