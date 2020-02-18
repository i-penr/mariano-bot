/* eslint-disable no-unused-vars */

module.exports = {
  'name': 'pfp',
  'description':'Displays user\'s avatar',
  'aliases':['icon', 'avatar', 'profilepic'],

  execute(msg, args, client) {
    const user = msg.mentions.users.first();
    if (user) {
      msg.channel.send(`${user}'s profile pic \n ${user.avatarURL}`);
    }
    else {msg.channel.send(`${msg.author}'s profile pic \n ${msg.author.avatarURL}`);}
  },
};
