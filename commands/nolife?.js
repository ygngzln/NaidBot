const axios = require('axios')
const discord = require('discord.js')

module.exports = {
    name: 'nolife?',
    description: '!nolife? [playername]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/v2/player/${args[0]}/stats`
        axios.get(url)
        .then(response => {
            const player = response.data.data[0];
            if(player){
                player.meta.playtime = Math.floor(player.meta.playtime/12) //not 60 because Wynncraft timer is off, fires every 5 minutes
                if(player.meta.playtime >= 1000){
                    message.channel.send(`❌❌❌ ${player.username} is a nolife with ${player.meta.playtime} hours played.`)
                }else{
                    message.channel.send(`✅✅✅ ${player.username} is a NOT a nolife with ${player.meta.playtime} hours played.`)
                }
            }else{
                message.channel.send("Could not find that player.")
            }
        })
        .catch(error => {
            console.log(error)
            message.channel.send('There was an error searching for this player.')
        });
    }
}