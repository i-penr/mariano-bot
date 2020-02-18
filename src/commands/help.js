/* eslint-disable no-unused-vars */
const Discord = require ('discord.js');
const fs = require ('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {

  'name': 'help',
  'description': 'Displays command list',
  'aliases': ['commands'],

  execute(msg, args, client) {

    let page = args[1];
    const MAX = 10;

    if(!page) {
      page = 1;
    }
    page--;

    const embed = new Discord.RichEmbed()

      .setColor('#0099ff')
      .setTitle('Command list')
      .setAuthor('Mariano', client.user.avatarURL)
      /* .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .setImage('https://i.imgur.com/wSTFkRM.png') */
      .setTimestamp()
      .setFooter(`Page ${page + 1}/${Math.ceil(commandFiles.length / MAX)}`);

    for (let i = page * 3; i < 3 * page + 3; i++) {  // Sustituir 3 por MAX cuando haya más comandos
      commandFiles.sort();
      const command = require(`./${commandFiles[i]}`);
      embed.addField(command.name, command.description, false);
    }

    msg.channel.send(embed);

  },

};
