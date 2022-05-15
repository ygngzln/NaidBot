module.exports = {
    name: 'threat',
    description: 'Get threatened by the Furry force... all a joke...',
    run: async(client, message, args, author) => {
        var rand = Math.round(Math.random()*4)
        let ln;
        switch(rand){
            case 0:
                ln = "Cheeseburger III"
                break;
            case 1:
                ln = "Burgerking Man LVI"
                break;
            case 2:
                ln = "FortniteGamerGod69"
                break;
            case 3:
                ln = "LbozoLbozo"
                break;
            case 4:
                ln = "urmom"
        }
        message.reply(`Your full name is ${author.username} ${ln}. Your ip address is 69.420.690.420, you are located at 69 longitude and 420 latitude, your computer is a ROBUX GAMING PC 69420 MODEL D(eez nuts). Prepare to get FBI-opened-up by the Furry Furcon Air Force V4R34L2 Advanced`)
        message.react('🇱')
    }
}