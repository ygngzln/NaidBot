const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"], partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const dotenv = require('dotenv').config()
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const cmd = require(`./commands/${file}`)
    client.commands.set(cmd.name, cmd)
}

client.on('ready', async () => {
    const guild = await client.guilds.fetch(process.env.GUILD);
    const channel = await guild.channels.cache.get("958367119425282128")
    const message = await channel.messages.fetch(958367119425282128-958727682877693952);
    const messageid = await message.get('958727682877693952').id

    client.on("messageReactionAdd", (reaction, user) => {
        if(reaction.message.id === messageid && !user.bot && !reaction.partial){
            const newUser = reaction.message.guild.members.cache.get(user.id)
            switch (reaction.emoji.name){
                case '🔷':
                    var newrole = guild.roles.cache.find(role => role.name === "Blue")
                    newUser.roles.add(newrole)
                    break;
                case '🔴':
                    var newrole = guild.roles.cache.find(role => role.name === "Red")
                    newUser.roles.add(newrole)
                    break;
                case '💛':
                    var newrole = guild.roles.cache.find(role => role.name === "Yellow")
                    newUser.roles.add(newrole)
                    break;
                case '🟪':
                    var newrole = guild.roles.cache.find(role => role.name === "Purple")
                    newUser.roles.add(newrole)
                    break;
                case '🔸':
                    var newrole = guild.roles.cache.find(role => role.name === "Orange")
                    newUser.roles.add(newrole)
                    break;
                case '🍏':
                    var newrole = guild.roles.cache.find(role => role.name === "Green")
                    newUser.roles.add(newrole)
                    break;
            }
        }
    })

    client.on("messageReactionRemove", (reaction, user) => {
        if(reaction.message.id === messageid && !user.bot && !reaction.partial){
            const newUser = reaction.message.guild.members.cache.get(user.id)
            switch (reaction.emoji.name){
                case '🔷':
                    var newrole = guild.roles.cache.find(role => role.name === "Blue")
                    newUser.roles.remove(newrole)
                    break;
                case '🔴':
                    var newrole = guild.roles.cache.find(role => role.name === "Red")
                    newUser.roles.remove(newrole)
                    break;
                case '💛':
                    var newrole = guild.roles.cache.find(role => role.name === "Yellow")
                    newUser.roles.remove(newrole)
                    break;
                case '🟪':
                    var newrole = guild.roles.cache.find(role => role.name === "Purple")
                    newUser.roles.remove(newrole)
                    break;
                case '🔸':
                    var newrole = guild.roles.cache.find(role => role.name === "Orange")
                    newUser.roles.remove(newrole)
                    break;
                case '🍏':
                    var newrole = guild.roles.cache.find(role => role.name === "Green")
                    newUser.roles.remove(newrole)
                    break;
            }
        }
    })
    console.log(`${client.user.tag} is ready`)
})

client.on('guildMemberAdd', member => {
    if(member.user.bot){
        var wRole = member.guild.roles.cache.find(role => role.name === "Bot");
        member.roles.add(wRole)
    }else{
        var wRole = member.guild.roles.cache.find(role => role.name === "Member");
        member.roles.add(wRole)
    }
})

client.on('messageCreate', async (msg) => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/g); //Split regex for spaces
    const cmd = args.shift().toLowerCase()
    const author = msg.author;
    const mem = msg.member;

    switch(cmd){
        case 'threat':
            await client.commands.get('threat').run(client, msg, args, author)
            break;
        case 'fursuits':
            await client.commands.get('fursuits').run(client, msg, args)
            break;
        case 'pfp':
            await client.commands.get("pfp").run(msg, args)
            break;
        case 'uwu':
            await client.commands.get("uwu").run(msg, args)
            break;
        case 'get':
            await client.commands.get("get").run(msg, args)
            break;
        case 'reaction-role':
            await client.commands.get("reaction-role").run(client, msg, Discord, args)
            break;
        case 'help':
            await client.commands.get("help").run(client, msg, args)
            break;
        case '_del':
            await client.commands.get("_del").run(client, msg, args)
            break;
        case '_kick':
            await client.commands.get("_kick").run(client, msg, args)
            break;
    }
})

client.login(token);