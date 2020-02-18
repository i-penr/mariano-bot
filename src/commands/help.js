/* eslint-disable no-unused-vars */
const Discord = require ('discord.js');
const fs = require ('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {

  'name': 'help',
  'description': 'Displays command list',
  'aliases': ['commands'],

  execute(msg, args, client) {

    let page;
    const MAX = 10;
    const maxPage = Math.ceil(commandFiles.length / MAX);

    if (isNaN(args[1]) || !args[1]) {
      page = 1;
    } else { page = Number(args[1]); }

    if (page > maxPage) {
      page = maxPage;
      console.log(page);
    }
    page--;

    const embed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Command list')
      .setAuthor('Mariano', client.user.avatarURL)
      /* .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .setImage('https://i.imgur.com/wSTFkRM.png') */
      .setTimestamp()
      .setFooter(`Page ${page + 1}/${maxPage}`);

    for (let i = page * commandFiles.length; i < commandFiles.length * page + commandFiles.length; i++) { // Sustituir commandFiles.length por MAX cuando haya más comandos
      commandFiles.sort();
      const command = require(`./${commandFiles[i]}`);
      embed.addField(command.name, command.description, false);
    }

    msg.channel.send(embed);

  },

};
