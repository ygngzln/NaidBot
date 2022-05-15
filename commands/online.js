const axios = require('axios')

module.exports = {
    name: 'online',
    description: '!online',
    run: async(client, message) => {
        url = `https://api.wynncraft.com/public_api.php?action=onlinePlayersSum`
        axios.get(url)
        .then(response => {
            message.channel.send(`There are ${response.data["players_online"]} people playing Wynncraft.`)
        })
        .catch(error => {
            message.channel.send('There was an error searching for this data.')
        });
    }
}