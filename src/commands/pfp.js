/* eslint-disable no-unused-vars */

module.exports = {
  'name': 'pfp',
  'description':'Desplays user\'s avatar',
  'aliases':['icon'],

  execute(msg, args) {
    msg.channel.send(`${msg.author}'s profile pic`, msg.author.avatarURL);
    // msg.channel.send(msg.author.avatarURL);
  },
};
