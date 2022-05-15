const axios = require('axios')
const discord = require('discord.js')

module.exports = {
    name: 'gl',
    description: '!gl',
    run: async(client, message, args) => {
        url = `https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe=alltime`
        axios.get(url)
        .then(response => {
            const embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Guild leaderboard`)
            .addFields(
                { name: "1st Place", value: `${response.data.data[0].name} [${response.data.data[0].prefix}]`},
                { name: "2nd Place", value: `${response.data.data[1].name} [${response.data.data[1].prefix}]`},
                { name: "3rd Place", value: `${response.data.data[2].name} [${response.data.data[2].prefix}]`},
                { name: "4th Place", value: `${response.data.data[3].name} [${response.data.data[3].prefix}]`},
                { name: "5th Place", value: `${response.data.data[4].name} [${response.data.data[4].prefix}]`},
            )
            message.channel.send({embeds: [embed] })
        })
        .catch(error => {
            console.log(error)
            message.channel.send('Error when searching the guild leaderboard.')
        });
    }
}