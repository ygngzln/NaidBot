const axios = require('axios')

module.exports = {
    name: 'looted?',
    description: '!looted? [player]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/v2/player/${args[0]}/stats`
        axios.get(url)
        .then(response => {
            const player = response.data.data[0]
            if(player){
                message.channel.send(`${player.global.chestsFound} chests looted.`)
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