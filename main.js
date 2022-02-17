const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

const TOKEN = process.env['TOKEN'];
const CLIENT_ID = process.env['CLIENT_ID'];
const GUILD_ID = process.env['DEV_GUILD_ID'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  console.log(interaction.options);
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'currentgame') {
    await interaction.reply('current game!');
    // TODO: show current game
    
  }

  if (interaction.commandName === 'balance') {
    await interaction.reply({ content: 'balance!', ephemeral: true });
    // TODO: show current game
    // if(interaction.user)
  }
  
});


// client.on('messageCreate', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong')
//       .then(() => console.log(`Replied to message "${message.content}"`))
//       .catch(console.error);
//   }
// });

client.login(TOKEN);