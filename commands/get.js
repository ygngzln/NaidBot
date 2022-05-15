module.exports = {
    name: 'get',
    description: 'Get random stuff',
    run: async(message, args) => {
        var name = Math.round(Math.random()*8)
        var units = Math.round(Math.random()*999)+1
        var item = Math.round(Math.random() * 12)
        var action = Math.round(Math.random()*7)
        var object = Math.round(Math.random()*6)
        switch (name){
            case 0:
                name = "Lbozo"
                break;
            case 1:
                name = "Dogwater"
                break;
            case 2:
                name = "True"
                break;
            case 3:
                name = "Armageddon"
                break;
            case 4:
                name = "King Ggez IV"
                break;
            case 5:
                name = "Queen Ezclap VI"
                break;
            case 6:
                name = "Skill Issue"
                break;
            case 7:
                name = "Your mother"
                break;
            case 8:
                name = message.member.user.username
        }
        switch (item) {
            case 0:
                item = "chainsaws"
                break;
            case 1:
                item = "old people"
                break;
            case 2:
                item = "diamonds"
                break;
            case 3:
                item = "mice"
                break;
            case 4:
                item = "apples"
                break;
            case 5:
                item = "cheeseburgers"
                break;
            case 6:
                item = "cats"
                break;
            case 7:
                item = "Gamer Headphones x360 V4.32 Lite Limited Edition RGB"
                break;
            case 8:
                item = "knives"
                break;
            case 9:
                item = "greatswords"
                break;
            case 10:
                item = "4k ultra hd cameras"
                break;
            case 11:
                item = "tree branches"
                break;
            case 12:
                item = "clams"
                break;
        }
        switch (action) {
            case 0:
                action = "jumped"
                break;
            case 1:
                action = "mugged"
                break;
            case 2:
                action = "annoyed"
                break;
            case 3:
                action = "kicked"
                break;
            case 4:
                action = "screamed at"
                break;
            case 5:
                action = "ate"
                break;
            case 6:
                action = "sniped"
                break;
            case 7:
                action = "said hi to"
                break;
        }
        switch (object) {
            case 0:
                object = "a rock"
                break;
            case 1:
                object = "a whale"
                break;
            case 2:
                object = "a Wendy's worker"
                break;
            case 3:
                object = "an enchanced cyborg"
                break;
            case 4:
                object = "a gamer"
                break;
            case 5:
                object = "a tree"
                break;
            case 6:
                object = "a block of cheese"
                break;
        }
        message.reply(`${name} found ${units} ${item}. ${name} went and ${action} ${object}.`)
    }
}