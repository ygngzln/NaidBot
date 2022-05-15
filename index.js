const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"], partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const dotenv = require('dotenv').config()
const prefix = process.env.PREFIX;
const token = process.env.NODE_ENV;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const cmd = require(`./commands/${file}`)
    client.commands.set(cmd.name, cmd)
}

let qdata = {
    1: "Enzan's Brother, King's Recruit",
    2: "Poisoning the Pest",
    3: "Cook Assistant",
    4: "Infested Plants",
    5: "The Sewers of Ragni",
    6: "Tunnel Trouble",
    7: "No quests found",
    8: "Underwater",
    9: "Mushroom Man",
    10: "Elemental Exercise",
    11: "No quests found",
    12: "Potion Making",
    13: "Stable story",
    14: "Arachnid's Ascent",
    15: "Creeper Infiltration",
    16: "Maltic's Well",
    17: "No quests found",
    18: "Lava Springs",
    19: "No quests found",
    20: "Grave Digger",
    21: "Studying the Corrupt, Macabre Masquerade Hallowynn 2014",
    22: "No quests found",
    23: "Cluck Cluck, Pit of the Dead",
    24: "The Dark Descent, Dwelling Walls",
    25: "Tempo Town Trouble, Recover the Past",
    26: "The Corrupted Village, Lost Tower",
    27: "Deja Vu",
    28: "Misadventure on the Sea",
    29: "No quests found",
    30: "Craftmas Chaos, The Mercenary",
    31: "Green Gloop",
    32: "A Sandy Scandal",
    33: "Kingdom of Sand, Meaningful Holiday",
    34: "No quests found",
    35: "Tribal Aggression, WynnExcavation Site A",
    36: "Wrath of the Mummy",
    37: "No quests found",
    38: "Canyon Condor",
    39: "Pirate's Trove",
    40: "Tower of Ascension, Ice Nations",
    41: "Heart of Llevigar",
    42: "Clearing the Camps, Star Thief",
    43: "Fate of the Fallen, Underice",
    44: "Blazing Retribution",
    45: "Bob's Lost Soul",
    46: "WynnExcavation Site B",
    47: "No quests found",
    48: "Frost bite",
    49: "Rise of the Quartron, An Iron Heart Part I, The House of Twain",
    50: "A Grave Mistake",
    51: "The Maiden Tower",
    52: "Corrupted Betrayal, Crop Failure, Jungle Fever",
    53: "Master Piece, Death Whistle",
    54: "The Shadow of the Beast, Realm of Light I - The Worm Holes",
    55: "Zhight Island, WynnExcavation Site C",
    56: "No quests found",
    57: "The Passage",
    58: "An Iron Heart Part II",
    59: "The Order of the Grook",
    60: "Beneath the Depths",
    61: "Reclaiming the House, Redbeard's Booty",
    62: "Realm of Light II - Taproot, Lost in the Jungle",
    63: "Out of My Mind",
    64: "Realm of Light III - A Headless History",
    65: "Lost Royalty",
    66: "Lost Soles",
    67: "Memory Paranoia, From the Mountains",
    68: "Temple of the Legends",
    69: "Lazarus Pit, Grand Youth",
    70: "Shattered Minds, Haven Antiquity, WynnExcavation Site D",
    71: "Realm of Light IV - Finding the Light",
    72: "Lexdale Witch Trials, Forbidden Prison",
    73: "Troubled Tribesmen, Murder Mystery",
    74: "Reincarnation, Acquiring Credentials, Aldorei's Secret Part I",
    75: "Flight in Distress, The Ultimate Weapon",
    76: "The Bigger Picture, Aldorei's Secret Part II",
    77: "The Hunger of the Gerts Part I",
    78: "The Hunger of the Gerts Part II",
    79: "Fallen Delivery, Realm of Light V - The Realm of Light",
    80: "???, The Qira Hive, From the Bottom, General's Orders",
    81: "The Thanos Vaults",
    82: "The Belly of the Beast",
    83: "A Marauder's Dues, the Envoy Part I",
    84: "The Canyon Guides",
    85: "The Lost",
    86: "Cowfusion, Desperate Metal",
    87: "Mixed Feelings, Beyond the Grave",
    88: "The Hidden City",
    89: "Enter the Dojo, The Envoy Part II",
    90: "Fantastic Voyage",
    91: "The Feathers Fly Part I, Dwarves and Doguns Part I",
    92: "Dwarves and Doguns Part II",
    93: "The Feathers Fly Part II, Dwarves and Doguns Part III",
    94: "Dwarves and Doguns Part IV",
    95: "One Thousand Meters Under",
    96: "Recipe For Disaster",
    97: "The Fortuneteller",
    98: "Royal Trials",
    99: "The Hero of Gavel",
    100: "The Olmic Rune, A Journey Beyond",
    101: "A Journey Further",
    102: "Point of No Return",
    103: "A Hunter's Calling",
    104: "No quests found",
    105: "No quests found",
    106: "No quests found",
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
        case 'get':
            await client.commands.get("get").run(msg, args)
            break;
        case 'reaction-role':
            await client.commands.get("reaction-role").run(client, msg, Discord, args)
            break;
        case 'help':
            await client.commands.get("help").run(client, msg, args)
            break;
        case 'item':
            await client.commands.get("item").run(client, msg, args)
            break;
        case '?':
            await client.commands.get("?").run(client, msg, args)
            break;
        case 'playerinf':
            await client.commands.get("playerinf").run(client, msg, args)
            break;
        case 'looted?':
            await client.commands.get("looted?").run(client, msg, args)
            break;
        case 'terr?':
            await client.commands.get("terr?").run(client, msg, args)
            break;
        case 'nolife?':
            await client.commands.get("nolife?").run(client, msg, args)
            break;
        case 'qlvl':
            await client.commands.get("qlvl").run(client, msg, args, qdata)
            break;
        case 'lvlq':
            await client.commands.get("lvlq").run(client, msg, args, qdata)
            break;
        case 'gl':
            await client.commands.get("gl").run(client, msg, args)
            break;
        case 'online':
            await client.commands.get("online").run(client, msg)
            break;
        case '_del':
            await client.commands.get("_del").run(client, msg, args)
            break;
        case '_kick':
            await client.commands.get("_kick").run(client, msg, args)
            break;
        case '_ban':
            await client.commands.get("_ban").run(client, msg, args)
            break;
        case '_warn':
            await client.commands.get("_warn").run(client, msg, args)
            break;
        case '_mute':
            await client.commands.get("_mute").run(client, msg, args)
            break;
        case '_unmute':
            await client.commands.get("_unmute").run(client, msg, args)
            break;
    }
})

client.login(token);