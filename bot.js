require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// This code will run once the bot receives any message.
client.on('messageCreate', message => {
    if (message.content === 'ping') message.reply('pong')
})

client.login(process.env.DISCORD_TOKEN);
