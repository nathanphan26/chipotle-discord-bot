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

const prefix = ">";
// This code will run once the bot receives any message.
client.on('messageCreate', message => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

    if (message.member.roles.cache.some(role => role.name === 'Chipotle Admin')) {
       // Get Chipotle Code
        const code = message.content.substring(1)
        // Format Reply Message
        const reply = `<sms://888222/;?&body=${code}>`
        message.reply(reply)
    } else {
        message.reply('Must have Chipotle Admin role')
    }
})

client.login(process.env.DISCORD_TOKEN);
