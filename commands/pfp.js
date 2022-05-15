const discord = require('discord.js')

module.exports = {
    name: 'pfp',
    description: 'Look at pfp',
    run: async(message, args) => {
        const member = message.mentions.users.first() || message.member;
        if(member){
            const targetMember = message.guild.members.cache.get(member.id);
            const embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${targetMember.user.username}'s Avatar`)
            .setImage(targetMember.user.avatarURL())
            .setTimestamp()

            message.channel.send({embeds: [embed] })
        }else{
            message.reply("You cannot look at this user's pfp, it is too godly.")
        }
        return;
    }
}