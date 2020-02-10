module.exports = {
  'name': 'ping',
  'description': 'Shows server\'s ping',
  execute(msg, args, client) {
    msg.channel.send(`Pong\nLatency: ${client.ping}`);
  },
};
