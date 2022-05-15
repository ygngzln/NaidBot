const discord = require("discord.js")

module.exports = {
    name: '_del',
    description: '!_del [number]',
    run: async(client, message, args) => {
        var owner = message.member.roles.cache.some(role => role.name === "Owner")
        var admin = message.member.roles.cache.some(role => role.name === "Admin")

        if(!owner && !admin){
            return;
        }
        try{
            args[0] = parseInt(args[0])
        }catch(e){
            message.channel.send("Invalid delete integer argument.")
            return;
        }

        if(Number.isInteger(args[0])){
            if(args[0] > 50){
                message.channel.send("I'm not going to delete that much...")
                return;
            }else if(args[0] <= 0){
                message.channel.send("You're actually cringe!!! :D")
                return;
            }
        }else{
            message.channel.send("Invalid delete integer argument.")
            return;
        }

        message.channel.bulkDelete(args[0], true)

        if(args[0] == 1){
            message.channel.send(`${args[0]} message deleted.`)
            return;
        }

        message.channel.send(`${args[0]} messages deleted.`)
    }
}