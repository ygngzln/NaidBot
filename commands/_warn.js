module.exports = {
    name: '_warn',
    description: '!_warn [user] [warn]',
    run: async(client, message, args) => {
        var owner = message.member.roles.cache.some(role => role.name === "Owner")
        var admin = message.member.roles.cache.some(role => role.name === "Admin")

        if(!owner && !admin){
            return;
        }

        if(args.length < 2){
            message.channel.send("Invalid warn arguments. Need [user] and [warn]")
            return;
        }

        const member = message.mentions.users.first() || undefined;

        if(member && message.member.id === member.id){
            message.channel.send("What are warning yourself about !???")
            return;
        }

        if(member){
            const user = message.guild.members.cache.get(member.id)
            var owner2 = user.roles.cache.some(role => role.name === "Owner")
            var admin2 = user.roles.cache.some(role => role.name === "Admin")
            if(owner2 || admin2 || member.bot){
                if(!owner){
                    message.channel.send("You cannot warn this user.")
                    return;
                }
            }
            
            var warnStr = "";
            if(args[1] === "287"){
                warnStr = "Please stop spamming in non-spam text channels."
            }else if(args[1] === "288"){
                warnStr = "Please stop being rude to other users."
            }else if(args[1] === "289"){
                warnStr = "Do not doxx others or blackmail them."
            }else if(args[1] === "290"){
                warnStr = "Please stop pinging so many users/admin."
            }else{
                for(x=1;x<args.length;x++){
                    warnStr.concat(args[x])
                }
            }
            member.send(`**WARNING FROM \"THE SERVER\":** ${warnStr}`)
        }
        return;
    }
}