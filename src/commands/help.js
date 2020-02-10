/* eslint-disable no-unused-vars */
const Discord = require ('discord.js');
const fs = require ('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {

  'name': 'help',
  'description': 'Displays command list',

  execute(msg, args) {


    const exampleEmbed = new Discord.RichEmbed()

      .setColor('#0099ff')
      .setTitle('Command list')
      // .setURL('https://discord.js.org/')
      .setAuthor('Mariano', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      // .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      /* .addField('Regular field title', 'Some value here')
       .addBlankField()
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      */
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Page 1', 'https://i.imgur.com/wSTFkRM.png');


    for (const file of commandFiles) {
      const command = require(`./${file}`);
      exampleEmbed.addField(command.name, command.description, false); // false cause list
    }

    msg.channel.send(exampleEmbed);

  },

};
