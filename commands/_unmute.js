module.exports = {
    name: '_unmute',
    description: '!_unmute [user]',
    run: async(client, message, args) => {
        var owner = message.member.roles.cache.some(role => role.name === "Owner")
        var admin = message.member.roles.cache.some(role => role.name === "Admin")

        if(!owner && !admin){
            return;
        }

        if(args.length < 1){
            message.channel.send("Invalid unmute arguments. Need [user].")
            return;
        }

        const member = message.mentions.users.first() || undefined;

        if(member){
            const user = message.guild.members.cache.get(member.id)
            var owner2 = user.roles.cache.some(role => role.name === "Owner")
            var admin2 = user.roles.cache.some(role => role.name === "Admin")
            var muted = user.roles.cache.some(role => role.name === "Muted")
            if(owner2 || admin2 || member.bot || !muted){
                if(!owner){
                    message.channel.send("You cannot unmute this user.")
                    return;
                }
            }

            var newrole = message.guild.roles.cache.find(role => role.name === "Muted")
            user.roles.remove(newrole)
            newrole = message.guild.roles.cache.find(role => role.name === "Member")
            user.roles.add(newrole)
            message.channel.send(`${user.user.username} was unmuted.`)
        }
        return;
    }
}