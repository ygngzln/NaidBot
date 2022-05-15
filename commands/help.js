const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'All commands',
    run: async(client, message, args) => {
        if(!args[0]){
            const embed = new discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('Command List')
            .addFields(
                { name: "Some random dumb commands", value: "!help random"},
                { name: "General Commands", value: "!help general"},
                { name: "Wynncraft Commands", value: "!help wc"}
            )
    
            message.channel.send({embeds: [embed] })
        }else{
            arg = args[0]
            if(arg === 'random'){
                const embed = new discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('Random Command List')
                .addFields(
                    { name: "!threat", value: "Threat by the Furry Army."},
                    { name: "!get", value: "I have no idea."}
                )
        
                message.channel.send({embeds: [embed] })
            }else if(arg === "general"){
                const embed = new discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('General Command List')
                .addFields(
                    { name: "!pfp [taguser]", value: "Get pfp of user."}
                )
        
                message.channel.send({embeds: [embed] })
            }else if(arg === "wc"){
                const embed = new discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('Wynncraft Command List')
                .addFields(
                    { name: "!online", value: "Total amount of players online"},
                    { name: "!item [itemname] (optional) [type] (optional) [tier] (optional) [stat]", value: "Returns the wynncraft item searched. Use underscores for spaces."},
                    { name: "!? [playername]", value: "Locate player to see if they are online."},
                    { name: "!playerinf [playername]", value: "Pull up simple stats of a player."},
                    { name: "!looted? [playername]", value: "Amount of chests that the selected player has looted."},
                    { name: "!nolife? [playername]", value: "Check if a player is a nolife with their playtime."},
                    { name: "!terr? [territoryName]", value: "What guild is owning that territory?"},
                    { name: "!qlvl [levelNumber]", value: "All the quests at a level."},
                    { name: "!lvlq [questName]", value: "Level of a quest searched."},
                    { name: "!gl", value: "Guild leaderboard top five."}
                    
                )
        
                message.channel.send({embeds: [embed] })
            }
        }       
    }
}