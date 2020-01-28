const Discord = require('discord.js');
const config = require('./config');
const fs = require('fs');

const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', msg => {

  if (msg.author.bot) return;

  if (!msg.content.toLowerCase().startsWith(config.prefix)) return;

  if (msg.content === config.prefix + 'ping') {
    msg.channel.send('cabrón');
  }
});

client.login(config.token);
