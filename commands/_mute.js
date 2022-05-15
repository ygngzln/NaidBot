module.exports = {
    name: '_mute',
    description: '!_mute [user]',
    run: async(client, message, args) => {
        var owner = message.member.roles.cache.some(role => role.name === "Owner")
        var admin = message.member.roles.cache.some(role => role.name === "Admin")

        if(!owner && !admin){
            return;
        }

        if(args.length < 1){
            message.channel.send("Invalid mute arguments. Need [user].")
            return;
        }

        const member = message.mentions.users.first() || undefined;

        if(member && message.member.id === member.id){
            message.channel.send("Don't mute yourself :(")
            return;
        }

        if(member){
            const user = message.guild.members.cache.get(member.id)
            var owner2 = user.roles.cache.some(role => role.name === "Owner")
            var admin2 = user.roles.cache.some(role => role.name === "Admin")
            if(owner2 || admin2 || member.bot){
                if(!owner){
                    message.channel.send("You cannot mute this user.")
                    return;
                }
            }
            for(var x=0;x<user._roles.length;x++){
                user.roles.remove(user._roles[x])
            }
            var newrole = message.guild.roles.cache.find(role => role.name === "Muted")
            user.roles.add(newrole)
            message.channel.send(`${user.user.username} was muted.`)
        }
        return;
    }
}