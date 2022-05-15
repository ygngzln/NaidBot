const axios = require('axios')
const discord = require('discord.js')

module.exports = {
    name: 'playerinf',
    description: '!playerinf [player]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/v2/player/${args[0]}/stats`
        axios.get(url)
        .then(response => {
            const player = response.data.data[0]
            if(player){
                classStr = "";
                for(let acc in player.classes){
                    let name = player.classes[acc].name;
                    if(!isNaN(name.at(-1))){
                        name = name.slice(0, name.length-1)
                    }
                    classStr += `Level ${player.classes[acc].professions.combat.level} ${name}\n`
                }
                const embed = new discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${player.username}`)
                .setDescription(`Rank: ${player.rank === "Player" ? "No rank" : player.rank}`)
                .addFields(
                    { name: "Online", value: `${player.meta.location.online ? '🟢' : '🔴' }`},
                    { name: "Guild", value: `${player.guild.name ? `${player.guild.name}, ${player.guild.rank}` : "No guild"}`},
                    { name: "Total Level", value: `${player.global.totalLevel.combat}`},
                    { name: "Classes", value: `${classStr}`},
                    { name: "Joined", value: `${player.meta.firstJoin.slice(0,10)}`},
                    { name: "Last Seen", value: `${player.meta.lastJoin.slice(0,10)}`}
                )
                message.channel.send({embeds: [embed] })
            }else{
                message.channel.send(`Player not found.`)
            }
        })
        .catch(error => {
            console.log(error)
            message.channel.send('Player not found. Maybe the player has not logged on to Wynncraft?')
        });
    }
}