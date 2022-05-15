const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'All commands',
    run: async(client, message, args) => {
        const embed = new discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Command List')
        .addFields(
            { name: "Help", value: "!help"},
            { name: "Some random dumb commands", value: "!help random"},
            { name: "General Commands", value: "!help general"},
            { name: "Other", value: "!help other"}
        )

        message.channel.send({embeds: [embed] })
    }
}