/* eslint-disable brace-style */
const Discord = require('discord.js');
const config = require('./config');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


client.on('ready', () => {
  console.log('Connected');

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }
});

client.on('message', msg => {

  const args = msg.content.slice(config.prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.log(error);
  }
});

client.login(config.token);
