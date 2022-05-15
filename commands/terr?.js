const axios = require('axios')
const discord = require('discord.js')

module.exports = {
    name: 'terr?',
    description: '!terr? [territory]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/public_api.php?action=territoryList`
        axios.get(url)
        .then(response => {
            args[0] = args[0].split("_").map(x => x.at(0).toUpperCase()+x.slice(1,x.length)).join(" ").replaceAll("_", " ");
            if(response.data.territories[args[0]]){
                const terr = response.data.territories[args[0]]
                const embed = new discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${terr.territory}`)
                .setDescription(``)
                .addFields(
                    { name: "Owned By:", value: `${terr.guild}`}
                )
                message.channel.send({embeds: [embed] })
            }else{
                message.channel.send("Could not find that territory.")
            }
        })
        .catch(error => {
            console.log(error)
            message.channel.send('There was an error searching for this territory.')
        });
    }
}