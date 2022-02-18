require('dotenv').config();

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const TOKEN = process.env['TOKEN'];
const CLIENT_ID = process.env['CLIENT_ID'];
const GUILD_ID = process.env['SERVER_ID'];

const commands = [
  new SlashCommandBuilder().setName('currentgame').setDescription('Show the current game.'),
  new SlashCommandBuilder().setName('leaderboard').setDescription('Show the leaderboard.'),
  new SlashCommandBuilder().setName('balance').setDescription('Show user balance.')
    .addUserOption(option => option.setName('user').setDescription('The user.')),
].map(command => command.toJSON()); 

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);