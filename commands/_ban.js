module.exports = {
    name: '_ban',
    description: '!_ban [user] [reason]',
    run: async(client, message, args) => {
        var owner = message.member.roles.cache.some(role => role.name === "Owner")
        var admin = message.member.roles.cache.some(role => role.name === "Admin")

        if(!owner && !admin){
            return;
        }

        if(args.length < 1){
            message.channel.send("Invalid ban arguments. Need [user] and (optional) [reason]")
            return;
        }

        const member = message.mentions.users.first() || undefined;

        if(member && message.member.id === member.id){
            message.channel.send("Don't ban yourself :(")
            return;
        }

        if(member){
            const user = message.guild.members.cache.get(member.id)
            var owner2 = user.roles.cache.some(role => role.name === "Owner")
            var admin2 = user.roles.cache.some(role => role.name === "Admin")
            if(owner2 || admin2 || member.bot){
                if(!owner){
                    message.channel.send("You cannot ban this user.")
                    return;
                }
            }

            user.ban()
            if(!args[1]){ args.push("none") }
            message.channel.send(`${user.user.username} was banned for ${args[1]}.`)
        }
        return;
    }
}