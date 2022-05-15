const axios = require('axios')

module.exports = {
    name: '?',
    description: '!? [player]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/public_api.php?action=onlinePlayers`
        axios.get(url)
        .then(response => {
            message.channel.send('Searching...')
            .then(msg => {
                setTimeout(() => msg.delete(), 650)
            })
            .catch(error => {
                message.channel.send("There was an error")
            })
            var found = false;
            for(var world in response.data){
                if(world != "request"){
                    for(var player in response.data[world]){
                        if(response.data[world][player] === args[0]){
                            message.channel.send(`🟢 Found player ${response.data[world][player]} online in ${world}`)
                            found = true;
                        }
                    }
                }
            }
            if(!found){ message.channel.send('🔴 That player is not online.')}
        })
        .catch(error => {
            console.log(error)
            message.channel.send('There was an error searching for this player.')
        });
    }
}